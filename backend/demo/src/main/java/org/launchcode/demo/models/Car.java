package org.launchcode.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

import java.util.Objects;

@Entity
public class Car {
    @Id
    @GeneratedValue
    private int id;

    private String make;

    private String model;

    @Min(1908)
    @Max(2023)  //tried making this auto-update...but validation won't use variables
    private int year;

    @Min(0)
    private int price;

    @Min(0)
    private int mileage;

    private String status;

    private String carImg;

    public Car(String make, String model, int year, int price, int mileage, String status, String carImg) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.mileage = mileage;
        this.status = status;
        this.carImg = carImg;
    }

    public Car() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCarImg() {
        return carImg;
    }

    public void setCarImg(String carImg) {
        this.carImg = carImg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return id == car.id && year == car.year && price == car.price && mileage == car.mileage && Objects.equals(make, car.make) && Objects.equals(model, car.model) && Objects.equals(status, car.status) && Objects.equals(carImg, car.carImg);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, make, model, year, price, mileage, status, carImg);
    }
}