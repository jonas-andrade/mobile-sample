import React from "react";
import { PosterContainer, PosterImage ,Gradient } from "./styles";


export const Poster=({item})=>{
    return(
        <PosterContainer>
            <PosterImage source={item}>
            <Gradient  colors={["#000", 'transparent',"#000"]}>

            </Gradient>
            </PosterImage>
        </PosterContainer>
    )
}