import React, {useState} from "react";
import {View, TouchableWithoutFeedback, StyleSheet, ViewStyle, Text} from "react-native";
import {colors} from "../../theme/Color";
import {spacing} from "../../theme/Spacing";

interface SinglePickerInterface<T> {
    data: T[];
    onChange: (item: T) => void,
    selectedIndex: number,
    renderSelected?: (item: T) => any,
    renderNotSelected?: (item: T) => any,
    containerStyle?: ViewStyle
}

function SingleChoiceChip<T>(props: SinglePickerInterface<T>) {
    const {data, renderSelected, renderNotSelected} = props
    let {selectedIndex} = props

    selectedIndex = (selectedIndex >= 0 && selectedIndex < data.length) ? selectedIndex : 0
    const [selected, setSelected] = useState(selectedIndex)

    return (
        <View style={[styles.container, props.containerStyle]}>
            {
                data.map((item, index) => {
                    if (index == selected)
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                setSelected(index)
                            }}>
                                <View>
                                    {typeof renderSelected === "function" ? renderSelected(item) : renderSelectedItem<T>(item)}</View>
                            </TouchableWithoutFeedback>)
                    else
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                setSelected(index)
                                props.onChange(item)
                            }}>
                                <View>
                                    {typeof renderNotSelected === "function" ? renderNotSelected(item) : renderNotSelectedItem<T>(item)}</View>
                            </TouchableWithoutFeedback>)
                })
            }
        </View>
    )
}

function renderSelectedItem<T>(item: T) {
    return (
        <View style={[styles.itemContainer, styles.selectedView]}><Text
            style={[styles.itemText, styles.selectedText]}>{item.toString()}</Text></View>
    )
}

function renderNotSelectedItem<T>(item: T) {
    return (
        <View style={[styles.itemContainer, styles.notSelectedView]}><Text
            style={[styles.itemText, styles.notSelectedText]}>{item.toString()}</Text></View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemContainer: {
        borderRadius: 12,
        paddingHorizontal: spacing.large,
        paddingVertical: spacing.small,
        marginHorizontal: spacing.small
    },
    itemText: {
        fontWeight: '500'
    },
    selectedView: {
        backgroundColor: colors.white
    },
    selectedText: {
        color: colors.primary
    },
    notSelectedView: {
        backgroundColor: colors.transparent
    },
    notSelectedText: {
        color: colors.white
    }

})

export {SingleChoiceChip}
