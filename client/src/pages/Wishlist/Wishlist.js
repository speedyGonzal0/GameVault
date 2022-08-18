import React from 'react'
import "./Wishlist.css"
import { Table, Button } from '@nextui-org/react';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Wishlist() {


  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/wishlist/user", {withCredentials: true}).then((response) => {
      setWishlists(response.data)
      // console.log(response.data);
    });

  }, [])


  const removeHandler = (wishID) => {
    axios.put(`http://localhost:8080/wishlist/delete/${wishID}`).then((response) => {
      // setWishlists(response.data)
      console.log(response.data);
    });

  }


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
            {wishlists.length === 0 ?
              <Table.Row key="temp">
                <Table.Cell>N/A</Table.Cell>
                <Table.Cell>N/A</Table.Cell>
                <Table.Cell css={{ display: "flex", gap: "1.5em" }}> <Button bordered size="sm" color="success">N/A</Button> </Table.Cell>
              </Table.Row>

              :

              wishlists.map((wishlist, idx) => (
                <Table.Row key={wishlist.wishID}>
                  <Table.Cell>{idx + 1}</Table.Cell>
                  <Table.Cell>{wishlist.game.name}</Table.Cell>
                  <Table.Cell css={{ display: "flex", gap: "1.5em" }}> <Button bordered size="sm" color="success" onClick={() => removeHandler(wishlist.wishID)}>Remove</Button> </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>

      </div>
    </main>
  )
}

export default Wishlist