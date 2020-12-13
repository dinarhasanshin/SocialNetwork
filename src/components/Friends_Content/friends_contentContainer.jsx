import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow
} from '../../redux/friends_reducer';
import {connect} from "react-redux";
import * as axios from "axios";
import FriendsContent from "./friends_content";
import s from './friends_content.module.css'

class friends_contentContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(400);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
                             follow={this.props.follow}
                             unFollow={this.props.unFollow}/>
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
        isFetching: state.friendsPage.isFetching
    }
}


export default connect(mapStateToProps,
    { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(friends_contentContainer);