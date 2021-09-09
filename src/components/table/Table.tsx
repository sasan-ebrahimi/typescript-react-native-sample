import React from "react";
import {View,ViewStyle} from 'react-native';

interface TableInterface {
    rows:JSX.Element[],
    containerStyle?: ViewStyle
}

export const Table = (props: TableInterface) => {
    const {rows} = props
    return (
        <View style={props.containerStyle}>{rows}</View>
    )
}

