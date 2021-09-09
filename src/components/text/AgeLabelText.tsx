import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {colors} from "../../theme/Color";
import {fontSize} from "../../theme/Fonts";
import {spacing} from "../../theme/Spacing";

interface AgeLabelTextInterface {
    age: number
}

function AgeLabelText({age}: AgeLabelTextInterface) {

    return (
        <View style={styles.container}>
            <Text style={styles.leftLabel}>{age}</Text>
            <View style={styles.rightContainer}>
                <Text style={styles.rightLabel}>Years</Text>
                <Text style={styles.rightLabel}>Old</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: spacing.x_small
    },
    leftLabel: {
        color: colors.secondary,
        fontSize: fontSize.font_44,
        fontWeight: '600',
    },

    rightContainer: {
        justifyContent: 'center',
        marginLeft:spacing.small
    },
    rightLabel: {
        color: colors.secondary,
        fontSize: fontSize.font_12,
        marginVertical:1
    }

})

export {AgeLabelText}
