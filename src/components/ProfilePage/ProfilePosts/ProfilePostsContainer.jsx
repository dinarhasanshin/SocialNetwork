import { addPost } from '../../../redux/profile_reducer';
import { connect } from "react-redux";
import ProfilePosts from "./ProfilePosts";


let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage,
        isOwner: state.profilePage.isOwner
    }
}

const ProfilePostsContainer = connect(mapStateToProps,{ addPost })(ProfilePosts)

export default ProfilePostsContainer;