(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[4],{290:function(e,o,t){e.exports={peoples_content:"PeoplesPage_peoples_content__1phPR",content_block_size:"PeoplesPage_content_block_size__32SIx",preloader:"PeoplesPage_preloader__2LHK-",ldsCircle:"PeoplesPage_ldsCircle__RVsFW"}},292:function(e,o,t){e.exports={content_block_size:"PeopleItem_content_block_size__1c8FN",people_item:"PeopleItem_people_item__3aUsI",people_item_content:"PeopleItem_people_item_content__1eeBj",people_item_img_div:"PeopleItem_people_item_img_div__3HIML",people_item_img:"PeopleItem_people_item_img__1EHJe",people_item_right:"PeopleItem_people_item_right__26y5d",people_item_name:"PeopleItem_people_item_name__1k0p_",people_item_btn_div:"PeopleItem_people_item_btn_div__1v1SA",people_item_btn:"PeopleItem_people_item_btn__2lwE0",people_item_btn_disable:"PeopleItem_people_item_btn_disable__CrOGw"}},299:function(e,o,t){"use strict";t.r(o);var n=t(2),l=t(53),i=t(54),s=t(64),p=t(63),c=t(0),a=t.n(c),r=t(127),_=t(20),u=t(290),d=t.n(u),m=t(10),b=t(5),g=t(93),j=t(11),f=function(e){return{isAuth:e.auth.isAuth}};var h=function(e){return Object(_.b)(f)((function(o){var t=o.isAuth,l=(o.fake,Object(g.a)(o,["isAuth","fake"]));return t?Object(n.jsx)(e,Object(b.a)({},l)):Object(n.jsx)(j.a,{to:"/login"})}))},P=t(292),w=t.n(P),O=t(21),F=t.p+"static/media/defaulIconProfile.503ee88f.png",v=function(e){var o=e.user;return Object(n.jsxs)("div",{className:w.a.people_item,children:[Object(n.jsxs)("div",{className:w.a.people_item_content,children:[Object(n.jsx)(O.c,{to:"/profile/"+o.id,children:Object(n.jsx)("div",{className:w.a.people_item_img_div,children:Object(n.jsx)("p",{className:w.a.people_item_img,children:Object(n.jsx)("img",{src:null!=o.photos.small?o.photos.small:F,alt:""})})})}),Object(n.jsxs)("div",{className:w.a.people_item_name,children:[Object(n.jsx)("span",{children:o.name}),o.status&&Object(n.jsxs)("span",{children:[" | ",o.status]})]}),Object(n.jsx)("div",{className:w.a.people_item_btn_div,children:o.followed?Object(n.jsx)("button",{className:e.isFollowing.some((function(e){return e===o.id}))?w.a.people_item_btn_disable:w.a.people_item_btn,onClick:function(t){e.unFollow(o.id)},children:"UnFollow"}):Object(n.jsx)("button",{className:e.isFollowing.some((function(e){return e===o.id}))?w.a.people_item_btn_disable:w.a.people_item_btn,onClick:function(t){e.follow(o.id)},children:"Follow"})})]}),Object(n.jsx)("hr",{})]})},x=function(e){e.currentPage,e.totalUserCount,e.pageSize,e.onPageChanged;var o=e.friendsCollection,t=e.unFollow,l=e.follow,i=e.isFollowing;return Object(n.jsx)("section",{className:d.a.peoples_content+" "+d.a.content_block_size,children:o.map((function(e){return Object(n.jsx)(v,{user:e,unFollow:t,follow:l,isFollowing:i},e.id)}))})},C=function(e){Object(s.a)(t,e);var o=Object(p.a)(t);function t(){var e;Object(l.a)(this,t);for(var i=arguments.length,s=new Array(i),p=0;p<i;p++)s[p]=arguments[p];return(e=o.call.apply(o,[this].concat(s))).onPageChanged=function(o){var t=e.props.pageSize;e.props.getUsers(o,t)},e.onFollow=function(o){e.props.userFollow(o)},e.onUnFollow=function(o){e.props.userUnFollow(o)},e.render=function(){return Object(n.jsx)(n.Fragment,{children:e.props.isFetching?Object(n.jsx)("div",{className:d.a.preloader,children:Object(n.jsx)("div",{className:d.a.ldsCircle,children:Object(n.jsx)("div",{})})}):Object(n.jsx)(x,{totalUserCount:e.props.totalUserCount,pageSize:e.props.pageSize,currentPage:e.props.currentPage,onPageChanged:e.onPageChanged,friendsCollection:e.props.friendsCollection,follow:e.onFollow,unFollow:e.onUnFollow,isFollowing:e.props.isFollowing})})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,o=e.currentPage,t=e.pageSize;this.props.getUsers(o,t)}}]),t}(a.a.Component);o.default=Object(m.d)(Object(_.b)((function(e){return{friendsCollection:e.friendsPage.friendsCollection,pageSize:e.friendsPage.pageSize,totalUserCount:e.friendsPage.totalUserCount,currentPage:e.friendsPage.currentPage,isFetching:e.friendsPage.isFetching,isFollowing:e.friendsPage.isFollowing}}),{getUsers:r.b,userFollow:r.c,userUnFollow:r.d}),h)(C)}}]);
//# sourceMappingURL=4.1472e78a.chunk.js.map