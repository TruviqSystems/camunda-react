import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import DeployProcess from '../components/DeployProcess'
import './index.css'
import logo from './image/logo.png'

const App = ({actions, children}) => (
  <div className='main'>
    <Container text className='sub-main border border-dark'>
      <img src={logo} width={50} height={50}/>
      <Header as='h2' className='fsc-5 text-success'>Land Allotment Process</Header>
      <form className='form-floating'>
          <h1 className='text-danger mb-3'>Thanks for choosing our Services</h1>
          <div class="form-floating mb-3">
            
          </div>
          <p><Link to="/startprocess/key/LandAllotment_camunda"><button type="submit" className='btn btn-warning  mt-2'>Apply now</button></Link>
          </p>
      </form>
    </Container>
    
    
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
