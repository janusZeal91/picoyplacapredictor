/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary Utilty class with operations related to Pico&Placa rules 
 */


export class PicoYPlacaUtils {

    private static readonly weekday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    private static readonly daysLicencePairNotAllowed: { [key: string]: Array<number> } = {
        Monday: [1, 2],
        Tuesday: [3, 4],
        Wednesday: [5, 6],
        Thursday: [7, 8],
        Friday: [9, 0]
    }

    /** 
        * @param {string} licensePlate - Licence plate number under ecuadorian format 
        * @returns {Boolean}
       */
    public static isLicenceDiplomatic(licensePlate: string): Boolean {
        return licensePlate.startsWith("CD");
    }

    /** 
     * @param {number} driverAge - Drivers age to check if its over ecuadorian legal age to exempt from pico&placa 
     * @returns {Boolean}
    */
    public static isDriverAgeOutsideRange(driverAge: number): Boolean {
        return driverAge >= 65;
    }


    /** 
         * @param {string} licensePlate - Licence plate number under ecuadorian format 
         * @param {Date} dateTimeDrive - DateTime in which the driver wants to know if he is allowed to drive inside the city
         * @returns {Boolean} - True if its allowed in that hour and date with that licence plate number, false otherwise
        */
    public static isLicenseAllowedOnHour(licensePlate: string, dateTimeDrive: Date): Boolean {
        //Get day from weekday array const based on current date
        let day: string = this.weekday[dateTimeDrive.getDay()];
        //Get last digit of licence plate by getting the last character position 
        let lastDigitOfLicence: number = parseInt(licensePlate.slice(licensePlate.length - 1));
        //Get allowed digits pair on day 
        let allowedDigitsOnDay: number[] = this.daysLicencePairNotAllowed[day];
        //If digits are inside array of day selected the driver is not allowed during Pico y Placa 
        return !(allowedDigitsOnDay.indexOf(lastDigitOfLicence) !== -1);
    }

    /** 
        * @param {string} date - DateTime to evaluate if it is inside Pico&Placa active range
        * @returns {Boolean} - True if time is outside Pico&Placa range, false otherwise.
       */
    public static isTimeOutsidePicoPlacaRange(date: Date): Boolean {
        let morningHourStart: Date = new Date(date.getTime())
        morningHourStart.setHours(7, 0, 0);
        let morningHourLimit: Date = new Date(date.getTime());
        morningHourLimit.setHours(9, 30, 0);
        let eveningHourStart: Date = new Date(date.getTime())
        eveningHourStart.setHours(16, 0, 0);
        let eveningHourLimit: Date = new Date(date.getTime());
        eveningHourLimit.setHours(19, 30, 0);
        return !(((morningHourStart < date) && (morningHourLimit > date)) || ((eveningHourStart < date) && (eveningHourLimit > date)));
    }

}