(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e31e50fa"],{"0a3f":function(t,e,i){t.exports=i.p+"static/img/l18.ec70135a.png"},"26f9":function(t,e,i){t.exports=i.p+"static/img/l3.925005f9.png"},3542:function(t,e,i){t.exports=i.p+"static/img/l12.d102414e.png"},"3e82":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo-screen"},[i("div",{staticClass:"left"},[i("div",{staticClass:"list"},[i("div",{staticClass:"times"},[i("BaseDate",{staticClass:"base-date"})],1),i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"bottom"},t._l(t.countList,(function(e,s){return i("div",{key:s,staticClass:"num"},[i("div",[t._v(t._s(e.name))]),i("span",{class:{bg:e.hasBg}},["currentPower"===e.key?i("ani-number",{attrs:{randomInterval:3e3,randomRange:[9600,10115]},model:{value:t.countData.currentPower,callback:function(e){t.$set(t.countData,"currentPower",e)},expression:"countData.currentPower"}}):i("ani-number",{model:{value:t.countData[e.key],callback:function(i){t.$set(t.countData,e.key,i)},expression:"countData[item.key]"}}),"currentPowerRate"==e.key?i("span",[t._v("%")]):t._e()],1)])})),0)]),t._m(1)])]),i("div",{staticClass:"right"},t._l(t.logoLists,(function(e,s){return i("div",{key:s,staticClass:"right-item"},[i("div",{staticClass:"title",class:["bg"+s]}),i("div",{staticClass:"logoList"},t._l(e,(function(e,s){return i("div",{key:s,staticClass:"logo",class:{logoStyle:!e.noClass,active:e.isActive&&!e.noClass}},[e.url?i("img",{attrs:{src:e.url}}):i("div",{staticClass:"logo-text-container"},[i("span",{staticClass:"logo-text"},[t._v(t._s(e.text))]),e.text2?i("span",{staticClass:"logo-text"},[t._v(t._s(e.text2))]):t._e(),e.text1?i("span",{staticClass:"logo-text"},[t._v(t._s(e.text1))]):t._e()]),e.url?i("div"):t._e()])})),0)])})),0)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top"},[i("div",{staticClass:"title"},[t._v("全时空多维度 "),i("br"),t._v("采录感知网")]),i("div",{staticClass:"sub-title"},[t._v("拱墅区算力中心")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottombg"},[i("span"),i("span"),i("span")])}],c=(i("159b"),i("d81d"),i("cb29"),i("9573")),r=i("ac6a"),a={name:"LogoScreen",data:function(){return{logoList1:c["a"],logoList2:c["b"],logoList3:c["c"],logoList4:c["d"],countList:[{name:"调用算力应用数",count:101,key:"currentApp"},{name:"应用总数",count:115,key:"allApp"},{name:"当前算力值",count:10115,key:"currentPower"},{name:"当前算力占用率",count:30,key:"currentPowerRate"},{name:"24H调用次数",count:54,hasBg:!0,key:"useCount"}],timmer:"",countData:{currentApp:101,allApp:115,currentPower:9600,currentPowerRate:33,useCount:54}}},computed:{logoLists:function(){return[this.logoList1,this.logoList2,this.logoList3,this.logoList4]}},watch:{"countData.currentPower":function(t){this.countData.currentPowerRate=Math.round(t/(9600/.33)*100)}},components:{BaseDate:r["a"]},created:function(){this.initList()},beforeDestroy:function(){clearInterval(this.timmer)},methods:{initList:function(){var t=this;this.timmer=setInterval((function(){t.initData(t.logoList1),t.initData(t.logoList2),t.initData(t.logoList3),t.initData(t.logoList4)}),3e3)},initData:function(t){t.forEach((function(t){t.isActive=!1}));var e=this.random(10,t.length-1);e.forEach((function(e){t[e].isActive=!0}))},random:function(t,e){var i,s=e-t;return i=Math.floor(Math.random()*s+t),Array(i).fill(1).map((function(i){return Math.floor(Math.random()*(e-t))+t}))}}},o=a,u=(i("b1c5"),i("2877")),l=Object(u["a"])(o,s,n,!1,null,"8039f366",null);e["default"]=l.exports},"40ee":function(t,e,i){},5170:function(t,e,i){t.exports=i.p+"static/img/l1.c30e618b.png"},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t=1e3,e=6e4,i=36e5,s="millisecond",n="second",c="minute",r="hour",a="day",o="week",u="month",l="quarter",f="year",v="date",x="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,i){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(i)+t},m={s:p,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),s=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+p(s,2,"0")+":"+p(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var s=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(s,u),c=i-n<0,r=e.clone().add(s+(c?-1:1),u);return+(-(s+(i-n)/(c?n-r:r-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:o,d:a,D:v,h:r,m:c,s:n,ms:s,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",$={};$[g]=A;var y=function(t){return t instanceof w},D=function t(e,i,s){var n;if(!e)return g;if("string"==typeof e){var c=e.toLowerCase();$[c]&&(n=c),i&&($[c]=i,n=c);var r=e.split("-");if(!n&&r.length>1)return t(r[0])}else{var a=e.name;$[a]=e,n=a}return!s&&n&&(g=n),n||!s&&g},_=function(t,e){if(y(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new w(i)},M=m;M.l=D,M.i=y,M.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function A(t){this.$L=D(t.locale,null,!0),this.parse(t)}var p=A.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(d);if(s){var n=s[2]-1||0,c=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===x)},p.isSame=function(t,e){var i=_(t);return this.startOf(e)<=i&&i<=this.endOf(e)},p.isAfter=function(t,e){return _(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<_(t)},p.$g=function(t,e,i){return M.u(t)?this[e]:this.set(i,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var i=this,s=!!M.u(e)||e,l=M.p(t),x=function(t,e){var n=M.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return s?n:n.endOf(a)},d=function(t,e){return M.w(i.toDate()[t].apply(i.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},h=this.$W,A=this.$M,p=this.$D,m="set"+(this.$u?"UTC":"");switch(l){case f:return s?x(1,0):x(31,11);case u:return s?x(1,A):x(0,A+1);case o:var g=this.$locale().weekStart||0,$=(h<g?h+7:h)-g;return x(s?p-$:p+(6-$),A);case a:case v:return d(m+"Hours",0);case r:return d(m+"Minutes",1);case c:return d(m+"Seconds",2);case n:return d(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var i,o=M.p(t),l="set"+(this.$u?"UTC":""),x=(i={},i[a]=l+"Date",i[v]=l+"Date",i[u]=l+"Month",i[f]=l+"FullYear",i[r]=l+"Hours",i[c]=l+"Minutes",i[n]=l+"Seconds",i[s]=l+"Milliseconds",i)[o],d=o===a?this.$D+(e-this.$W):e;if(o===u||o===f){var h=this.clone().set(v,1);h.$d[x](d),h.init(),this.$d=h.set(v,Math.min(this.$D,h.daysInMonth())).$d}else x&&this.$d[x](d);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[M.p(t)]()},p.add=function(s,l){var v,x=this;s=Number(s);var d=M.p(l),h=function(t){var e=_(x);return M.w(e.date(e.date()+Math.round(t*s)),x)};if(d===u)return this.set(u,this.$M+s);if(d===f)return this.set(f,this.$y+s);if(d===a)return h(1);if(d===o)return h(7);var A=(v={},v[c]=e,v[r]=i,v[n]=t,v)[d]||1,p=this.$d.getTime()+s*A;return M.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||x;var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=M.z(this),c=this.$H,r=this.$m,a=this.$M,o=i.weekdays,u=i.months,l=function(t,i,n,c){return t&&(t[i]||t(e,s))||n[i].slice(0,c)},f=function(t){return M.s(c%12||12,t,"0")},v=i.meridiem||function(t,e,i){var s=t<12?"AM":"PM";return i?s.toLowerCase():s},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:l(i.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,o,2),ddd:l(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(c),HH:M.s(c,2,"0"),h:f(1),hh:f(2),a:v(c,r,!0),A:v(c,r,!1),m:String(r),mm:M.s(r,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:n};return s.replace(h,(function(t,e){return e||d[t]||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(s,v,x){var d,h=M.p(v),A=_(s),p=(A.utcOffset()-this.utcOffset())*e,m=this-A,g=M.m(this,A);return g=(d={},d[f]=g/12,d[u]=g,d[l]=g/3,d[o]=(m-p)/6048e5,d[a]=(m-p)/864e5,d[r]=m/i,d[c]=m/e,d[n]=m/t,d)[h]||m,x?g:M.a(g)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return $[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),s=D(t,e,!0);return s&&(i.$L=s),i},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},A}(),b=w.prototype;return _.prototype=b,[["$ms",s],["$s",n],["$m",c],["$H",r],["$W",a],["$M",u],["$y",f],["$D",v]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,w,_),t.$i=!0),_},_.locale=D,_.isDayjs=y,_.unix=function(t){return _(1e3*t)},_.en=$[g],_.Ls=$,_.p={},_}))},"72cf":function(t,e,i){t.exports=i.p+"static/img/l14.24beb2ff.png"},8009:function(t,e,i){t.exports=i.p+"static/img/l4.baf92d62.png"},"88f4":function(t,e,i){t.exports=i.p+"static/img/l11.dbb29c33.png"},"8df5":function(t,e,i){t.exports=i.p+"static/img/l5.047a0c18.png"},9573:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return r}));var s=[{url:i("0a3f"),isActive:!0},{text:"红领智治通",isActive:!1},{url:i("cc4c"),isActive:!1},{text:"拱墅区数智考评整体智治",isActive:!1},{text:"拱墅区建议提案系统",isActive:!1},{text:"拱墅区智慧人大系统",isActive:!1},{text:"拱墅区数智政协",isActive:!0},{text:"区委组织部数智组工",text1:"综合应用",isActive:!1},{text:"墅智统战系统",isActive:!1},{url:i("ff94"),isActive:!1},{text:"拱墅区综合考评系统",isActive:!1},{text:"“运河红星家园”",text2:"退役军人全生命周期",text1:"管理保障系统",isActive:!1},{text:"拱墅区墅智社会系统",isActive:!1},{text:"拱墅区社区智治在线",text1:"·一表通系统二期",isActive:!1},{text:"拱墅区社区议事协商系统",isActive:!1},{text:"拱墅区你我他智慧社区",text1:"管理系统",isActive:!1},{text:"拱墅区“墅智养”系统",isActive:!1},{text:"拱墅区教育局",text1:"公共服务系统 ",isActive:!1},{text:"假日小队轻松助手",isActive:!1},{text:"拱墅区法治地图系统",isActive:!1},{text:"法律研习云平台",isActive:!1},{text:"拱墅区拱宸桥街道",text1:"云宸系统",isActive:!1},{text:"拱墅区新天地",text1:"治街区理系统",isActive:!1},{text:"潮鸣街道智慧排水",isActive:!1},{text:"长庆街道综合事务",text1:"智慧管理平台",isActive:!1},{text:"拱墅区祥符云",text1:"智能管理系统",isActive:!1},{text:"天水公共服务系统",text1:"及城市大脑应用",isActive:!1},{url:i("e162"),isActive:!1},{text:"石桥街道“e智办”公寓",text1:"数字化应用系统",isActive:!1},{text:"拱墅区湖数通应用系统",isActive:!1},{text:"拱墅区和睦未来社区",text1:"数字化系统",isActive:!1},{text:"拱墅区",text1:"“瓜山未来视界”系统",isActive:!1}],n=[{text:"杭州市”亲清在线”平台",text1:"拱墅区专区惠企政策",isActive:!1},{text:"拱墅区清廉社区",text1:"（经合社）系统",isActive:!1},{text:"拱墅区三源治理系统",isActive:!1},{text:"拱墅区重点企业服务系统",isActive:!1},{text:"拱墅区墅企通系统",isActive:!1},{text:"拱墅区楼宇智慧",text1:"应用信息管理系统",isActive:!1},{text:"拱墅区经济管理",text1:"协同服务系统",isActive:!1},{text:"拱墅区公共项目",text1:"建设管理系统",isActive:!1},{text:"发展改革和经济信息化局",text1:"绩效管理数字化平台",isActive:!1},{url:i("f567"),isActive:!1},{text:"墅企云·智企查",isActive:!1},{text:"拱墅区招商在线系统",isActive:!1},{text:"拱墅区云招商程序",isActive:!1},{text:"拱墅区数据拱墅系统",isActive:!1},{text:"拱墅区政务督查系统",isActive:!1},{text:"拱墅区三级数据仓系统",isActive:!1},{text:"审管通系统升级改造",isActive:!1},{url:i("9dd4"),isActive:!1},{url:i("dbc0"),isActive:!1},{text:"拱墅区鲸准投资",text1:"管理系统",isActive:!1},{text:"拱墅区国投这有房系统",isActive:!1},{text:"拱墅区数智群团驾驶舱",text1:"及特色场景建设",isActive:!1},{text:"红十字博爱邻里互助场景",isActive:!1},{text:"“亲清互联”工商联",text1:"数字化应用",isActive:!1},{url:i("8df5"),isActive:!1},{text:"拱墅区城投项目审计",text1:"管理系统",isActive:!1},{url:i("a291"),isActive:!1},{text:"拱墅区小区协商铃小程序",isActive:!1}],c=[{text:"拱墅区城市眼",text1:"云共治系统",isActive:!1},{url:i("26f9"),isActive:!1},{text:"拱墅区望宸智汇系统",isActive:!0},{text:"拱墅区基层治理四平台",isActive:!0},{text:"网格e盾",isActive:!0},{text:"拱墅区平安风险处置",text1:"应用系统",isActive:!1},{text:"拱墅区平安拱墅综合信息指挥中心",text1:"应用系统风险处置",isActive:!1},{text:"拱墅基层治理系统",isActive:!0},{text:"拱墅区拱墅码系统",isActive:!0},{url:i("a2c8"),isActive:!1},{text:"拱墅区智慧消防",text1:"应急管理系统",isActive:!1},{text:"杭州市拱墅区",text1:"城市防涝智治系统",isActive:!1},{text:"拱墅区云呼系统",isActive:!0},{text:"拱墅区智慧妇幼",text1:"服务监管系统",isActive:!1},{text:"住宿场所消毒保洁",text1:"智能监管应用",isActive:!1},{text:"杭州城市大脑",text1:"拱墅平台.云上城管系统",isActive:!1},{text:"拱墅区山洪灾害防治",text1:"非工程措施系统",isActive:!1},{text:"拱墅区洪水风险",text1:"建设系统",isActive:!1},{text:"新拱墅人一码通系统",isActive:!0},{text:"物联感知平台",isActive:!0},{url:i("88f4"),isActive:!0},{text:"疫情流调系统",isActive:!0},{text:"拱墅区数智监督云系统",isActive:!0},{text:"大数据智慧监督平台",isActive:!0},{url:i("fca6"),isActive:!0},{text:"拱墅城投征迁回迁",text1:"管理系统",isActive:!0},{text:"拱墅区安置房源管理系统",isActive:!0},{url:i("8009"),isActive:!0},{text:"拱墅分局空间信息化",text1:"应用系统",isActive:!0}],r=[{url:i("5170"),isActive:!0},{text:"拱墅区阳光小伢儿",text1:"智慧照护系统",isActive:!0},{text:"拱墅区学区一点通系统",isActive:!0},{text:"拱墅阳光少年",text1:"志愿服务系统",isActive:!1},{text:"拱墅智安小区系统",isActive:!1},{text:"临聘人员一点通",isActive:!1},{url:i("72cf"),isActive:!1},{text:"拱墅区文旅大数据系统",isActive:!1},{text:"规范医师执业活动",text1:"监控系统",isActive:!1},{text:"课后服务综合管理系统 ",isActive:!1},{text:"拱墅教育局健康成长",text1:"信息管理系统务系统",isActive:!1},{text:"拱墅区统一信息报送系统",isActive:!1},{url:i("3542"),text:"",isActive:!1},{text:"拱墅地理信息共享",text1:"服务平台",isActive:!1},{text:"拱墅行政服务中心",text1:"智慧综合大厅系统",isActive:!1},{text:'"一次刷脸、全域通办"系统',isActive:!1},{text:"拱墅机关事务系统",isActive:!1},{text:"城市大脑",text1:"拱墅志愿服务系统",isActive:!1},{text:"拱墅区文晖街道",text1:"文晖全民记者系统",isActive:!1},{text:"拱墅区中科大肿瘤医院",text1:"交通智汇系统",isActive:!1},{url:i("ad28"),isActive:!1},{text:"祥符街道汽车城周边",text1:"综合治理",isActive:!1},{text:"拱墅电梯监管",text1:"及电瓶车阻拦系统",isActive:!1},{text:"智慧社区街道消防环卫",text1:"一体化巡检平台",isActive:!1},{text:"拱墅区康桥街道减负通",text1:"·一表无忧系统",isActive:!1},{text:"拱墅区数字就业系统",isActive:!1}]},"9af5":function(t,e,i){"use strict";i("c117")},"9dd4":function(t,e,i){t.exports=i.p+"static/img/l13.032d6c78.png"},a291:function(t,e,i){t.exports=i.p+"static/img/l8.f9128414.png"},a2c8:function(t,e,i){t.exports=i.p+"static/img/l10.7d11e0a8.png"},ac6a:function(t,e,i){"use strict";var s=function(){var t,e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"base-layout-date",class:(t={},t["base-layout-date-"+e.size]=!!e.size,t)},[s("div",{staticClass:"date separator"},[e._v(e._s(e.date))]),s("div",{staticClass:"week separator"},[e._v(e._s(e.week))]),s("div",{staticClass:"time"},[e._v(e._s(e.time))])])},n=[],c=i("5a0c"),r=i.n(c),a={name:"base-layout-date",data:function(){return{timer:null,date:"",week:"",time:""}},props:{size:String},created:function(){this.getTime()},beforeDestroy:function(){clearTimeout(this.timer)},methods:{getTime:function(){var t=this,e=r()();this.date=e.format("YYYY-MM-DD"),this.week="星期"+["日","一","二","三","四","五","六"][e.day()],this.time=e.format("HH:mm:ss"),this.timer=setTimeout((function(){t.getTime()}),1e3)}}},o=a,u=(i("9af5"),i("2877")),l=Object(u["a"])(o,s,n,!1,null,"747aec39",null);e["a"]=l.exports},ad28:function(t,e,i){t.exports=i.p+"static/img/l9.8b74c6fa.png"},b1c5:function(t,e,i){"use strict";i("40ee")},c117:function(t,e,i){},cc4c:function(t,e,i){t.exports=i.p+"static/img/l17.f74dacbd.png"},dbc0:function(t,e,i){t.exports=i.p+"static/img/l16.5ad9e01e.png"},e162:function(t,e,i){t.exports=i.p+"static/img/l7.6e85af2f.png"},f567:function(t,e,i){t.exports=i.p+"static/img/l15.dc5657ca.png"},fca6:function(t,e,i){t.exports=i.p+"static/img/l6.989413c4.png"},ff94:function(t,e,i){t.exports=i.p+"static/img/l2.00478c16.png"}}]);