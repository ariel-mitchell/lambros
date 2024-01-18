package org.launchcode.demo.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User extends AbstractEntity{

    @NotNull
    @NotBlank
    private String username;

    @NotNull
    @NotBlank
    private String pwHash;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private boolean admin;

    public User() {}

    public User(String username, String password, String email, boolean admin) {
        this.username = username;
        this.pwHash = encoder.encode(password);
        this.email = email;
        this.admin = admin;
    }

    public String getUsername() {
        return username;
    }

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password,pwHash);
    }

    public String getEmail() {
        return email;
    }

    public boolean isAdmin() {
        return admin;
    }
}
