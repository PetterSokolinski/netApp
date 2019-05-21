import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'


const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

const defaultProps = {
  value: '',
}


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  handleRemove = () => {
    this.props.onRemove()
  }

  handleChange = (event, data) => {
    this.setState({value: data.value})
  }

  handleSave = () => {
    const { value } = this.state
    this.props.onSave({
      value,
    })
  }
  
  renderText() {
    const {
      start,
      end,
    } = this.props

    if (start.isSame(end, 'day')) {
      return (<span>{`${start.format('Do MMM., HH:mm')} - ${end.format('HH:mm')}`}</span>)
    }
    return (<span>{`${start.format('Do MMM.')} - ${end.format('Do MMM.')}, ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>)
  }

  render() {
    const { value } = this.state
    const tasks = JSON.parse(localStorage.getItem('user')).tasks
    const taskOptions = []
    for(let index = 0; index < tasks.length; index++) {
      const key = index + 1
      const text = tasks[index].title
      const value = tasks[index].title
      const taskObject = {
        key,
        text,
        value
      }
      taskOptions.push(taskObject)
    }
    return (
      <div className="customModal">
        <div className="customModal__text">{this.renderText()}</div>

        <Dropdown
            placeholder='Choose the task'
            className="customModal__input"
            fluid
            selection
            options={taskOptions}
            value={value}
            onChange={this.handleChange}
          />
        <button className="customModal__button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps
export default Modal
