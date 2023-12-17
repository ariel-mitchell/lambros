package org.launchcode.demo.controllers;

import org.launchcode.demo.data.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("carEntry")
@RequestMapping("")
public class CarController {
    @Autowired
    private CarRepository carRepository;

    @GetMapping("/")
    public String carDisplay(Model model){

        return "placeholder";
    }
}
