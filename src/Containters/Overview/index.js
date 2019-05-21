import React from 'react'
import WeekCalendar from '../../Components/WeekScheduler'
import 'react-week-calendar/dist/style.css'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { editTaskAction, getMeAction } from '../../Actions/index'
import moment from 'moment'

const Container = styled.div`
    position: absolute;
    width: 85%;
    left: 7.5%;
    transfrom: trasnlateX(-7.5%);
    height: auto;
`

class Overview extends React.Component {
    constructor(props) {
        super(props) 
    this.state = {
      lastUid: 4,
      selectedIntervals: []
    }
  }

  

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid)
    if (index > -1) {
      selectedIntervals.splice(index, 1)
      this.setState({selectedIntervals})
    }

  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid)
    if (index > -1) {
      selectedIntervals[index] = event
      this.setState({selectedIntervals})
    }
  }

  handleSelect = (newIntervals) => {
    const title = newIntervals[0].value
    console.log("title", title)
    const toStart = JSON.stringify(newIntervals[0].start)
    const toFinish = JSON.stringify(newIntervals[0].end)
    let taskId
    let tasks = JSON.parse(localStorage.getItem('user')).tasks
    for(let index = 0; index < tasks.length; index++) {
        if(title === tasks[index].title) {
          taskId = tasks[index].taskId
        }
    }
    const data = {
      title,
      taskId,
      toStart,
      toFinish
    }
    const {lastUid, selectedIntervals} = this.state
    const intervals = newIntervals.map( (interval, index) => {
      return {
        ...interval,
        uid: lastUid + index
      }
    })

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
    this.props.dispatch(editTaskAction(data))
    const user = JSON.parse(localStorage.getItem('user'))
    for(let index = 0; index < user.tasks.length; index++) {
      if(title === user.tasks[index].title) {
        const oldTask = user.tasks[index]
        const newTask = {
          ...oldTask,
          title: title,
          toStart: toStart,
          toFinish: toFinish
        }
        user.tasks[index] = newTask
      }
    }
    localStorage.setItem('user', JSON.stringify(user))
    window.location.reload(true)
  }

  hasDuplicates = (array, string) => {
    for(let index = 0; index < array.lenght; index++) {
      if(array[index].value === string) {
        return true
      }
    }
    return false
  }


  componentDidMount() {
    const { selectedIntervals } = this.state
      const tasks = JSON.parse(localStorage.getItem('user')).tasks
      for(let index = 0; index < tasks.length; index++) {
        if(tasks[index].toStart !== undefined && tasks[index].toStart !== null
          && tasks[index].toFinish !== undefined && tasks[index].toFinish !== null) {
          const value = tasks[index].title
          let startString = JSON.parse(tasks[index].toStart)
          startString = startString.slice(0,10) + " " + startString.slice(11,23)
          const start = moment(startString).add(2, 'hours')
          let endString = JSON.parse(tasks[index].toFinish)
          endString = endString.slice(0,10) + " " + endString.slice(11,23)
          const end = moment(endString).add(2, 'hours')
          const interval = {
            value,
            start,
            end
          }
          if(!this.hasDuplicates(selectedIntervals, tasks[index].title)) {
            selectedIntervals.push(interval)
          }
          
      }
    }
  }


    render() {
        return (
            <Container>
                <WeekCalendar scaleUnit={60} 
                    selectedIntervals={this.state.selectedIntervals}
                    onIntervalSelect={this.handleSelect}
                    onIntervalUpdate={this.handleEventUpdate}
                    onIntervalRemove={this.handleEventRemove} />
            </Container>
        )
    }
}


const mapStateToProps = (response) => ({response})
export default connect(mapStateToProps)(Overview)