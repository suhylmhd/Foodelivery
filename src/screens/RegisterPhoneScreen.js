import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, CountryCode, Fonts } from '../constants'
import { Display } from '../utils'
import { FlagItem, Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { StaticImageService } from '../services'



const RegisterPhoneScreen = ({navigation}) => {
  
  const [selectedCountry , setSelectedCountry] = useState(CountryCode.find(country => (country.name === 'India')))
  const [phoneNumber , setPhoneNumber] = useState("")

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
        <Text style={styles.headerTitle}>Login to Foodelvery</Text>
      </View>
      <Separator height={70}/>
      <Text style={styles.content}>Enter your registered phone number to login</Text>
      <Separator height={60}/>
      <View style = {styles.inputsContainer}>
        <TouchableOpacity style={styles.countryListContainer} >
            <Image /* source={{uri: StaticImageService.getFlagIcon(selectedCountry.code)}} */ style={styles.flagIcon}/>
            <Text style={styles.countryCodeText}>{selectedCountry.dial_code}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style= {styles.phoneInputContainer}>
            <TextInput 
              placeholder='Phone Number'
              keyboardType='phone-pad'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              onChangeText={(text) => setPhoneNumber(selectedCountry?.dial_code + text )}
            />
        </View>
      </View>
    
      <Separator height={60}/>
      <TouchableOpacity 
        style={styles.continueButton}
        activeOpacity={0.8} 
        onPress={() => navigation.navigate('Verification' , {phoneNumber})}
      >
        <Text style={styles.continueButtonText} >Continue</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default RegisterPhoneScreen

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
    content: {
        fontSize: 25,
        fontFamily: Fonts.POPPINS_EXTRA_BOLD,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      inputsContainer : {
        flexDirection : 'row' ,
        alignItems : 'center' ,
        marginHorizontal : 20
      },
      countryListContainer : {
        backgroundColor : Colors.LIGHT_GREY ,
        width : Display.setWidth(22) ,
        height : Display.setHight(6) ,
        marginRight : 10 ,
        borderRadius : 8 ,
        justifyContent : 'space-evenly' ,
        alignItems : 'center' ,
        borderWidth : 0.5 ,
        borderColor : Colors.LIGHT_GREY2 ,
        flexDirection : 'row'
      },
      phoneInputContainer : {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
        flex: 1,
      },
      flagIcon : {
        height : 20 ,
        width : 20,
      },    
      countryCodeText : {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHight(6),
        color: Colors.DEFAULT_BLACK,
      },
      countryDropdown: {
        backgroundColor: Colors.LIGHT_GREY,
        position: 'absolute',
        width: Display.setWidth(80),
        height: Display.setHight(50),
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        zIndex: 3,
      },
      continueButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHight(6),
        justifyContent: 'center',
        alignItems: 'center',
      },
      continueButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
})