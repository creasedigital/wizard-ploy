
export const buildQuery = (Params: {[index: string]: string}) => {
    const keys = Object.keys(Params);
    
    let query = keys.reduce( (acc, key) => {
    const value = Params[key];
    //check if key has a value
    if( value !== ""){
            return acc.concat(`${key}=${value}&`)
    }
    return acc;
},"?")
     //remove the trailing &, or ? If no key value exists 
     
     let queryArr = query.split("");
     queryArr.pop();

     return queryArr.join("");
     
     }
     

