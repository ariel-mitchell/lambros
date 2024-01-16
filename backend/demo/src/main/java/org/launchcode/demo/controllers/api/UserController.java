package org.launchcode.demo.controllers.api;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.launchcode.demo.data.AdminHashRepository;
import org.launchcode.demo.models.AdminHash;
import org.launchcode.demo.models.User;
import org.launchcode.demo.models.dto.LoginFormDTO;
import org.launchcode.demo.models.dto.RegistrationFormDTO;
import org.launchcode.demo.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminHashRepository adminHashRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute("user", user.getId());
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationFormDTO registrationForm, HttpServletRequest request) {
        // Check if user already exists
        if (userRepository.findByUsername(registrationForm.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username is already taken.");
        }

//        if(registrationForm.isAdmin()) {
//            AdminHash newHash = adminHashRepository.findByEmail(registrationForm.getEmail());
//            System.out.println(newHash.getHashVal());
//            if (!Objects.equals(registrationForm.getAdminPassword(), newHash.getHashVal())) {
//                return ResponseEntity.badRequest().body("Admin password does not match database entry.");
//            }
//        }

        // Create new user and save to the database
        User newUser = new User(
                registrationForm.getUsername(),
                bCryptPasswordEncoder.encode(registrationForm.getPassword()),
                registrationForm.getEmail(),
                registrationForm.isAdmin()
        );
        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {
        User existingUser = userRepository.findByUsername(loginFormDTO.getUsername());

        if (existingUser == null && !existingUser.isMatchingPassword(loginFormDTO.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
        setUserInSession(request.getSession(), existingUser);
        return ResponseEntity.ok("User logged in successfully");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok("User logged out successfully");
    }
}
