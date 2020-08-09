// // Create Parking Lot

// let parkingAreaSize = 0;
// let parkingArea = [];
// let carsCount = 0;

// const createParkingLot = (command) => {
//   const commands = command.split(" ");

//   if (commands[0] === "create_parking_lot") {
//     parkingAreaSize = commands[1];
//     console.log(`Created parking lot with ${parkingAreaSize} slots`);
//   }
// };

// const parkCar = (command) => {
//   const commands = command.split(" ");

//   if (parkingArea.length < parkingAreaSize) {
//     parkingArea.push(commands[1]);
//     carsCount++;
//     console.log(`Allocated slot number: ${carsCount}`);
//   }

//   if (parkingArea.length == parkingAreaSize) {
//     for (let i = 0; i < parkingArea.length; i++) {
//       if (parkingArea[i] == "") {
//         carsCount++;
//         parkingArea[i] = commands[1];
//         console.log(`Allocated slot number: ${i + 1}`);
//         break;
//       }
//     }
//   }

//   if (parkingArea.length == parkingAreaSize) {
//     if (carsCount == parkingArea.length) {
//       console.log("Sorry, parking lot is full");
//       console.log(carsCount);
//     }
//   }
// };

// const parkingCharge = (duration) => {
//   if (duration > 2) {
//     return (duration - 2) * 10 + 20;
//   } else {
//     return 20;
//   }
// };

// const leaveCar = (command) => {
//   const commands = command.split(" ");
//   const charges = parkingCharge(commands[2]);

//   for (let i = 0; i < parkingAreaSize; i++) {
//     if (parkingArea[i] == commands[1]) {
//       parkingArea[i] = "";
//       carsCount--;
//       console.log(
//         `Registration number ${commands[1]} with slot number ${
//           i + 1
//         } is free with Charge $${charges}`
//       );
//     }
//   }
// };

// createParkingLot("create_parking_lot 6");
// parkCar("park KA-01-HH-1234");
// parkCar("park KA-01-HH-1111");
// parkCar("park KA-01-HH-9999");
// parkCar("park KA-01-HH-0000");
// parkCar("park KA-01-HH-2701");
// parkCar("park KA-01-HH-3141");
// parkCar("park KA-01-HH-5541");
// parkCar("park KA-01-HH-9041");
// debugger;
// leaveCar("leave KA-01-HH-1234 4");
// leaveCar("leave KA-01-HH-1111 6");
// leaveCar("leave KA-01-HH-2701 2");
// debugger;
// parkCar("park KA-01-HH-8762");
// parkCar("park KA-01-HH-4210");
// parkCar("park KA-01-HH-9977");
// parkCar("park KA-01-HH-2321");
// parkCar("park KA-01-HH-3131");
// console.log(parkingArea);

// Parking Slot
class ParkingLot {
    constructor(size) {
        this.size = parseInt(size);
        this.parkingArea = Array(6).fill(null);
        this.totalCars = 0;
        console.log(
            "\x1b[32m%s\x1b[0m",
            `Created parking lot with ${this.size} slots`
        );
    }

    parkCar(registrationNumber) {
        if (this.isVacant()) {
            // Check the nearest vacant place in the Parking Area
            for (let i = 0; i < this.size; i++) {
                if (this.parkingArea[i] === null) {
                    this.parkingArea[i] = registrationNumber;
                    this.totalCars++;
                    console.log(`Allocated slot number: ${i + 1}`);
                    break;
                }
            }
        } else {
            console.log("\x1b[31m%s\x1b[0m", "Sorry, Parking lot is full");
            return "Sorry, Parking lot is full";
        }
    }

    leaveCar(registrationNumber, duration) {
        // Stores whether car is parked or not
        let isParked = false;
        for (let i = 0; i < this.size; i++) {
            if (this.parkingArea[i] === registrationNumber) {
                this.parkingArea[i] = null;
                this.totalCars--;
                isParked = true;
                console.log(
                    "\x1b[33m%s\x1b[0m",
                    `Registration number ${registrationNumber} with slot number ${
            i + 1
          } is free with Charge $${this.parkingCharge(parseInt(duration))}`
                );
            }
        }
        // If car is not parked
        if (!isParked) {
            console.log("\x1b[31m%s\x1b[0m", "Car is not in the parking lot");
        }
    }

    parkingCharge(duration) {
        if (duration > 2) {
            return (duration - 2) * 10 + 10;
        } else {
            return 10;
        }
    }

    status() {
        const parkedCars = [];
        for (let i = 0; i < this.size; i++) {
            parkedCars.push({
                "Slot No.": i + 1,
                "Registration No.": this.parkingArea[i] ?
                    this.parkingArea[i] : "Slot Empty...",
            });
        }
        console.table(parkedCars);
    }

    isVacant() {
        if (this.size === this.totalCars) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = ParkingLot;