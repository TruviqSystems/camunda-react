import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'semantic-ui-react';

let data = ''

function TablesOfApproved() {

  const [tables,setTables] = useState([])

  useEffect(()=>{
    (async ()=>{
       data = await fetch("http://localhost:3001/approved")
      .then(res=>res.json())
      console.log("data",data)
      setTables(data)
    })()
  },[])

  let count=1

  return (
    <div>
      <h1 className='fsc-3 text-success'>Approved Applications</h1>
      <Table className='bg-transparent text-white fs-5'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S.No.</Table.HeaderCell>
          <Table.HeaderCell>Land No.</Table.HeaderCell>
          <Table.HeaderCell>Promoter Name</Table.HeaderCell>
          <Table.HeaderCell>Applicant mail</Table.HeaderCell>
          <Table.HeaderCell>Land in Yards</Table.HeaderCell>
          <Table.HeaderCell>Reference ID</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {tables.map((item,index)=>{
        return(
          <Table.Row key={item.id}>
          <Table.Cell>{count++}</Table.Cell> 
          <Table.Cell>{item.LandNumber}</Table.Cell> 
          <Table.Cell>{item.NameofPromotor}</Table.Cell>
          <Table.Cell>{item.applicant_email}</Table.Cell>
          <Table.Cell>{item.AreaOfTheLand}</Table.Cell>
          <Table.Cell>{item.ReferenceID}</Table.Cell>
          <Table.Cell>{item.APIICComments}</Table.Cell>
        </Table.Row>
        )
      })}
      </Table.Body >
    </Table>
    </div>
  )
}

export default TablesOfApproved
