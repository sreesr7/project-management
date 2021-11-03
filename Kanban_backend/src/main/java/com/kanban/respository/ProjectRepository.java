package com.kanban.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kanban.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

}
