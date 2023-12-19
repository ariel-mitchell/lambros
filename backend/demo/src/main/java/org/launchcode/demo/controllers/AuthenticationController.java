package org.launchcode.demo.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchcode.demo.data.UserRepository;
import org.launchcode.demo.models.User;
import org.launchcode.demo.models.dto.LoginFormDTO;
import org.launchcode.demo.models.dto.RegistrationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    public User getUserFromSession(HttpSession session) {

        Integer userId = (Integer) session.getAttribute(userSessionKey);

        if (userId == null) {
            return null;
        }

        Optional<User> userOpt = userRepository.findById(userId);

        if (userOpt.isEmpty()) {
            return null;
        }
        return userOpt.get();
    }

    @GetMapping("/register")
    public String displayRegistrationForm(Model model, HttpSession session) {
        model.addAttribute(new RegistrationFormDTO());
        model.addAttribute("loggedIn", session.getAttribute(userSessionKey) != null);
        //TODO: build register.html form page in React
        return "register";
    }

    @PostMapping("/register")
    public String processRegistrationForm(@ModelAttribute @Valid RegistrationFormDTO registrationFormDTO, Errors errors, HttpServletRequest request) {

        if (errors.hasErrors()) {
            return "register";
        }
        User existingUser = userRepository.findByUsername(registrationFormDTO.getUsername());
        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyExists", "A user with that username already exists.");
            return "register";
        }

        String password = registrationFormDTO.getPassword();
        String verifyPassword = registrationFormDTO.getVerifyPassword();
        if(!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.doNotMatch", "Passwords do not match.");
            return "register";
        }
        User newUser = new User(registrationFormDTO.getUsername(), registrationFormDTO.getPassword());

        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);
        //TODO: create cars table page
        return "redirect:/cars";
    }

    @GetMapping("/login")
    public String displayLoginForm(Model model, HttpSession session) {
        model.addAttribute(new LoginFormDTO());
        model.addAttribute("loggedIn", session.getAttribute(userSessionKey) != null);
        return "login";
    }

    @PostMapping("/login")
    public String processLoginForm(@ModelAttribute @Valid LoginFormDTO loginFormDTO, Errors errors, HttpServletRequest request) {

        if(errors.hasErrors()) {
            return "login";
        }
        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();

        if (theUser == null || !theUser.isMatchingPassword(password)) {
            errors.rejectValue(
                   "password",
                   "login.invalid",
                   "Credentials invalid. Please try again with correct username/password."
            );
            return "login";
        }

        setUserInSession(request.getSession(), theUser);
        return "redirect:/cars";

    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();;
        return "redirect:/login";
    }
}
