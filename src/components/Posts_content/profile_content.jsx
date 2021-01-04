import React from 'react';
import PostsContainer from './Posts/postsContainer';
import ContentHeader from './Content_Header/content_header';
import ProfileInfo from './ProfileInfo/profile_info';
import s from './profile_content.module.css';

const profile_content = (props) =>{

    return(
        <section className={ s.content }>
            <ContentHeader profilePage={ props.profilePage } profile={ props.profile }
                           status={ props.status } updateUserStatus={ props.updateUserStatus }/>
            <div className={ s.content_data }>
                <div className={ s.data_connections }>
                    <ProfileInfo data={ props.profilePage.dataPerson }/>

                    <ProfileInfo data={ props.profilePage.dataLocation }/>
                </div>
            </div>

            <PostsContainer/>

            <div className={ s.content_person_data }>
                <div className={ s.data_connections }>
                    <ProfileInfo data={ props.profilePage.dataSocial }/>
                </div>
            </div>
        </section>
    )
}
export default profile_content;