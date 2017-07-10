"use strict";

var Execution = global.ExecutionClass;

class iterableExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(res) {
    var _this = this;
    var endOptions = {};
    endOptions.data_ouput = res.objects;
    _this.end(endOptions);
  }
}

module.exports = iterableExecutor;