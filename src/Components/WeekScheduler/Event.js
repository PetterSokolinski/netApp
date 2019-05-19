import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

const TaskName = styled.div`
  font-size: 20px;
  text-align: center;
  color: blue;
  border-bottom: 1px dashed blue;
`

const ProjectName = styled.div`
  font-size: 16px;
  text-align: center;
  color: black;
  border-top: 1px dashed blue;
`



class Event extends React.PureComponent {
  render() {
    const {
      start,
      end,
      value,
    } = this.props;

    const tasks = JSON.parse(localStorage.getItem('user')).tasks
    const projects = JSON.parse(localStorage.getItem('projects'))
    let projectID
    let projectName
    for(let index = 0; index < tasks.length; ++index) {
        if(value === tasks[index].title) {
          projectID = tasks[index].projectID
        }
    }
    for(let index2 = 0; index2 < projects.length; index2++) {
      if(projectID === projects[index2].projectId) {
        projectName = projects[index2].title
      }
    }
    return (
      <div className="event">
        <span>{`${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>
        <br /><br />
        <TaskName>{value}</TaskName>
        <br />
        <ProjectName>
          {projectName}
        </ProjectName>
      </div>
    );
  }
}

Event.propTypes = propTypes;
export default Event;
