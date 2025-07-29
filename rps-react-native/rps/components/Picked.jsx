import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Paper from "./Paper"
import Rock from './Rock'
import Scissors from './Scissors'

import Spacer from './Spacer'

const Picked = () => {
    const result = 'WIN' //Logic goes here
    return (
        <View style = {styles.pickedContainer}>
            <View style = {styles.youPicked}>
                <Text style = {styles.pickedTitle}>YOU PICKED</Text>
                <Paper />
            </View>

            <View style = {styles.resultContainer}>
                <Text style = {styles.result}>YOU {result}</Text>
                <TouchableOpacity style = {styles.tryAgainBtn}>
                    <Text style = {{fontSize: 12}}>PLAY AGAIN</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.housePicked}>
                <Text style = {styles.pickedTitle}>THE HOUSE PICKED</Text>
                <Rock />
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