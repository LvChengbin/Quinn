module.exports = {
    testMatch : [
        '**/test/**/*.spec.ts',
        '**/test/**/*.spec.js'
    ],
    coverageReporters : [
        'text-summary',
        'text',
        'lcov'
    ],
    collectCoverageFrom : [
        'src/**/*.ts',
        'src/**/*.js'
    ],
    testEnvironment : 'node'
}
