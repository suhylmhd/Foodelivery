import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors, Fonts, General } from '../constants'
import { FlatList } from 'react-native-gesture-handler'
import { WelcomeCard } from '../components'
import { Display } from '../utils'
import Separator from '../components/Separator'


const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};


const Paginagtion = ({index}) =>{
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
                i === index ? (
                <View style={pageStyle(true)} key={i} />
                ) : (
                <View style={pageStyle(false)} key={i} />
                ),
            )}
        </View>
    )
}

const WelcomeScreen = ({navigation}) => {
    const  [welcomeListIndex, setwelcomeListIndex] = useState(0)
    const welcomeList = useRef()
    const onViewRef = useRef(({changed}) => {
        setwelcomeListIndex(changed[0].index);
      });
      const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

      const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
          })
      }

  return (
    <View style={styles.container}>
        <StatusBar
            barStyle={'dark-content'}
            backgroundColor={Colors.DEFAULT_WHITE}
            translucent
        />
        <Separator height={StatusBar.currentHeight}/>
        <Separator height={Display.setHight(8)}/>
        <View style={styles.welcomeListContainer}>
            <FlatList
                ref={welcomeList}
                data={General.WELCOME_CONTENTS}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                overScrollMode='never'
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                renderItem={({item}) => <WelcomeCard {...item} />}
            />
        </View>
        <Separator height={Display.setHight(8)}/>
        <Paginagtion index={welcomeListIndex}/>
        <Separator height={Display.setHight(8)}/>
        {
            welcomeListIndex === 2 ? (
                <TouchableOpacity
                  style={styles.gettingStartedButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Signin')}>
                  <Text style={styles.gettingStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
              ) :(
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>welcomeList.current.scrollToEnd()}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button} onPress={()=>pageScroll()}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
              )
        }
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems : 'center',
        backgroundColor : Colors.DEFAULT_WHITE
    },
    welcomeListContainer:{
        height : Display.setHight(60),
    },
    pageContainer : {
        flexDirection: 'row'
    },
    page : {
        height : 8,
        width : 15,
        backgroundColor : Colors.DEFAULT_GREEN,
        marginHorizontal : 5,
    },
    buttonContainer : {
        flexDirection :'row',
        justifyContent : 'space-between',
        width : Display.setWidth(90),
        alignItems : 'center'
    },
    buttonText : {
        fontSize : 16,
        fontFamily : Fonts.POPPINS_BOLD,
        lineHeight : 16 * 1.4
    },
    button : {
        backgroundColor : Colors.LIGHT_GREEN,
        paddingVertical : 20, 
        paddingHorizontal : 11,
        borderRadius : 35,
    },
    gettingStartedButton: {
      backgroundColor: Colors.DEFAULT_GREEN,
      paddingVertical: 5,
      paddingHorizontal: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
    },
    gettingStartedButtonText: {
        fontSize: 20,
        color: Colors.DEFAULT_WHITE,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
})

export default WelcomeScreen