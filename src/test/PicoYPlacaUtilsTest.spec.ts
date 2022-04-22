import { PicoYPlacaUtils } from '../utils/PicoYPlacaUtils';

describe('PicoYPlacaUtils class', () => {

    let diplomaticLicencePlate: string;
    let commonCitizenLicencesPlate: string;
    let dateTimeInsidePicoPlaca: Date;
    let dateTimeOutsidePicoPlaca: Date;
    let restrictedLicencesPlate: string
    beforeEach(() => {
        diplomaticLicencePlate = "CD-5544";
        commonCitizenLicencesPlate = "PBS-2323";
        dateTimeInsidePicoPlaca = new Date(2022, 11, 5, 18, 0, 0);
        dateTimeOutsidePicoPlaca = new Date(2022, 11, 5, 14, 0, 0);
        restrictedLicencesPlate = "PDS-5501";

    });

    it('Should check if a licence plate is from a car belonging to a a diplomatic mission', () => {
        expect(PicoYPlacaUtils.isLicenceDiplomatic(diplomaticLicencePlate)).toBe(true);
    });

    it('Should check if a licence plate belongs to a common citizen', () => {
        expect(PicoYPlacaUtils.isLicenceDiplomatic(commonCitizenLicencesPlate)).toBe(false);
    });

    it('Should check if age is outside valid range for Pico & Placa (Greater of equal to 65)', () => {
        expect(PicoYPlacaUtils.isDriverAgeOutsideRange(65)).toBe(true);
    });

    it('Should check if age is inside valid range for Pico & Placa (Less than 65)', () => {
        expect(PicoYPlacaUtils.isDriverAgeOutsideRange(18)).toBe(false);
    });

    it('Should check if time chosen is outside Pico & Placa valid range (07:00-09:30)- (16:00-19:30) ', () => {
        expect(PicoYPlacaUtils.isTimeOutsidePicoPlacaRange(dateTimeOutsidePicoPlaca)).toBe(true);
    });

    it('Should check if time chosen is inside Pico & Placa valid range (07:00-09:30)- (16:00-19:30) ', () => {
        expect(PicoYPlacaUtils.isTimeOutsidePicoPlacaRange(dateTimeInsidePicoPlaca)).toBe(false);
    });

    it('Should check if a Licence Plate is not allowed based on its last digit and day of restriction ', () => {
        //If its Monday then Licence Plates ending on 0 or 1 are restricted during timeframe of pico y placa
        expect(PicoYPlacaUtils.isLicenseAllowedOnHour(restrictedLicencesPlate, dateTimeInsidePicoPlaca)).toBe(false);
    });

    it('Should check if a Licence Plate is allowed based on its last digit and day of restriction ', () => {
        //If its monday then Licences Plates ending on 3 are allowed to travel during timeframe of pico y placa
        expect(PicoYPlacaUtils.isLicenseAllowedOnHour(commonCitizenLicencesPlate, dateTimeInsidePicoPlaca)).toBe(true);
    });


});