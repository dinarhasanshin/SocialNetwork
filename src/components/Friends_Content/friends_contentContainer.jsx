import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowing,
    unFollow
} from '../../redux/friends_reducer';
import {connect} from "react-redux";
import * as axios from "axios";
import FriendsContent from "./friends_content";
import s from './friends_content.module.css'
import {usersAPI} from "../../api/api";

class friends_contentContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(400);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }
    onFollow = (userId) => {
        this.props.toggleIsFollowing(true, userId);
        usersAPI.follow(userId).then(data => {
                if (data.resultCode === 0){
                    this.props.toggleIsFollowing(false, userId);
                    this.props.follow(userId);
                }
            });
    }
    onUnFollow = (userId) => {
        this.props.toggleIsFollowing(true, userId);
         usersAPI.unFollow(userId).then(data => {
                if (data.resultCode === 0){
                    this.props.toggleIsFollowing(false, userId);
                    this.props.unFollow(userId);
                }
            });
    }

    render = () => {
        return <>
            {this.props.isFetching
                ? <div className={s.preloader}>
                    <div className={s.ldsCircle}>
                        <div></div>
                    </div>
                </div>
                : <FriendsContent totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                             friendsCollection={this.props.friendsCollection}
                             follow={this.onFollow}
                             unFollow={this.onUnFollow} isFollowing={this.props.isFollowing}/>
            }
        </>
    };
}

let mapStateToProps = (state) => {
    return{
        friendsCollection: state.friendsPage.friendsCollection,
        pageSize: state.friendsPage.pageSize,
        totalUserCount: state.friendsPage.totalUserCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowing: state.friendsPage.isFollowing
    }
}


export default connect(mapStateToProps,
    { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing })(friends_contentContainer);