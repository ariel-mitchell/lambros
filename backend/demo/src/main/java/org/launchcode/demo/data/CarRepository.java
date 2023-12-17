package org.launchcode.demo.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.launchcode.demo.models.Car;

@Repository
public interface CarRepository extends CrudRepository<Car, Integer> {

}