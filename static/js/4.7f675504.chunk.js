(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[4],{290:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(95);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,l=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(a){l=!0,i=a}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}return o}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},291:function(e,t,o){e.exports={peoples_content:"PeoplesPage_peoples_content__1phPR",content_block_size:"PeoplesPage_content_block_size__32SIx",preloader:"PeoplesPage_preloader__2LHK-",ldsCircle:"PeoplesPage_ldsCircle__RVsFW"}},293:function(e,t,o){e.exports={selectedPage:"Paginator_selectedPage__mqjFx"}},294:function(e,t,o){e.exports={content_block_size:"PeopleItem_content_block_size__1c8FN",people_item:"PeopleItem_people_item__3aUsI",people_item_content:"PeopleItem_people_item_content__1eeBj",people_item_img_div:"PeopleItem_people_item_img_div__3HIML",people_item_img:"PeopleItem_people_item_img__1EHJe",people_item_right:"PeopleItem_people_item_right__26y5d",people_item_name:"PeopleItem_people_item_name__1k0p_",people_item_btn_div:"PeopleItem_people_item_btn_div__1v1SA",people_item_btn:"PeopleItem_people_item_btn__2lwE0",people_item_btn_disable:"PeopleItem_people_item_btn_disable__CrOGw"}},301:function(e,t,o){"use strict";o.r(t);var n=o(2),l=o(51),i=o(52),r=o(55),s=o(54),a=o(0),c=o.n(a),p=o(128),_=o(20),u=o(291),d=o.n(u),m=o(10),b=o(5),g=o(11),f=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(r.a)(a,t);var o=Object(s.a)(a);function a(){return Object(l.a)(this,a),o.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(n.jsx)(e,Object(b.a)({},this.props)):Object(n.jsx)(g.a,{to:"/login"})}}]),a}(c.a.Component);return Object(_.b)(f)(t)},h=o(93),P=(o(290),o(293),o(294)),w=o.n(P),O=o(22),v=o.p+"static/media/defaulIconProfile.503ee88f.png",F=function(e){var t=e.user;return Object(n.jsxs)("div",{className:w.a.people_item,children:[Object(n.jsxs)("div",{className:w.a.people_item_content,children:[Object(n.jsx)(O.c,{to:"/profile/"+t.id,children:Object(n.jsx)("div",{className:w.a.people_item_img_div,children:Object(n.jsx)("p",{className:w.a.people_item_img,children:Object(n.jsx)("img",{src:null!=t.photos.small?t.photos.small:v,alt:""})})})}),Object(n.jsxs)("div",{className:w.a.people_item_name,children:[Object(n.jsx)("span",{children:t.name}),t.status&&Object(n.jsxs)("span",{children:[" | ",t.status]})]}),Object(n.jsx)("div",{className:w.a.people_item_btn_div,children:t.followed?Object(n.jsx)("button",{className:e.isFollowing.some((function(e){return e===t.id}))?w.a.people_item_btn_disable:w.a.people_item_btn,onClick:function(o){e.unFollow(t.id)},children:"UnFollow"}):Object(n.jsx)("button",{className:e.isFollowing.some((function(e){return e===t.id}))?w.a.people_item_btn_disable:w.a.people_item_btn,onClick:function(o){e.follow(t.id)},children:"Follow"})})]}),Object(n.jsx)("hr",{})]})},x=function(e){e.currentPage,e.totalUserCount,e.pageSize,e.onPageChanged;var t=e.friendsCollection,o=e.unFollow,l=e.follow,i=e.isFollowing;Object(h.a)(e,["currentPage","totalUserCount","pageSize","onPageChanged","friendsCollection","unFollow","follow","isFollowing"]);return Object(n.jsx)("section",{className:d.a.peoples_content+" "+d.a.content_block_size,children:t.map((function(e){return Object(n.jsx)(F,{user:e,unFollow:o,follow:l,isFollowing:i},e.id)}))})},C=function(e){Object(r.a)(o,e);var t=Object(s.a)(o);function o(){var e;Object(l.a)(this,o);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var o=e.props.pageSize;e.props.getUsers(t,o)},e.onFollow=function(t){e.props.userFollow(t)},e.onUnFollow=function(t){e.props.userUnFollow(t)},e.render=function(){return Object(n.jsx)(n.Fragment,{children:e.props.isFetching?Object(n.jsx)("div",{className:d.a.preloader,children:Object(n.jsx)("div",{className:d.a.ldsCircle,children:Object(n.jsx)("div",{})})}):Object(n.jsx)(x,{totalUserCount:e.props.totalUserCount,pageSize:e.props.pageSize,currentPage:e.props.currentPage,onPageChanged:e.onPageChanged,friendsCollection:e.props.friendsCollection,follow:e.onFollow,unFollow:e.onUnFollow,isFollowing:e.props.isFollowing})})},e}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,o=e.pageSize;this.props.getUsers(t,o)}}]),o}(c.a.Component);t.default=Object(m.d)(Object(_.b)((function(e){return{friendsCollection:e.friendsPage.friendsCollection,pageSize:e.friendsPage.pageSize,totalUserCount:e.friendsPage.totalUserCount,currentPage:e.friendsPage.currentPage,isFetching:e.friendsPage.isFetching,isFollowing:e.friendsPage.isFollowing}}),{getUsers:p.b,userFollow:p.c,userUnFollow:p.d}),j)(C)}}]);
//# sourceMappingURL=4.7f675504.chunk.js.map