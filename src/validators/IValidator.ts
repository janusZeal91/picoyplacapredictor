export interface IValidator<T>
{
    validate(objectToValidate:T): Boolean;
};