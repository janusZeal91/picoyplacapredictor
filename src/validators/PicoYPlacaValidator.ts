import { IValidator } from '../validators/IValidator';
import { DateUtils } from '../utils/DateUtils';
import { PicoYPlacaUtils } from '../utils/PicoYPlacaUtils';
import { DriverData } from '../model/DriverData';

/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary Pico y Placa validator
 * @implements {IValidator}
 */

export class PicoYPlacaValidator implements IValidator<DriverData> {

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