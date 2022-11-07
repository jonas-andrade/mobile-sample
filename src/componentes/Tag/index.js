import { FlatList, Text } from "react-native";
import { TagStyle } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';





export const Tag=()=>{
    

    return (
            
        <FlatList   
        data={[{"id":1,"titulo":"Filmes"},{"id":2,"titulo":"Series"},{"id":3,"titulo":"Documentarios"}]}  horizontal={true} keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><TagStyle><Text>{item.titulo}</Text><Ionicons name="film" size={20} color="black" /> </TagStyle>}

        contentContainerStyle={{  paddingTop: 12, paddingLeft: 24,  paddingBottom: 24 }}
    />

    )
}
