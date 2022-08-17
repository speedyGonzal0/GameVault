import React from 'react'
import "./Wishlist.css"
import { Table, Button } from '@nextui-org/react';
import { AiOutlineDelete } from 'react-icons/ai';

function Wishlist() {
  return (
    <main className='wishlistContainer'>
      <h1>Wishlist</h1>
      <div className="wishlistTable">
        <Table bordered
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>SERIAL</Table.Column>
            <Table.Column>GAME</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell> <Button iconRight={<AiOutlineDelete size="1.25em"/>} bordered color="error" size="sm"> Remove </Button> </Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
    </main>
  )
}

export default Wishlist