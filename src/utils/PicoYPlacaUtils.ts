
export class PicoYPlacaUtils {

    private static readonly weekday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    private static readonly daysLicencePairAllowed: { [key: string]: Array<number> } = {
        Monday: [1, 2],
        Tuesday: [3, 4],
        Wednesday: [5, 6],
        Thursday: [7, 8],
        Friday: [9, 0]
    }


    public static isLicenceDiplomatic(licensePlate: string): Boolean {
        return licensePlate.startsWith("CD");
    }

    public static isDriverAgeOutsideRange(driverAge: number): Boolean {
        return driverAge >= 65;
    }

    public static isLicenseAllowedOnHour(licensePlate: string, dateTimeDrive: Date):Boolean {
        //Get day from weekday array const based on current date
        let day: string = this.weekday[dateTimeDrive.getDay()];
        //Get last digit of licences plate by getting the last character position 
        let lastDigitOfLicence:number = parseInt(licensePlate.slice(licensePlate.length-1));
        //Get allowed digits pair on day 
        let allowedDigitsOnDay: number[] = this.daysLicencePairAllowed[day];
        //If digits are inside array of day selected the driver is allowed during Pico y Placa 
        return (allowedDigitsOnDay.indexOf(lastDigitOfLicence) !== -1);
    }

}