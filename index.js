'use strict';

const Executor = require('@runnerty/module-core').Executor;

class iterableExecutor extends Executor {
  constructor(process) {
    super(process);
    this.endOptions = { end: 'end' };
  }

  exec(res) {
    let dataOutput = res.objects;
    if (typeof res.objects === 'string') {
      try {
        dataOutput = JSON.parse(res.objects);
      } catch (err) {
        this.endOptions.end = 'error';
        this.endOptions.messageLog = err.message;
        this.endOptions.err_output = err.message;
        this.end(this.endOptions);
      }
    }

    this.endOptions.data_output = dataOutput;
    this.end(endOptions);
  }
}

module.exports = iterableExecutor;
