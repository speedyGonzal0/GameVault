import React from 'react'
import "./BannedUsers.css"
import { Table, Button } from '@nextui-org/react';

function BannedUsers() {
    return (
        <main className='bannedUsersContainer'>
            <h1>Banned Users</h1>
            <div className="bannedUsersTable">
                <Table bordered
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>USER</Table.Column>
                        <Table.Column>ACTIONS</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>Tony Reichert</Table.Cell>
                            <Table.Cell> <Button bordered size="sm" color="success">Unban</Button> </Table.Cell>
                        </Table.Row>
                        <Table.Row key="2">
                            <Table.Cell>Zoey Lang</Table.Cell>
                            <Table.Cell>Paused</Table.Cell>
                        </Table.Row>
                        <Table.Row key="3">
                            <Table.Cell>Jane Fisher</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row key="4">
                            <Table.Cell>William Howard</Table.Cell>
                            <Table.Cell>Vacation</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </div>
        </main>
    )
}

export default BannedUsers