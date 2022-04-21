/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary Utilty class with operations refered to Date operations 
 */

export class DateUtils{
    
    private static readonly months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    private static readonly commonHolidays: { [key: string]: Array<number> } = {
        January: [1],
        May: [1,24],
        August: [10],
        October: [9],
        December: [25, 31]
    }


    /** 
     * @param {date} date - Date to check if it is an ecuadorian holiday or not
     * @returns {Boolean}
    */
    public static isDateHoliday(date:Date):Boolean{
        let monthNumber:number = date.getMonth();
        let monthName:string = this.months[monthNumber];
        if(monthName in this.commonHolidays){
            let holidaysPerMonth:number[] = this.commonHolidays[monthName];
            return (holidaysPerMonth.indexOf(date.getDay()) !== -1)
        }else{
            return false;
        }
       
    }

    /** 
     * @param {date} date - Date to check if it is a weekend day
     * @returns {Boolean}
    */
    public static isDateWeekend(date:Date):Boolean{
        let day:number = date.getDay();
        return (day == 6 ||  day ==0);
    }

    
}