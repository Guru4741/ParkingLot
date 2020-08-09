const assert = require("assert");
const ParkingLot = require("./index");

let parkingLot;

beforeEach(() => {
    parkingLot = new ParkingLot(6);
})

describe("Check the Parking Class", () => {
    it("should be able to create the ParkingLot class with the given size", () => {
        assert(parkingLot, "Created parking lot with 6 slots");
    });

    it("should be able to park the car in an empty slot", () => {
        parkingLot.parkCar("KA-01-BB-0001");
        assert.equal(parkingLot.parkingArea[0], "KA-01-BB-0001");
    });

    it("should give error message if the Parking Area is not vacant", () => {
        parkingLot = new ParkingLot(1);
        parkingLot.parkCar("KA-01-BB-0001");
        assert.equal(
            parkingLot.parkCar("KA-01-BB-1111"),
            "Sorry, Parking lot is full"
        );
    });
});