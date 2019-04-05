import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Choice 1', value: "Choice 1" },
  { key: 2, text: 'Choice 2', value: "Choice 2" },
  { key: 3, text: 'Choice 3', value: "Choice 3" },
]


const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  handleRemove = () => {
    this.props.onRemove();
  }

  handleChange = (event, data) => {
    this.setState({value: data.value});
  }

  handleSave = () => {
    const { value } = this.state;
    this.props.onSave({
      value,
    });
  }
  
  renderText() {
    const {
      start,
      end,
    } = this.props;

    if (start.isSame(end, 'day')) {
      return (<span>{`${start.format('Do MMM., HH:mm')} - ${end.format('HH:mm')}`}</span>);
    }
    return (<span>{`${start.format('Do MMM.')} - ${end.format('Do MMM.')}, ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="customModal">
        <div className="customModal__text">{this.renderText()}</div>

        <Dropdown
            placeholder='Choose the task'
            className="customModal__input"
            fluid
            selection
            options={options}
            value={value}
            onChange={this.handleChange}
          />
        <button className="customModal__button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
