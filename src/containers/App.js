import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import DeployProcess from '../components/DeployProcess'


const App = ({actions, children}) => (
  <div>
    <Container text>
      <Header as='h2' className='text-primary'>LandAllotment Process</Header>
      <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password"  class="form-control" required id="exampleInputPassword1" />
          </div>
          <Link to="/startProcess/key/LandAllotment_camunda"><button type="submit" className='btn btn-primary'>Sign In</button></Link>
      </form>
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
