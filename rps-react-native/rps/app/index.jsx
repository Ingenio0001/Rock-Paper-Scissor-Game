import { StyleSheet, useColorScheme, Text, View, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
// import { RadialGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Colors'

import triangle from '../assets/bg-triangle.png'
import closeIcon from '../assets/icon-close.png'
import rulesImg from '../assets/image-rules.png'

import Picked from '../components/Picked'
import ScoreSection from '../components/ScoreSection'
import Paper from '../components/Paper'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'

// themed components
import ThemedView from '../components/ThemedView'
// import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
// import ThemedText from '../components/ThemedText'

// const Home = () => {
//     return (
//         <View>
//             <Text>
//                 Is this working????
//             </Text>
//         </View>
//     )
// }

const Home = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return (
        <ThemedView style={styles.container}>
            <ScoreSection /> 

            <Spacer />
            {/* <ImageBackground 
                    source={triangle} 
                    imageStyle={styles.pickerBgImg}
                    style= {{marginRight: 20}}
                    resizeMode='contain'
                    width={'20%'}>
                        <View style={styles.pickerContainer}>
                            <Paper style={styles.paper}/>
                            <Spacer />
                            <Scissors />
                            <Rock />       
                        </View>
            </ImageBackground>  */}

            <Picked />

            <Pressable style = {styles.rulesBtn}>
                <Text style = {{color: '#fff', fontSize: 8}}>RULES</Text>
            </Pressable>
                
            <View style = {styles.rulesModal}>
                <View style = {styles.rulesModalContent}>
                    <View style = {styles.rulesModalTitleContainer}>
                        <Text style = {styles.rulesModalTitle}>RULES</Text>
                        <TouchableOpacity>
                            <Image source={closeIcon}/>    
                        </TouchableOpacity>
                    </View>

                    <View style = {{alignItems: 'center'}} >
                        <Image source={rulesImg} resizeMode='contain' style ={styles.rulesImage}/>
                    </View>
                </View>
            </View>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
        // justifyContent: 'center',
        // backgroundColor: Colors.background,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
    pickerBgImg: {
        width: 150,
        height: 150,
        marginTop: 35,
        marginLeft: 70,
    },
    pickerContainer: {
        width: '75%',
        // borderWidth: 1,
        position: 'relative',
        justifyContent: 'center',
        // alignItems: 'cemter',
        flexDirection: 'row',
        height: 300,
        flexWrap: 'wrap'
    },
    paper: {
        // marginBottom: 50,
    },
    rulesBtn: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        borderWidth: 2,
        borderColor: '#fff',
        textAlign: 'center',
        padding: 5,
        borderRadius: 8,
        padding: 10,
    }, 
    rulesModal: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50%'
    },
    rulesModalContent: {
        width: '65%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 25
    },
    rulesModalTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rulesModalTitle: {
        fontWeight: 'bold',
        fontSize: 16,

    },
    rulesImage: {
        width: 200,
        height: 200,
    }
})