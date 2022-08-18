import React from 'react'
import "./ReportedUsers.css"
import { Table, Button } from '@nextui-org/react';


function ReportedUsers() {
    return (
        <main className='reportedUsersContainer'>
            <h1>User reports</h1>
            <div className="reportedUsersTable">
                <Table bordered
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>REPORT ID</Table.Column>
                        <Table.Column>REPORTED USER</Table.Column>
                        <Table.Column>CURRENT STATUS</Table.Column>
                        <Table.Column>ACTIONS</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>Tony Reichert</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>2022-09-25</Table.Cell>
                            <Table.Cell css={{ display:"flex", gap:"1.5em" }}> <Button size="sm" color="error">Ban</Button> <Button bordered size="sm" color="success">Dismiss</Button> </Table.Cell>
                        </Table.Row>
                        <Table.Row key="2">
                            <Table.Cell>Zoey Lang</Table.Cell>
                            <Table.Cell>Technical Lead</Table.Cell>
                            <Table.Cell>2022-09-25</Table.Cell>
                            <Table.Cell>Paused</Table.Cell>
                        </Table.Row>
                        <Table.Row key="3">
                            <Table.Cell>Jane Fisher</Table.Cell>
                            <Table.Cell>Senior Developer</Table.Cell>
                            <Table.Cell>2022-09-25</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row key="4">
                            <Table.Cell>William Howard</Table.Cell>
                            <Table.Cell>Community Manager</Table.Cell>
                            <Table.Cell>2022-09-25</Table.Cell>
                            <Table.Cell>Vacation</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </div>
        </main>
    )
}

export default ReportedUsers