package org.launchcode.demo.controllers.api;

import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.demo.data.AdminHashRepository;
import org.launchcode.demo.data.CarRepository;
import org.launchcode.demo.models.AdminHash;
import org.launchcode.demo.models.Car;
import org.launchcode.demo.models.CarData;
import org.launchcode.demo.models.dto.AdminDTO;
import org.launchcode.demo.models.dto.RegistrationFormDTO;
import org.launchcode.demo.models.dto.UpdateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "admin")
public class AdminController {
    @Autowired
    private CarRepository carRepository;

    @Autowired
    private AdminHashRepository adminHashRepository;

    @GetMapping(value = "")
    public ArrayList<Car> carDisplay(Model model){
        ArrayList<Car> cars;
        cars = CarData.findAllCars();
        model.addAttribute(cars);
        return cars;
    }

    @PostMapping(value = "add")
    public ResponseEntity<?> addCar(@RequestBody Car sendCar, HttpServletRequest request){
        Car car = new Car(sendCar.getMake(),sendCar.getModel(), sendCar.getYear(), sendCar.getPrice(), sendCar.getMileage(), sendCar.getStatus(), "NOTFOUND.png");
        carRepository.save(car);
        return ResponseEntity.ok(car);
    }

    @PostMapping(value = "update")
    public ResponseEntity<?> updateCar(@RequestBody UpdateDTO update, HttpServletRequest request){
        Car car = carRepository.findById(update.getId()).get();
        car.setMileage(update.getMileage());
        car.setStatus(update.getStatus());
        carRepository.save(car);
        return ResponseEntity.ok(car);
    }

    @PostMapping(value = "hash")
    public ResponseEntity<?> saveHash(@RequestBody AdminHash adminHash, HttpServletRequest request){
        adminHashRepository.save(adminHash);
        return ResponseEntity.ok(adminHash);
    }
}