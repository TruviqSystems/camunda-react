import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App'
import StartProcessPage from './StartProcessPage'
import StartProcessListPage from './StartProcessListPage'
import TasklistPage from './TasklistPage'

import Footer from '../components/Footer'
import TablesOfApproved from './Tables/TablesOfApproved'
import Login from './LoginForm/Login'

import './index.css'
import Navbar from '../components/Navbar'
import Register from './Register'

const Root = ({ store }) => {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const  Authentication = ()=>{
    setIsLoggedIn(!isLoggedIn)
    console.log("Auth called")
  }
 

  return(

  <Provider store={store}>
    <div className='container-fluid background-container'>
      <Navbar isLoggedIn={isLoggedIn} Authentication={Authentication}/>
      <Route path="/" isLoggedIn={isLoggedIn} Authentication={Authentication} component={App} exact/>
      <Route path="/Register" component={Register} exact/>
      <Route path="/login" render={() => <Login Authentication={Authentication} />} exact/>
      <Route path="/startprocess/key/:process" component={StartProcessPage}/>
      <Route path="/startprocess/list" component={StartProcessListPage}/>
      <Route path="/tasklist" component={TasklistPage} exact/>
      <Route path="/tasklist/:processDefinitionId/:taskId" component={TasklistPage}/>
      <Route path="/HappyCustomers" component={TablesOfApproved}/>
      <Footer/>
    </div>
  </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
