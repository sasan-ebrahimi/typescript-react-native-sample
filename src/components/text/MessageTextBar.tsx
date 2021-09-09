import React from "react";
import { StyleSheet, Text} from "react-native";
import {colors} from "../../theme/Color";
import {spacing} from "../../theme/Spacing";


interface MessageTextBarInterface {
    message: string,
    color?: string
}

function MessageTextBar(props: MessageTextBarInterface) {
    const {message} = props
    const backgroundColor = props.color || styles.textStyle.backgroundColor
    return(
        <Text style={[styles.textStyle, {backgroundColor}]}>{message}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor: colors.white,
        color:colors.white,
        paddingVertical:spacing.small,
        textAlign:'center'
    }
})

export {MessageTextBar}
