import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Display } from '../utils'
import { Colors, Fonts } from '../constants'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'

const VerificationScreen = ({
    route :{
        params : {phoneNumber},
    }, navigation
}) => {

  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});


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
        <Text style={styles.content}>Enter The OTP Code Just Sent You at {' '} <Text style={styles.phoneNumberText}>{phoneNumber}</Text></Text>        
        <Text style={styles.otpText}>Did You Enter The Current Number</Text>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput  
              style={styles.otpText} 
              keyboardType='number-pad' 
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
                setOtp({...otp , 1 : text})
                text && secondInput.current.focus()
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput  
              style={styles.otpText} 
              keyboardType='number-pad' 
              maxLength={1}
              ref={secondInput}
              onChangeText={text => {
              setOtp({...otp , 2 : text})
                text ? thirdInput.current.focus() : firstInput.current.focus()
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput  
              style={styles.otpText} 
              keyboardType='number-pad' 
              maxLength={1}
              ref={thirdInput}
              onChangeText={text => {
                setOtp({...otp , 3 : text})
                text ? fourthInput.current.focus() : secondInput.current.focus()
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput  
              style={styles.otpText} 
              keyboardType='number-pad' 
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                setOtp({...otp , 4 : text})
                !text && thirdInput.current.focus()
              }}
            />
          </View>          
        </View>
        <TouchableOpacity
          style={styles.verifyButton}
          >
            <Text style={styles.verifyButtonText} onPress={() => navigation.navigate("Home")}>Verify</Text>
          </TouchableOpacity>
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
      otpText : {
        fontSize: 13,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      otpContainer : {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      },
      otpBox: {
        borderRadius: 5,
        borderColor: Colors.DEFAULT_GREEN,
        borderWidth: 0.5,
      },
      otpText: {
        fontSize: 25,
        color: Colors.DEFAULT_BLACK,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
      },
      verifyButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      verifyButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
})