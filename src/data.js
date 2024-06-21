export const API_KEY='AIzaSyBcvwMYt7fAZzWYpi-ij2x-z0T34k-c2TQ'

export const value_converter =(value) =>{
    if(value >1000000)
        {
            return Math.floor(value/1000000)+'M'
        }
        else if(value >= 1000)
            {

            return Math.floor(value/1000)+'K'
            }
        else{
            return value;
        }
}