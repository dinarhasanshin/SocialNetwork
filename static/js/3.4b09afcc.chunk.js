(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[3],{290:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var s=o(95);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var o=[],s=!0,a=!1,i=void 0;try{for(var r,n=e[Symbol.iterator]();!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||Object(s.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(e,t,o){e.exports={data_contacts:"ProfileInfo_data_contacts__dhujj",data_contacts_header:"ProfileInfo_data_contacts_header__2CRTa"}},295:function(e,t,o){e.exports={profile_content:"ProfilePage_profile_content___ps0C",profile_content_block:"ProfilePage_profile_content_block__1C_sa",profile_left:"ProfilePage_profile_left__3Wy-C",profile_photo:"ProfilePage_profile_photo__oq8sl",photo_item:"ProfilePage_photo_item__3xfOK",input_file:"ProfilePage_input_file__lm2Vy",photo_edit_btn_div:"ProfilePage_photo_edit_btn_div__1UA95",photo_edit_btn:"ProfilePage_photo_edit_btn__vKbVE",profile_right:"ProfilePage_profile_right__2AObi",profile_data:"ProfilePage_profile_data__fV4vA",data_header:"ProfilePage_data_header__2SnQb"}},296:function(e,t,o){e.exports={profile_content_block:"ProfilePosts_profile_content_block__3t-T8",posts_input:"ProfilePosts_posts_input__1csRn",posts_input_left:"ProfilePosts_posts_input_left__-WmkG",posts_img:"ProfilePosts_posts_img__1Ddm0",posts_btn_send:"ProfilePosts_posts_btn_send__2GMJ6",posts_textarea:"ProfilePosts_posts_textarea__1bzxo"}},297:function(e,t,o){e.exports={profile_content_block:"PostItem_profile_content_block__3P5Bs",post_item:"PostItem_post_item__39ZdO",post_item_img:"PostItem_post_item_img__35yhq",post_item_header:"PostItem_post_item_header__1VLAM",post_item_bottom:"PostItem_post_item_bottom__3_44k",post_item_reaction:"PostItem_post_item_reaction__lsD6d",post_like_icon:"PostItem_post_like_icon__2NZqq"}},298:function(e,t,o){},300:function(e,t,o){"use strict";o.r(t);var s=o(5),a=o(2),i=o(51),r=o(52),n=o(55),c=o(54),l=o(0),p=o.n(l),_=o(20),j=o(94),d=o(11),f=o(10),b=o(93),u=o(295),h=o.n(u),m=o(290),O=o(292),x=o.n(O),P=o(125),g=o(126),v=o(65),N=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,o=e.profile;return Object(a.jsxs)("form",{className:x.a.data_contacts,onSubmit:t,children:[Object(a.jsx)("button",{children:"Save"})," ",Object(a.jsx)("div",{children:"EditMode"}),Object(a.jsxs)("div",{className:x.a.data_contacts_header,children:["Job ",Object(a.jsx)("hr",{})]}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["FullName: ",Object(a.jsx)(P.a,{component:v.a,type:"text",name:"fullName"})]}),Object(a.jsxs)("li",{children:["Looking for a job: ",Object(a.jsx)(P.a,{component:v.a,type:"checkbox",name:"lookingForAJob",placeholder:"JobLooking"})]}),Object(a.jsxs)("li",{children:["Skills: ",Object(a.jsx)(P.a,{component:v.a,type:"text",name:"lookingForAJobDescription",placeholder:"ProfSkills"})]}),Object(a.jsxs)("li",{children:["AboutMe: ",Object(a.jsx)(P.a,{component:v.a,type:"text",name:"aboutMe"})]})]}),Object(a.jsxs)("div",{className:x.a.data_contacts_header,children:["Contacts ",Object(a.jsx)("hr",{})]}),Object(a.jsx)("ul",{children:Object.keys(o.contacts).map((function(e){return Object(a.jsxs)("div",{children:[" ",e,": ",Object(a.jsx)(P.a,{component:v.a,type:"text",name:"contacts."+e,placeholder:e})," "]})}))})]})})),k=function(e){return Object(a.jsxs)("div",{className:x.a.data_contacts,children:[e.isOwner&&Object(a.jsx)("button",{onClick:e.goToEditMode,children:"Edit"}),Object(a.jsxs)("div",{className:x.a.data_contacts_header,children:["Job ",Object(a.jsx)("hr",{})]}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"Yes":"No"]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("b",{children:"Skills:"})," ",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"NoDescription"]})]}),Object(a.jsxs)("div",{className:x.a.data_contacts_header,children:["AboutMe ",Object(a.jsx)("hr",{})]}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:e.profile.aboutMe})}),Object(a.jsxs)("div",{className:x.a.data_contacts_header,children:["Contacts ",Object(a.jsx)("hr",{})]}),Object(a.jsx)("ul",{children:Object.keys(e.profile.contacts).map((function(t){return Object(a.jsx)(y,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))})]})},y=function(e){var t=e.contactTitle,o=e.contactValue;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("b",{children:[t,":"]})," ",null!==o&&o.length?o:"NaN"]})},S=function(e){var t=e.saveProfile,o=Object(b.a)(e,["saveProfile"]),s=Object(l.useState)(!1),i=Object(m.a)(s,2),r=i[0],n=i[1];return Object(a.jsx)(a.Fragment,{children:r?Object(a.jsx)(N,{initialValues:o.profile,profile:o.profile,onSubmit:function(e){console.log(e),t(e),n(!1)}}):Object(a.jsx)(k,{goToEditMode:function(){n(!0)},profile:o.profile,isOwner:o.isOwner})})},w=o(296),I=o.n(w),A=o(297),C=o.n(A),U=o(36),M={body:'<path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46zM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82z" fill="currentColor"/>',width:24,height:24},J=function(e){return Object(a.jsxs)("div",{className:C.a.post_item+" "+C.a.profile_content_block,children:[Object(a.jsxs)("div",{className:C.a.post_item_header,children:[Object(a.jsx)("img",{className:C.a.post_item_img,src:e.photos}),Object(a.jsx)("p",{className:C.a.post_name,children:e.username})]}),Object(a.jsx)("div",{className:C.a.post_item_bottom,children:e.message}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:C.a.post_item_reaction,children:Object(a.jsx)(U.InlineIcon,{icon:M,className:C.a.post_like_icon})})]})},T=o(67),D=Object(T.a)(1e3),E=Object(g.a)({form:"postAdd"})((function(e){return Object(a.jsxs)("form",{className:I.a.posts_input+" "+I.a.profile_content_block,onSubmit:e.handleSubmit,children:[Object(a.jsxs)("div",{className:I.a.posts_input_left,children:[Object(a.jsx)("img",{src:e.profile.photos.large,alt:"",className:I.a.posts_img}),Object(a.jsx)("p",{}),Object(a.jsx)(P.a,{component:v.a,className:I.a.posts_textarea,name:"newPostText",placeholder:"Enter your post",validate:[T.b,D]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:I.a.posts_btn_send,children:"Send"})})]})})),F=function(e){var t=e.profilePage.postsCollection.map((function(t){return Object(a.jsx)(J,{message:t.message,username:t.username,photos:e.profilePage.profile.photos.large})}));return Object(a.jsxs)(a.Fragment,{children:[e.isOwner&&Object(a.jsx)(E,{onSubmit:function(t){e.addPost(t.newPostText)},profile:e.profilePage.profile}),Object(a.jsx)("div",{className:I.a.posts_collection,children:t})]})},V=Object(_.b)((function(e){return{profilePage:e.profilePage,isOwner:e.profilePage.isOwner}}),{addPost:j.a})(F),L=o(298),q=o.n(L),z=function(e){var t=Object(l.useState)(!1),o=Object(m.a)(t,2),s=o[0],i=o[1],r=Object(l.useState)(e.status),n=Object(m.a)(r,2),c=n[0],p=n[1];Object(l.useEffect)((function(){p(e.status)}),[e.status]);return Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:q.a.profile_status_input,autoFocus:!0,onBlur:function(){i(!1),e.updateUserStatus(c)},value:c,onChange:function(e){p(e.currentTarget.value)}})}):Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status})]})})},H=function(e){var t=e.savePhoto,o=e.isOwner,s=Object(b.a)(e,["savePhoto","isOwner"]);return Object(a.jsxs)("section",{className:h.a.profile_content,children:[Object(a.jsx)("div",{className:h.a.profile_left,children:Object(a.jsxs)("div",{className:h.a.profile_photo+" "+h.a.profile_content_block,children:[null===s.profile||null==s.profile.photos.large?Object(a.jsx)("div",{className:h.a.photo_item,children:Object(a.jsx)("p",{className:h.a.profile_photo})}):Object(a.jsx)("img",{className:h.a.photo_item,src:s.profile.photos.large}),o&&Object(a.jsxs)("div",{className:h.a.photo_edit_btn_div,children:[Object(a.jsx)("input",{type:"file",id:"input_file",className:h.a.input_file,onChange:function(e){e.target.files.length&&t(e.target.files[0])}}),Object(a.jsx)("label",{for:"input_file",className:h.a.photo_edit_btn,children:"EditPhoto"})]})]})}),Object(a.jsxs)("div",{className:h.a.profile_right,children:[Object(a.jsxs)("div",{className:h.a.profile_data+" "+h.a.profile_content_block,children:[Object(a.jsxs)("div",{className:h.a.data_header,children:[Object(a.jsx)("span",{className:"Name",children:null===s.profile?s.profilePage.fullName:s.profile.fullName}),Object(a.jsx)(z,{status:s.status,updateUserStatus:s.updateUserStatus}),Object(a.jsx)("hr",{})]}),Object(a.jsx)(S,{dataContacts:s.profilePage.dataContacts,profile:s.profile,isOwner:o,saveProfile:s.saveProfile})]}),Object(a.jsx)(V,{})]})]})},B=o(17),G=function(e){Object(n.a)(o,e);var t=Object(c.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"refreshProfile",value:function(){this.props.setIsOwner(!this.props.match.params.userId);var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.setUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,o){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return null===this.props.profile?Object(a.jsx)("div",{children:"loading..."}):Object(a.jsx)(H,Object(s.a)(Object(s.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),o}(p.a.Component);t.default=Object(f.d)(Object(_.b)((function(e){return{userId:e.auth.id,profilePage:e.profilePage,profile:e.profilePage.profile,status:e.profilePage.status,isOwner:e.profilePage.isOwner}}),{setUserProfile:j.g,getUserStatus:j.c,updateUserStatus:j.h,savePhoto:j.d,saveProfile:j.e,setIsOwner:j.f,setAuthUserProfile:B.d}),d.f)(G)}}]);
//# sourceMappingURL=3.4b09afcc.chunk.js.map