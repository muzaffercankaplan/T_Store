import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";

const SearchBar = (props) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='search'
                onChangeText={props.onChange}
            />
        </View>
    );
};

export default SearchBar

const styles = StyleSheet.create({
    input: {
        height: 45,
        backgroundColor: '#EEE',
        borderRadius: 12,
        paddingLeft: 13,
        marginHorizontal: 7,
        marginTop: 8,
        marginBottom: 15,
    }
})