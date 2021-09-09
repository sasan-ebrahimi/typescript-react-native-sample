import React from "react";
import {View, StyleSheet, ViewStyle} from 'react-native';

interface RowInterface {
    cells:JSX.Element[],
    containerStyle?: ViewStyle
}

export const Row = (props:RowInterface) => {
    const {cells} = props
    return (
        <View style={[styles.containerStyle , props.containerStyle ]}>{cells}</View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
      flexDirection: 'row'
    }
});
