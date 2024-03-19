module.exports = {
    // The test environment that will be used for testing
    testEnvironment: 'node',

    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/__tests__'],

    // The glob patterns Jest uses to detect test files
    // testMatch: ['**/dist/**/?(*.)+(spec|test).js'],
    testMatch: ['**/*.spec.ts'],

    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // A timeout for the tests
    testTimeout: 30000,
};
