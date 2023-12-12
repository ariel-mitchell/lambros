package lambros.crud;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

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

    public Car(String make, String model, int year, int price, int mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.mileage = mileage;
    }

    public Car() {}
}