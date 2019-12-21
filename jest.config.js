module.exports = {
  rootDir: './',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist/',
    '/cypress/',
  ],
  testURL: 'http://localhost/',
  setupFilesAfterEnv: ['<rootDir>/testsConfig.js'],
  setupFiles: [
    'jest-date-mock',
  ],
  extraGlobals: [
    'document',
  ],
  testEnvironment: 'jsdom',
  bail: true,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
};
