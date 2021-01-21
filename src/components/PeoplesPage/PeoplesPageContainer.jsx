import React from 'react';
import {getUsers, userFollow, userUnFollow} from '../../redux/friends_reducer';
import {connect} from "react-redux";
import s from '../Friends_Content/friends_content.module.css';
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import PeoplesPage from "./PeoplesPage";

class PeoplesPageContainer extends React.Component {



    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
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
                : <PeoplesPage totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
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


export default compose(
    connect(mapStateToProps, {getUsers, userFollow, userUnFollow}),
    withAuthRedirect
)(PeoplesPageContainer);