import ThemedView from "./ThemedView"
import Spacer from "./Spacer"
import { Image, Text, StyleSheet, View } from "react-native"
import logo from '../assets/logo.png'

const scoreSection = () => {
    return (
        <ThemedView style={styles.scoreContainer}>
            <View>
                <Image source={logo} style={styles.logo}/>
            </View>

            <Spacer />

            <View style={styles.scoreView}>
                <Text style={styles.scoreTitle}>SCORE</Text>
                <Text style={styles.score}>0</Text>
            </View>
        </ThemedView>
    )
}

export default scoreSection

const styles = StyleSheet.create({
    scoreContainer: {
        textAlign: 'center',
        padding: 20,
        borderColor: 'hsl(217, 16%, 45%)',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        // backgroundColor: '#fff'
    },
    // logo: {
    //     width: 100,
    // },
    scoreView: {
        backgroundColor: '#fff',
        // height: '100%',
        minWidth: '15%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    scoreTitle: {
        textAlign: 'center',
        fontSize: 16,
    },
    score: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32,
    }
})