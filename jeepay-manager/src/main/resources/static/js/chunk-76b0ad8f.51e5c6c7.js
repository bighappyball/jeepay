(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b0ad8f"],{"0ed0":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{visible:e.visible,closable:!0,"body-style":{paddingBottom:"80px"},"drawer-style":{backgroundColor:"#f0f2f5"},width:"80%"},on:{close:e.onClose}},[r("template",{slot:"title"},[r("a-steps",{staticStyle:{width:"80%"},attrs:{current:e.currentStep,type:"navigation"}},[r("a-step",{attrs:{title:"支付参数配置"},on:{click:function(a){return e.stepChange(0)}}}),r("a-step",{attrs:{title:"支付通道配置"},on:{click:function(a){return e.stepChange(1)}}})],1)],1),0===e.currentStep?r("div",[r("JeepayCard",{ref:"infoCard",attrs:{reqCardListFunc:e.reqCardListFunc,span:e.jeepayCard.span,height:e.jeepayCard.height},scopedSlots:e._u([{key:"cardContentSlot",fn:function(a){var t=a.record;return r("div",{},[r("div",{staticClass:"jeepay-card-content",style:{height:e.jeepayCard.height+"px"}},[r("div",{staticClass:"jeepay-card-content-header",style:{backgroundColor:t.bgColor,height:e.jeepayCard.height/2+"px"}},[t.icon?r("img",{style:{height:e.jeepayCard.height/5+"px"},attrs:{src:t.icon}}):e._e()]),r("div",{staticClass:"jeepay-card-content-body",style:{height:e.jeepayCard.height/2-50+"px"}},[r("div",{staticClass:"title"},[e._v(" "+e._s(t.ifName)+" ")]),r("a-badge",{attrs:{status:1===t.ifConfigState?"processing":"error",text:1===t.ifConfigState?"启用":"未开通"}})],1),r("div",{staticClass:"jeepay-card-ops"},[2==t.mchType&&"alipay"==t.ifCode&&e.$access("ENT_MCH_PAY_CONFIG_ADD")?r("a",{on:{click:function(a){return e.toAlipayAuthPageFunc(t)}}},[e._v("扫码授权 "),r("a-icon",{key:"right",staticStyle:{fontSize:"13px"},attrs:{type:"right"}})],1):e._e(),e.$access("ENT_MCH_PAY_CONFIG_ADD")?r("a",{on:{click:function(a){return e.editPayIfConfigFunc(t)}}},[e._v("填写参数 "),r("a-icon",{key:"right",staticStyle:{fontSize:"13px"},attrs:{type:"right"}})],1):r("a",[e._v("暂无操作")])])])])}}],null,!1,3184106513)})],1):1===e.currentStep?r("div",[r("a-card",[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:10}},[r("a-col",{attrs:{md:4}},[r("a-form-item",{attrs:{label:""}},[r("a-input",{attrs:{placeholder:"支付方式代码"},model:{value:e.searchData2.wayCode,callback:function(a){e.$set(e.searchData2,"wayCode",a)},expression:"searchData2.wayCode"}})],1)],1),r("a-col",{attrs:{md:4}},[r("a-form-item",{attrs:{label:""}},[r("a-input",{attrs:{placeholder:"支付方式名称"},model:{value:e.searchData2.wayName,callback:function(a){e.$set(e.searchData2,"wayName",a)},expression:"searchData2.wayName"}})],1)],1),r("a-col",{attrs:{sm:6}},[r("span",{staticClass:"table-page-search-submitButtons"},[r("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(a){return e.searchFunc(!0)}}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"reload"},on:{click:function(){return a.searchData2={}}}},[e._v("重置")])],1)])],1)],1)],1),r("JeepayTable",{ref:"infoTable",attrs:{initData:!0,reqTableDataFunc:e.reqTableDataFunc,tableColumns:e.tableColumns,searchData:e.searchData2,rowKey:"wayCode"},scopedSlots:e._u([{key:"stateSlot",fn:function(a){var e=a.record;return[r("a-badge",{attrs:{status:0===e.passageState?"error":"processing",text:0===e.passageState?"禁用":"启用"}})]}},{key:"opSlot",fn:function(a){var t=a.record;return[r("JeepayTableColumns",[e.$access("ENT_MCH_PAY_PASSAGE_CONFIG")?r("a-button",{attrs:{type:"link"},on:{click:function(a){return e.editPayPassageFunc(t)}}},[e._v("配置")]):e._e()],1)]}}])})],1)],1):e._e(),r("div",{staticClass:"drawer-btn-center "},[r("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:e.onClose}},[e._v("关闭")]),e.$access("ENT_MCH_PAY_CONFIG_LIST")&&1===e.currentStep?r("a-button",{attrs:{type:"primary",icon:"arrow-left"},on:{click:function(a){return e.stepChange(0)}}},[e._v("上一步")]):e._e(),e.$access("ENT_MCH_PAY_PASSAGE_LIST")&&0===e.currentStep?r("a-button",{attrs:{type:"primary",icon:"arrow-right"},on:{click:function(a){return e.stepChange(1)}}},[e._v("下一步")]):e._e()],1),r("MchPayConfigAddOrEdit",{ref:"mchPayConfigAddOrEdit",attrs:{callbackFunc:e.refCardList}}),r("WxpayPayConfig",{ref:"wxpayPayConfig",attrs:{callbackFunc:e.refCardList}}),r("AlipayPayConfig",{ref:"alipayPayConfig",attrs:{callbackFunc:e.refCardList}}),r("MchPayPassageAddOrEdit",{ref:"mchPayPassageAddOrEdit",attrs:{callbackFunc:e.searchFunc}}),r("AlipayAuth",{ref:"alipayAuthPage",attrs:{callbackFunc:e.refCardList}})],2)},i=[],s=t("c73b"),o=t("f339"),n=t("5d5e"),l=t("0fea"),c=t("e789"),u=t("a369"),p=t("e892"),d=t("a923"),f=t("4823"),m=[{key:"wayCode",title:"支付方式代码",dataIndex:"wayCode"},{key:"wayName",title:"支付方式名称",dataIndex:"wayName"},{key:"passageState",title:"状态",scopedSlots:{customRender:"stateSlot"}},{key:"op",title:"操作",width:"200px",fixed:"right",align:"center",scopedSlots:{customRender:"opSlot"}}],h={components:{JeepayCard:s["a"],JeepayTable:o["a"],JeepayTableColumns:n["a"],MchPayConfigAddOrEdit:c["default"],MchPayPassageAddOrEdit:u["default"],WxpayPayConfig:p["default"],AlipayPayConfig:d["default"],AlipayAuth:f["default"]},data:function(){return{currentStep:0,btnLoading:!1,appId:null,visible:!1,jeepayCard:{height:300,span:{xxl:6,xl:4,lg:4,md:3,sm:2,xs:1}},tableColumns:m,searchData2:{}}},methods:{show:function(a){this.appId=a,this.ifCode=null,this.currentStep=0,this.visible=!0,this.refCardList()},stepChange:function(a){this.currentStep=a},reqCardListFunc:function(){return l["H"].list(l["h"],{appId:this.appId})},refCardList:function(){this.$refs.infoCard&&this.$refs.infoCard.refCardList()},reqTableDataFunc:function(a){var e=this;return l["H"].list(l["i"],Object.assign(a,{appId:e.appId}))},searchFunc:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.infoTable.refTable(a)},editPayIfConfigFunc:function(a){a&&(0===a.subMchIsvConfig?this.$error({title:"提示",content:"当前应用所属商户为特约商户，请先配置服务商支付参数！"}):1===a.configPageType?this.$refs.mchPayConfigAddOrEdit.show(this.appId,a):2===a.configPageType&&this.$refs[a.ifCode+"PayConfig"].show(this.appId,a))},editPayPassageFunc:function(a){var e=this;Object(l["t"])(e.appId,a.wayCode).then((function(t){t&&0!==t.length?e.$refs.mchPayPassageAddOrEdit.show(e.appId,a.wayCode):e.$error({title:"提示",content:"暂无可用支付接口配置"})}))},onClose:function(){this.visible=!1},toAlipayAuthPageFunc:function(a){a&&(0!==a.subMchIsvConfig?this.$refs.alipayAuthPage.show(this.appId):this.$error({title:"提示",content:"当前应用所属商户为特约商户，请先配置服务商支付参数！"}))}}},b=h,y=(t("c70d"),t("2877")),g=Object(y["a"])(b,r,i,!1,null,"217f19be",null);e["default"]=g.exports},"12e0":function(a,e,t){},"1eab":function(a,e,t){},"27fc":function(a,e,t){},"2f2d":function(a,e,t){"use strict";t("1eab")},4823:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-modal",{attrs:{title:"支付宝子商户扫码授权"},on:{ok:a.handleOkFunc,cancel:a.handleOkFunc},model:{value:a.isShow,callback:function(e){a.isShow=e},expression:"isShow"}},[t("div",{staticStyle:{"text-align":"center"}},[t("p",[a._v("方式1： "),t("br"),a._v(" 请商家登录【支付宝】APP, 扫描如下二维码, 按提示授权： ")]),t("img",{staticStyle:{"margin-bottom":"10px"},attrs:{src:a.apiResData.authQrImgUrl}}),t("hr"),t("p",{staticStyle:{"margin-top":"10px"}},[a._v(" 方式2： "),t("br"),a._v(" "),t("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.apiResData.authUrl,expression:"apiResData.authUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:a.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy-btn",attrs:{size:"small"}},[a._v("点击复制")]),a._v(" 链接并发送给商户，商户进入链接，按照页面提示自主授权： ")],1),t("a",{attrs:{target:"_blank",href:a.apiResData.authUrl}},[a._v(a._s(a.apiResData.authUrl))])])])},i=[],s=t("0fea"),o={props:{callbackFunc:{type:Function}},data:function(){return{isShow:!1,appId:"",apiResData:{}}},created:function(){},methods:{show:function(a){var e=this;this.apiResData={},this.appId=a;var t=this;Object(s["G"])(a).then((function(a){t.apiResData=a,e.isShow=!0}))},handleOkFunc:function(){this.isShow=!1,this.callbackFunc&&this.callbackFunc()},onCopySuccess:function(){this.$message.success("复制成功")}}},n=o,l=t("2877"),c=Object(l["a"])(n,r,i,!1,null,null,null);e["default"]=c.exports},"4a67":function(a,e,t){},"5d5e":function(a,e,t){"use strict";t("d81d");var r,i,s={name:"JeepayTableColumns",render:function(a,e){var t=arguments[0],r=[];if(this.$slots.default.map((function(a){return a.tag&&r.push(a),!1})),r.length<=3)return a("div",{style:"display:flex; justify-content: space-evenly;"},r);for(var i=[r[0],r[1]],s=[],o=2;o<r.length;o++)s.push(t("a-menu-item",[r[o]]));return t("div",{style:"display:flex; justify-content: space-evenly;"},[" ",i,t("a-dropdown",[t("a-button",{class:"ant-dropdown-link",attrs:{type:"link"},style:""},["更多",t("a-icon",{attrs:{type:"down"}})]),t("a-menu",{slot:"overlay"},[s])])])}},o=s,n=(t("a1d4"),t("2877")),l=Object(n["a"])(o,r,i,!1,null,"5af6b31f",null);e["a"]=l.exports},9913:function(a,e,t){},a1d4:function(a,e,t){"use strict";t("12e0")},a369:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-drawer",{attrs:{visible:a.visible,title:"配置支付通道",closable:!0,maskClosable:!1,"body-style":{paddingBottom:"80px"},"drawer-style":{backgroundColor:"#f0f2f5"},width:"40%"},on:{close:a.onClose}},[0===a.cardList.length?t("a-list",{attrs:{"data-source":[]}}):t("div",[t("a-row",{staticStyle:{width:"100%"},attrs:{gutter:[24,24]}},a._l(a.cardList,(function(e,r){return t("a-col",{key:r,attrs:{xxl:24/a.jeepayCard.span.xxl,xl:24/a.jeepayCard.span.xl,lg:24/a.jeepayCard.span.lg,md:24/a.jeepayCard.span.md,sm:24/a.jeepayCard.span.sm,xs:24/a.jeepayCard.span.xs}},[t("div",{staticClass:"jeepay-card-content",style:{height:a.jeepayCard.height+"px"}},[t("div",{staticClass:"jeepay-card-content-header",style:{backgroundColor:e.bgColor,height:(a.jeepayCard.height-50)/2+"px"}},[e.icon?t("img",{style:{height:(a.jeepayCard.height-50)/5+"px"},attrs:{src:e.icon}}):a._e()]),t("div",{staticClass:"jeepay-card-content-body",style:{height:(a.jeepayCard.height-50)/2+"px"}},[t("div",{staticClass:"title",style:{height:(a.jeepayCard.height-50)/4+"px",lineHeight:(a.jeepayCard.height-50)/4+"px"}},[a._v(" "+a._s(e.ifName)+" ")]),t("a-form",{attrs:{layout:"inline",labelCol:{span:8},wrapperCol:{span:14}}},[t("a-form-item",{attrs:{label:"费率：","validate-status":e.error,help:e.help}},[t("a-input",{attrs:{disabled:!e.state&&""!=e.passageId,suffix:"%"},model:{value:e.rate,callback:function(t){a.$set(e,"rate",t)},expression:"record.rate"}})],1)],1)],1),t("div",{staticClass:"jeepay-card-ops"},[t("a-switch",{attrs:{"checked-children":"启用","un-checked-children":"停用"},model:{value:e.state,callback:function(t){a.$set(e,"state",t)},expression:"record.state"}})],1)])])})),1),t("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"center",zIndex:1}},[t("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:a.onClose}},[a._v(" 取消 ")]),a.$access("ENT_MCH_PAY_PASSAGE_ADD")?t("a-button",{attrs:{type:"primary",icon:"check"},on:{click:a.handleOkFunc}},[a._v(" 保存 ")]):a._e()],1)],1)],1)},i=[],s=(t("159b"),t("c73b")),o=t("0fea"),n={components:{JeepayCard:s["a"]},props:{callbackFunc:{type:Function,default:function(){return{}}}},data:function(){return{cardList:[],appId:null,wayCode:null,visible:!1,jeepayCard:{height:300,span:{xxl:3,xl:2,lg:2,md:1,sm:1,xs:1}}}},methods:{show:function(a,e){this.appId=a,this.wayCode=e,this.visible=!0,this.cardList=[],this.refCardList()},refCardList:function(){var a=this;Object(o["t"])(this.appId,this.wayCode).then((function(e){if(void 0!==e&&0!==e.length){var t=[];e.forEach((function(a){t.push({passageId:a.passageId?a.passageId:"",ifCode:a.ifCode,ifName:a.ifName,icon:a.icon,bgColor:a.bgColor,rate:a.rate,state:1===a.state})})),a.cardList=t,a.$forceUpdate()}else a.cardList=[]}))},handleOkFunc:function(){var a=this,e=[];try{a.cardList.forEach((function(t){t.error="",t.help="";var r=/^(([1-9]{1}\d{0,1})|(0{1}))(\.\d{1,4})?$/;if(t.state){if(!t.rate)throw t.error="error",t.help="请输入费率",new Error("error");if(!r.test(t.rate)||t.rate>100)throw t.error="error",t.help="最多四位小数",new Error("error")}e.push({id:t.passageId,appId:a.appId,wayCode:a.wayCode,ifCode:t.ifCode,rate:t.rate,state:t.state?1:0})}))}catch(t){if("error"===t.message)return void this.$forceUpdate()}o["H"].add(o["i"],{reqParams:JSON.stringify(e)}).then((function(e){a.$message.success("保存成功"),a.visible=!1,a.callbackFunc()}))},onClose:function(){this.visible=!1}}},l=n,c=(t("b87c"),t("2877")),u=Object(c["a"])(l,r,i,!1,null,"6c42d4ba",null);e["default"]=u.exports},a923:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-drawer",{attrs:{title:"填写参数",width:"40%",closable:!0,maskClosable:!1,visible:a.visible,"body-style":{paddingBottom:"80px"}},on:{close:a.onClose}},[t("a-form-model",{ref:"infoFormModel",attrs:{model:a.saveObject,layout:"vertical",rules:a.rules}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{label:"状态",prop:"state"}},[t("a-radio-group",{model:{value:a.saveObject.state,callback:function(e){a.$set(a.saveObject,"state",e)},expression:"saveObject.state"}},[t("a-radio",{attrs:{value:1}},[a._v(" 启用 ")]),t("a-radio",{attrs:{value:0}},[a._v(" 停用 ")])],1)],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[t("a-input",{attrs:{placeholder:"请输入",type:"textarea"},model:{value:a.saveObject.remark,callback:function(e){a.$set(a.saveObject,"remark",e)},expression:"saveObject.remark"}})],1)],1)],1)],1),t("a-divider",{attrs:{orientation:"left"}},[t("a-tag",{attrs:{color:"#FF4B33"}},[a._v(" "+a._s(a.saveObject.ifCode)+" 商户参数配置 ")])],1),t("a-form-model",{ref:"mchParamFormModel",attrs:{model:a.ifParams,layout:"vertical",rules:a.ifParamsRules}},[1===a.mchType?t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"环境配置",prop:"sandbox"}},[t("a-radio-group",{model:{value:a.ifParams.sandbox,callback:function(e){a.$set(a.ifParams,"sandbox",e)},expression:"ifParams.sandbox"}},[t("a-radio",{attrs:{value:1}},[a._v("沙箱环境")]),t("a-radio",{attrs:{value:0}},[a._v("生产环境")])],1)],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"应用AppID",prop:"appId"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.appId,callback:function(e){a.$set(a.ifParams,"appId",e)},expression:"ifParams.appId"}})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"应用私钥",prop:"privateKey"}},[t("a-input",{attrs:{placeholder:a.ifParams.privateKey_ph,type:"textarea"},model:{value:a.ifParams.privateKey,callback:function(e){a.$set(a.ifParams,"privateKey",e)},expression:"ifParams.privateKey"}})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"支付宝公钥",prop:"alipayPublicKey"}},[t("a-input",{attrs:{placeholder:a.ifParams.alipayPublicKey_ph,type:"textarea"},model:{value:a.ifParams.alipayPublicKey,callback:function(e){a.$set(a.ifParams,"alipayPublicKey",e)},expression:"ifParams.alipayPublicKey"}})],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"接口签名方式(推荐使用RSA2)",prop:"signType"}},[t("a-radio-group",{attrs:{defaultValue:"RSA"},model:{value:a.ifParams.signType,callback:function(e){a.$set(a.ifParams,"signType",e)},expression:"ifParams.signType"}},[t("a-radio",{attrs:{value:"RSA"}},[a._v("RSA")]),t("a-radio",{attrs:{value:"RSA2"}},[a._v("RSA2")])],1)],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"公钥证书",prop:"useCert"}},[t("a-radio-group",{attrs:{defaultValue:"1"},model:{value:a.ifParams.useCert,callback:function(e){a.$set(a.ifParams,"useCert",e)},expression:"ifParams.useCert"}},[t("a-radio",{attrs:{value:1}},[a._v("使用证书（请使用RSA2私钥）")]),t("a-radio",{attrs:{value:0}},[a._v("不使用证书")])],1)],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"应用公钥证书（.crt格式）",prop:"appPublicCert"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.appPublicCert,callback:function(e){a.$set(a.ifParams,"appPublicCert",e)},expression:"ifParams.appPublicCert"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.appPublicCert},on:{uploadSuccess:function(e){return a.uploadSuccess(e,"appPublicCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!1,1271385614)})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"支付宝公钥证书（.crt格式）",prop:"alipayPublicCert"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.alipayPublicCert,callback:function(e){a.$set(a.ifParams,"alipayPublicCert",e)},expression:"ifParams.alipayPublicCert"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.alipayPublicCert},on:{uploadSuccess:function(e){return a.uploadSuccess(e,"alipayPublicCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!1,1271385614)})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"支付宝根证书（.crt格式）",prop:"alipayRootCert"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.alipayRootCert,callback:function(e){a.$set(a.ifParams,"alipayRootCert",e)},expression:"ifParams.alipayRootCert"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.alipayRootCert},on:{uploadSuccess:function(e){return a.uploadSuccess(e,"alipayRootCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!1,1271385614)})],1)],1)],1):2===a.mchType?t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"子商户app_auth_token",prop:"appAuthToken"}},[t("a-input",{attrs:{placeholder:"请输入子商户app_auth_token"},model:{value:a.ifParams.appAuthToken,callback:function(e){a.$set(a.ifParams,"appAuthToken",e)},expression:"ifParams.appAuthToken"}})],1)],1)],1):a._e()],1),a.$access("ENT_MCH_PAY_CONFIG_ADD")?t("div",{staticClass:"drawer-btn-center"},[t("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:a.onClose}},[a._v("取消")]),t("a-button",{attrs:{type:"primary",icon:"check",loading:a.btnLoading},on:{click:a.onSubmit}},[a._v("保存")])],1):a._e()],1)},i=[],s=(t("b64b"),t("c73b")),o=t("909a"),n=t("0fea"),l={components:{JeepayCard:s["a"],JeepayUpload:o["a"]},props:{callbackFunc:{type:Function,default:function(){return{}}}},data:function(){var a=this;return{btnLoading:!1,visible:!1,isAdd:!0,mchType:1,action:n["M"].cert,saveObject:{},ifParams:{},rules:{},ifParamsRules:{appId:[{trigger:"blur",validator:function(e,t,r){1!==a.mchType||t||r(new Error("请输入应用AppID")),r()}}],privateKey:[{trigger:"blur",validator:function(e,t,r){1===a.mchType&&a.isAdd&&!t&&r(new Error("请输入应用私钥")),r()}}],alipayPublicKey:[{trigger:"blur",validator:function(e,t,r){1===a.mchType&&a.isAdd&&0===a.ifParams.useCert&&!t&&r(new Error("请输入支付宝公钥")),r()}}],appPublicCert:[{trigger:"blur",validator:function(e,t,r){1!==a.mchType||1!==a.ifParams.useCert||a.ifParams.appPublicCert||r(new Error("请上传应用公钥证书（.crt格式）")),r()}}],alipayPublicCert:[{trigger:"blur",validator:function(e,t,r){1!==a.mchType||1!==a.ifParams.useCert||a.ifParams.alipayPublicCert||r(new Error("请上传支付宝公钥证书（.crt格式）")),r()}}],alipayRootCert:[{trigger:"blur",validator:function(e,t,r){1!==a.mchType||1!==a.ifParams.useCert||a.ifParams.alipayRootCert||r(new Error("请上传支付宝根证书（.crt格式）")),r()}}],appAuthToken:[{trigger:"blur",validator:function(e,t,r){2!==a.mchType||t||r(new Error("请输入子商户app_auth_token")),r()}}]}}},methods:{show:function(a,e){void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields(),void 0!==this.$refs.mchParamFormModel&&this.$refs.mchParamFormModel.resetFields(),this.mchType=e.mchType,this.saveObject={infoId:a,ifCode:e.ifCode,state:0===e.ifConfigState?0:1},this.ifParams={sandbox:0,signType:"RSA2",useCert:0,privateKey:"",privateKey_ph:"请输入",alipayPublicKey:"",alipayPublicKey_ph:"请输入",appPublicCert:"",alipayPublicCert:"",alipayRootCert:""},this.visible=!0,this.getMchPayConfig()},getMchPayConfig:function(){var a=this;Object(n["y"])(a.saveObject.infoId,a.saveObject.ifCode).then((function(e){e&&e.ifParams?(a.saveObject=e,a.ifParams=JSON.parse(e.ifParams),a.ifParams.privateKey_ph=a.ifParams.privateKey,a.ifParams.privateKey="",a.ifParams.alipayPublicKey_ph=a.ifParams.alipayPublicKey,a.ifParams.alipayPublicKey="",a.isAdd=!1):void 0===e&&(a.isAdd=!0)}))},onSubmit:function(){var a=this,e=this;this.$refs.infoFormModel.validate((function(t){a.$refs.mchParamFormModel.validate((function(r){if(t&&r){e.btnLoading=!0;var i={};if(i.infoId=e.saveObject.infoId,i.ifCode=e.saveObject.ifCode,i.state=e.saveObject.state,i.remark=e.saveObject.remark,0===Object.keys(e.ifParams).length)return void a.$message.error("参数不能为空！");if(e.clearEmptyKey("privateKey"),e.clearEmptyKey("alipayPublicKey"),i.ifParams=JSON.stringify(e.ifParams),0===Object.keys(i).length)return void a.$message.error("参数不能为空！");n["H"].add(n["h"],i).then((function(a){e.$message.success("保存成功"),e.visible=!1,e.btnLoading=!1,e.callbackFunc()}))}}))}))},clearEmptyKey:function(a){this.ifParams[a]||(this.ifParams[a]=void 0),this.ifParams[a+"_ph"]=void 0},uploadSuccess:function(a,e){this.ifParams[e]=a,this.$forceUpdate()},onClose:function(){this.visible=!1}}},c=l,u=t("2877"),p=Object(u["a"])(c,r,i,!1,null,"7de500bd",null);e["default"]=p.exports},b87c:function(a,e,t){"use strict";t("4a67")},c70d:function(a,e,t){"use strict";t("9913")},e789:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-drawer",{attrs:{title:"填写参数",width:"40%",closable:!0,maskClosable:!1,visible:a.visible,"body-style":{paddingBottom:"80px"}},on:{close:a.onClose}},[t("a-form-model",{ref:"infoFormModel",attrs:{model:a.saveObject,layout:"vertical",rules:a.rules}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{label:"状态",prop:"state"}},[t("a-radio-group",{model:{value:a.saveObject.state,callback:function(e){a.$set(a.saveObject,"state",e)},expression:"saveObject.state"}},[t("a-radio",{attrs:{value:1}},[a._v(" 启用 ")]),t("a-radio",{attrs:{value:0}},[a._v(" 停用 ")])],1)],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[t("a-input",{attrs:{placeholder:"请输入",type:"textarea"},model:{value:a.saveObject.remark,callback:function(e){a.$set(a.saveObject,"remark",e)},expression:"saveObject.remark"}})],1)],1)],1)],1),t("a-divider",{attrs:{orientation:"left"}},[t("a-tag",{attrs:{color:"#FF4B33"}},[a._v(" "+a._s(a.saveObject.ifCode)+" 商户参数配置 ")])],1),t("a-form-model",{ref:"mchParamFormModel",attrs:{model:a.ifParams,layout:"vertical",rules:a.ifParamsRules}},[t("a-row",{attrs:{gutter:16}},a._l(a.mchParams,(function(e,r){return t("a-col",{key:r,attrs:{span:"text"===e.type?12:24}},["text"===e.type||"textarea"===e.type?t("a-form-model-item",{attrs:{label:e.desc,prop:e.name}},[t("a-input",{attrs:{placeholder:"1"===e.star?a.ifParams[e.name+"_ph"]:"请输入",type:e.type},model:{value:a.ifParams[e.name],callback:function(t){a.$set(a.ifParams,e.name,t)},expression:"ifParams[item.name]"}})],1):"radio"===e.type?t("a-form-model-item",{attrs:{label:e.desc,prop:e.name}},[t("a-radio-group",{model:{value:a.ifParams[e.name],callback:function(t){a.$set(a.ifParams,e.name,t)},expression:"ifParams[item.name]"}},a._l(e.values,(function(e,r){return t("a-radio",{key:r,attrs:{value:e.value}},[a._v(" "+a._s(e.title)+" ")])})),1)],1):"file"===e.type?t("a-form-model-item",{attrs:{label:e.desc,prop:e.name}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams[e.name],callback:function(t){a.$set(a.ifParams,e.name,t)},expression:"ifParams[item.name]"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams[e.name]},on:{uploadSuccess:function(t){return a.uploadSuccess(t,e.name)}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!0)})],1):a._e()],1)})),1)],1),a.$access("ENT_MCH_PAY_CONFIG_ADD")?t("div",{staticClass:"drawer-btn-center"},[t("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:a.onClose}},[a._v("取消")]),t("a-button",{attrs:{type:"primary",icon:"check",loading:a.btnLoading},on:{click:a.onSubmit}},[a._v("保存")])],1):a._e()],1)},i=[],s=(t("159b"),t("ac1f"),t("1276"),t("d3b7"),t("ddb0"),t("a9e3"),t("b0c0"),t("b64b"),t("c73b")),o=t("909a"),n=t("0fea"),l={components:{JeepayCard:s["a"],JeepayUpload:o["a"]},props:{callbackFunc:{type:Function,default:function(){return{}}}},data:function(){return{btnLoading:!1,visible:!1,appId:null,ifCode:null,mchType:null,action:n["M"].cert,mchParams:{},saveObject:{},ifParams:{},rules:{infoId:[{required:!0,trigger:"blur"}],ifCode:[{required:!0,trigger:"blur"}]},ifParamsRules:{}}},watch:{ifParams:function(a,e){this.$set(this.ifParams,"appSecret",this.ifParams.appSecret)}},methods:{show:function(a,e){this.appId=a,this.ifCode=e.ifCode,this.mchType=e.mchType,this.saveObject={},this.ifParams={},this.mchParams={},this.saveObject.infoId=a,this.saveObject.ifCode=e.ifCode,this.saveObject.state=0===e.ifConfigState?0:1,void 0!==this.$refs.mchParamFormModel&&this.$refs.mchParamFormModel.resetFields(),this.getMchPayConfig(e)},getMchPayConfig:function(a){var e=this,t=this;Object(n["y"])(t.saveObject.infoId,t.saveObject.ifCode).then((function(r){r&&r.ifParams&&(t.saveObject=r,t.ifParams=JSON.parse(r.ifParams));var i=[],s=[],o=1===e.mchType?a.normalMchParams:a.isvsubMchParams;JSON.parse(o).forEach((function(a){if(s=[],"radio"===a.type){var e=a.values.split(","),r=a.titles.split(",");for(var o in e){var n=e[o];isNaN(n)||(n=Number(n)),s.push({value:n,title:r[o]})}}"1"===a.star&&(t.ifParams[a.name+"_ph"]=t.ifParams[a.name]?t.ifParams[a.name]:"请输入",t.ifParams[a.name]&&(t.ifParams[a.name]="")),i.push({name:a.name,desc:a.desc,type:a.type,verify:a.verify,values:s,star:a.star})})),t.mchParams=i,t.visible=!0,t.generoterRules()}))},onSubmit:function(){var a=this,e=this;this.$refs.infoFormModel.validate((function(t){a.$refs.mchParamFormModel.validate((function(r){if(t&&r){e.btnLoading=!0;var i={};if(i.infoId=e.saveObject.infoId,i.ifCode=e.saveObject.ifCode,i.state=e.saveObject.state,i.remark=e.saveObject.remark,0===Object.keys(e.ifParams).length)return void a.$message.error("参数不能为空！");if(e.mchParams.forEach((function(a){"1"===a.star&&""===e.ifParams[a.name]&&(e.ifParams[a.name]=void 0),e.ifParams[a.name+"_ph"]=void 0})),i.ifParams=JSON.stringify(e.ifParams),0===Object.keys(i).length)return void a.$message.error("参数不能为空！");n["H"].add(n["h"],i).then((function(a){e.$message.success("保存成功"),e.visible=!1,e.btnLoading=!1,e.callbackFunc()}))}}))}))},uploadSuccess:function(a,e){this.ifParams[e]=a,this.$forceUpdate()},generoterRules:function(){var a={},e=[];this.mchParams.forEach((function(t){e=[],"required"===t.verify&&"1"!==t.star&&(e.push({required:!0,message:"请输入"+t.desc,trigger:"blur"}),a[t.name]=e)})),this.ifParamsRules=a},onClose:function(){this.visible=!1}}},c=l,u=(t("2f2d"),t("2877")),p=Object(u["a"])(c,r,i,!1,null,"28ab351e",null);e["default"]=p.exports},f339:function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("a-table",{attrs:{columns:a.tableColumns,"data-source":a.apiResData.records,pagination:a.pagination,loading:a.showLoading,"row-selection":a.rowSelection,rowKey:a.rowKey,scroll:{x:a.scrollX},customRow:function(e,t){return a.tableRowCrossColor?{style:{"background-color":t%2==0?"#FCFCFC":"#FFFFFF"}}:{}}},on:{change:a.handleTableChange},scopedSlots:a._u([a._l(a.columnsCustomSlots,(function(e){return{key:e.customRender,fn:function(t){return[a._t(e.customRender,null,{record:t})]}}}))],null,!0)})],1)},i=[],s=t("5530"),o=(t("a9e3"),t("d81d"),t("4de4"),{name:"JeepayTable",props:{initData:{type:Boolean,default:!0},tableColumns:Array,reqTableDataFunc:{type:Function},currentChange:{type:Function,default:function(a,e){}},searchData:Object,pageSize:{type:Number,default:10},rowSelection:Object,rowKey:{type:[String,Function]},scrollX:{type:Number,default:500},tableRowCrossColor:{type:Boolean,default:!1}},data:function(){return{apiResData:{total:0,records:[]},iPage:{pageNumber:1,pageSize:this.pageSize},pagination:{total:0,current:1,pageSize:this.pageSize,showSizeChanger:!0,showTotal:function(a){return"共".concat(a,"条")}},showLoading:!1}},computed:{columnsCustomSlots:function(){return this.tableColumns.filter((function(a){return a.scopedSlots})).map((function(a){return a.scopedSlots}))}},mounted:function(){this.initData&&this.refTable(!0)},methods:{handleTableChange:function(a,e,t){this.pagination=a,this.iPage=Object(s["a"])({pageSize:a.pageSize,pageNumber:a.current,sortField:t.columnKey,sortOrder:t.order},e),this.refTable()},refTable:function(){var a=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this;e&&(this.iPage.pageNumber=1,this.pagination.current=1),this.showLoading=!0,this.reqTableDataFunc(Object.assign({},this.iPage,this.searchData)).then((function(e){a.pagination.total=e.total,a.apiResData=e,a.showLoading=!1,0===e.records.length&&a.iPage.pageNumber>1&&t.$nextTick((function(){var r=e.total/a.iPage.pageSize+(e.total%a.iPage.pageSize===0?0:1);if(0===r)return!1;var i=a.iPage.pageNumber-1>r?r:a.iPage.pageNumber-1;a.iPage.pageNumber=i,a.pagination.current=i,t.refTable(!1)})),t.$emit("btnLoadClose")})).catch((function(e){a.showLoading=!1,t.$emit("btnLoadClose")}))}}}),n=o,l=(t("f705"),t("2877")),c=Object(l["a"])(n,r,i,!1,null,null,null);e["a"]=c.exports},f705:function(a,e,t){"use strict";t("27fc")}}]);