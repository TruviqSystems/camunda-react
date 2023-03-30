import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { List, Grid } from 'semantic-ui-react'
import { loadTasks } from '../actions'
import Taskform from '../components/Taskform'
import sortBy from 'lodash/sortBy'
import { Table } from 'semantic-ui-react';


class TasklistPage extends Component {
  componentWillMount() {
    this.props.loadTasks();

  }

  renderItem(task,) {
    
    return (<List.Item key={task.id}>
      <List.Icon name='browser' size='large' verticalAlign='middle' />
      <List.Content>
        <Link>
          <List.Header>{task.name}</List.Header>
          <List.Description>{task.created}</List.Description>
        </Link>
      </List.Content>
    </List.Item>)
  }

  render() {
    let { task } = this.props
    let taskForm = ''
    if (this.props.processDefinitionId) {
      taskForm = <Taskform/>
    } else {
      taskForm = <div>Please choose task.</div>
    }

    if (!task) {
      return (<div>Loading tasks</div>)
    } else {
      task = sortBy(task, 'created').reverse().slice(0, 3);
      let counter = 1 // declare a counter variable
      const tableRows = task.map((taskItem) => {
        return (
          <Table.Row key={task.id}>
            <Table.Cell>{counter++}</Table.Cell>  
            <Table.Cell>{taskItem.id}</Table.Cell>
            <Table.Cell>{taskItem.name}</Table.Cell>
            <Table.Cell>{taskItem.businessKey}</Table.Cell>
            <Table.Cell>{taskItem.created}</Table.Cell>
          </Table.Row>
        )
      })
     return (
      <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S.NO</Table.HeaderCell>
          <Table.HeaderCell>Request No</Table.HeaderCell>
          <Table.HeaderCell>Assigned To</Table.HeaderCell>
          <Table.HeaderCell>Requested By</Table.HeaderCell>
          <Table.HeaderCell>Requested Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {tableRows}
      </Table.Body >
    </Table>
    
      ) 
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params
  return {
    ...params,
    ...state.entities
  }
}

export default withRouter(connect(mapStateToProps, {
  loadTasks
})(TasklistPage))
