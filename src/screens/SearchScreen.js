import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultsList
                title="Cost Effective"
            />
            <ResultsList
                title="Bit Pricier"
            />
            <ResultsList
                title="Bit Spender"
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen