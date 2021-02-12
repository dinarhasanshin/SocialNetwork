import React from 'react';
import {getUsers, userFollow, userUnFollow} from '../../redux/peoples_reducer';
import {connect} from "react-redux";
// @ts-ignore
import s from './PeoplesPage.module.css';
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import PeoplesPage from "./PeoplesPage";
import {FriendsCollectionType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    friendsCollection: Array<FriendsCollectionType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    isFollowing: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void,
    userFollow: (userId: number) => void,
    userUnFollow: (userId: number) => void,

}
type OwnPropsType ={}


type PropsTypes = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class PeoplesPageContainer extends React.Component<PropsTypes> {



    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    onFollow = (userId: number) => {
        this.props.userFollow(userId);
    }

    onUnFollow = (userId: number) => {
        this.props.userUnFollow(userId);
    }

    render = () => {
        return <>
            {this.props.isFetching
                ? <div className={s.preloader}>
                    <div className={s.ldsCircle}>
                        <div></div>
                    </div>
                </div>
                : <PeoplesPage totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                                  currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                                  friendsCollection={this.props.friendsCollection}
                                  follow={this.onFollow}
                                  unFollow={this.onUnFollow} isFollowing={this.props.isFollowing}/>
            }
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
        isFollowing: state.friendsPage.isFollowing
    }
}


export default compose<React.ComponentType>(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {getUsers, userFollow, userUnFollow}),
    withAuthRedirect
)(PeoplesPageContainer);