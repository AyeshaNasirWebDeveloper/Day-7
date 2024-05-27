// Question No.21

// Define an interface to specify the structure of the car object
interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    isElectric: boolean;
}

// Create an object containing information about a car
const myCar: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Red",
    mileage: 15000,
    isElectric: true
};

// Print the car object
console.log("Car details:");
console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);
console.log("Year: " + myCar.year);
console.log("Color: " + myCar.color);
console.log("Mileage: " + myCar.mileage + " miles");
console.log("Electric: " + (myCar.isElectric ? "Yes" : "No"));