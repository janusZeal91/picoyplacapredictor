/**
 * 
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @interface
 * @summary Interfaces for classes that will need validation of some kind
 */
export interface IValidator<T>
{
    validate(objectToValidate:T): Boolean;
};