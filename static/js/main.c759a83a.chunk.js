(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},5:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",title:"video_detail_title__30Sij",channelTitle:"video_detail_channelTitle__iQMqd",description:"video_detail_description__3nW_r"}},50:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(6),l=a.n(o),u=a(4),d=a.n(u),_=a(0),h=Object(i.memo)((function(e){var t=e.onSearch,a=Object(i.useRef)(),n=function(){var e=a.current.value;t(e)};return Object(_.jsxs)("header",{className:d.a.header,children:[Object(_.jsxs)("div",{className:d.a.logo,children:[Object(_.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(_.jsx)("h1",{className:d.a.title,children:"Youtube"})]}),Object(_.jsx)("input",{ref:a,className:d.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(_.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){n()},children:Object(_.jsx)("img",{className:d.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),p=a(5),m=a.n(p),j=function(e){var t=e.video,a=e.video.snippet;return Object(_.jsxs)("section",{className:m.a.detail,children:[Object(_.jsx)("iframe",{className:m.a.video,id:"ytplayer",type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(_.jsx)("h2",{className:m.a.title,children:a.title}),Object(_.jsx)("h3",{className:m.a.channelTitle,children:a.channelTitle}),Object(_.jsx)("pre",{className:m.a.description,children:a.description})]})},b=a(3),v=a.n(b),O=Object(i.memo)((function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,n="list"===e.display?v.a.list:v.a.grid;return Object(_.jsx)("li",{className:"".concat(v.a.container," ").concat(n),onClick:function(){return i(t)},children:Object(_.jsxs)("div",{className:v.a.video,children:[Object(_.jsx)("img",{className:v.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(_.jsxs)("div",{className:v.a.metadata,children:[Object(_.jsx)("p",{className:v.a.title,children:a.title}),Object(_.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})})),x=a(21),f=a.n(x),y=function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(_.jsx)("ul",{className:f.a.videos,children:t.map((function(e){return Object(_.jsx)(O,{video:e,onVideoClick:a,display:i},e.id)}))})};var g=function(e){var t=e.youtube,a=Object(i.useState)([]),n=Object(r.a)(a,2),c=n[0],s=n[1],o=Object(i.useState)(null),u=Object(r.a)(o,2),d=u[0],p=u[1],m=Object(i.useCallback)((function(e){p(null),t.search(e).then((function(e){return s(e)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(_.jsxs)("div",{className:l.a.app,children:[Object(_.jsx)(h,{onSearch:m}),Object(_.jsxs)("section",{className:l.a.content,children:[d&&Object(_.jsx)("div",{className:l.a.detail,children:Object(_.jsx)(j,{video:d})}),Object(_.jsx)("div",{className:l.a.list,children:Object(_.jsx)(y,{videos:c,onVideoClick:function(e){p(e)},display:d?"list":"grid"})})]})]})},N=a(11),k=a(7),w=a.n(k),I=a(9),S=a(22),C=a(23),T=function(){function e(t){Object(S.a)(this,e),this.youtube=t}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(I.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=a(24),R=new T(a.n(P).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyAOBTz7AGMPumk6B5c5N86rk_N0kyRQHLk"}}));s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(g,{youtube:R})}),document.getElementById("root"))},6:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}}},[[50,1,2]]]);
//# sourceMappingURL=main.c759a83a.chunk.js.map