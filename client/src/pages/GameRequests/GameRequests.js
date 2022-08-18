import React from 'react'
import "./GameRequests.css"
import { Table, Button } from '@nextui-org/react';

function GameRequests() {
    return (
        <main className='gameRequestsContainer'>
            <h1>Game Requests</h1>
            <div className="gameRequestTable">
                <Table bordered
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>REQUEST ID</Table.Column>
                        <Table.Column>REQUESTED GAME</Table.Column>
                        <Table.Column>ACTION</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>Tony Reichert</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell css={{ display: "flex", gap: "1.5em" }}> <Button bordered size="sm" color="success">Dismiss</Button> </Table.Cell>
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

export default GameRequests