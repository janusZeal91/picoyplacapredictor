import { IValidator } from './IValidator';
import { DateUtils } from '../utils/DateUtils';
import { PicoYPlacaUtils } from '../utils/PicoYPlacaUtils';
import { DriverData } from '../model/DriverData';

/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary DriverData validator under the rules of Pico&Placa
 * @implements {IValidator}
 */

export class DriverDataValidator implements IValidator<DriverData> {

    /** Checks if one driver is allowed to drive during Pico&Placa under current rules 
     * @param {DriverData} driverData - DriversData object with all car and driver information
     * @returns {Boolean} - returns true if Driver is allowed to drive with the specified info of DriversData, false otherwise
    */
    validate(driverData: DriverData): Boolean {

        /*On the following scenarios circulation by the city is allowed
         - Vehicle is part of diplomatic members comission (Licences Plate Starts with Prefix "CD")
         - Date is holiday, weekend or the driver is trying to move at an hour outside of Pico y Placa time range
         - Driver's age is over or equal to 65 years*/
        if (PicoYPlacaUtils.isDriverAgeOutsideRange(driverData.driversAge) || DateUtils.isDateHoliday(driverData.dateTimeDrive)
            || DateUtils.isDateWeekend(driverData.dateTimeDrive) || PicoYPlacaUtils.isTimeOutsidePicoPlacaRange(driverData.dateTimeDrive)
            || PicoYPlacaUtils.isLicenceDiplomatic(driverData.licencePlate)) {
            return true;
        } else {
            //Check if he can drive on selected date with current licence Plate
            return (PicoYPlacaUtils.isLicenseAllowedOnHour(driverData.licencePlate,driverData.dateTimeDrive));
        }
    }




}