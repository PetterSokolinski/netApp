import React from 'react'
import WeekCalendar from '../../Components/WeekScheduler'
import 'react-week-calendar/dist/style.css'
import styled from 'styled-components'

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
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }

  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {
      return {
        ...interval,
        uid: lastUid + index
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
    
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

export default Overview