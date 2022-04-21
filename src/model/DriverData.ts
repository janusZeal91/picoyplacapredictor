/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary Driver's data class to contain information about the driver and his car
 * @class
 */

export class DriverData {
    
    licencePlate:string;
    driversAge:number;
    dateTimeDrive: Date;

    constructor(licensePlate:string, driversAge:number, dateTimeDrive: Date){
        this.licencePlate=licensePlate;
        this.driversAge=driversAge;
        this.dateTimeDrive = dateTimeDrive;
    }

    
}