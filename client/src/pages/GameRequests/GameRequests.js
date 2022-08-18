import React from 'react'
import "./GameRequests.css"
import { Table, Button } from '@nextui-org/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function GameRequests() {


    const [reqData, setReqData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/gamerequest/all").then((response) => {
            setReqData(response.data)
            // console.log(response.data);
        });

    }, [reqData])


    const reqDelHandler = (gameReqID) => {
        axios.put(`http://localhost:8080/gamerequest/delete/${gameReqID}`).then((response) => {
            console.log(response);
        })
    }


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

                        {reqData.length === 0 ?
                            <Table.Row key="temp">
                                <Table.Cell>N/A</Table.Cell>
                                <Table.Cell>N/A</Table.Cell>
                                <Table.Cell css={{ display: "flex", gap: "1.5em" }}> <Button bordered size="sm" color="success">N/A</Button> </Table.Cell>
                            </Table.Row>

                            :

                            reqData.map((req) => (
                                <Table.Row key={req.gameReqID}>
                                    <Table.Cell>{req.gameReqID}</Table.Cell>
                                    <Table.Cell>{req.gameReqName}</Table.Cell>
                                    <Table.Cell css={{ display: "flex", gap: "1.5em" }}> <Button bordered size="sm" color="success" onClick={() => reqDelHandler(req.gameReqID)}>Dismiss</Button> </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>

            </div>
        </main>
    )
}

export default GameRequests