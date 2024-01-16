package org.launchcode.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

@Entity
public class AdminHash {

    @Id
    @GeneratedValue
    private int id;
    private String hashVal;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private LocalDateTime instanceTime = LocalDateTime.now();

    public AdminHash(String hashVal, String email) {
        this.hashVal = hashVal;
        this.email = email;
    }

    public String getHashVal() { return hashVal; }

    public void setHashVal(String hashVal) {
        this.hashVal = hashVal;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getInstanceTime() { return instanceTime; }
}
