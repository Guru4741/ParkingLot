#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const ParkingLot = require("./index");

let parkingLot;

const readInterface = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    console: false,
});

readInterface.on("line", function (line) {
    runCommands(line);
});

runCommands = (command) => {
    const commands = command.split(" ");

    switch (commands[0]) {
        case "create_parking_lot":
            parkingLot = new ParkingLot(commands[1]);
            break;

        case "park":
            parkingLot.parkCar(commands[1]);
            break;

        case "leave":
            parkingLot.leaveCar(commands[1], commands[2]);
            break;

        case "status":
            parkingLot.status();
            break;
    }
};