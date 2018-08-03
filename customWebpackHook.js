const { spawn } = require('child_process');

class CustomWebpackHook {
    constructor(options) {
        this.options = options;

        this.startTime = 0;
    }
    apply(compiler) {
        compiler.hooks.watchRun.tap("watchRun", () => {
            this.startTime = new Date();
            console.log('starting watcher');
        });

        compiler.hooks.watchClose.tap("watchClose", () => {
            const spentTime = Date.now() - this.startTime;
            console.log("Watching DONE, took: ", spentTime);
        })
    }
}

module.exports = CustomWebpackHook;
