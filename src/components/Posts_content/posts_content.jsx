import React from 'react';
import Posts from './Posts/posts';
import ContentHeader from './Content_Header/content_header';
import ProfileInfo from './ProfileInfo/profile_info';
import s from './posts_content.module.css';

const posts_content = (props) =>{

    return(
        <section className={s.content}>
            <ContentHeader/>
            <div className={s.content_data}>
                <div className={s.data_connections}>
                    <ProfileInfo data={props.state.dataPerson}/>

                    <ProfileInfo data={props.state.dataLocation}/>
                </div>
            </div>

            <Posts postsCollection={props.state.postsCollection} newPostText={props.state.newPostText} dispatch={props.dispatch}/>

            <div className={s.content_person_data}>
                <div className={s.data_connections}>
                    <ProfileInfo data={props.state.dataSocial}/>
                </div>
            </div>
        </section>
    )
}
export default posts_content;