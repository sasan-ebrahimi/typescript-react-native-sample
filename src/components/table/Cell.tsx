import React from "react";
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {fontSize} from "../../theme/Fonts";
import {colors} from "../../theme/Color";

export interface MyCellInterface {
    title: string,
    containerStyle?: ViewStyle,
    textStyle?: TextStyle,
    renderContent?: (title:string)=>JSX.Element
}

function Cell(props: MyCellInterface) {

    const {title,containerStyle, textStyle,renderContent} = props

    let content = <Text style={[styles.text ,textStyle]}>{title}</Text>
    if (renderContent !== undefined)
        content = renderContent(title)

    return (
        <View style={[styles.container, containerStyle]}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    text: {
        color: colors.primary,
        fontSize: fontSize.font_14
    }
});

export {Cell}
