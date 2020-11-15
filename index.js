'use strict';

const Executor = require('@runnerty/module-core').Executor;

class iterableExecutor extends Executor {
  constructor(process) {
    super(process);
  }

  exec(res) {
    const endOptions = {
      data_output: res.objects
    };
    this.end(endOptions);
  }
}

module.exports = iterableExecutor;
