package org.launchcode.demo.controllers;

import org.launchcode.demo.data.CarRepository;
import org.launchcode.demo.models.Car;
import org.launchcode.demo.models.CarData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "admin")
public class AdminController {
    @Autowired
    private CarRepository carRepository;

    @GetMapping(value = "")
    public ArrayList<Car> carDisplay(Model model){
        ArrayList<Car> cars;
        cars = CarData.findAllCars();
        model.addAttribute(cars);

        //placeholder strings can get swapped around as we figure out where
        return cars;
    }

    @GetMapping(value = "add")
    public String addCar(){
        return("aString");
    }

    @GetMapping(value = "delete")
    public String deleteCar(){
        return("aString");
    }
}