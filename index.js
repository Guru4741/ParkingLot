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