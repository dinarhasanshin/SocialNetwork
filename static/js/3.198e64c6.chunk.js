(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[3],{294:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var o=s(98);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],o=!0,i=!1,a=void 0;try{for(var r,n=e[Symbol.iterator]();!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return s}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},298:function(e,t,s){e.exports={data_contacts:"ProfileInfo_data_contacts__3Mema",data_contacts_header:"ProfileInfo_data_contacts_header__20I-0",btn_editMode:"ProfileInfo_btn_editMode__2OnB9"}},306:function(e,t,s){e.exports={profile_content:"ProfilePage_profile_content__XX0VC",content_block_size:"ProfilePage_content_block_size__3FQA-",content_block_size_right:"ProfilePage_content_block_size_right__1GugH",profile_left:"ProfilePage_profile_left__2y--H",profile_photo:"ProfilePage_profile_photo__HEx3X",photo_item:"ProfilePage_photo_item__2pd54",photo_item_img:"ProfilePage_photo_item_img__1m2Fi",input_file:"ProfilePage_input_file__1B5sc",photo_edit_btn_div:"ProfilePage_photo_edit_btn_div__1uabv",photo_edit_btn:"ProfilePage_photo_edit_btn__1LEh8",profile_right:"ProfilePage_profile_right__3COf_",profile_data:"ProfilePage_profile_data__19rTA",data_header:"ProfilePage_data_header__3Mrm0"}},307:function(e,t,s){e.exports={content_block_size:"ProfilePosts_content_block_size__3pQ1d",posts_input:"ProfilePosts_posts_input__2SwKp",posts_input_left:"ProfilePosts_posts_input_left__AxypG",posts_img:"ProfilePosts_posts_img__1QA9T",posts_btn_send:"ProfilePosts_posts_btn_send__2miHd",posts_textarea:"ProfilePosts_posts_textarea__3CQ3q"}},308:function(e,t,s){e.exports={content_block_size:"PostItem_content_block_size__3j-Ii",post_item:"PostItem_post_item__LXAS-",post_item_img:"PostItem_post_item_img__16rN_",post_item_header:"PostItem_post_item_header__cw__-",post_item_bottom:"PostItem_post_item_bottom__2Mjkf",post_item_reaction:"PostItem_post_item_reaction__3XcT5",post_like_icon:"PostItem_post_like_icon__3BuWp"}},309:function(e,t,s){e.exports={profile_status_input:"ProfileStatus_profile_status_input__1V78D"}},312:function(e,t,s){"use strict";s.r(t);var o=s(3),i=s(1),a=s(55),r=s(56),n=s(66),c=s(65),l=s(0),_=s.n(l),p=s(20),j=s(97),d=s(11),u=s(10),f=s(95),b=s(306),h=s.n(b),m=s(294),O=s(298),x=s.n(O),P=s(128),g=s(129),v=s(68),N=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile;return Object(i.jsxs)("form",{className:x.a.data_contacts,onSubmit:t,children:[Object(i.jsx)("button",{className:x.a.btn_editMode,children:"Save"}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Job ",Object(i.jsx)("hr",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["FullName: ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"fullName"})]}),Object(i.jsxs)("li",{children:["Looking for a job: ",Object(i.jsx)(P.a,{component:v.a,type:"checkbox",name:"lookingForAJob",placeholder:"JobLooking"})]}),Object(i.jsxs)("li",{children:["Skills: ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"lookingForAJobDescription",placeholder:"ProfSkills"})]}),Object(i.jsxs)("li",{children:["AboutMe: ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"aboutMe"})]})]}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Contacts ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object.keys(s.contacts).map((function(e){return Object(i.jsxs)("div",{children:[" ",e,": ",Object(i.jsx)(P.a,{component:v.a,type:"text",name:"contacts."+e,placeholder:e})," "]})}))})]})})),k=function(e){return Object(i.jsxs)("div",{className:x.a.data_contacts,children:[e.isOwner&&Object(i.jsx)("button",{className:x.a.btn_editMode,onClick:e.goToEditMode,children:"Edit"}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Job ",Object(i.jsx)("hr",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" ",Object(i.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"Yes":"No"]}),Object(i.jsxs)("li",{children:[" ",Object(i.jsx)("b",{children:"Skills:"})," ",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"NoDescription"]})]}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["AboutMe ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:e.profile.aboutMe})}),Object(i.jsxs)("div",{className:x.a.data_contacts_header,children:["Contacts ",Object(i.jsx)("hr",{})]}),Object(i.jsx)("ul",{children:Object.keys(e.profile.contacts).map((function(t){return Object(i.jsx)(y,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))})]})},y=function(e){var t=e.contactTitle,s=e.contactValue;return Object(i.jsxs)("li",{children:[Object(i.jsxs)("b",{children:[t,":"]})," ",null!==s&&s.length?s:"NaN"]})},S=function(e){var t=e.saveProfile,s=Object(f.a)(e,["saveProfile"]),o=Object(l.useState)(!1),a=Object(m.a)(o,2),r=a[0],n=a[1];return Object(i.jsx)(i.Fragment,{children:r?Object(i.jsx)(N,{initialValues:s.profile,profile:s.profile,onSubmit:function(e){t(e),n(!1)}}):Object(i.jsx)(k,{goToEditMode:function(){n(!0)},profile:s.profile,isOwner:s.isOwner})})},w=s(307),I=s.n(w),A=s(308),M=s.n(A),z=s(38),C={body:'<path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46zM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82z" fill="currentColor"/>',width:24,height:24},F=function(e){return Object(i.jsxs)("div",{className:M.a.post_item+" "+M.a.content_block_size,children:[Object(i.jsxs)("div",{className:M.a.post_item_header,children:[Object(i.jsx)("img",{className:M.a.post_item_img,src:e.photos,alt:""}),Object(i.jsx)("p",{className:M.a.post_name,children:e.username})]}),Object(i.jsx)("div",{className:M.a.post_item_bottom,children:e.message}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:M.a.post_item_reaction,children:Object(i.jsx)(z.InlineIcon,{icon:C,className:M.a.post_like_icon})})]})},U=Object(g.a)({form:"postAdd"})((function(e){var t=e.handleSubmit,s=e.error,o=Object(f.a)(e,["handleSubmit","error"]);return Object(i.jsxs)("form",{className:I.a.posts_input+" "+I.a.content_block_size,onSubmit:t,children:[Object(i.jsxs)("div",{className:I.a.posts_input_left,children:[o.profile.photos.large&&Object(i.jsx)("img",{src:o.profile.photos.large,alt:"",className:I.a.posts_img}),Object(i.jsx)("p",{}),Object(i.jsx)(P.a,{component:v.a,className:I.a.posts_textarea,name:"newPostText",placeholder:"Enter your post"}),null!==s&&Object(i.jsx)("div",{children:s})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:I.a.posts_btn_send,children:"Send"})})]})})),T=function(e){var t=e.profilePage.postsCollection.map((function(t){return Object(i.jsx)(F,{message:t.message,username:t.username,photos:e.profilePage.profile.photos.large})}));return Object(i.jsxs)(i.Fragment,{children:[e.isOwner&&Object(i.jsx)(U,{onSubmit:function(t){e.addPostProfile(t.newPostText)},profile:e.profilePage.profile}),Object(i.jsx)("div",{className:I.a.posts_collection,children:t})]})},J=Object(p.b)((function(e){return{profilePage:e.profilePage,isOwner:e.profilePage.isOwner}}),{addPostProfile:j.b})(T),E=s(309),H=s.n(E),D=function(e){var t=Object(l.useState)(!1),s=Object(m.a)(t,2),o=s[0],a=s[1],r=Object(l.useState)(e.status),n=Object(m.a)(r,2),c=n[0],_=n[1];Object(l.useEffect)((function(){_(e.status)}),[e.status]);var p=function(){e.isOwner&&(a(!o),c&&e.updateUserStatus(c))};return Object(i.jsx)("div",{children:o?Object(i.jsx)("div",{children:Object(i.jsx)("input",{autoFocus:!0,onBlur:function(){p()},value:null!==c?c:"",onChange:function(e){_(e.currentTarget.value)}})}):Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("span",{className:H.a.profile_status_input,onClick:function(){p()},children:e.status})]})})},L=s.p+"static/media/defaulIconProfileSquad.52829e75.png",V=function(e){var t=e.savePhoto,s=e.isOwner,o=Object(f.a)(e,["savePhoto","isOwner"]);return Object(i.jsxs)("section",{className:h.a.profile_content,children:[Object(i.jsx)("div",{className:h.a.profile_left,children:Object(i.jsxs)("div",{className:h.a.profile_photo+" "+h.a.content_block_size,children:[null===o.profile||null==o.profile.photos.large?Object(i.jsx)("div",{className:h.a.photo_item_img,children:Object(i.jsx)("img",{src:L,alt:""})}):Object(i.jsx)("img",{className:h.a.photo_item,src:o.profile.photos.large,alt:""}),s&&Object(i.jsxs)("div",{className:h.a.photo_edit_btn_div,children:[Object(i.jsx)("input",{type:"file",id:"input_file",className:h.a.input_file,onChange:function(e){var s;(null===(s=e.target.files)||void 0===s?void 0:s.length)&&t(e.target.files[0])}}),Object(i.jsx)("label",{htmlFor:"input_file",className:h.a.photo_edit_btn,children:"EditPhoto"})]})]})}),Object(i.jsxs)("div",{className:h.a.profile_right,children:[Object(i.jsxs)("div",{className:h.a.profile_data+" "+h.a.content_block_size_right,children:[Object(i.jsxs)("div",{className:h.a.data_header,children:[Object(i.jsx)("b",{children:Object(i.jsx)("span",{className:"Name",children:null===o.profile?o.profilePage.profile.fullName:o.profile.fullName})}),Object(i.jsx)(D,{status:o.status,isOwner:s,updateUserStatus:o.updateUserStatus}),Object(i.jsx)("hr",{})]}),Object(i.jsx)(S,{profile:o.profile,isOwner:s,saveProfile:o.saveProfile})]}),Object(i.jsx)(J,{})]})]})},X=s(17),B=s(46),Q=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){this.props.setIsOwner(!this.props.match.params.userId);var e=+this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),e&&(this.props.setUserProfile(e),this.props.getUserStatus(e))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return null===this.props.profile?Object(i.jsx)(B.b,{}):Object(i.jsx)(V,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),s}(_.a.Component);t.default=Object(u.d)(Object(p.b)((function(e){return{userId:e.auth.id,profilePage:e.profilePage,profile:e.profilePage.profile,status:e.profilePage.status,isOwner:e.profilePage.isOwner}}),{setUserProfile:j.g,getUserStatus:j.d,updateUserStatus:j.h,savePhoto:j.e,saveProfile:j.f,setIsOwner:j.a.setIsOwner,setAuthUserProfile:X.d}),d.g)(Q)}}]);
//# sourceMappingURL=3.198e64c6.chunk.js.map