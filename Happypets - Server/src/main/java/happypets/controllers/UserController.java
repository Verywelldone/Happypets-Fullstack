package happypets.controllers;

import happypets.model.User;
import happypets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600, allowedHeaders = "*")
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("user-list")
    public List<User> getAllUsers(){
        System.out.println(userRepository.findAll());
        return userRepository.findAll();
    }

    @GetMapping("user-list/{userid}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "userid") Long userid) throws ResourceNotFoundException{
        User user = userRepository.findById(userid).orElseThrow(()-> new ResourceNotFoundException("User not found for this id:: " + userid));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("save-user")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

//    @PutMapping("update-user/{userID}")
    @RequestMapping(value = "update-user/{userID}", method = RequestMethod.PUT)
    public ResponseEntity<User> updateUser(@PathVariable(value = "userID") long userid, @Valid @RequestBody User userDetails){

        User user = userRepository.findById(userid).orElseThrow(()->new ResourceNotFoundException("User not found for this id:"+userid));

        System.out.println(" USER DETAILS FROM FRONTEND");
        System.out.println(userDetails);


        user.setEmail(userDetails.getEmail());
        user.setLastName(userDetails.getLastName());
        user.setFirstName(userDetails.getFirstName());

        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

//    @DeleteMapping("delete-user/{id}")
    @RequestMapping(value = "delete-user/{userID}", method = RequestMethod.DELETE)
    public Map<String,Boolean> deleteUser(@PathVariable(value = "userID") long userid) throws ResourceNotFoundException {
        User user = userRepository.findById(userid).orElseThrow(()-> new ResourceNotFoundException(" User not found for this id:: "+userid));
        userRepository.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
