import React from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked')}>
            </Button>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
})