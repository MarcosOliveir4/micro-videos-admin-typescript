/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  rootDir: './src',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  }
};

export default config;
