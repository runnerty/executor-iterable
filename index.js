'use strict';

const Executor = require('@runnerty/module-core').Executor;
const fs = require('fs');

class iterableExecutor extends Executor {
  constructor(process) {
    super(process);
    this.endOptions = { end: 'end' };
  }

  async exec(params) {
    let dataOutput;

    try {
      if (typeof params.objects === 'object') {
        dataOutput = params.objects;
      } else if (typeof params.objects === 'string') {
        dataOutput = JSON.parse(params.objects);
      } else if (typeof params.jsonFile === 'string') {
        await fs.promises.access(params.jsonFile, fs.constants.R_OK);
        const jsonContent = await fs.promises.readFile(params.jsonFile, 'utf8');
        dataOutput = JSON.parse(jsonContent);
      }
    } catch (err) {
      this.endOptions.end = 'error';
      this.endOptions.messageLog = err.message;
      this.endOptions.err_output = err.message;
      this.end(this.endOptions);
    }

    this.endOptions.data_output = dataOutput;
    this.end(this.endOptions);
  }
}

module.exports = iterableExecutor;
