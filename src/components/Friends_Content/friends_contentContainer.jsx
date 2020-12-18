import React from 'react';
import {getUsers, userFollow, userUnFollow} from '../../redux/friends_reducer';
import {connect} from "react-redux";
import FriendsContent from "./friends_content";
import s from './friends_content.module.css'

class friends_contentContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    onFollow = (userId) => {
        this.props.userFollow(userId);
    }

    onUnFollow = (userId) => {
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
    {getUsers, userFollow, userUnFollow})(friends_contentContainer);