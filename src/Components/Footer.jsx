import React from 'react'
import axios from 'axios'
import firebase from './../Firebase'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = { time_spent: [] }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('development_time')
    itemsRef.on('value', snapshot => {
      let items = snapshot.val()
      let msTime = 0

      let timeArr = []
      let key = 0
      for (let item in items) {
        const { user, time } = items[item]

        const valueInArray = timeArr.find(value => value.user == user)
        if (valueInArray) {
          const key = timeArr.indexOf(valueInArray)
          valueInArray['time'] += parseInt(time)
          timeArr[key] = valueInArray
        } else {
          timeArr.push({ user, time: parseInt(time) })
        }
      }

      this.setState({ time_spent: timeArr })
    })
  }

  convertMS = msTime => {
    var milliseconds = parseInt((msTime % 1000) / 100),
      seconds = parseInt((msTime / 1000) % 60),
      minutes = parseInt((msTime / (1000 * 60)) % 60),
      hours = parseInt((msTime / (1000 * 60 * 60)) % 24)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return { hours, minutes, seconds }
  }

  //
  render() {
    const that = this
    const timeBar = this.state.time_spent.map((value, key) => {
      const { hours, minutes, seconds } = that.convertMS(value.time)
      return (
        <div key={key}>
          {hours}
          h, {minutes}
          m, {seconds}s ({value.user})
        </div>
      )
    })

    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">{timeBar}</span>
        </div>
      </footer>
    )
  }
}

export default Footer
