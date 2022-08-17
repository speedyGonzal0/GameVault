import React from 'react'
import "./UserOrders.css"
import { Table } from '@nextui-org/react';

function UserOrders() {

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
                        <Table.Column>RENTED TILL</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>Tony Reichert</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row key="2">
                            <Table.Cell>Zoey Lang</Table.Cell>
                            <Table.Cell>Technical Lead</Table.Cell>
                            <Table.Cell>Paused</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row key="3">
                            <Table.Cell>Jane Fisher</Table.Cell>
                            <Table.Cell>Senior Developer</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row key="4">
                            <Table.Cell>William Howard</Table.Cell>
                            <Table.Cell>Community Manager</Table.Cell>
                            <Table.Cell>Vacation</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </div>
        </main>
    )
}

export default UserOrders