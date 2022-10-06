
import { useState } from 'react';
import { StyleSheet, Text, Pressable, Image, View} from 'react-native';


export default function Component_() {
    // não consegui resolver esse problema de contagem sem o useState()
    let [num ,setNum] = useState(0)
    const [foto ,setFoto] = useState(require(`./assets/Thumbnails/${num}.jpg`))
    function changeFoto(){
        if(num>=44){setNum(num=0);} setNum(++num);
        setFoto(require(`./assets/Thumbnails/${num}.jpg`));
        document.querySelector(".css-accessibilityImage-9pa8cd").src = foto

        //DEBUG:
        console.log("useState: "+foto)
        console.log(document.querySelector("img"))
       
       }
    return (
     <View style={styles.comp}>

    <Text style={styles.til}>MEUS FILMES E SÉRIES</Text>
    <Pressable onPress={changeFoto}>
    <Image style={styles.img}  source={foto}/>
    <Text style={styles.subt}>@Jonas Medeiros Andrade</Text>
    </Pressable>
     </View>

    );
}

const styles = StyleSheet.create({
    comp: {

        backgroundColor: '#5d4f5e',
        padding: 10,
        borderRadius: 30,
        maxHeight: '100%'
    },
    til: {
        color: '#2f2b3a',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subt: {
        color: '#959ba9',
        fontSize: 18,
        fontWeight: '100',
        marginTop: 5
    },
    img: {
     width: 340,
     height: 540,
     borderRadius: 20,
     marginTop: 20,
     

     
    },
      
});
