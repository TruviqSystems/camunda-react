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
      <Header as='h2' className='fsc-5 text-success'>LandAllotment Process</Header>
      <form className='form-floating'>
          <h4 className='text-danger mb-3'>Thanks for choosing our portal for acquiring land</h4>
          <div class="form-floating mb-3">
            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control " id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <p><Link to="/startprocess/key/LandAllotment_camunda"><button type="submit" className='btn btn-warning  mt-2'>Sign In</button></Link>
          &nbsp;&nbsp;&nbsp;<sub><Link>Sign Up</Link></sub></p>
      </form>
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
