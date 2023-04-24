import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Register = () => {

  const onHandleSubmit=(e)=>{
     e.preventDefault()
     window.confirm("You are Registered")
  }
  return(
  <Grid textAlign='center' style={{ height: '200px' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' /> Sign-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Enter Password again'
            type='password'
          />

          <Button color='blue' fluid size='large' onClick={onHandleSubmit}>
            Sign up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}

export default Register