(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)a=r[d],i[a]&&f.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},4678:function(t,e,o){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=s(t);return o(e)}function s(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="4678"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav",[o("div",{directives:[{name:"show",rawName:"v-show",value:1==this.$route.meta.page,expression:"this.$route.meta.page == 1 "}],staticClass:"text-button",on:{click:function(e){return t.goAddBook()}}},[t._v("New")]),o("div",{directives:[{name:"show",rawName:"v-show",value:2==this.$route.meta.page,expression:"this.$route.meta.page == 2 "}]},[o("div",{staticClass:"text-button",on:{click:function(e){return t.goBack()}}},[t._v("Back")]),o("div",{attrs:{showCurrentBookTitle:t.showCurrentBookTitle}},[t._v(t._s(this.showCurrentBookTitle))]),o("div",{staticClass:"text-button",on:{click:function(e){return t.doEdit()}}},[t._v("Edit")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:3==this.$route.meta.page,expression:"this.$route.meta.page == 3 "}]},[o("div",{staticClass:"text-button",on:{click:function(e){return t.goBack()}}},[t._v("Back")]),o("div",[t._v("Add new book")]),o("div",{staticClass:"text-button",on:{click:function(e){return t.callCreateApi()}}},[t._v("Save")])])]),o("router-view")],1)},s=[],a=o("bc3a"),r=o.n(a),c=o("2f62"),u=o("0e44");n["a"].use(c["a"]);var l=new c["a"].Store({plugins:[Object(u["a"])()],state:{page:"",bookList:[],groupList:[],currentBook:"",bookId:"",editState:!1,createBook:{title:"",author:"",publicationDate:"",description:""}},mutations:{updateTitle:function(t,e){t.createBook.title=e},updateAuthor:function(t,e){t.createBook.author=e},updatePublicationDate:function(t,e){t.createBook.publicationDate=e},updateDescription:function(t,e){t.createBook.description=e},cleanBook:function(t){t.createBook.title="",t.createBook.author="",t.createBook.publicationDate="",t.createBook.description=""},saveBookList:function(t,e){t.bookList=e},saveGroupList:function(t,e){t.groupList=e},saveCurrentBook:function(t,e){t.currentBook=e},saveBookId:function(t,e){t.bookId=e},savePage:function(t,e){t.page=e},changeEditState:function(t){t.editState=!t.editState}},actions:{actionChangeEditState:function(t){t.commit("changeEditState")},actionCleanBook:function(t){t.commit("cleanBook")}}}),d={components:{},data:function(){return{store:l}},created:function(){0==this.$route.meta.page&&this.$router.push({path:"/bookList"})},mounted:function(){},methods:{goBack:function(){this.$router.go(-1)},doEdit:function(){this.$store.dispatch("actionChangeEditState")},goAddBook:function(){this.$router.push({path:"/addBook"})},callCreateApi:function(){var t=this;if(this.getBookTitle.length<1||this.getBookAuthor.length<1||this.getBookPublicationDate.length<1||this.getBookDescription.length<1)alert("資料還沒填完喔～");else{var e={title:this.getBookTitle,description:this.getBookDescription,author:this.getBookAuthor,publicationDate:this.getBookPublicationDate};r.a.post("https://demo.api-platform.com/books",e).then(function(e){console.log("create good",e),t.$store.dispatch("actionCleanBook"),alert("新增成功～～"),t.$router.push({path:"/bookList"})},function(t){alert("新增失敗～～"),console.log("create bad",t)})}}},computed:{getCurrentBook:function(){return this.$store.state.currentBook},showCurrentBookTitle:function(){var t=null;return this.getCurrentBook.length&&(t=this.getCurrentBook[0].title),t},getBookTitle:function(){return this.$store.state.createBook.title},getBookAuthor:function(){return this.$store.state.createBook.author},getBookPublicationDate:function(){return this.$store.state.createBook.publicationDate},getBookDescription:function(){return this.$store.state.createBook.description}}},f=d,p=(o("abb8"),o("2877")),h=Object(p["a"])(f,i,s,!1,null,null,null),b=h.exports,k=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",[o("div",{staticClass:"bookArea",attrs:{id:"bookAreaHeight",getBookList:t.getBookList,getGroupList:t.getGroupList}},t._l(t.getGroupList[this.count],function(e){return o("div",{key:e.key,staticClass:"bookBox",on:{click:function(o){return t.goBookInfo(e.title,e["@id"])}}},[o("div",{staticClass:"innerBookBox"},[o("h3",{staticClass:"mb-20"},[t._v(t._s(e.title))]),o("p",{staticClass:"mb-20"},[t._v(t._s(e.description))]),o("div",{staticClass:"flex-row"},[o("div",[t._v("by "+t._s(e.author))]),o("div",[t._v(t._s(e.publicationDate))])])])])}),0),o("button",{on:{click:function(e){return t.increaseHeight()}}},[t._v("Load more")])])])},g=[],v=(o("ac6a"),o("b383"),{components:{},data:function(){return{store:l,count:0,height:0,bookList:[]}},created:function(){this.callGetBookListApi()},mounted:function(){},methods:{test:function(){r.a.get("https://demo.api-platform.com/books").then(function(t){console.log("esponse ",t)},function(t){console.log("error msg",t)})},callGetBookListApi:function(){for(var t=this,e=[],o=[],n=1;n<=10;n++){var i=JSON.stringify(n),s={page:i};r.a.get("https://demo.api-platform.com/books?order[id]=DESC",{params:s}).then(function(n){e=n.data["hydra:member"],e.length>1&&(e.forEach(function(t,e,n){o.push(t)}),t.$store.commit("saveBookList",o))},function(t){console.log("error msg",t)})}this.getBookList.length>1&&this.makeGroupList(this.getBookList)},makeGroupList:function(t){for(var e=this,o=t.map(function(t){return e.$set(t,"publicationDate",e.$moment(t.publicationDate).format("YYYY-MM-DD")),t}),n=parseInt(o.length/6),i=[],s=function(t){var e=[];o.forEach(function(o,n,i){n<=6*t-1&&e.push(o)}),i.push(e)},a=1;a<=n;a++)s(a);this.$store.commit("saveGroupList",i)},increaseHeight:function(){this.count<this.getGroupList.length-1?this.count=this.count+1:alert("沒東西了")},goBookInfo:function(t,e){this.$router.push({path:"/bookInfo/:id",query:{id:e}}),this.$store.commit("saveBookId",e)}},computed:{getRunState:function(){return this.$store.state.runState},getBookList:function(){return this.$store.state.bookList},getGroupList:function(){return this.$store.state.groupList}}}),j=v,B=(o("b940"),Object(p["a"])(j,m,g,!1,null,null,null)),$=B.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"layout",attrs:{getEditState:t.getEditState,getBookInfo:t.getBookInfo,getBookId:t.getBookId}},[0==this.getEditState?o("div",[o("div",{staticClass:"content-1 mb-20"},[o("h3",[t._v(t._s(this.bookInfo.author))]),o("h3",[t._v(t._s(this.bookInfo.publicationDate))])]),o("p",[t._v(t._s(this.bookInfo.description))])]):t._e(),this.getEditState?o("div",[o("div",{staticClass:"content-1 mb-20"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.author,expression:"bookInfo.author"}],domProps:{value:t.bookInfo.author},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"author",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.publicationDate,expression:"bookInfo.publicationDate"}],domProps:{value:t.bookInfo.publicationDate},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"publicationDate",e.target.value)}}})]),o("div",{staticClass:"mb-20"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.description,expression:"bookInfo.description"}],domProps:{value:t.bookInfo.description},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"description",e.target.value)}}})]),o("button",{on:{click:function(e){return t.callUpdatedApi()}}},[t._v("updated")])]):t._e()])])},I=[],y=(o("3022"),{components:{},data:function(){return{store:l,currentBook:[],bookInfo:{author:"",publicationDate:"",description:""}}},created:function(){},mounted:function(){this.showBookInfo()},methods:{showBookInfo:function(){var t=this;if(this.getBookInfo.length&&this.getBookId.length){var e=this.getBookInfo.length-1;this.currentBook=this.getBookInfo[e].filter(function(e){return e["@id"]==t.getBookId}),this.$store.commit("saveCurrentBook",this.currentBook),this.bookInfo.author=this.currentBook[0].author,this.bookInfo.publicationDate=this.currentBook[0].publicationDate,this.bookInfo.description=this.currentBook[0].description}},callUpdatedApi:function(){var t=this,e=!1,o=this.bookInfo.author,n=this.bookInfo.publicationDate,i=this.bookInfo.description,s=[],a=this.currentBook.map(function(a){return a.author==o&&a.publicationDate==n&&a.description==i?alert("你尚未更新喔～"):(e=!0,a.reviews.map(function(t){s.push(t["@id"])}),t.$set(a,"reviews",s),a.author!=o&&t.$set(a,"author",o),a.publicationDate!=n&&t.$set(a,"publicationDate",n),a.description!=i&&t.$set(a,"description",i)),a});if(e){var c={"@id":a[0]["@id"],"@type":a[0]["@type"],isbn:a[0].isbn,title:a[0].title,description:a[0].description,author:a[0].author,publicationDate:a[0].publicationDate,reviews:a[0].reviews,id:a[0]["@id"],"@context":"/contexts/Book"},u=a[0]["@id"],l="https://demo.api-platform.com"+u;r.a.put(l,c).then(function(e){console.log("updated good",e),t.$store.dispatch("actionChangeEditState"),alert("修改成功～～"),t.$router.push({path:"/bookList"})},function(t){alert("修改失敗～～"),console.log("updated bad",t)})}}},computed:{getBookInfo:function(){return this.$store.state.groupList},getBookId:function(){return this.$store.state.bookId},getEditState:function(){return this.$store.state.editState}}}),D=y,_=(o("bbc3"),Object(p["a"])(D,w,I,!1,null,null,null)),C=_.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"layout"},[o("div",{staticClass:"flex-col"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"mb-20",attrs:{placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"mb-20",attrs:{placeholder:"author"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.publicationDate,expression:"publicationDate"}],staticClass:"mb-20",attrs:{placeholder:"publicationDate"},domProps:{value:t.publicationDate},on:{input:function(e){e.target.composing||(t.publicationDate=e.target.value)}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"mb-20",attrs:{placeholder:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])])])},L=[],S={components:{},data:function(){return{store:l,currentBook:[]}},created:function(){},mounted:function(){},methods:{},computed:{checkIsNull:function(){return this.book.title.length>1&&this.book.author.length>1&&this.book.publicationDate.length>1&&this.book.description.length>1?console.log(this.book):alert("你還有資料沒有填完喔～"),this.book},title:{get:function(){return this.$store.state.createBook.title},set:function(t){this.$store.commit("updateTitle",t)}},author:{get:function(){return this.$store.state.createBook.author},set:function(t){this.$store.commit("updateAuthor",t)}},publicationDate:{get:function(){return this.$store.state.createBook.publicationDate},set:function(t){this.$store.commit("updatePublicationDate",t)}},description:{get:function(){return this.$store.state.createBook.description},set:function(t){this.$store.commit("updateDescription",t)}}}},z=S,E=(o("a88d"),Object(p["a"])(z,x,L,!1,null,null,null)),O=E.exports;n["a"].use(k["a"]);var P=new k["a"]({base:"",routes:[{path:"/",meta:{page:0}},{path:"/bookList",name:"bookList",component:$,meta:{page:1}},{path:"/bookInfo/:id",name:"bookInfo",component:C,meta:{page:2}},{path:"/addBook",name:"addBook",component:O,meta:{page:3}}]}),A=o("c1df"),N=o.n(A),G=o("b047"),T=o.n(G);n["a"].config.productionTip=!1,n["a"].use(T.a,N.a),new n["a"]({router:P,store:l,render:function(t){return t(b)}}).$mount("#app")},"6d07":function(t,e,o){},7718:function(t,e,o){},a88d:function(t,e,o){"use strict";var n=o("e636"),i=o.n(n);i.a},abb8:function(t,e,o){"use strict";var n=o("7718"),i=o.n(n);i.a},b940:function(t,e,o){"use strict";var n=o("6d07"),i=o.n(n);i.a},bbc3:function(t,e,o){"use strict";var n=o("d9f6"),i=o.n(n);i.a},d9f6:function(t,e,o){},e636:function(t,e,o){}});
//# sourceMappingURL=app.0bea8eef.js.map