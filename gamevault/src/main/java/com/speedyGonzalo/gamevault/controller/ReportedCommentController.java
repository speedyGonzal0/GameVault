package com.speedyGonzalo.gamevault.controller;


import com.speedyGonzalo.gamevault.model.Comment;
import com.speedyGonzalo.gamevault.model.ReportedComment;
import com.speedyGonzalo.gamevault.service.CommentService;
import com.speedyGonzalo.gamevault.service.ReportedCommentService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")
public class ReportedCommentController {

    @Autowired
    private ReportedCommentService reportedCommentService;

    @Autowired
    private CommentService commentService;

    @GetMapping("/all")
    public List<ReportedComment> getAllReports(){
        return reportedCommentService.getAllCmnts();
    }

    @PostMapping("/create/{cmntID}")
    public ResponseEntity<?> createReport(@PathVariable Integer cmntID){
        Comment comment = commentService.getCommentByID(cmntID);

        ReportedComment reportedComment = new ReportedComment();
        reportedComment.setDeleted(false);
        reportedComment.setComment(comment);

        reportedCommentService.createCmntReport(reportedComment);

        JSONObject resp = new JSONObject();
        resp.put("message", "Comment Reported");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);

    }

//    @PutMapping("/comment/{cmntID}")
//    public ResponseEntity<?> removeComment(@PathVariable Integer cmntID){
//        Comment comment = commentService.getCommentByID(cmntID);
//        comment.setDeleted(true);
//        commentService.createComment(comment);
//
//        JSONObject resp = new JSONObject();
//        resp.put("message", "Comment removed");
//        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
//
//
//    }

    @PutMapping("/remove/{reportID}")
    public ResponseEntity<?> removeReport(@PathVariable Integer reportID){
        ReportedComment reportedComment = reportedCommentService.getReportByID(reportID);
        reportedComment.setDeleted(true);
        reportedCommentService.createCmntReport(reportedComment);

        JSONObject resp = new JSONObject();
        resp.put("message", "Report removed");
        return new ResponseEntity<>(resp.toString(), HttpStatus.OK);
    }
}
