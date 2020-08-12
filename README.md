# Problem Statement

I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is
given a number starting at 1 increasing with increasing distance from the entry point
in steps of one. I want to create an automated ticketing system that allows my
customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The
ticket issuing process includes us documenting the registration number (number
plate) and the colour of the car and allocating an available parking slot to the car
before actually handing over a ticket to the driver (we assume that our customers are
nice enough to always park in the slots allocated to them). The customer should be
allocated a parking slot which is nearest to the entry. At the exit the customer returns
the ticket with the time the car was parked in the lot, which then marks the slot they
were using as being available. Total parking charge should be calculated as per the
parking time. Charge applicable is $10 for first 2 hours and $10 for every additional
hour.
We interact with the system via a simple set of commands which produce a specific
output. The system should accept a filename
as a parameter at the command prompt and read the commands from that file.

## Commands

- Create parking lot of size n : create_parking_lot {capacity}
- Park a car : park {car_number}
- Remove(Unpark) car from : leave {car_number} {hours}
- Print status of parking slot : status

# How to setup

Copy the parkingLot folder.
Setup Node Environment on your system.
Cd.. inside the parkingLot directory / folder and run `npm i` to install all the dependencies. It uses only one for the Testing purposes.
Run `npm link` to use the source file as executable

# How to write commands

Create a text file with whatever name you desired
Add the instructions / commands in it as shown below. You can also copy the same.

- create_parking_lot 6
- park KA-01-HH-1234
- park KA-01-HH-9999
- park KA-01-BB-0001
- park KA-01-HH-7777
- park KA-01-HH-2701
- park KA-01-HH-3141
- park KA-01-HH-5621
- park KA-01-HH-2131
- leave KA-01-HH-3141 4
- status
- park KA-01-PY-3333
- park DL-12-AA-9999
- leave KA-01-HH-1234 4
- leave KA-01-BB-0001 6
- leave DL-12-AA-9999 2
- park KA-09-HH-0987
- park CA-09-IO-1111
- park KA-09-HH-0123
- status

# How to run

Go to the terminal
Cd.. to the parkingLot directory / folder
Type / Run commmand : `parkingLot <textfilename.txt>` textfilename is the name of the text file created above

![ParkingLot](https://i.imgur.com/xLVymbW.png)

# How to run tests

Run `npm test` on terminal
