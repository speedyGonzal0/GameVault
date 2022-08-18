import React from 'react'
import "./UserOrders.css"
import { Table, Button } from '@nextui-org/react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function UserOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/orders/user`, {withCredentials: true}).then((response) => {
          setOrders(response.data)
          // console.log(response.data);
        });
    
    }, [orders])

    return (
        <main className='UserOrdersContainer'>
            <h1>All Orders</h1>
            <div className="userOrdersTable">
                <Table bordered
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>ORDER ID</Table.Column>
                        <Table.Column>GAME</Table.Column>
                        <Table.Column>ORDER DATE</Table.Column>
                        <Table.Column>RENTED FOR</Table.Column>                        
                        <Table.Column>PRICE</Table.Column>
                    </Table.Header>
                    <Table.Body>

                        {orders.length === 0 ?
                            <Table.Row key="temp">
                                <Table.Cell>N/A</Table.Cell>
                                <Table.Cell>N/A</Table.Cell>
                                <Table.Cell>N/A</Table.Cell>
                                <Table.Cell>N/A</Table.Cell>
                                <Table.Cell>N/A</Table.Cell>
                            </Table.Row>

                            :

                            orders.map((order) => (
                                <Table.Row key={order.orderID}>
                                    <Table.Cell>{order.orderID}</Table.Cell>
                                    <Table.Cell>{order.game.name}</Table.Cell>
                                    <Table.Cell>{order.orderdate}</Table.Cell>
                                    <Table.Cell>{order.days} days</Table.Cell>
                                    <Table.Cell>${order.cost}</Table.Cell>
                                    
                                    
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>

            </div>
        </main>
    )
}

export default UserOrders