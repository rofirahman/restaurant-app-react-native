import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window')

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <View style={styles.additionalStyle}>
                <Text style={styles.itemStyle}>
                    <MaterialIcons name="star" style={styles.iconStyle}/>{result.rating}
                </Text>
                <Text style={styles.itemStyle}>
                    <MaterialIcons name="rate-review" style={styles.iconStyle}/>{result.review_count} Reviews
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    imageStyle: {
        flex: 1,
        width: screenWidth - 60,
        height: screenWidth - 200,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    },
    additionalStyle: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 10,
        alignSelf: 'center',
        marginVertical: 2,
        marginRight: 5
    },
    itemStyle: {
        marginRight: 15,
        flexDirection: 'row'
    }
})

export default ResultsDetail