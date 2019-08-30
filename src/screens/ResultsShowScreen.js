import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import yelp from '../api/yelp'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

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

    var hours_start = result.hours[0].open[0].start
    var hours_end = result.hours[0].open[0].end

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
                <View style={styles.headerSection}>
                    <Text style={styles.headerStyle}>{result.name}</Text>
                    <Text style={styles.ratingStyle}>
                    <MaterialIcons name="star"/>{result.rating}
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: 15,
                        marginHorizontal: 25,
                        borderBottomColor: '#e5e5e5',
                        borderBottomWidth: 0.5,
                    }}
                />
                <View style={{ marginHorizontal: 25, marginBottom: 10 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={result.categories}
                        keyExtractor={ categorie => categorie.title}
                        renderItem={({ item }) => {
                            return (
                                <View style={ styles.categoriesStyle }>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
                                    {item.title}
                                    </Text>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={styles.infoStyle}>
                    <Text style={styles.listStyle}>
                        <MaterialIcons name="location-on" style={{ paddingRight: 10 }}/> {result.location.address1}, {result.location.city}, {result.location.state}
                    </Text>
                    <Text style={styles.listStyle}>
                        <Entypo name="clock" style={{ paddingRight: 10 }}/> {hours_start.substring(0,2) + ":" + hours_start.substring(2)} - {hours_end.substring(0,2) + ":" + hours_end.substring(2)}
                    </Text>
                    <Text style={styles.listStyle}>
                        <MaterialIcons name="phone" style={{ paddingRight: 10 }}/> {result.display_phone}
                    </Text>
                </View>
                <View style={{ flex:1 }}>
                </View>
                <View style={styles.buttonStyle}>
                    <Text style={ styles.buttonText }>
                        Reservation <MaterialIcons name="keyboard-arrow-right" style={styles.iconStyle}/>
                    </Text>
                </View>
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
        shadowColor: '#cccccc',
        shadowRadius: 2,
        shadowOpacity: 0.75,
        flex: 2,
        marginHorizontal: 15,
        bottom: 25,
        borderRadius: 30
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerStyle: {
        paddingHorizontal: 25,
        paddingTop: 15,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: '900'
    },
    ratingStyle: {
        marginRight: 25,
        paddingTop: 15,
        paddingBottom: 2,
        fontSize: 16,
        color: '#D4AF37',
        fontWeight: '900'
    },
    infoSyle: {
        marginHorizontal: 25,
    },
    listStyle: {
        marginHorizontal: 25,
        marginBottom: 5,
        fontSize: 14,
        fontWeight: '100'
    },
    categoriesStyle: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        fontSize: 10,
        marginRight: 15,
        borderColor: '#cccccc',
        borderWidth: 0.3,
        borderRadius: 20,
        backgroundColor: '#f4d258'
    },
    buttonStyle: {
        backgroundColor: '#D4AF37',
        paddingHorizontal: 10,
        marginHorizontal: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 30
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconStyle: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        fontSize: 14
    }
})

export default ResultsShowScreen