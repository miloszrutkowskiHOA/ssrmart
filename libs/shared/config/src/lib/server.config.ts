  import { ConfigOptions } from './config.service';
  

export const getServerConfig = (): ConfigOptions => {
  return {
    baseUrl: process.env['BASE_URL'] || 'https://localhost:4200',
    apiUrl: process.env['API_URL'] || '/api',
    isProduction: process.env['NODE_ENV'] === 'production',
  };
};
