import React from 'react'
import ViewComment from '../../components/ViewComment/ViewComment'
import "./ReportedComments.css"
import { Button } from '@nextui-org/react';

function ReportedComments() {
  return (
    <main className='reportedCommentsContainer'>
        <h1>Comment reports</h1>
        <div className="reportedComments">
            <div className="reportedCommentsLeft">
                <ViewComment/>
            </div>
            <div className="reportedCommentsRight">
                <Button color="error" size="sm" > Remove Comment </Button>
                <Button bordered color="success" size="sm" > Dismiss </Button>

            </div>
        </div>
    </main>
  )
}

export default ReportedComments