import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Display } from '../utils'
import { Colors, Fonts } from '../constants'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'

const VerificationScreen = ({
    route :{
        params : {phoneNumber},
    }, navigation
}) => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>        
            <Ionicons
            name='chevron-back-outline'
            size={30}
            onPress={() => navigation.goBack()}
            />    
            <Text style={styles.headerTitle}>Verification</Text>
        </View>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.content}>Enter The OTP Code From The Phonewe Just Sent You at <Text style={styles.phoneNumberText}>{phoneNumber}</Text></Text>
        <Separator height={30}/>
    </View>
  )
}

export default VerificationScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : Colors.DEFAULT_WHITE,
    },
    headerContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_BOLD,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },
    title: {
      alignItems : 'center',
      textAlign : 'center',
      fontSize: 20,
      fontFamily: Fonts.POPPINS_EXTRA_BOLD,
      lineHeight: 20 * 1.4,
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20,
    },
    content: {
        fontSize: 15,
        fontFamily: Fonts.POPPINS_REGULAR,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      phoneNumberText: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_REGULAR,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_YELLOW,
      },
})