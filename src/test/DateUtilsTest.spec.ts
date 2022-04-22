import {DateUtils} from '../utils/DateUtils'

describe('DateUtils class', () => {

     let holidayWeekendDate:Date;
     let noHolidayOrWeekendDate:Date;

     beforeEach(()=>{
      //December 25 - Christmas
      holidayWeekendDate =new Date(2022,11,25);
      //April 5 - Regular Day
      noHolidayOrWeekendDate = new Date(2022,3,5);

     });

    it('Should check if a Date is holiday in Ecuador', () => {
      expect(DateUtils.isDateHoliday(holidayWeekendDate)).toBe(true);
    });

    it('Should check if a Date is not holiday in Ecuador', () => {
      expect(DateUtils.isDateHoliday(noHolidayOrWeekendDate)).toBe(false);
    });

    it('Should check if a Date is Weekend', () => {
      //Holiday Date lands on Sunday on 2022 so it works as a test case too
      expect(DateUtils.isDateWeekend(holidayWeekendDate)).toBe(true);
    });

    it('Should check if a Date provided is not weekend', () => {
      //Holiday Date lands on Sunday on 2022 so it works as a test case too
      expect(DateUtils.isDateWeekend(noHolidayOrWeekendDate)).toBe(false);
    });

   

  });