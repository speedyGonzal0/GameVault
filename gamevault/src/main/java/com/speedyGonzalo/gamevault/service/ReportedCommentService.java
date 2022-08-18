package com.speedyGonzalo.gamevault.service;

import com.speedyGonzalo.gamevault.model.ReportedComment;
import com.speedyGonzalo.gamevault.repository.ReportedCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportedCommentService {

    @Autowired
    private ReportedCommentRepository reportedCommentRepository;

    public void createCmntReport(ReportedComment reportedComment){
        reportedCommentRepository.save(reportedComment);
    }

    public List<ReportedComment> getAllCmnts(){
        return reportedCommentRepository.findAllByDeletedFalseAndComment_DeletedFalse();
    }

    public ReportedComment getReportByID(Integer reportID){
        return reportedCommentRepository.findById(reportID).get();
    }
}
