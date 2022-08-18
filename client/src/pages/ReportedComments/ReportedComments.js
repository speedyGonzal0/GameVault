import React from 'react'
import ViewComment from '../../components/ViewComment/ViewComment'
import "./ReportedComments.css"
import { Button } from '@nextui-org/react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function ReportedComments() {

  const [reports, setReports] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/report/all`).then((response) => {
      setReports(response.data)
      // console.log(response.data);
    });

  }, [reports])

  const removeReport = (reportID) => {

    axios.put(`http://localhost:8080/report/remove/${reportID}`).then((response) => {
      // setReports(response.data)
      console.log(response.data);
    });  

  }

  const removeComment = (cmntID) => {

    axios.put(`http://localhost:8080/comment/delete/${cmntID}`).then((response) => {
      // setReports(response.data)
      console.log(response.data);
    });

  }

  return (
    <main className='reportedCommentsContainer'>
      <h1>Comment reports</h1>
      {reports.length === 0 ? <></> :
        reports.map((report) => (
          <div className="reportedComments" key={report.reportCmntID}>
            <div className="reportedCommentsLeft" >
              <ViewComment comment={report.comment} />
            </div>
            <div className="reportedCommentsRight">
              <Button color="error" size="sm" onClick={() => removeComment(report.reportCmntID)}> Remove Comment </Button>
              <Button bordered color="success" size="sm" onClick={() => removeReport(report.reportCmntID)}> Dismiss </Button>
            </div>
          </div>

        ))
      }
    </main>
  )
}

export default ReportedComments