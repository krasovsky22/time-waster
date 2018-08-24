const firebase = require('./src/Firebase')
const fs = require('fs')

const filename = './timeSpent.txt'

fireBaseRef = firebase.database().ref('development_time')

// console.log(fileData)
var lines = require('fs')
  .readFileSync(filename, 'utf-8')
  .split('\r\n')
  .filter(Boolean)
  .map((value, key) => {
    console.log('pushing ===>', value)
    fireBaseRef.push({ user: 'Vlad Krasovsky', time: value })
  })
