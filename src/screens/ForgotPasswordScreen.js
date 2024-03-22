import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Colors, Fonts } from '../constants'
import { Display } from '../utils'
import { TextInput } from 'react-native-gesture-handler'


const ForgotPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState('');

  return (
    <View  style={styles.container}>
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
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.content}>Please Enter your Email So We Can Help You Recover Your Password</Text>
      <Separator height={30}/>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
            <Feather
                name="user"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 10}}
            />
            <TextInput
                placeholder="Email"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setEmail(text)}
            />
        </View>
      </View>
      <Separator height={30}/>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgotPasswordScreen

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
      inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
      },
      inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputText : {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1,
      },
      signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      
})