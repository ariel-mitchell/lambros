package org.launchcode.demo.models;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class CarData {
    private static final String DATA_FILE = "CarData.csv";
    private static boolean isDataLoaded = false;

    private static ArrayList<Car> allCars;

    private static void loadData() {

        // Only load data once
        if (isDataLoaded) {
            return;
        }

        try {

            // Open the CSV file and set up pull out column header info and records
            Resource resource = new ClassPathResource(DATA_FILE);
            InputStream is = resource.getInputStream();
            Reader reader = new InputStreamReader(is);
            CSVParser parser = CSVFormat.RFC4180.withFirstRecordAsHeader().parse(reader);
            List<CSVRecord> records = parser.getRecords();
            Integer numberOfColumns = records.get(0).size();
            String[] headers = parser.getHeaderMap().keySet().toArray(new String[numberOfColumns]);

            allCars = new ArrayList<>();

            // Put the records into a more friendly format
            for (CSVRecord record : records) {

                Car newCar = new Car(record.get(0),record.get(1),Integer.parseInt(record.get(2)),Integer.parseInt(record.get(3)),Integer.parseInt(record.get(4)),record.get(5));

                allCars.add(newCar);
            }
            // flag the data as loaded, so we don't do it twice
            isDataLoaded = true;
            System.out.println("ONLY ONCE");

        } catch (IOException e) {
            System.out.println("Failed to load job data");
            e.printStackTrace();
        }
    }

    public static ArrayList<Car> findAvailableCars(){
        loadData();
        ArrayList<Car> cars = new ArrayList<>();

        for(Car car : allCars){
            if(Objects.equals(car.getStatus(), "AVAILABLE")){
                cars.add(car);
            }
        }

        return cars;
    }
    public static ArrayList<Car> findAllCars(){
        loadData();

        return allCars;
    }
}