import { Image, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import rockImage from "../assets/icon-rock.png"

const Rock = () => {
    return (
        <TouchableOpacity>
            <Image source={rockImage} style= {styles.image}/>
        </TouchableOpacity>    
    )
    
}

export default Rock

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
        borderColor: "hsl(349, 71%, 52%)",
    }
})