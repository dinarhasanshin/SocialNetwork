(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[3],{291:function(e,t,s){e.exports={data_contacts:"ProfileInfo_data_contacts__dhujj",data_contacts_header:"ProfileInfo_data_contacts_header__2CRTa",btn_editMode:"ProfileInfo_btn_editMode__2CsSm"}},293:function(e,t,s){e.exports={profile_content:"ProfilePage_profile_content___ps0C",content_block_size:"ProfilePage_content_block_size__1GMhF",profile_left:"ProfilePage_profile_left__3Wy-C",profile_photo:"ProfilePage_profile_photo__oq8sl",photo_item:"ProfilePage_photo_item__3xfOK",photo_item_img:"ProfilePage_photo_item_img__10ZUM",input_file:"ProfilePage_input_file__lm2Vy",photo_edit_btn_div:"ProfilePage_photo_edit_btn_div__1UA95",photo_edit_btn:"ProfilePage_photo_edit_btn__vKbVE",profile_right:"ProfilePage_profile_right__2AObi",profile_data:"ProfilePage_profile_data__fV4vA",data_header:"ProfilePage_data_header__2SnQb"}},294:function(e,t,s){e.exports={content_block_size:"ProfilePosts_content_block_size__3h_cc",posts_input:"ProfilePosts_posts_input__1csRn",posts_input_left:"ProfilePosts_posts_input_left__-WmkG",posts_img:"ProfilePosts_posts_img__1Ddm0",posts_btn_send:"ProfilePosts_posts_btn_send__2GMJ6",posts_textarea:"ProfilePosts_posts_textarea__1bzxo"}},295:function(e,t,s){e.exports={content_block_size:"PostItem_content_block_size__13-CF",post_item:"PostItem_post_item__39ZdO",post_item_img:"PostItem_post_item_img__35yhq",post_item_header:"PostItem_post_item_header__1VLAM",post_item_bottom:"PostItem_post_item_bottom__3_44k",post_item_reaction:"PostItem_post_item_reaction__lsD6d",post_like_icon:"PostItem_post_like_icon__2NZqq"}},296:function(e,t,s){e.exports={profile_status_input:"ProfileStatus_profile_status_input__1QmOp"}},298:function(e,t,s){"use strict";s.r(t);var o=s(5),i=s(2),a=s(53),r=s(54),n=s(64),c=s(63),l=s(0),_=s.n(l),p=s(20),d=s(94),j=s(11),f=s(10),u=s(93),b=s(293),h=s.n(b);var m=s(124);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],o=!0,i=!1,a=void 0;try{for(var r,n=e[Symbol.iterator]();!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return s}}(e,t)||Object(m.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=s(291),P=s.n(x),g=s(125),v=s(126),N=s(66),k=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile;return Object(i.jsxs)("form",{className:P.a.data_contacts,onSubmit:t,children:[Object(i.jsx)("button",{className:P.a.btn_editMode,children:"Save"}),Object(i.jsxs)("div",{className:P.a.data_contacts_header,children:["Job ",Object(i.jsx)("hr",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["FullName: ",Object(i.jsx)(g.a,{component:N.a,type:"text",name:"fullName"})]}),Object(i.jsxs)("li",{children:["Looking for a job: ",Object(i.jsx)(g.a,{component:N.a,type:"checkbox",name:"lookingForAJob",placeholder:"JobLooking"})]}),Object(i.jsxs)("li",{children:["Skills: ",Object(i.jsx)(g.a,{component:N.a,type:"text",name:"lookingForAJobDescription",placeholder:"ProfSkills"})]}),Object(i.jsxs)("li",{children:["AboutMe: ",Object(i.jsx)(g.a,{component:N.a,type:"text",name:"aboutMe"})]})]}),Object(i.jsxs)("div",{className:P.a.data_contacts_header,children:["Contacts ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object.keys(s.contacts).map((function(e){return Object(i.jsxs)("div",{children:[" ",e,": ",Object(i.jsx)(g.a,{component:N.a,type:"text",name:"contacts."+e,placeholder:e})," "]})}))})]})})),y=function(e){return Object(i.jsxs)("div",{className:P.a.data_contacts,children:[e.isOwner&&Object(i.jsx)("button",{className:P.a.btn_editMode,onClick:e.goToEditMode,children:"Edit"}),Object(i.jsxs)("div",{className:P.a.data_contacts_header,children:["Job ",Object(i.jsx)("hr",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" ",Object(i.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"Yes":"No"]}),Object(i.jsxs)("li",{children:[" ",Object(i.jsx)("b",{children:"Skills:"})," ",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"NoDescription"]})]}),Object(i.jsxs)("div",{className:P.a.data_contacts_header,children:["AboutMe ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:e.profile.aboutMe})}),Object(i.jsxs)("div",{className:P.a.data_contacts_header,children:["Contacts ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object.keys(e.profile.contacts).map((function(t){return Object(i.jsx)(S,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))})]})},S=function(e){var t=e.contactTitle,s=e.contactValue;return Object(i.jsxs)("li",{children:[Object(i.jsxs)("b",{children:[t,":"]})," ",null!==s&&s.length?s:"NaN"]})},w=function(e){var t=e.saveProfile,s=Object(u.a)(e,["saveProfile"]),o=O(Object(l.useState)(!1),2),a=o[0],r=o[1];return Object(i.jsx)(i.Fragment,{children:a?Object(i.jsx)(k,{initialValues:s.profile,profile:s.profile,onSubmit:function(e){t(e),r(!1)}}):Object(i.jsx)(y,{goToEditMode:function(){r(!0)},profile:s.profile,isOwner:s.isOwner})})},I=s(294),A=s.n(I),M=s(295),z=s.n(M),C=s(37),U={body:'<path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46zM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82z" fill="currentColor"/>',width:24,height:24},F=function(e){return Object(i.jsxs)("div",{className:z.a.post_item+" "+z.a.content_block_size,children:[Object(i.jsxs)("div",{className:z.a.post_item_header,children:[Object(i.jsx)("img",{className:z.a.post_item_img,src:e.photos,alt:""}),Object(i.jsx)("p",{className:z.a.post_name,children:e.username})]}),Object(i.jsx)("div",{className:z.a.post_item_bottom,children:e.message}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:z.a.post_item_reaction,children:Object(i.jsx)(C.InlineIcon,{icon:U,className:z.a.post_like_icon})})]})},J=Object(v.a)({form:"postAdd"})((function(e){var t=e.handleSubmit,s=Object(u.a)(e,["handleSubmit"]);return Object(i.jsxs)("form",{className:A.a.posts_input+" "+A.a.content_block_size,onSubmit:t,children:[Object(i.jsxs)("div",{className:A.a.posts_input_left,children:[s.profile.photos.large&&Object(i.jsx)("img",{src:s.profile.photos.large,alt:"",className:A.a.posts_img}),Object(i.jsx)("p",{}),Object(i.jsx)(g.a,{component:N.a,className:A.a.posts_textarea,name:"newPostText",placeholder:"Enter your post"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:A.a.posts_btn_send,children:"Send"})})]})})),T=function(e){var t=e.profilePage.postsCollection.map((function(t){return Object(i.jsx)(F,{message:t.message,username:t.username,photos:e.profilePage.profile.photos.large})}));return Object(i.jsxs)(i.Fragment,{children:[e.isOwner&&Object(i.jsx)(J,{onSubmit:function(t){e.addPost(t.newPostText)},profile:e.profilePage.profile}),Object(i.jsx)("div",{className:A.a.posts_collection,children:t})]})},D=Object(p.b)((function(e){return{profilePage:e.profilePage,isOwner:e.profilePage.isOwner}}),{addPost:d.a.addPost})(T),E=s(296),V=s.n(E),L=function(e){var t=O(Object(l.useState)(!1),2),s=t[0],o=t[1],a=O(Object(l.useState)(e.status),2),r=a[0],n=a[1];Object(l.useEffect)((function(){n(e.status)}),[e.status]);var c=function(){e.isOwner&&(o(!s),r&&e.updateUserStatus(r))};return Object(i.jsx)("div",{children:s?Object(i.jsx)("div",{children:Object(i.jsx)("input",{autoFocus:!0,onBlur:function(){c()},value:null!==r?r:"",onChange:function(e){n(e.currentTarget.value)}})}):Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("span",{className:V.a.profile_status_input,onClick:function(){c()},children:e.status})]})})},q=s.p+"static/media/defaulIconProfileSquad.52829e75.png",H=function(e){var t=e.savePhoto,s=e.isOwner,o=Object(u.a)(e,["savePhoto","isOwner"]);return Object(i.jsxs)("section",{className:h.a.profile_content,children:[Object(i.jsx)("div",{className:h.a.profile_left,children:Object(i.jsxs)("div",{className:h.a.profile_photo+" "+h.a.content_block_size,children:[null===o.profile||null==o.profile.photos.large?Object(i.jsx)("div",{className:h.a.photo_item_img,children:Object(i.jsx)("img",{src:q,alt:""})}):Object(i.jsx)("img",{className:h.a.photo_item,src:o.profile.photos.large,alt:""}),s&&Object(i.jsxs)("div",{className:h.a.photo_edit_btn_div,children:[Object(i.jsx)("input",{type:"file",id:"input_file",className:h.a.input_file,onChange:function(e){var s;(null===(s=e.target.files)||void 0===s?void 0:s.length)&&t(e.target.files[0])}}),Object(i.jsx)("label",{htmlFor:"input_file",className:h.a.photo_edit_btn,children:"EditPhoto"})]})]})}),Object(i.jsxs)("div",{className:h.a.profile_right,children:[Object(i.jsxs)("div",{className:h.a.profile_data+" "+h.a.content_block_size,children:[Object(i.jsxs)("div",{className:h.a.data_header,children:[Object(i.jsx)("b",{children:Object(i.jsx)("span",{className:"Name",children:null===o.profile?o.profilePage.profile.fullName:o.profile.fullName})}),Object(i.jsx)(L,{status:o.status,isOwner:s,updateUserStatus:o.updateUserStatus}),Object(i.jsx)("hr",{})]}),Object(i.jsx)(w,{profile:o.profile,isOwner:s,saveProfile:o.saveProfile})]}),Object(i.jsx)(D,{})]})]})},G=s(17),Z=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){this.props.setIsOwner(!this.props.match.params.userId);var e=+this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),e&&(this.props.setUserProfile(e),this.props.getUserStatus(e))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return null===this.props.profile?Object(i.jsx)("div",{children:"loading..."}):Object(i.jsx)(H,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),s}(_.a.Component);t.default=Object(f.d)(Object(p.b)((function(e){return{userId:e.auth.id,profilePage:e.profilePage,profile:e.profilePage.profile,status:e.profilePage.status,isOwner:e.profilePage.isOwner}}),{setUserProfile:d.f,getUserStatus:d.c,updateUserStatus:d.g,savePhoto:d.d,saveProfile:d.e,setIsOwner:d.a.setIsOwner,setAuthUserProfile:G.d}),j.g)(Z)}}]);
//# sourceMappingURL=3.e3e84de0.chunk.js.map