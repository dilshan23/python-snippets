(window.webpackJsonp=window.webpackJsonp||[]).push([[39,16],{468:function(t,e,n){var content=n(470);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("29e62011",content,!1,{sourceMap:!1})},469:function(t,e,n){"use strict";var o=n(468);n.n(o).a},470:function(t,e,n){(t.exports=n(58)(!1)).push([t.i,".inp[data-v-2408d79e]{height:58px}.lstCompany[data-v-2408d79e]{display:none}.lstCompany .active[data-v-2408d79e]{background:#ef1e27;color:#fff}.lstCompany .active[data-v-2408d79e]:after{border-bottom-color:#ef1e27}@media screen and (max-width:750px){.inp[data-v-2408d79e]{height:40px}}",""])},471:function(t,e,n){"use strict";n(153),n(106),n(107),n(31),n(17),n(24);var o,r=n(4),c=(n(16),{props:["name"],data:function(){return{companyKeyword:"",current:-1,scrollY:0,companies:[],topCompanies:[],cssFlag:!1,companyId:0,companyName:""}},mounted:function(){var t=this;this.$store.state.topCompanies?this.topCompanies=this.$store.state.topCompanies:this.$axios.post("/api/company/topList").then(function(data){data.success&&(t.topCompanies=data.data.company_list,t.$store.commit("topCompanies",t.topCompanies))})},computed:{searchCompanies:function(t){return this.companyKeyword?this.companies:this.topCompanies}},watch:{companyKeyword:function(t){this.getSearchCompany()}},methods:{showModal:function(){var t=this.companyName?"Type-company-select-company":"Type-company-no-result",e="";this.$store.state.authUser?(this.$modal.show("join",{companyId:this.companyId,companyName:this.companyName,fromName:this.name}),e=this.companyName?"Ly-type-company-select-company":"Indiv.-list",this.$ga.event(e,t,this.name)):this.$modal.show("signup",{from:"companySearch",companyName:this.companyName,ga:{action:t,label:this.name},gaEventLabel:t+"-"+this.name.toLowerCase()})},setActive:function(t){this.current=t},activeClass:function(t){return{active:this.current===t}},down:function(t){this.current===t.target.parentElement.querySelectorAll(".lstCompany li").length-1||(this.current<t.target.parentElement.querySelectorAll(".lstCompany li").length-1?this.current++:this.current=0),this.setFocus(t)},up:function(t){this.current>0?this.current--:-1===this.current?this.current=t.target.parentElement.querySelectorAll(".lstCompany li").length-1:this.current=0,this.setFocus(t)},hit:function(t){if(this.current>-1){var e=t.target.parentElement.parentElement.querySelectorAll("li")[this.current];this.companyId=e.getAttribute("id"),this.companyName=e.getAttribute("name"),this.cssFlag=!1,t.target.closest(".lstCompany").style.display="none",this.showModal()}},reset:function(){this.companyKeyword=""},listView:function(t,e){var n=e.target.parentElement.querySelector(".lstCompany"),o=e.target.parentElement.querySelector(".lstCompany:hover");"block"===t?(this.cssFlag=!0,n.style.display=t,this.$ga.event("Type-company",this.name)):"none"===t&&null===o?(this.cssFlag=!1,n.style.display=t):navigator.userAgent.indexOf("Trident")>-1&&n.parentElement.querySelector(".inp").focus()},setFocus:function(t){var e=t.target.parentElement.querySelectorAll(".lstCompany li")[this.current],n=e.offsetTop,o=e.offsetHeight,r=t.target.parentElement.querySelector(".lstCompany");n+30>r.offsetHeight&&this.scrollY<n?r.scrollTop+=o:this.scrollY>n&&(r.scrollTop-=o),this.scrollY=n},updateAutoKeyword:function(t){this.companyKeyword=t.target.value},getSearchCompany:(o=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.companyKeyword.length>1)){t.next=4;break}return n={company_name:this.companyKeyword},t.next=4,this.$axios.post("/api/company/company_list",{params:n}).then(function(t){if(t.success){var e=o.topCompanies.concat(t.data.company_list);o.companies=e.filter(function(t){return t.company_name.toLowerCase().indexOf(o.companyKeyword.toLowerCase())>-1})}else console.error(t.error.message)});case 4:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)})},filters:{userCount:function(t){var e=t;return t>100&&(e=100*Math.floor(.01*t)),e=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),t>100&&(e+="+"),e},highlight:function(t,e){if(e){var n=new RegExp(e,"ig");return t.replace(n,function(t,a,b){return"<strong>"+t+"</strong>"})}return t}}}),l=(n(469),n(2)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"srchInput",class:{active:t.cssFlag}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.companyKeyword,expression:"companyKeyword"}],staticClass:"inp",attrs:{type:"text",id:"searchInputText"+t.name,placeholder:t.$t("home.searchCompany")},domProps:{value:t.companyKeyword},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.hit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.reset(e)}],click:function(e){return t.listView("block",e)},blur:function(e){return t.listView("none",e)},keyup:t.updateAutoKeyword,input:function(e){e.target.composing||(t.companyKeyword=e.target.value)}}}),t._v(" "),n("div",{staticClass:"lstCompany",class:{nonescroll:0===this.searchCompanies.length}},[n("ul",{staticClass:"companies"},t._l(this.searchCompanies,function(e,o){return n("li",{class:[{top:void 0!==e.member_cnt},t.activeClass(o)],attrs:{id:e.company_id,name:e.company_name},on:{mousedown:t.hit,mousemove:function(e){return t.setActive(o)}}},[n("label",{domProps:{innerHTML:t._s(t.$options.filters.highlight(e.company_name,t.companyKeyword))}}),t._v(" "),void 0!==e.member_cnt?n("span",[t._v(t._s(t._f("userCount")(e.member_cnt))+" users")]):t._e()])}),0),t._v(" "),0===this.searchCompanies.length?n("div",{staticClass:"none"},[this.$store.state.authUser?n("nuxt-link",{attrs:{to:{path:t.$i18n.path("/articles/Topics")}}},[t._v("\n                Blind is not active at your company yet.\n                "),n("p",[n("strong",[t._v("Browse related content")]),t._v(" in the Topics channel.")])]):n("a",{on:{click:function(e){t.companyName="",t.showModal()}}},[t._v("\n                Blind is not active at your company yet.\n                "),n("p",[n("strong",[t._v("JOIN YOUR COWORKERS")]),t._v(" to unlock your company channel.")])])],1):t._e()])])},[],!1,null,"2408d79e",null);e.a=component.exports},488:function(t,e,n){"use strict";n.r(e);var o={methods:{goApp:function(t,e){var n="?pid=website&c=app_download&af_adset_id=mobile_web_to_app&af_ad=find_your_colleagues",o="https://go.onelink.me/app/findyourcolleaguesAPPSTORE"+n+"&af_sub1=FYC_appstore",r="https://go.onelink.me/app/findyourcolleaguePLAYSTORE"+n+"&af_sub1=FYC_playstore";if(this.$store.state.userAgent.isMobile){var link="android"===e?r:o;this.$common.inducementGoApp(link)}else{window.open("about:blank").location.href="android"===e?r:o}this.$ga.event("Download","Exclusive")}},components:{SearchCompany:n(471).a}},r=n(2),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrap_exclusive"},[n("div",{staticClass:"workplace"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"transparent"},[n("div",{staticClass:"srchCompany"},[n("h3",{staticClass:"tit"},[t._v("Where do you work?")]),t._v(" "),n("span",{staticClass:"sub_tit"},[t._v("See if Blind is active at your company.")]),t._v(" "),n("search-company",{attrs:{name:"Exclusive"}})],1)]),t._v(" "),n("span",{staticClass:"is_web"},[t._v(t._s(t.$t("home.downloadApp")))]),t._v(" "),n("div",{staticClass:"appDown"},[n("a",{staticClass:"apple",on:{click:function(e){return t.goApp("","ios")}}},[t._v("App Store")]),t._v(" "),n("a",{staticClass:"google",on:{click:function(e){return t.goApp("","android")}}},[t._v("Google Play")])])])]),t._v(" "),n("div",{staticClass:"advice"},[n("div",{staticClass:"wrap"},[t._m(0),t._v(" "),n("ul",{staticClass:"advice_list"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"tab3"},[t._m(3),t._v(" "),n("div",{staticClass:"detail"},[n("p",[t._v("\n                            Patented infrastructure ensures "),n("br"),t._v(" "),n("nuxt-link",{staticClass:"btn_more",attrs:{to:{path:"/faqs",hash:"privacy"},onclick:"ga('send', 'event', 'Menu', 'Privacy', 'Exclusive-user-privacy');"}},[n("span",{staticClass:"point"},[t._v("user privacy")])]),t._v(", even from us.\n                        ")],1)])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"tit"},[this._v("Get instant advice from "),e("br"),this._v("professionals like you.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tab1"},[n("div",{staticClass:"item"},[n("h3",[t._v("70,000+")]),t._v(" "),n("h4",[t._v("\n                            Companies"),n("br"),t._v("\n                            Active on Blind\n                        ")])]),t._v(" "),n("div",{staticClass:"detail"},[n("p",[t._v("\n                            All-hands? Layoffs? Promotions?"),n("br"),t._v("\n                            Connect with your colleagues."),n("br"),t._v("\n                            No hierarchy.\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tab2"},[n("div",{staticClass:"item"},[n("h3",[t._v("35 min")]),t._v(" "),n("h4",[t._v("\n                            Average"),n("br"),t._v("\n                            Spent Per Day\n                        ")])]),t._v(" "),n("div",{staticClass:"detail"},[n("p",[t._v("\n                            Engineer? Banker? Consultant?"),n("br"),t._v("\n                            Mingle anonymously."),n("br"),t._v("\n                            Elevate your career.\n                        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("h3",[this._v("100%")]),this._v(" "),e("h4",[this._v("\n                            Anonymous\n                        ")])])}],!1,null,null,null);e.default=component.exports},523:function(t,e,n){"use strict";n.r(e);var o=n(488).default,r=n(2),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);