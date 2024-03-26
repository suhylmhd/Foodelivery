import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts, Images } from '../constants'

const RestaurantCard = () => {
  return (
    <TouchableOpacity  style={styles.container}>
      <Ionicons       
        name="bookmark-outline"
        color={Colors.DEFAULT_YELLOW}
        size={24}
        style={styles.bookmark}
      />
      <View>
        <Image source={Images.BURGER_KING} resizeMode='contain'  style={styles.posterStyle}/>
        <Text style={styles.titleText}>Burger King</Text>
        <View style={styles.footerContainer}>
            <View style={styles.rowAndCenter}>
            <FontAwesome name="star" size={14} color={Colors.DEFAULT_YELLOW} />
            <Text style={styles.ratingText}>4.5</Text>
            <Text style={styles.reviewsText}>(12)</Text>
            </View>
            <View style={styles.rowAndCenter}>
            <View style={styles.timeAndDistanceContainer}>
                <Ionicons
                name="location-outline"
                color={Colors.DEFAULT_YELLOW}
                size={15}
                />
                <Text style={styles.timeAndDistanceText}>150M</Text>
            </View>
            <View style={styles.timeAndDistanceContainer}>
                <Ionicons
                name="ios-time-outline"
                color={Colors.DEFAULT_YELLOW}
                size={15}
                />
                <Text style={styles.timeAndDistanceText}>15</Text>
            </View>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 5,
      },
      bookmark: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
      },
      posterStyle: {
        width: '100%',
        height: 1080 * 0.15,
        borderRadius: 10,
        margin: 5,
        resizeMode: 'cover', 
        borderWidth: 1,
        borderColor: Colors.DEFAULT_YELLOW, 
      },
      titleText: {
        marginLeft: 8,
        fontSize: 15,
        lineHeight: 15 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
      },
      tagText: {
        marginLeft: 8,
        fontSize: 11,
        lineHeight: 11 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_GREY,
        marginBottom: 5,
      },
      footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 6,
        justifyContent: 'space-between',
      },
      rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      timeAndDistanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: Colors.LIGHT_YELLOW,
        borderRadius: 12,
        marginHorizontal: 3,
      },
      timeAndDistanceText: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_YELLOW,
      },
      ratingText: {
        marginLeft: 5,
        fontSize: 10,
        lineHeight: 10 * 1.4,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK,
      },
      reviewsText: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK,
      },        
})