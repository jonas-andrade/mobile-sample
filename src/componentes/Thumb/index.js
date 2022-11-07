import React from "react";
import { FlatList } from "react-native";

import um from "../../../assets/Thumbnails/1.jpg";
import dois from "../../../assets/Thumbnails/2.jpg";
import tres from "../../../assets/Thumbnails/3.jpg";
import quatro from "../../../assets/Thumbnails/4.jpg";
import cinco from "../../../assets/Thumbnails/5.jpg";
import seis from "../../../assets/Thumbnails/6.jpg";
import sete from "../../../assets/Thumbnails/7.jpg";
import oito from "../../../assets/Thumbnails/8.jpg";
import nove from "../../../assets/Thumbnails/9.jpg";
import dez from "../../../assets/Thumbnails/10.jpg";
import onze from "../../../assets/Thumbnails/11.jpg";
import doze from "../../../assets/Thumbnails/12.jpg";
import treze from "../../../assets/Thumbnails/13.jpg";
import quartorze from "../../../assets/Thumbnails/14.jpg";
import quinze from "../../../assets/Thumbnails/15.jpg";
import dezeseis from "../../../assets/Thumbnails/16.jpg";
import dezesete from "../../../assets/Thumbnails/17.jpg";
import dezeoito from "../../../assets/Thumbnails/18.jpg";
import deznove from "../../../assets/Thumbnails/19.jpg";
import vinte from "../../../assets/Thumbnails/20.jpg";






import { CardContainer, CardImage, ThumbContainer } from "./styles";


export const Thumb = () =>{
    
    return (
        <ThumbContainer>
     
         <FlatList   
            data={[
 
                {
                    id: 1,
                    img: um
                },
                {
                    id: 2,
                    img: dois
                },
                {
                    id: 3,
                    img: tres
                },
                {
                    id: 4,
                    img: quatro
                },
                {
                    id: 5,
                    img: cinco
                },
                {
                    id: 6,
                    img: seis
                },
                {
                    id: 7,
                    img: sete
                },
                {
                    id: 8,
                    img: oito
                },
                {
                    id: 9,
                    img: nove
                },
                {
                    id: 10,
                    img: dez
                },
                {
                    id: 11,
                    img: onze
                },
                {
                    id: 12,
                    img: doze
                },
                {
                    id: 13,
                    img: treze
                },
                {
                    id: 14,
                    img: quartorze
                },
                {
                    id: 15,
                    img: quinze
                },
                {
                    id: 16,
                    img: dezeseis
                },
                {
                    id: 17,
                    img: dezesete
                },
                {
                    id: 18,
                    img: dezeoito
                },
                {
                    id: 19,
                    img: deznove
                },
                {
                    id: 20,
                    img: vinte
                }
            
               
            ]}  horizontal={true} keyExtractor={(item)=>String(item.id)}
            renderItem={({item})=><CardContainer onPress={()=>useNavigation().navigate('Detail')}>
            <CardImage source={item.img} /></CardContainer>}

            contentContainerStyle={{  paddingTop: 12, paddingLeft: 24,  paddingBottom: 24 }}
        />

        </ThumbContainer>
     
    
    )
   
}