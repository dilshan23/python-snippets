(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{468:function(t,e,n){var content=n(470);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("29e62011",content,!1,{sourceMap:!1})},469:function(t,e,n){"use strict";var o=n(468);n.n(o).a},470:function(t,e,n){(t.exports=n(58)(!1)).push([t.i,".inp[data-v-2408d79e]{height:58px}.lstCompany[data-v-2408d79e]{display:none}.lstCompany .active[data-v-2408d79e]{background:#ef1e27;color:#fff}.lstCompany .active[data-v-2408d79e]:after{border-bottom-color:#ef1e27}@media screen and (max-width:750px){.inp[data-v-2408d79e]{height:40px}}",""])},471:function(t,e,n){"use strict";n(153),n(106),n(107),n(31),n(17),n(24);var o,r=n(4),l=(n(16),{props:["name"],data:function(){return{companyKeyword:"",current:-1,scrollY:0,companies:[],topCompanies:[],cssFlag:!1,companyId:0,companyName:""}},mounted:function(){var t=this;this.$store.state.topCompanies?this.topCompanies=this.$store.state.topCompanies:this.$axios.post("/api/company/topList").then(function(data){data.success&&(t.topCompanies=data.data.company_list,t.$store.commit("topCompanies",t.topCompanies))})},computed:{searchCompanies:function(t){return this.companyKeyword?this.companies:this.topCompanies}},watch:{companyKeyword:function(t){this.getSearchCompany()}},methods:{showModal:function(){var t=this.companyName?"Type-company-select-company":"Type-company-no-result",e="";this.$store.state.authUser?(this.$modal.show("join",{companyId:this.companyId,companyName:this.companyName,fromName:this.name}),e=this.companyName?"Ly-type-company-select-company":"Indiv.-list",this.$ga.event(e,t,this.name)):this.$modal.show("signup",{from:"companySearch",companyName:this.companyName,ga:{action:t,label:this.name},gaEventLabel:t+"-"+this.name.toLowerCase()})},setActive:function(t){this.current=t},activeClass:function(t){return{active:this.current===t}},down:function(t){this.current===t.target.parentElement.querySelectorAll(".lstCompany li").length-1||(this.current<t.target.parentElement.querySelectorAll(".lstCompany li").length-1?this.current++:this.current=0),this.setFocus(t)},up:function(t){this.current>0?this.current--:-1===this.current?this.current=t.target.parentElement.querySelectorAll(".lstCompany li").length-1:this.current=0,this.setFocus(t)},hit:function(t){if(this.current>-1){var e=t.target.parentElement.parentElement.querySelectorAll("li")[this.current];this.companyId=e.getAttribute("id"),this.companyName=e.getAttribute("name"),this.cssFlag=!1,t.target.closest(".lstCompany").style.display="none",this.showModal()}},reset:function(){this.companyKeyword=""},listView:function(t,e){var n=e.target.parentElement.querySelector(".lstCompany"),o=e.target.parentElement.querySelector(".lstCompany:hover");"block"===t?(this.cssFlag=!0,n.style.display=t,this.$ga.event("Type-company",this.name)):"none"===t&&null===o?(this.cssFlag=!1,n.style.display=t):navigator.userAgent.indexOf("Trident")>-1&&n.parentElement.querySelector(".inp").focus()},setFocus:function(t){var e=t.target.parentElement.querySelectorAll(".lstCompany li")[this.current],n=e.offsetTop,o=e.offsetHeight,r=t.target.parentElement.querySelector(".lstCompany");n+30>r.offsetHeight&&this.scrollY<n?r.scrollTop+=o:this.scrollY>n&&(r.scrollTop-=o),this.scrollY=n},updateAutoKeyword:function(t){this.companyKeyword=t.target.value},getSearchCompany:(o=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.companyKeyword.length>1)){t.next=4;break}return n={company_name:this.companyKeyword},t.next=4,this.$axios.post("/api/company/company_list",{params:n}).then(function(t){if(t.success){var e=o.topCompanies.concat(t.data.company_list);o.companies=e.filter(function(t){return t.company_name.toLowerCase().indexOf(o.companyKeyword.toLowerCase())>-1})}else console.error(t.error.message)});case 4:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)})},filters:{userCount:function(t){var e=t;return t>100&&(e=100*Math.floor(.01*t)),e=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),t>100&&(e+="+"),e},highlight:function(t,e){if(e){var n=new RegExp(e,"ig");return t.replace(n,function(t,a,b){return"<strong>"+t+"</strong>"})}return t}}}),c=(n(469),n(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"srchInput",class:{active:t.cssFlag}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.companyKeyword,expression:"companyKeyword"}],staticClass:"inp",attrs:{type:"text",id:"searchInputText"+t.name,placeholder:t.$t("home.searchCompany")},domProps:{value:t.companyKeyword},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.hit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.reset(e)}],click:function(e){return t.listView("block",e)},blur:function(e){return t.listView("none",e)},keyup:t.updateAutoKeyword,input:function(e){e.target.composing||(t.companyKeyword=e.target.value)}}}),t._v(" "),n("div",{staticClass:"lstCompany",class:{nonescroll:0===this.searchCompanies.length}},[n("ul",{staticClass:"companies"},t._l(this.searchCompanies,function(e,o){return n("li",{class:[{top:void 0!==e.member_cnt},t.activeClass(o)],attrs:{id:e.company_id,name:e.company_name},on:{mousedown:t.hit,mousemove:function(e){return t.setActive(o)}}},[n("label",{domProps:{innerHTML:t._s(t.$options.filters.highlight(e.company_name,t.companyKeyword))}}),t._v(" "),void 0!==e.member_cnt?n("span",[t._v(t._s(t._f("userCount")(e.member_cnt))+" users")]):t._e()])}),0),t._v(" "),0===this.searchCompanies.length?n("div",{staticClass:"none"},[this.$store.state.authUser?n("nuxt-link",{attrs:{to:{path:t.$i18n.path("/articles/Topics")}}},[t._v("\n                Blind is not active at your company yet.\n                "),n("p",[n("strong",[t._v("Browse related content")]),t._v(" in the Topics channel.")])]):n("a",{on:{click:function(e){t.companyName="",t.showModal()}}},[t._v("\n                Blind is not active at your company yet.\n                "),n("p",[n("strong",[t._v("JOIN YOUR COWORKERS")]),t._v(" to unlock your company channel.")])])],1):t._e()])])},[],!1,null,"2408d79e",null);e.a=component.exports},474:function(t,e,n){"use strict";var o=n(154),r=n(471),l={head:function(){return{meta:[{hid:"viewport",name:"viewport",content:"user-scalable=no, initial-scale=1, width=device-width, minimal-ui, maximum-scale=1"}]}},mounted:function(){new Swiper(".whatisblind_slider",{slidesPerView:3,spaceBetween:"6%",initialSlide:1,loop:!0,grabCursor:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!0},pagination:{el:".pagination",clickable:!0},breakpoints:{1124:{slidesPerView:1,spaceBetween:0},750:{slidesPerView:1,spaceBetween:0}}}),new Swiper(".press_slider",{slidesPerView:2,slidesPerGroup:2,loop:!0,draggable:!0,autoplay:{delay:3500,disableOnInteraction:!0},pagination:{el:".pagination",clickable:!0},breakpoints:{750:{slidesPerView:1,slidesPerGroup:1}}})},methods:{goApp:function(t,e){var n="?pid=website&c=app_download&af_adset_id=mobile_web_to_app&af_ad=why_blind",o="https://go.onelink.me/app/footerAPPSTORE"+n+"&af_sub1=WB_appstore",r="https://go.onelink.me/app/footerPLAYSTORE"+n+"&af_sub1=WB__playstore";if(this.$store.state.userAgent.isMobile){var link="android"===e?r:o;this.$common.inducementGoApp(link)}else{window.open("about:blank").location.href="android"===e?r:o}this.$ga.event("Download","Why-blind-top")}},components:{Trending:o.a,SearchCompany:r.a}},c=n(2),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",[n("h1",{staticClass:"blind"},[t._v(t._s(t.$t("home.text4")))]),t._v(" "),n("div",{staticClass:"home_intro"},[n("div",{staticClass:"wrap"},[n("h2",{staticClass:"tit"},[t._v(t._s(t.$t("home.text1")))]),t._v(" "),n("span",{staticClass:"sub_tit"},[t._v(t._s(t.$t("home.text2")))]),t._v(" "),n("div",{staticClass:"srchCompany"},[n("h3",{staticClass:"tit"},[t._v(t._s(t.$t("home.text3")))]),t._v(" "),n("span",{staticClass:"sub_tit"},[t._v(t._s(t.$t("home.text4")))]),t._v(" "),n("search-company",{attrs:{name:"Why-blind-top"}})],1),t._v(" "),n("span",{staticClass:"is_web"},[t._v(t._s(t.$t("home.downloadApp")))]),t._v(" "),n("div",{staticClass:"appDown"},[n("a",{staticClass:"apple",on:{click:function(e){return t.goApp("","ios")}}},[t._v("App Store")]),t._v(" "),n("a",{staticClass:"google",on:{click:function(e){return t.goApp("","android")}}},[t._v("Google Play")])])])]),t._v(" "),n("trending",{attrs:{name:"whyblind"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"join srchCompany"},[n("div",{staticClass:"wrap"},[n("h3",{staticClass:"tit"},[t._v(t._s(t.$t("home.joinMsg")))]),t._v(" "),n("span",{staticClass:"sub_tit"},[t._v(t._s(t.$t("home.joindetailMsg")))]),t._v(" "),n("div",{staticClass:"transparent"},[n("search-company",{attrs:{name:"Why-blind-btm"}})],1)])])],1)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press"},[n("div",{staticClass:"press_slider"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide"},[n("div",{staticClass:"press_detail art_techcrunch"},[n("strong",{staticClass:"logo"},[n("span",{staticClass:"blind"},[t._v("Tech Crunch Logo")])]),t._v(" "),n("p",[t._v('\n                                "Raw and unfiltered, Blind is the antithesis to HR’s utopic vision of a manageable and orderly\n                                corporate culture. Instead, it operates outside the walled gardens of IT with no rules and no\n                                official corporate supervision."\n                                '),n("a",{attrs:{href:"https://techcrunch.com/2018/08/11/blind-loyalty/",target:"_blank"}},[n("span",[t._v("Read More")])])])])]),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("div",{staticClass:"press_detail art_business"},[n("strong",{staticClass:"logo"},[n("span",{staticClass:"blind"},[t._v("BUSINESS INSIDER Logo")])]),t._v(" "),n("p",[t._v("\n                                \"Blind is different in that it's for employees, more like Slack than YikYak.\n                                It's the mobile app equivalent of the office water cooler where employees share\n                                scuttlebutt on everything from job openings to layoffs to how they feel about their\n                                company's management and culture.\"\n                            ")])])]),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("div",{staticClass:"press_detail art_ladders"},[n("strong",{staticClass:"logo"},[n("span",{staticClass:"blind"},[t._v("LADDERS Logo")])]),t._v(" "),n("p",[t._v('\n                                "Perhaps the reason for Blind’s success with Uber employees is that it serves an unfilled need\n                                —a way to engage with your co-workers and tech colleagues without fear of reprisal."\n                            ')])])]),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("div",{staticClass:"press_detail art_newyork"},[n("strong",{staticClass:"logo"},[n("span",{staticClass:"blind"},[t._v("THE NEWYORK TIMES Logo")])]),t._v(" "),n("p",[t._v('\n                                "Blind allows all employees…to sign up through their work email but then\n                                chat anonymously about office and industry issues…But in the past year,\n                                Blind has also become a hotbed for frank talk about sexual harassment."\n                            ')])])])]),t._v(" "),n("div",{staticClass:"pagination"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whatisblind"},[n("h2",{staticClass:"tit"},[t._v("What is Blind?")]),t._v(" "),n("h3",{staticClass:"subtit"},[t._v("\n                Blind is an anonymous social networking"),n("br"),t._v("\n                platform for professionals.\n            ")]),t._v(" "),n("div",{staticClass:"slider_wrap"},[n("span",{staticClass:"angle_top"}),t._v(" "),n("span",{staticClass:"angle_left"}),t._v(" "),n("span",{staticClass:"angle_right"}),t._v(" "),n("span",{staticClass:"angle_btm"}),t._v(" "),n("div",{staticClass:"whatisblind_slider"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide"},[n("strong",[t._v("Talk Work,")]),t._v(" "),n("img",{staticClass:"img_normal",attrs:{src:"https://d2u3dcdbebyaiu.cloudfront.net/img/www/img-whatisb01.jpg",alt:"Talk Work"}}),t._v(" "),n("img",{staticClass:"img_retina",attrs:{src:"https://d2u3dcdbebyaiu.cloudfront.net/img/www/img-whatisb01x.jpg",alt:"Talk Work"}})]),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("strong",[t._v("Life,")]),t._v(" "),n("img",{staticClass:"img_normal",attrs:{src:"https://d2u3dcdbebyaiu.cloudfront.net/img/www/img-whatisb02.jpg",alt:"Life"}}),t._v(" "),n("img",{staticClass:"img_retina",attrs:{src:"https://d2u3dcdbebyaiu.cloudfront.net/img/www/img-whatisb02x.jpg",alt:"Life"}})]),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("strong",[t._v("and Everything Else.")]),t._v(" "),n("img",{staticClass:"img_normal",attrs:{src:"https://d2u3dcdbebyaiu.cloudfront.net/img/www/img-whatisb03.jpg",alt:"and Everything Else."}}),t._v(" "),n("img",{staticClass:"img_retina",attrs:{src:"https://d2u3dcdbebyaiu.cloudfront.net/img/www/img-whatisb03x.jpg",alt:"and Everything Else."}})])]),t._v(" "),n("div",{staticClass:"pagination"})])])])}],!1,null,null,null);e.a=component.exports},508:function(t,e,n){"use strict";n.r(e);n(33),n(28),n(18);var o,r=n(40),l=(n(24),n(4)),c=n(474),d={asyncData:(o=Object(l.a)(regeneratorRuntime.mark(function t(e){var n,o,l,c,d,m,h,v,y,_,f,w,C,k,x,E,S,$,A,O;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.app,o=e.store,l=e.redirect,c=e.req,d=!1,c&&c.headers&&c.headers["user-agent"]&&c.headers["user-agent"].toLowerCase().indexOf("bot")>-1&&(d=!0),d){t.next=71;break}if(m="",!c||!c.session){t.next=29;break}if(!(h=c.session.custom_signup)||!c.session.auth){t.next=29;break}for(c.session.custom_signup=null,v=[].concat(Object(r.a)(o.state.channels),Object(r.a)(o.state.topicChannels)),y=!0,_=!1,f=void 0,t.prev=13,w=v[Symbol.iterator]();!(y=(C=w.next()).done);y=!0)k=C.value,h.landing_id&&parseInt(h.landing_id)===k.board_id?m="/articles/"+encodeURIComponent(n.common.titleUrl(k.board_name)):h.landing_id||"company"!==h.landing_channel||"company"!==k.board_type||(m="/articles/"+encodeURIComponent(n.common.titleUrl(k.board_name)));t.next=21;break;case 17:t.prev=17,t.t0=t.catch(13),_=!0,f=t.t0;case 21:t.prev=21,t.prev=22,y||null==w.return||w.return();case 24:if(t.prev=24,!_){t.next=27;break}throw f;case 27:return t.finish(24);case 28:return t.finish(21);case 29:if(m){t.next=70;break}x=!0,E=!1,S=void 0,t.prev=33,$=o.state.channels[Symbol.iterator]();case 35:if(x=(A=$.next()).done){t.next=56;break}if("jobgroup"!==(O=A.value).board_type){t.next=41;break}return t.abrupt("continue",53);case 41:if("timeline"!==O.board_type){t.next=46;break}return m="/articles/Timeline",t.abrupt("break",56);case 46:if("company"!==O.board_type){t.next=51;break}return m="/articles/"+encodeURIComponent(n.common.titleUrl(O.board_name)),t.abrupt("break",56);case 51:return m="/articles/Topics",t.abrupt("break",56);case 53:x=!0,t.next=35;break;case 56:t.next=62;break;case 58:t.prev=58,t.t1=t.catch(33),E=!0,S=t.t1;case 62:t.prev=62,t.prev=63,x||null==$.return||$.return();case 65:if(t.prev=65,!E){t.next=68;break}throw S;case 68:return t.finish(65);case 69:return t.finish(62);case 70:l(n.i18n.path(m));case 71:case"end":return t.stop()}},t,null,[[13,17,21,29],[22,,24,28],[33,58,62,70],[63,,65,69]])})),function(t){return o.apply(this,arguments)}),components:{WhyBlind:c.a}},m=n(2),component=Object(m.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("why-blind")},[],!1,null,null,null);e.default=component.exports}}]);