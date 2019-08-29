import React from 'react';
import { Header } from 'react-native-elements';

const CustomHeader = () => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Itàliano Restá', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default CustomHeader