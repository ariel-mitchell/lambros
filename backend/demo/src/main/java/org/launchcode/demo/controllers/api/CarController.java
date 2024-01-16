package org.launchcode.demo.controllers.api;

import org.launchcode.demo.data.CarRepository;
import org.launchcode.demo.models.Car;
import org.launchcode.demo.models.CarData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping(value = "cars")
public class CarController {
    @Autowired
    private CarRepository carRepository;

    @GetMapping(value = "")
    public ArrayList<Car> carDisplay(Model model){
        ArrayList<Car> cars = new ArrayList<>();
        ArrayList<Car> unfilteredCars = (ArrayList<Car>) carRepository.findAll();
        for(Car car : unfilteredCars){
            if(Objects.equals(car.getStatus(), "AVAILABLE")){
                cars.add(car);
            }
        }
        model.addAttribute(cars);

        //placeholder strings can get swapped around as we figure out where
        return cars;
    }

    @GetMapping(value = "admin")
    public ArrayList<Car> adminCarDisplay(Model model){
        ArrayList<Car> cars = (ArrayList<Car>) carRepository.findAll();
        model.addAttribute(cars);

        //placeholder strings can get swapped around as we figure out where
        return cars;
    }
}