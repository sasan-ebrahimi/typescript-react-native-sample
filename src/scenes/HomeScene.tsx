import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {getUsers, refreshUserList, setSortType} from "../repo/store/actions";
import {UserSortType} from "../enums/UserSortType";
import {User} from "../services/user/ApiClient";
import {useDispatch, useSelector} from 'react-redux'
import {Row} from "../components/table/Row";
import {Cell} from "../components/table/Cell";
import {Table} from "../components/table/Table";
import {AgeLabelText} from "../components/text/AgeLabelText";
import {Card} from "../components/container/Card";
import {colors} from "../theme/Color";
import {fontSize} from "../theme/Fonts";
import {SingleChoiceChip} from "../components/picker/SingleChoiceChip";
import {spacing} from "../theme/Spacing";
import {Ionicons} from '@expo/vector-icons';
import {MessageTextBar} from "../components/text/MessageTextBar";

function HomeScene() {
    const {isLoading, usersList, error}  = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.filterViewContainer}>
                    <Text style={styles.filterLabel}>Filter By: </Text>
                    <SingleChoiceChip
                        data={[UserSortType.NAME, UserSortType.AGE]}
                        onChange={(value: UserSortType) => {
                            dispatch(setSortType(value))
                        }}
                        selectedIndex={0}
                    />
                </View>
                {renderLoadingView(isLoading, () => {
                    dispatch(refreshUserList())
                })}
            </View>
            {renderError(error)}
            {renderTable(usersList)}
        </View>
    )
}

function renderError(error: string) {
    if (error)
        return (<MessageTextBar message={error} color={colors.error}/>)
    return (null)
}

function renderLoadingView(isLoading: boolean, onRefreshClick = null) {

    if (isLoading) {
        return (<View><Text style={styles.loadingText}>Loading...</Text></View>)
    } else {
        return (<TouchableWithoutFeedback onPress={onRefreshClick}>
            <Ionicons name="refresh" size={24} color="white"/>
        </TouchableWithoutFeedback>)
    }

}

function renderTable(users: User[]) {
    return (
        <Table rows={
            users.map((user: User) => {
                let cells = []
                cells.push(<Cell title={user.name} textStyle={styles.userTableNameCell}></Cell>)
                cells.push(<Cell
                    title={user.age.toString()}
                    renderContent={(title) => <AgeLabelText age={user.age}/>}
                />)
                return (<Card><Row cells={cells}/></Card>)
            })
        }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'stretch',
    },
    userTableNameCell: {
        color: colors.textDarkGray,
        fontWeight: '700',
        fontSize: fontSize.font_36
    },
    topBar: {
        paddingHorizontal: spacing.screenSideSpace,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: spacing.topBarHeight,
        alignItems: 'center'
    },
    filterViewContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    filterLabel: {
        color: 'white',
        fontWeight: '600'
    },
    loadingText: {
        color: colors.white
    }
});

export {HomeScene}
