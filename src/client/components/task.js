import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Switch, Button } from 'antd';

export const SingleTask = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const TaskName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0.5em;
`;

class Task extends React.Component {
  state = {
    editStatus: true,
    value: this.props.task.description,
  }
  handleToggle = () => {
    const { actions, task } = this.props;
    actions.toggleCompleted(task);
  }
  handleEdit = () => {
    const { actions } = this.props;
    const { editStatus } = this.state;
    if (editStatus) {
      this.setState({ editStatus: false });
    } else {
      this.setState({ editStatus: true });
    }
    actions.updateValue();
  }
  handleDelete = () => {
    const { actions, task } = this.props;
    actions.deleteTask(task.id);
  }
  handleChange = event => this.setState({ value: event.target.value });
  render() {
    const { task } = this.props;
    const { editStatus, value } = this.state;
    const ifChecked = false;
    return (
      <SingleTask>
        <Switch checked={ifChecked} defaultChecked={ifChecked} onChange={this.handleToggle} />
        { editStatus ?
          <TaskName>{ task.description }</TaskName>
        :
          <input onChange={this.handleChange} value={value} />
        }
        <Button type="ghost" icon="edit" onClick={this.handleEdit} />
        <Button type="ghost" icon="delete" onClick={this.handleDelete} />
      </SingleTask>);
  }
}

Task.propTypes = {
  actions: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

export default Task;
