/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  // DOM testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  // DOM moduleNameMapper: {
  //   '\\.(css|scss)$': 'identity-obj-proxy',
  // },
};
