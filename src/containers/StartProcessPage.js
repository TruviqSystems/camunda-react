import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import GenericForm from '../components/GenericForm'
import { loadProcessDefinitions, loadFormKey } from '../actions'


let App="Reference"
const num=()=>{
  const randomnum=Math.floor(Math.random() * 1000) + 1;
  return randomnum
}


class StartProcessPage extends Component {
  componentWillMount() {
    this.props.loadFormKey(this.props.process);
    App=App+num()
  }

 
  render() {
    const { process, formKey, processInstanceStarted} = this.props

    
    if (!formKey && !processInstanceStarted) {
      return (
        <div>Loading Process Start Form</div>
      )
    } else if (processInstanceStarted) {
      return (
        <div><h5 className='fsc-3 text-success'>Your Application Submitted.</h5>
        <br/>
        <br/>
        <Link to="/tasklist/:processDefinitionId/:taskId"><h6>Application Id:{App}</h6></Link>
        </div>
      )
    } else {
      const key = formKey['undefined'].key
      return (
        <div>
          <GenericForm formKey={key} processDefinitionKey={process} values/>
        </div>
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
  loadProcessDefinitions,
  loadFormKey
})(StartProcessPage))
