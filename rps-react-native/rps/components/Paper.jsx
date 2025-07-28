import { Image, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import paperImage from "../assets/icon-paper.png"

const Paper = () => {
    return (
        <TouchableOpacity>
            <Image source={paperImage} style= {styles.image}/>
        </TouchableOpacity>    
    )
    
}

export default Paper

const styles = StyleSheet.create({
    // container: {
    //     // width: 100,
    //     // height: 100,
    //     // backgroundColor: 'white',
    // },
    image: {
        backgroundColor: '#fff',
        borderRadius: "50%",
        padding: 20,
        height: 100,
        width: 100,
        borderWidth: 12,
        borderColor: "hsl(230, 89%, 62%)",
    }
})