package org.launchcode.demo;

import org.launchcode.demo.EmailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootApplication
public class EmailApplication implements CommandLineRunner {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private EmailUtil emailUtil;

    public static void main(String[] args) {
        SpringApplication.run(EmailApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        SimpleMailMessage message = emailUtil.composeEmail("Hello World", "Hello World",
                "lambrosout@yahoo.com");

        mailSender.send(message);
    }

}
