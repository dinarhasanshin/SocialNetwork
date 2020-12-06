import React from 'react';
import s from './friends_content.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/default_user_image.png';

class friends_content extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        return (
            <div>
                {
                    this.props.friendsCollection.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.user_photo}
                                 alt="AvatarIcon"/>
                        </div>
                        <span>
                            <div>{u.name}</div>
                        </span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.Follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                            <div>{u.status}</div>
                        </span>
                    </div>)
                }
            </div>
        );
    }
}

export default friends_content;