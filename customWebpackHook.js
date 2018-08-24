const path = require('path')
const fs = require('fs')
var dotenv = require('dotenv')
dotenv.load()

const firebase = require('./src/Firebase')

const user = process.env.USER

class CustomWebpackHook {
  constructor(options) {
    this.options = options
    this.startTime = 0

    //initialize database sef
    this.fireBaseRef = firebase.database().ref('development_time')
  }

  apply(compiler) {
    compiler.hooks.watchRun.tap('watchRun', () => {
      if (this.startTime === 0) {
        this.startTime = Date.now()
      }
    })

    compiler.hooks.watchClose.tap('watchClose', () => {
      const spentTime = Date.now() - this.startTime
      try {
        //push into firebase db
        this.fireBaseRef.push({ user, time: spentTime })
      } catch (error) {
        console.log('ERROR', error)
      }
    })
  }
}

module.exports = CustomWebpackHook
