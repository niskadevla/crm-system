process.env.TZ = 'UTC';
module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json'
    }
  },
  moduleDirectories: ['libs', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: [],
  coverageDirectory: 'coverage-jest',
  collectCoverage: true,
  coverageReporters: ['lcov', ['text', { skipFull: true }]],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 40,
      lines: 40,
      statements: 40
    }
  }
};
