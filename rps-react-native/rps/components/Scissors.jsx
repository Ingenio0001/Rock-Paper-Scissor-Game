import { Image, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import scissorsImage from "../assets/icon-scissors.png"

const Scissors = () => {
    return (
        <TouchableOpacity>
            <Image source={scissorsImage} style= {styles.image}/>
        </TouchableOpacity>    
    )
    
}

export default Scissors

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
        borderColor: "hsl(39, 89%, 49%)",
    }
})