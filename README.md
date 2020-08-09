# How to setup

Copy the parkingLot folder.
Setup Node Environment on your system.
Cd.. inside the parkingLot directory / folder and run `npm i` to install all the dependencies. It uses only one for the Testing purposes.
Run `npm link` to use the source file as executable

# How to write commands

Create a text file with whatever name you desired
Add the instructions / commands in it as shown below. You can also copy the same.

create_parking_lot 6
park KA-01-HH-1234
park KA-01-HH-9999
park KA-01-BB-0001
park KA-01-HH-7777
park KA-01-HH-2701
park KA-01-HH-3141
park KA-01-HH-5621
park KA-01-HH-2131
leave KA-01-HH-3141 4
status
park KA-01-PY-3333
park DL-12-AA-9999
leave KA-01-HH-1234 4
leave KA-01-BB-0001 6
leave DL-12-AA-9999 2
park KA-09-HH-0987
park CA-09-IO-1111
park KA-09-HH-0123
status

# How to run

Go to the terminal
Cd.. to the parkingLot directory / folder
Type / Run commmand : `parkingLot <textfilename.txt>` textfilename is the name of the text file created above

# How to run tests

Run `npm test` on terminal
