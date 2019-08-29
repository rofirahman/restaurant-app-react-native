import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import yelp from '../api/yelp'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.carouselStyle}>
                <Carousel
                    data={result.photos}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 3 }}>
                                <Image style={styles.imageStyle} source={{ uri: item }}/>
                            </View>
                        )
                    }}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth}
                    hasParallaxImages={true}
                />
            </View>
            <View style={styles.cardStyle}>
                <Text style={styles.headerStyle}>{result.name}</Text>
                <View
                    style={{
                        margin: 15,
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    carouselStyle: {
        flex: 3,
        backgroundColor: 'black',
        opacity: 0.9,
        marginBottom: -30,
        top: 0,
        zIndex: -1,
    },
    imageStyle: {
        flex: 3,
        zIndex: -1,
        width: screenWidth,
        height: screenWidth,
        borderColor: 'white',
    },
    cardStyle: {
        backgroundColor: '#ffffff',
        zIndex: 1,
        borderColor: '#fefefe',
        borderWidth: 3,
        flex: 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    headerStyle: {
        paddingHorizontal: 15,
        fontSize: 20,
        fontWeight: '500'
    }
})

export default ResultsShowScreen