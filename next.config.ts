import type { NextConfig } from "next";
import WebpackErrorReporterPlugin from './webpack/plugin/WebpackErrorReporterPlugin.js';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dev }) => {
    if (dev) {
      const webhookUrl = process.env.WEBHOOK_BUILD_ERROR_URL;
      const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'default-project-id';

      config.plugins.push(new WebpackErrorReporterPlugin(webhookUrl, projectId));
      console.log('WebpackErrorReporterPlugin registered for dev mode.');
    }


    return config;
  }
};

export default nextConfig;
