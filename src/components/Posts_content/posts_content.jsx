import React from 'react';
import PostsContainer from './Posts/postsContainer';
import ContentHeader from './Content_Header/content_header';
import ProfileInfo from './ProfileInfo/profile_info';
import s from './posts_content.module.css';

const posts_content = (props) =>{
    let state = props.store.getState();
    return(
        <section className={ s.content }>
            <ContentHeader/>
            <div className={ s.content_data }>
                <div className={ s.data_connections }>
                    <ProfileInfo data={ state.profilePage.dataPerson }/>

                    <ProfileInfo data={ state.profilePage.dataLocation }/>
                </div>
            </div>

            <PostsContainer/>

            <div className={ s.content_person_data }>
                <div className={ s.data_connections }>
                    <ProfileInfo data={ state.profilePage.dataSocial }/>
                </div>
            </div>
        </section>
    )
}
export default posts_content;