# Pico & Placa Predictor App
Pico & placa predictor developed using Ionic 3. 

This program allows one user to know if its allowed to move by car inside the city of Quito, Ecuador based on Pico & Placa normatives. The inputs needed are:
* Licence Plate in Ecuadorian Format (Format is automatically validated using regular expressions)
* Driver's Age
* Date and time the user wants to know if its allowed to move by car inside the city.

This program considers the following Pico & Placa rules 

* Drivers equal or over the age of 65 are allowed to move by car freely anyday, anytime. 
* On holidays and weekends there is no restriction to move by car inside the city.
* Licences Plates from Monday to Sunday have a restriction based on their last digit according to the following table during timeframes [07:00-09-30] - [16:00-19:30]: 

| Day       | Licences not Allowed          
| ------------- |:-------------:| 
| Monday      | 1,2 | 
| Tuesday      | 3,4      |
| Wednesday | 5,6      |
| Thursday | 7,8      |
| Friday | 9,0      |


# Building and Testing

This app was developed using Ionic V3.9.2 and Node 10.19.0. Using a higher version of Node throws a compilation error due to incompatibility problems with some Ionic 3 libraries. 

# If you don't already have Ionic installed:
    > npm install --save ionic@3.9.2 

# An specific version of node can be installed on windows using NVM 
    > npm install --save nvm
    > nvm install 10.19.0
    > nvm use 10.19.0 

# Install all required dependencies 
    > npm install --save 

# Ionic 3 has an integrated development live-server which can be used to deploy the app for testing by using command
    > ionic serve 

# All unit tests has been implemented using Karma and Jasmine. Run the tests by using 
    > npm run test 

