import { Image, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";


import paperImage from "../assets/icon-paper.png"
import rockImage from '../assets/icon-rock.png'
import scissorsImage from '../assets/icon-scissors.png'

const Paper = ({ choice, image, onPress }) => {

    const handleSubmitInternal = () => {
        if (onPress) {
            onPress(choice, image)
            // console.log(choice)
        }
    }
    if (!choice || !image) {
        return (
            <TouchableOpacity>
                <View style = {styles.unpicked}/>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={handleSubmitInternal}>
            <Image source={image} style= {[styles.image, styles[choice]]}/>
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
    },
    unpicked: {
        width: 88,
        height: 88,
        borderRadius: '50%',
        backgroundColor: 'hsl(237, 49%, 15%)',
        marginTop: 6,
        // borderWidth: 12,
        // borderColor: "transparent",
        
    },
    paper: {
        borderColor: "hsl(230, 89%, 62%)",
    },
    rock: {
        borderColor: "hsl(349, 71%, 52%)",
    },
    scissors: {
        borderColor: "hsl(39, 89%, 49%)",
    }
})