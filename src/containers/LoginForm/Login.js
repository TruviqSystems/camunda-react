import React ,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Card, Feed } from 'semantic-ui-react'


let data = ''
let usernamesAuthed = []
let passwordAuthed = []

const Login = (props) => {
  const [open, setOpen] = useState(false)

  const {Authentication}=props
  const [tables,setTables] = useState([])
  
  const [username,setUsername] = useState([])
  const [userpassword,setUserpassword] = useState([])

  let history = useHistory();

  const onHandleuser=(e)=>{
    const name = e.target.value
    setUsername(name)
    
  }
  const onHandlepassword=(e)=>{
    const password = e.target.value
    setUserpassword(password)
  }

  const HandleSubmit=(e)=>{
    e.preventDefault()
    console.log("Clicked")
    usernamesAuthed=tables.map(item=>item.username)
    passwordAuthed = tables.map(item=>item.password)
    if(usernamesAuthed.includes(username) && passwordAuthed.includes(userpassword)){
      console.log("Logged in")
      if (window.confirm("You are Logged In")) {
        Authentication();
        history.replace("/startprocess/key/LandAllotmentID");
      }
    }
    else(
      window.confirm("Wrong Crendetials!!!")
    )
    
  }

 

  useEffect(()=>{
    (async ()=>{
      
       data = await fetch("http://localhost:3001/auths")
      .then(res=>res.json())
      console.log("data",data)
      setTables(data)
    })()
  },[])

  

  return(
  <div className='d-flex flex-row justify-content-around align-item-center'>
  <form style={{width:"30rem"}}>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label text-primary fsc-3 fs-3">User Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onHandleuser}/>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label text-primary fsc-3 fs-3">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={onHandlepassword}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Submit</button>
  </form>
  <div>
  <Card>
    <Card.Content>
    <h4 className='text-primary fsc-3'>Our Family</h4>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              <a>Virat</a> has been added to our <a>family</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
            <a>Truviq</a> has been added to our <a>family</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
  </div>
  </div>
  )
}

export default Login