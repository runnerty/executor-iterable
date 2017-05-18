"use strict";

var Execution = global.ExecutionClass;

class iterableExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(res) {
    var _this = this;
    var endOptions = {};
    endOptions.execute_return = JSON.stringify(res.objects);
    _this.end();
  }
}

module.exports = iterableExecutor;