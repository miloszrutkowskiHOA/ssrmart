const { execSync } = require('child_process');
const express = require('express');
const cors = require('cors');

/*
    Simple bypass to test application in CSR mode and run API server in parallel
*/

// compile server libraries
console.log('📦 Compiling server libraries...');
try {
  execSync(
    'npx tsc --project libs/server/products/tsconfig.lib.json --outDir temp-build',
    { stdio: 'inherit' }
  );

  // copy products.json to the correct location
  const fs = require('fs');
  const srcJsonPath = './libs/server/products/src/lib/products.json';
  const destJsonPath =
    './temp-build/libs/server/products/src/lib/products.json';

  execSync(
    'mkdir temp-build\\libs\\server\\products\\src\\lib 2>nul || echo Directory exists',
    { stdio: 'ignore' }
  );
  fs.copyFileSync(srcJsonPath, destJsonPath);

  console.log('✅ Compilation complete');
} catch (error) {
  console.error('❌ Compilation failed:', error.message);
  process.exit(1);
}

const {
  productSearchRoute,
  getProductByIdRoute,
} = require('./temp-build/libs/server/products/src/index.js');

const app = express();

const apiRouter = express.Router();
apiRouter.use(express.json(), cors());

productSearchRoute(apiRouter);
getProductByIdRoute(apiRouter);

// Mount API router
app.use('/api', apiRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Dev server running on http://localhost:${port}`);
});

// Cleanup on exit
process.on('exit', () => {
  try {
    execSync('rmdir /s /q temp-build', { stdio: 'ignore' });
  } catch (e) {
    // Ignore cleanup errors
  }
});
