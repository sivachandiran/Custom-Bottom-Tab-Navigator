import React from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';

const PostScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                Post Screen
            </Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked')}>
            </Button>
        </View>
    );
}
export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
})