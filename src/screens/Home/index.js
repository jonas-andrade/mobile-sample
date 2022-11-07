import React from "react";
import { Main } from "./styles";
import CAPA from "../../../assets/Thumbnails/152.jpg"
import { Poster, Stars, Tag, Thumb } from "../../componentes";



export const Home=()=>{
    

    return (
      <Main>
       <Poster item={CAPA}/>
       <Stars />
      <Tag />

      <Thumb />
    


      </Main>
    )
}
