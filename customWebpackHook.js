const path = require('path')
const fs = require('fs')

class CustomWebpackHook {
  constructor(options) {
    this.options = options
    this.startTime = 0
  }
  apply(compiler) {
    compiler.hooks.watchRun.tap('watchRun', () => {
      if (this.startTime === 0) {
        this.startTime = Date.now()
      }
    })

    compiler.hooks.watchClose.tap('watchClose', () => {
      const spentTime = Date.now() - this.startTime
      const relativeOutputPath = path.relative(process.cwd(), 'timeSpent.txt')
      try {
        fs.appendFileSync(relativeOutputPath.split('?')[0], spentTime + '\r\n')
      } catch (error) {
        console.log('ERROR', error)
      }
    })
  }
}

module.exports = CustomWebpackHook
