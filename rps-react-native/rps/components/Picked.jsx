import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
// import Paper from "./Paper"
// import Rock from './Rock'
// import Scissors from './Scissors'

import ChoiceSkeleton from './ChoiceSkeleton'
import Spacer from './Spacer'
import { useEffect, useState } from "react"

import paperImage from '../assets/icon-paper.png'
import scissorsImage from '../assets/icon-scissors.png'
import rockImage from '../assets/icon-rock.png'

const Picked = ({ clicked, clickedImage, houseChoice, houseChoiceImage, result }) => {

    // useEffect(() => {
    //     setUserChoice(userClicked)
    //     setUserChoiceImage(userClickedImage)
    // }, [userClicked, userClickedImage])
    // const result = '' //Logic goes here
    // const [houseChoice, setHouseChoice] = useState(calPicked)
    // const [houseChoiceImage, setHouseChoiceImage] = useState(calPickedImage)
    return (
        <View style = {styles.pickedContainer}>
            <View style = {styles.youPicked}>
                <Text style = {styles.pickedTitle}>YOU PICKED</Text>
                <ChoiceSkeleton choice = {clicked} image = {clickedImage}/>
            </View>

            <View style = {styles.resultContainer}>
                <Text style = {styles.result}>{result}</Text>
                <TouchableOpacity style = {styles.tryAgainBtn}>
                    <Text style = {{fontSize: 12}}>PLAY AGAIN</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.housePicked}>
                <Text style = {styles.pickedTitle}>THE HOUSE PICKED</Text>
                <ChoiceSkeleton choice = {houseChoice} image = {houseChoiceImage}/>
            </View>
        </View>
    )
}


export default Picked

const styles = StyleSheet.create({
    pickedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '75%'
    },
    youPicked: {
        alignItems: 'center'
    },
    resultContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20,
    },
    result: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    tryAgainBtn: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },
    housePicked: {
        alignItems: 'center'
    },
    pickedTitle: {
        marginBottom: 50,
        color: '#fff',
        fontSize: 12,
    }
})