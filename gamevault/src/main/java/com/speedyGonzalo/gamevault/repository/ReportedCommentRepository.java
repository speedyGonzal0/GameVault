package com.speedyGonzalo.gamevault.repository;

import com.speedyGonzalo.gamevault.model.ReportedComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportedCommentRepository extends JpaRepository<ReportedComment, Integer> {

    List<ReportedComment> findAllByDeletedFalseAndComment_DeletedFalse();


}
