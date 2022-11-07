import { StarStyle } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Stars=()=>{
    

    return (
        <>
         <StarStyle>
             <Ionicons name="star" size={20} color="gold"  /> 
             <Ionicons name="star" size={20} color="gold" /> 
             <Ionicons name="star" size={20} color="black" /> 
             <Ionicons name="star" size={20} color="black" /> 
             
            </StarStyle>
            
        </>
           

    )
}
