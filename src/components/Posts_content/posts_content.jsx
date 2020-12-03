import React from 'react';
import PostsContainer from './Posts/postsContainer';
import ContentHeader from './Content_Header/content_header';
import ProfileInfo from './ProfileInfo/profile_info';
import s from './posts_content.module.css';

const posts_content = (props) =>{
    debugger;
    return(

        <section className={s.content}>
            <ContentHeader/>
            <div className={s.content_data}>
                <div className={s.data_connections}>
                    <ProfileInfo data={props.state.profilePage.dataPerson}/>

                    <ProfileInfo data={props.state.profilePage.dataLocation}/>
                </div>
            </div>

            <PostsContainer state={ props.state } dispatch={ props.dispatch }/>

            <div className={s.content_person_data}>
                <div className={s.data_connections}>
                    <ProfileInfo data={props.state.profilePage.dataSocial}/>
                </div>
            </div>
        </section>
    )
}
export default posts_content;