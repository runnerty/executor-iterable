"use strict";

const Execution = global.ExecutionClass;

class iterableExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(res) {
    let _this = this;
    let endOptions = {};
    endOptions.data_output = res.objects;
    _this.end(endOptions);
  }
}

module.exports = iterableExecutor;