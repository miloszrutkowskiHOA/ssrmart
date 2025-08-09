import { ConfigOptions } from '@ssrmart/shared/config';

const baseUrl =
  process.env['VERCEL_URL'] ?? process.env['VERCEL_BRANCH_URL'] ?? 'ssrmart.vercel.app';

export default {
  baseUrl: `https://${baseUrl}`,
  apiUrl: '/api',
  isProduction: true,
} satisfies ConfigOptions;
