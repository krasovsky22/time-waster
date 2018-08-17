const path = require('path');
const fs = require('fs');

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

            const relativeOutputPath = path.relative(process.cwd(), 'timeSpent.txt');
            try {
                fs.appendFileSync(relativeOutputPath.split('?')[0], spentTime + '\r\n');
            } catch (error) {
                console.log('ERROR', error);
            }
        })
    }
}

module.exports = CustomWebpackHook;
