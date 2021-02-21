 import React from 'react';
import { getUsers, userFollow, userUnFollow, actions } from '../../redux/peoples_reducer';
import { connect } from "react-redux";
// @ts-ignore
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import PeoplesPage from "./PeoplesPage";
import { FriendsCollectionType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
    friendsCollection: Array<FriendsCollectionType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    isFollowing: Array<number>,
    isFriends: boolean | null,
    term: string
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, term?: string, isFriends?: boolean | null) => void,
    userFollow: (userId: number) => void,
    userUnFollow: (userId: number) => void,
    setIsFriends: (isFriends: boolean | null) => void,
    setTermSearch: (term: string) => void
}
type OwnPropsType ={}


type PropsTypes = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class PeoplesPageContainer extends React.Component<PropsTypes> {



    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
        this.props.setIsFriends(null);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize, isFriends, term} = this.props;
        this.props.getUsers(pageNumber, pageSize, term, isFriends);
    }

    onFollow = (userId: number) => {
        this.props.userFollow(userId);
    }

    onUnFollow = (userId: number) => {
        this.props.userUnFollow(userId);
    }

    onFilterChanged = (term: string) => {
        let {pageSize, isFriends} = this.props;

        this.props.getUsers(1, pageSize, term, isFriends)
        this.props.setTermSearch(term);
    }
    toggleFriends = (isFriends: boolean | null) => {
        let {pageSize} = this.props;
        this.props.setIsFriends(isFriends);
        this.props.getUsers(1, pageSize, '', isFriends);
    }

    render = () => {
        return <>
            <PeoplesPage totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                         friendsCollection={this.props.friendsCollection} isFetching={this.props.isFetching}
                         follow={this.onFollow} onFilterChanged={this.onFilterChanged} isFriends={this.props.isFriends}
                         unFollow={this.onUnFollow} isFollowing={this.props.isFollowing} toggleFriends={this.toggleFriends}/>
        </>
    };
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        friendsCollection: state.friendsPage.friendsCollection,
        pageSize: state.friendsPage.pageSize,
        totalUserCount: state.friendsPage.totalUserCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowing: state.friendsPage.isFollowing,
        isFriends: state.friendsPage.filter.isFriends,
        term: state.friendsPage.filter.term
    }
}


export default compose<React.ComponentType>(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {getUsers, userFollow, userUnFollow, setIsFriends: actions.setIsFriends, setTermSearch: actions.setTermSearch}),
    withAuthRedirect,
    React.memo
)(PeoplesPageContainer);