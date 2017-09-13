'use strict';

const assert = require('assert');
const eslint = require('eslint');


// The source files to lint
const targets = [
  'index.js',
  'test'
];

// Run the linter on the targets and asserts no errors were found
const cli = new eslint.CLIEngine();
const report = cli.executeOnFiles(targets);
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
