(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],A=0,g=[];A<o.length;A++)r=o[A],i[r]&&g.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(g.length)g.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={app:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"panel"},[n("header",[n("button",{on:{click:t.onChat}},[t._v("开始聊天")])]),n("div",{staticClass:"main"},[n("chat-container",{ref:"chatRoom"})],1)]),n("div",{staticClass:"panel"},[n("header",[n("button",{on:{click:t.onOtherChat}},[t._v("模拟B")])]),n("div",{staticClass:"main"},[n("other-container",{ref:"otherRoom"})],1)])])])},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"chat-wrapper"},[n("chat-header",{on:{onClose:function(e){t.isShow=!1}}}),n("chat-body"),n("send-panel")],1)},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-header"},[t._m(0),s("div",{staticClass:"close"},[s("img",{attrs:{src:n("d991")},on:{click:t.onCloseBtnClick}})])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("img",{staticClass:"user-logo",attrs:{src:n("836b")}}),s("span",{staticClass:"user-name"},[t._v("花花")])])}],u={methods:{onCloseBtnClick:function(){this.$emit("onClose")}}},A=u,g=n("2877"),d=Object(g["a"])(A,c,l,!1,null,null,null),f=d.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-main"},[n("message-container")],1)},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg-list"},t._l(t.msgList,function(e){return n("div",{key:e.id,class:["msg-item",e.user_type]},[n("div",{staticClass:"user-img"},[n("img",{attrs:{src:"/static/"+e.user_type+".png",alt:"用户头像"}})]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"content"},[n("p",{staticClass:"send-time",domProps:{textContent:t._s(e.create_at)}}),n("div",{staticClass:"msg-content"},[n("p",{domProps:{innerHTML:t._s(t.isIndexofURL(e.msg))}})])])])])}),0)},m=[],B=n("cebc"),S=(n("a481"),n("2f62")),v={updated:function(){var t=this;this.$nextTick(function(){t.scrollToBottom()})},methods:{scrollToBottom:function(){var t=document.querySelector(".msg-list");t.scrollTop=t.scrollHeight},isIndexofURL:function(t){var e=/((http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/gi;return e.test(t)&&(t=t.replace(e,"<a target='_blank' href='$1'>$1</a>")),t}},computed:Object(B["a"])({},Object(S["b"])({msgList:function(t){return t.messageList}}))},E=v,w=Object(g["a"])(E,h,m,!1,null,null,null),I=w.exports,Q={components:{MessageContainer:I}},b=Q,x=Object(g["a"])(b,C,p,!1,null,null,null),y=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.inputVal,expression:"inputVal",modifiers:{lazy:!0}}],staticClass:"input-textarea",domProps:{value:t.inputVal},on:{change:function(e){t.inputVal=e.target.value}}}),n("button",{staticClass:"send",on:{click:t.onSend}},[t._v("发送")])])},k=[],M=(n("6b54"),{data:function(){return{inputVal:""}},methods:{onSend:function(){if(this.inputVal){var t={_:Math.random().toString(16).substring(3,8),user_type:"self",user:"张三",create_at:new Date,msg:this.inputVal};this.$store.commit("UPDATE_MSG_LIST",t),this.inputVal=""}}}}),j=M,R=Object(g["a"])(j,O,k,!1,null,null,null),J=R.exports,L={components:{ChatHeader:f,ChatBody:y,SendPanel:J},data:function(){return{isShow:!1}},methods:{show:function(){this.isShow=!0}}},D=L,F=Object(g["a"])(D,r,o,!1,null,null,null),V=F.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isOther?n("div",{staticClass:"other-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.inputVal,expression:"inputVal",modifiers:{lazy:!0}}],staticClass:"other-textarea",domProps:{value:t.inputVal},on:{change:function(e){t.inputVal=e.target.value}}}),n("div",{staticClass:"footer"},[n("button",{staticClass:"cancel",on:{click:function(e){t.isOther=!1,t.inputVal=""}}},[t._v("取消")]),n("button",{on:{click:t.onSend}},[t._v("发送")])])]):t._e()},G=[],X={data:function(){return{isOther:!1,inputVal:""}},methods:{show:function(){this.isOther=!0},onSend:function(){if(this.inputVal){var t={_:Math.random().toString(16).substring(3,8),user_type:"other",user:"小强",create_at:new Date,msg:this.inputVal};this.$store.commit("UPDATE_MSG_LIST",t),this.inputVal=""}}}},z=X,K=(n("8cd6"),Object(g["a"])(z,P,G,!1,null,"68935df7",null)),Z=K.exports,T={name:"app",components:{ChatContainer:V,OtherContainer:Z},methods:{onChat:function(){this.$refs.chatRoom.show()},onOtherChat:function(){this.$refs.otherRoom.show()}}},U=T,N=Object(g["a"])(U,i,a,!1,null,null,null),Y=N.exports,H=n("b054"),W=n.n(H),_={messageList:[]},q=(n("3b2b"),function(t,e){var n={id:e._,user_type:e.user_type,user:e.user,create_at:$("yyyy-MM-dd hh:mm:ss",e.create_at),msg:e.msg};return t.concat([n])}),$=function(t,e){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,e.getFullYear()+"")),n)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[s]:("00"+n[s]).substr((""+n[s]).length)));return t},tt={UPDATE_MSG_LIST:function(t,e){t.messageList=q(t.messageList,e)}},et=n("63e0"),nt=n.n(et);s["a"].use(S["a"]);var st=new S["a"].Store(Object.assign({plugins:[W()()]},{state:_,mutations:tt,actions:nt.a}));n("6861");s["a"].config.productionTip=!1,new s["a"]({store:st,render:function(t){return t(Y)}}).$mount("#app")},"63e0":function(t,e){},6861:function(t,e,n){},"836b":function(t,e,n){t.exports=n.p+"img/other.3dd0762a.png"},"8cd6":function(t,e,n){"use strict";var s=n("ecf4"),i=n.n(s);i.a},d991:function(t,e){t.exports="data:image/png;base64,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"},ecf4:function(t,e,n){}});
//# sourceMappingURL=app.bcb183f8.js.map