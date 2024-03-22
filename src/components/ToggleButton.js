import { View, Text, StyleSheet, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const containerStyle = (size , isActive)=>({
    backgroundColor : isActive ?  Colors.DEFAULT_GREEN : Colors.DEFAULT_GREY ,
    height : 32 * size ,
    width : 64 * size ,
    borderRadius :32 * size ,
    padding : 4 * size ,
})

const ToggleStyle = (size ,animatedValue) => ({
    height : 24 * size ,
    width : 24 * size ,
    backgroundColor : Colors.DEFAULT_WHITE,
    borderRadius : 32 * size ,
    transform : [
        {
            translateX : animatedValue
        }
    ]
})

const ToggleButton = ({size}) => {

    const [isActive , setIsActive] = useState(false)
    const [animatedValue , setAnimatedValue] = useState(new Animated.Value(0))

    const toggleHandle = () => {
        Animated.timing(animatedValue, {
            toValue : isActive ? 0 : 32 * size,
            duration: 250,
            easing : Easing.bounce,
            delay : 0,
            useNativeDriver : true
        }).start();
        setIsActive(!isActive)
    }

  return (
    <TouchableOpacity style= {containerStyle(size , isActive)} activeOpacity={0.8} onPress={() => toggleHandle()}>
      <Animated.View style={ToggleStyle(size , animatedValue)}/>
    </TouchableOpacity>
  )
}

export default ToggleButton