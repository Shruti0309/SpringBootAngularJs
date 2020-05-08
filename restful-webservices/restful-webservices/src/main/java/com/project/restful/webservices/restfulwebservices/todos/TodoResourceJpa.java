package com.project.restful.webservices.restfulwebservices.todos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResourceJpa {


	@Autowired
	public TodoJpaRepository todoJpaRepository;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todos> getAllTodos(@PathVariable String username){
		return todoJpaRepository.findByUsername(username);
	}
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todos getTodo(@PathVariable String username, @PathVariable Long id){
		return todoJpaRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, @PathVariable long id){
		todoJpaRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todos> updateTodo(@PathVariable String username, @PathVariable Long id, @RequestBody Todos todo) {
		 Todos updatedTodo = todoJpaRepository.save(todo);
		
		 return new ResponseEntity<Todos>(updatedTodo,HttpStatus.OK);
	}
	
	  @PostMapping("/jpa/users/{username}/todos") 
	  public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todos todo)
	  { 
		  todo.setUsername(username);
		  Todos saveTodo = todoJpaRepository.save(todo);
		  URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
				  buildAndExpand(saveTodo.getId()).toUri();
		  
		  return ResponseEntity.created(uri).build();
		  
	  }
		
}
