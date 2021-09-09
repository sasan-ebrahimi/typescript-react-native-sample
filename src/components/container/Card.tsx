import {View,StyleSheet} from 'react-native'
import {colors} from "../../theme/Color";
import React from "react";
import {spacing} from "../../theme/Spacing";

function Card(props) {
    return (
        <View style={styles.container}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        borderRadius: 18,
        padding: spacing.large,
        margin: spacing.large
    }
})

export {Card}
