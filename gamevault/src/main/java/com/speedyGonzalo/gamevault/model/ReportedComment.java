package com.speedyGonzalo.gamevault.model;

import javax.persistence.*;

@Entity
public class ReportedComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reportCmntID;

    private boolean deleted;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "comment_id", referencedColumnName = "commentID")
    private Comment comment;

    public ReportedComment() {
    }

    public int getReportCmntID() {
        return reportCmntID;
    }

    public void setReportCmntID(int reportCmntID) {
        this.reportCmntID = reportCmntID;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }
}
