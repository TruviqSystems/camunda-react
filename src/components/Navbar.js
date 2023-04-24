import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './image/react.png'
import TasklistPage from '../containers/TasklistPage'
import TablesOfApproved from '../containers/Tables/TablesOfApproved'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Autherization } from '../actions/camunda-rest/process-definition'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      
    }
  }


  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    const {isLoggedIn,Authentication} = this.props
    return (
      <>
      <header className="header p-5">
         {isLoggedIn?
         <><nav class="navbar navbar-expand-lg bg-body-light bg-transparent border rounded-5">
         <div class="container-fluid">
         <img src={logo} alt="" width={100} height={50}/>
         {isLoggedIn?
           <Link class="navbar-brand text-white" to="/startprocess/key/LandAllotment_camunda" ><h1>Land Allotment</h1></Link>:
           <Link class="navbar-brand text-white" to="/" ><h1>Land Allotment</h1></Link>}
           <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
             <ul class="navbar-nav">
               <li class="nav-item">
                   <div className="dropdown" onClick={this.toggleOpen}>
                     <button
                       className="btn btn-transperent dropdown-toggle text-white"
                       type="button"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                     >
                       Pages
                     </button>
                     <div className={menuClass} aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/tasklist">
                         Pending Apllication
                       </Link>
                       <Link className="dropdown-item" to="/HappyCustomers">
                         Happy Customers
                       </Link>
                     </div>
                   </div>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active  text-white" aria-current="page" to="/">About</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active  text-white" aria-current="page" to="/" onClick={Authentication}>Log out</Link>
               </li>
             </ul>
           </div>
         </div>
       </nav></>:
         <>
         <nav class="navbar navbar-expand-lg bg-body-light bg-transparent border rounded-5">
            <div class="container-fluid">
            <img src={logo} alt="" width={100} height={50}/>
              <Link class="navbar-brand text-white" to="/" ><h1>Land Allotment</h1></Link>
              <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                      <div className="dropdown" onClick={this.toggleOpen}>
                        <button
                          className="btn btn-transperent dropdown-toggle text-white"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          Pages
                        </button>
                        <div className={menuClass} aria-labelledby="dropdownMenuButton">
                          <Link className="dropdown-item" to="/tasklist">
                            Pending Apllication
                          </Link>
                          <Link className="dropdown-item" to="/HappyCustomers">
                            Happy Customers
                          </Link>
                        </div>
                      </div>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active  text-white" aria-current="page" to="/Register">Register</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active  text-white" aria-current="page" to="/Login" >Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         </>
         } 
      </header>
      </>
    )
  }
}
