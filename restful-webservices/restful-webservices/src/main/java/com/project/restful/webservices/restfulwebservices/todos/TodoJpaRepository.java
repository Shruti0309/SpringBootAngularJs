package com.project.restful.webservices.restfulwebservices.todos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todos, Long>{
	
	List<Todos> findByUsername(String username);

}
