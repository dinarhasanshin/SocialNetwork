(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[3],{290:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var o=s(95);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],o=!0,i=!1,a=void 0;try{for(var n,r=e[Symbol.iterator]();!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(e,t,s){e.exports={data_contacts:"ProfileInfo_data_contacts__dhujj",data_contacts_header:"ProfileInfo_data_contacts_header__2CRTa",btn_editMode:"ProfileInfo_btn_editMode__2CsSm"}},295:function(e,t,s){e.exports={profile_content:"ProfilePage_profile_content___ps0C",content_block_size:"ProfilePage_content_block_size__1GMhF",profile_left:"ProfilePage_profile_left__3Wy-C",profile_photo:"ProfilePage_profile_photo__oq8sl",photo_item:"ProfilePage_photo_item__3xfOK",input_file:"ProfilePage_input_file__lm2Vy",photo_edit_btn_div:"ProfilePage_photo_edit_btn_div__1UA95",photo_edit_btn:"ProfilePage_photo_edit_btn__vKbVE",profile_right:"ProfilePage_profile_right__2AObi",profile_data:"ProfilePage_profile_data__fV4vA",data_header:"ProfilePage_data_header__2SnQb"}},296:function(e,t,s){e.exports={content_block_size:"ProfilePosts_content_block_size__3h_cc",posts_input:"ProfilePosts_posts_input__1csRn",posts_input_left:"ProfilePosts_posts_input_left__-WmkG",posts_img:"ProfilePosts_posts_img__1Ddm0",posts_btn_send:"ProfilePosts_posts_btn_send__2GMJ6",posts_textarea:"ProfilePosts_posts_textarea__1bzxo"}},297:function(e,t,s){e.exports={content_block_size:"PostItem_content_block_size__13-CF",post_item:"PostItem_post_item__39ZdO",post_item_img:"PostItem_post_item_img__35yhq",post_item_header:"PostItem_post_item_header__1VLAM",post_item_bottom:"PostItem_post_item_bottom__3_44k",post_item_reaction:"PostItem_post_item_reaction__lsD6d",post_like_icon:"PostItem_post_like_icon__2NZqq"}},298:function(e,t,s){e.exports={profile_status_input:"ProfileStatus_profile_status_input__1QmOp"}},300:function(e,t,s){"use strict";s.r(t);var o=s(5),i=s(2),a=s(51),n=s(52),r=s(55),c=s(54),l=s(0),_=s.n(l),p=s(20),j=s(94),d=s(11),f=s(10),b=s(93),u=s(295),h=s.n(u),m=s(290),O=s(292),x=s.n(O),P=s(125),g=s(126),v=s(65),N=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile;return Object(i.jsxs)("form",{className:x.a.data_contacts,onSubmit:t,children:[Object(i.jsx)("button",{className:x.a.btn_editMode,children:"Save"}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Job ",Object(i.jsx)("hr",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["FullName: ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"fullName"})]}),Object(i.jsxs)("li",{children:["Looking for a job: ",Object(i.jsx)(P.a,{component:v.a,type:"checkbox",name:"lookingForAJob",placeholder:"JobLooking"})]}),Object(i.jsxs)("li",{children:["Skills: ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"lookingForAJobDescription",placeholder:"ProfSkills"})]}),Object(i.jsxs)("li",{children:["AboutMe: ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"aboutMe"})]})]}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Contacts ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object.keys(s.contacts).map((function(e){return Object(i.jsxs)("div",{children:[" ",e,": ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"contacts."+e,placeholder:e})," "]})}))})]})})),k=function(e){return Object(i.jsxs)("div",{className:x.a.data_contacts,children:[e.isOwner&&Object(i.jsx)("button",{className:x.a.btn_editMode,onClick:e.goToEditMode,children:"Edit"}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Job ",Object(i.jsx)("hr",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" ",Object(i.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"Yes":"No"]}),Object(i.jsxs)("li",{children:[" ",Object(i.jsx)("b",{children:"Skills:"})," ",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"NoDescription"]})]}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["AboutMe ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:e.profile.aboutMe})}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Contacts ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object.keys(e.profile.contacts).map((function(t){return Object(i.jsx)(y,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))})]})},y=function(e){var t=e.contactTitle,s=e.contactValue;return Object(i.jsxs)("li",{children:[Object(i.jsxs)("b",{children:[t,":"]})," ",null!==s&&s.length?s:"NaN"]})},S=function(e){var t=e.saveProfile,s=(e.toggleProfileEditMode,Object(b.a)(e,["saveProfile","toggleProfileEditMode"])),o=Object(l.useState)(!1),a=Object(m.a)(o,2),n=a[0],r=a[1];return Object(i.jsx)(i.Fragment,{children:n?Object(i.jsx)(N,{initialValues:s.profile,profile:s.profile,onSubmit:function(e){t(e),r(!1)}}):Object(i.jsx)(k,{goToEditMode:function(){r(!0)},profile:s.profile,isOwner:s.isOwner})})},w=s(296),I=s.n(w),M=s(297),A=s.n(M),z=s(36),C={body:'<path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46zM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82z" fill="currentColor"/>',width:24,height:24},U=function(e){return Object(i.jsxs)("div",{className:A.a.post_item+" "+A.a.content_block_size,children:[Object(i.jsxs)("div",{className:A.a.post_item_header,children:[Object(i.jsx)("img",{className:A.a.post_item_img,src:e.photos,alt:""}),Object(i.jsx)("p",{className:A.a.post_name,children:e.username})]}),Object(i.jsx)("div",{className:A.a.post_item_bottom,children:e.message}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:A.a.post_item_reaction,children:Object(i.jsx)(z.InlineIcon,{icon:C,className:A.a.post_like_icon})})]})},F=(s(67),Object(g.a)({form:"postAdd"})((function(e){return Object(i.jsxs)("form",{className:I.a.posts_input+" "+I.a.content_block_size,onSubmit:e.handleSubmit,children:[Object(i.jsxs)("div",{className:I.a.posts_input_left,children:[Object(i.jsx)("img",{src:e.profile.photos.large,alt:"",className:I.a.posts_img}),Object(i.jsx)("p",{}),Object(i.jsx)(P.a,{component:v.a,className:I.a.posts_textarea,name:"newPostText",placeholder:"Enter your post"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:I.a.posts_btn_send,children:"Send"})})]})}))),J=function(e){var t=e.profilePage.postsCollection.map((function(t){return Object(i.jsx)(U,{message:t.message,username:t.username,photos:e.profilePage.profile.photos.large})}));return Object(i.jsxs)(i.Fragment,{children:[e.isOwner&&Object(i.jsx)(F,{onSubmit:function(t){e.addPost(t.newPostText)},profile:e.profilePage.profile}),Object(i.jsx)("div",{className:I.a.posts_collection,children:t})]})},E=Object(p.b)((function(e){return{profilePage:e.profilePage,isOwner:e.profilePage.isOwner}}),{addPost:j.a})(J),T=s(298),D=s.n(T),V=function(e){var t=Object(l.useState)(!1),s=Object(m.a)(t,2),o=s[0],a=s[1],n=Object(l.useState)(e.status),r=Object(m.a)(n,2),c=r[0],_=r[1];Object(l.useEffect)((function(){_(e.status)}),[e.status]);return Object(i.jsx)("div",{children:o?Object(i.jsx)("div",{children:Object(i.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatus(c)},value:c,onChange:function(e){_(e.currentTarget.value)}})}):Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("span",{className:D.a.profile_status_input,onClick:function(){a(!0)},children:e.status})]})})},L=function(e){var t=e.savePhoto,s=e.isOwner,o=Object(b.a)(e,["savePhoto","isOwner"]);return Object(i.jsxs)("section",{className:h.a.profile_content,children:[Object(i.jsx)("div",{className:h.a.profile_left,children:Object(i.jsxs)("div",{className:h.a.profile_photo+" "+h.a.content_block_size,children:[null===o.profile||null==o.profile.photos.large?Object(i.jsx)("div",{className:h.a.photo_item,children:Object(i.jsx)("p",{className:h.a.profile_photo})}):Object(i.jsx)("img",{className:h.a.photo_item,src:o.profile.photos.large,alt:""}),s&&Object(i.jsxs)("div",{className:h.a.photo_edit_btn_div,children:[Object(i.jsx)("input",{type:"file",id:"input_file",className:h.a.input_file,onChange:function(e){e.target.files.length&&t(e.target.files[0])}}),Object(i.jsx)("label",{for:"input_file",className:h.a.photo_edit_btn,children:"EditPhoto"})]})]})}),Object(i.jsxs)("div",{className:h.a.profile_right,children:[Object(i.jsxs)("div",{className:h.a.profile_data+" "+h.a.content_block_size,children:[Object(i.jsxs)("div",{className:h.a.data_header,children:[Object(i.jsx)("b",{children:Object(i.jsx)("span",{className:"Name",children:null===o.profile?o.profilePage.fullName:o.profile.fullName})}),Object(i.jsx)(V,{status:o.status,updateUserStatus:o.updateUserStatus}),Object(i.jsx)("hr",{})]}),Object(i.jsx)(S,{profile:o.profile,isOwner:s,saveProfile:o.saveProfile})]}),Object(i.jsx)(E,{})]})]})},q=s(17),H=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){this.props.setIsOwner(!this.props.match.params.userId);var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.setUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return null===this.props.profile?Object(i.jsx)("div",{children:"loading..."}):Object(i.jsx)(L,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),s}(_.a.Component);t.default=Object(f.d)(Object(p.b)((function(e){return{userId:e.auth.id,profilePage:e.profilePage,profile:e.profilePage.profile,status:e.profilePage.status,isOwner:e.profilePage.isOwner}}),{setUserProfile:j.g,getUserStatus:j.c,updateUserStatus:j.h,savePhoto:j.d,saveProfile:j.e,setIsOwner:j.f,setAuthUserProfile:q.d}),d.f)(H)}}]);
//# sourceMappingURL=3.d29903c3.chunk.js.map