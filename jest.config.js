module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'vue'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.esm-bundler.js',
    '^\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json',
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  transformIgnorePatterns: [
    'node_modules/(?!(vue/.*|@vue/.*|@babel/.*|@testing-library/.*))'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
