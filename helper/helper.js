export function printAge(age)
{
    console.log(age)
}

class CustomerDetails{
/**
 * This method will print the firstname
 * @param {string} firstName 
 */
     printName(firstName) {
    console.log("first name is",firstName)    
    }

}
export const customerDetails = new CustomerDetails()
