package org.launchcode.demo.controllers.api;

import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.demo.data.AdminHashRepository;
import org.launchcode.demo.data.CarRepository;
import org.launchcode.demo.models.AdminHash;
import org.launchcode.demo.models.Car;
import org.launchcode.demo.models.CarData;
import org.launchcode.demo.models.dto.AdminDTO;
import org.launchcode.demo.models.dto.RegistrationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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

//    @PostMapping(value = "hash")
//    public ResponseEntity<?> saveHash(@RequestBody AdminDTO adminDTO, HttpServletRequest request){
//        AdminHash newHash = new AdminHash(adminDTO.getHashVal(),adminDTO.getEmail());
//        adminHashRepository.save(newHash);
//        return ResponseEntity.ok("Hash recorded");
//    }

    @GetMapping(value = "hash")
    public String saveHash(){
        AdminHash newHash = new AdminHash("12345678","jneeter15@gmail.com");
        adminHashRepository.save(newHash);
//        System.out.println();
        return(newHash.getInstanceTime().toString());
    }
}