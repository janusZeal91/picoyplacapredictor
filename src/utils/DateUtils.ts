export class DateUtils{
    
    public static isDateHoliday(date:Date):Boolean{
        //TODO
        return true;
    }

    public static isDateWeekend(date:Date):Boolean{
        let day:number = date.getDay();
        return (day == 6 ||  day ==0);
    }

    public static isTimeOutsidePicoPlacaRange(date:Date):Boolean{
        return true;
    }
}