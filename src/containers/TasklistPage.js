import React, { Component }from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { List, Grid } from 'semantic-ui-react'
import {  loadTasks,fetchTaskVariables } from '../actions'
import Taskform from '../components/Taskform'
import sortBy from 'lodash/sortBy'
import { Table } from 'semantic-ui-react';
import axios from 'axios'

const approvedData = [{"applicant_email":"swapnithkondapalli@gmail.com","FirmName":"sameer","ContactPerson":"sameer","NameofPromotor":"sameer","PromotorMobile":"567890","ProjectCategory":"Informational Technology","EmploymentCount":"567890","AreaOfTheLand":"567890","LandLocation":"sameer","ReferenceID":"A-434","FireDepartmentComments":"Reviewed and Rejected","FireDepartmentApproval":0,"WaterDepartmentComments":"Reviewed and aproved","WaterDepartmentApproval":1,"EnvironmentDepartmentComments":"Reviewed and approved","EnvironmentDepartmentApproval":1,"APIICComments":"From APIIC","APIICApproval":1},{"applicant_email":"swapnithkondapalli@gmail.com","FirmName":"swapnith","ContactPerson":"swapnith","NameofPromotor":"truviq","PromotorMobile":"12334567890","ProjectCategory":"Informational Technology","EmploymentCount":"1234","AreaOfTheLand":"1233","LandLocation":"hyd","ReferenceID":"A-19","FireDepartmentComments":"Reviewed and Rejected","FireDepartmentApproval":0,"WaterDepartmentComments":"Reviewed and aproved","WaterDepartmentApproval":1,"EnvironmentDepartmentComments":"Reviewed and approved","EnvironmentDepartmentApproval":1,"APIICComments":"From APIIC","APIICApproval":1}]

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
      return (<div>No Pending Applications</div>)
    } else {
      task = sortBy(task, 'id').reverse();
      let counter = 1 // declare a counter variable
      const tableRows = task.map((taskItem) => {
        return (
          <Table.Row key={task.id}>
            <Table.Cell>{counter++}</Table.Cell>  
            <Table.Cell>Land Allotment Process</Table.Cell>
            <Table.Cell>{taskItem.businessKey}</Table.Cell>
            <Table.Cell>{taskItem.ended===true?"Approved":"Pending"}</Table.Cell>
          </Table.Row>
        )
      })

     return (
      <>
      <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S.NO</Table.HeaderCell>
          <Table.HeaderCell>Application Name</Table.HeaderCell>
          <Table.HeaderCell>Reference ID</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {tableRows}
      </Table.Body >
    </Table>

    </>
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
}
)(TasklistPage))
