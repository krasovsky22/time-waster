import React from 'react'
import axios from 'axios'

import timeSpentFile from '../timeSpent.txt'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      time_spent: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    }
  }

  async componentDidMount() {
    const fileData = await axios.get(timeSpentFile)
    const msSpent = fileData.data.split('\n').reduce((total, num) => {
      const number = parseInt(num) || 0
      return parseInt(total) + parseInt(number)
    })

    const string = this.convertMS(msSpent)
    this.setState({ time_spent: this.convertMS(msSpent) })
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
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            Time was wasted: {this.state.time_spent.hours}
            h,&nbsp;
            {this.state.time_spent.minutes}
            m,&nbsp;
            {this.state.time_spent.seconds}s
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer
