(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7714ae12","chunk-3c59f432"],{"0f44":function(a,t,e){a.exports=e.p+"assets/auto_bar.f1c2a219.svg"},"0f98":function(a,t,e){a.exports=e.p+"assets/wx_h5.d4c71133.svg"},"18dc":function(a,t,e){"use strict";e("5c3b")},"2ae0":function(a,t,e){a.exports=e.p+"assets/pp_pc.7cebc2df.svg"},"2c7b":function(a,t,e){a.exports=e.p+"assets/ali_wap.6b5fbf9f.svg"},"47b2":function(a,t,e){a.exports=e.p+"assets/wx_bar.09985b5b.svg"},"5c3b":function(a,t,e){},6574:function(a,t,e){a.exports=e.p+"assets/wx_native.864fc197.svg"},7784:function(a,t,e){a.exports=e.p+"assets/ali_pc.7f9ddac5.svg"},"7ad8":function(a,t,e){a.exports=e.p+"assets/ali_qr.b8746a3e.svg"},"7f3f":function(a,t,e){a.exports=e.p+"assets/wx_jsapi.835aac8f.svg"},"83da":function(a,t,e){a.exports=e.p+"assets/ali_jsapi.9cc085e5.svg"},"96fe":function(a,t,e){a.exports=e.p+"assets/ali_bar.9d308c59.svg"},a034:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("a-card",{staticStyle:{"box-sizing":"border-box",padding:"30px"}},[s("a-form",[s("div",{staticStyle:{display:"flex","flex-direction":"row"}},[s("a-form-item",{staticClass:"table-head-layout",attrs:{label:""}},[s("a-select",{staticStyle:{width:"300px"},on:{change:a.changeAppId},model:{value:a.appId,callback:function(t){a.appId=t},expression:"appId"}},[s("a-select-option",{key:""},[a._v("应用APPID")]),a._l(a.mchAppList,(function(t){return s("a-select-option",{key:t.appId},[a._v(a._s(t.appName)+" ["+a._s(t.appId)+"]")])}))],2)],1)],1)]),a.appId?a.noConfigText?s("a-divider",[a._v("您尚未配置任何支付方式")]):s("a-divider"):s("a-divider",[a._v("请选择应用APPID")]),a.payTestShow()?s("div",{staticClass:"paydemo",staticStyle:{width:"100%"}},[s("div",{staticClass:"paydemo-type-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:a.showTitle("WX"),expression:"showTitle('WX')"}],staticClass:"paydemo-type-name article-title"},[a._v("微信支付")]),s("div",{staticClass:"paydemo-type-body"},[s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("WX_NATIVE")>=0,expression:"appPaywayList.indexOf('WX_NATIVE') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"WX_NATIVE"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("WX_NATIVE","codeImgUrl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("6574")}}),s("span",{staticClass:"color-change"},[a._v("微信二维码")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("WX_BAR")>=0,expression:"appPaywayList.indexOf('WX_BAR') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"WX_BAR"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("WX_BAR","")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("47b2")}}),s("span",{staticClass:"color-change"},[a._v("微信条码")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("WX_JSAPI")>=0,expression:"appPaywayList.indexOf('WX_JSAPI') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"WX_JSAPI"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("WX_JSAPI","codeImgUrl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("7f3f")}}),s("span",{staticClass:"color-change"},[a._v("公众号/小程序")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("WX_H5")>=0,expression:"appPaywayList.indexOf('WX_H5') >= 0"}],staticClass:"paydemo-type-h5",class:{this:"WX_H5"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("WX_H5","payurl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("0f98")}}),s("span",{staticClass:"color-change"},[a._v("微信H5")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.showTitle("ALI"),expression:"showTitle('ALI')"}],staticClass:"paydemo-type-name article-title"},[a._v("支付宝支付")]),s("div",{staticClass:"paydemo-type-body"},[s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("ALI_QR")>=0,expression:"appPaywayList.indexOf('ALI_QR') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"ALI_QR"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("ALI_QR","codeImgUrl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("7ad8")}}),s("span",{staticClass:"color-change"},[a._v("支付宝二维码")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("ALI_BAR")>=0,expression:"appPaywayList.indexOf('ALI_BAR') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"ALI_BAR"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("ALI_BAR","")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("96fe")}}),s("span",{staticClass:"color-change"},[a._v("支付宝条码")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("ALI_JSAPI")>=0,expression:"appPaywayList.indexOf('ALI_JSAPI') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"ALI_JSAPI"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("ALI_JSAPI","codeImgUrl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("83da")}}),s("span",{staticClass:"color-change"},[a._v("支付宝生活号")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("ALI_PC")>=0,expression:"appPaywayList.indexOf('ALI_PC') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"ALI_PC"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("ALI_PC","payurl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("7784")}}),s("span",{staticClass:"color-change"},[a._v("支付宝PC网站")])]),s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("ALI_WAP")>=0,expression:"appPaywayList.indexOf('ALI_WAP') >= 0"}],staticClass:"paydemo-type-h5",class:{this:"ALI_WAP"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("ALI_WAP","payurl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("2c7b")}}),s("span",{staticClass:"color-change"},[a._v("支付宝WAP")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.showQtTitle(),expression:"showQtTitle()"}],staticClass:"paydemo-type-name article-title"},[a._v("其它支付")]),s("div",{staticClass:"paydemo-type-body"},[s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("WX_JSAPI")>=0||a.appPaywayList.indexOf("ALI_JSAPI")>=0,expression:"appPaywayList.indexOf('WX_JSAPI') >= 0 || appPaywayList.indexOf('ALI_JSAPI') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"QR_CASHIER"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("QR_CASHIER","codeImgUrl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("d07c")}}),s("span",{staticClass:"color-change"},[a._v("聚合主扫")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("WX_BAR")>=0||a.appPaywayList.indexOf("ALI_BAR")>=0,expression:"appPaywayList.indexOf('WX_BAR') >= 0 || appPaywayList.indexOf('ALI_BAR') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"AUTO_BAR"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("AUTO_BAR","codeImgUrl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("0f44")}}),s("span",{staticClass:"color-change"},[a._v("聚合被扫")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.appPaywayList.indexOf("PP_PC")>=0,expression:"appPaywayList.indexOf('PP_PC') >= 0"}],staticClass:"paydemo-type color-change",class:{this:"PP_PC"===a.currentWayCode},on:{click:function(t){return a.changeCurrentWayCode("PP_PC","payurl")}}},[s("img",{staticClass:"paydemo-type-img",attrs:{src:e("2ae0")}}),s("span",{staticClass:"color-change"},[a._v("PayPal支付")])])])]),s("a-divider"),s("div",{staticClass:"paydemo-type-content"},[s("div",{staticClass:"paydemo-type-name article-title"},[a._v("支付信息")]),s("form",{staticClass:"layui-form"},[s("div",{staticClass:"paydemo-form-item"},[s("label",[a._v("订单编号：")]),s("span",{attrs:{id:"payMchOrderNo"}},[a._v(a._s(a.mchOrderNo))]),s("span",{staticClass:" paydemo-btn",staticStyle:{padding:"0 3px"},on:{click:a.randomOrderNo}},[a._v("刷新订单号")])]),s("div",{staticClass:"paydemo-form-item"},[s("label",[a._v("订单标题：")]),s("a-input",{staticStyle:{width:"200px"},model:{value:a.orderTitle,callback:function(t){a.orderTitle=t},expression:"orderTitle"}})],1),s("div",{staticClass:"paydemo-form-item"},[s("label",[a._v("分账方式：")]),s("a-radio-group",{staticStyle:{display:"flex"},model:{value:a.divisionMode,callback:function(t){a.divisionMode=t},expression:"divisionMode"}},[s("div",{staticStyle:{display:"flex"}},[s("a-radio",{attrs:{value:0}},[a._v("订单不分账")]),s("a-radio",{attrs:{value:1}},[a._v("支付完成自动分账")]),s("a-radio",{attrs:{value:2}},[a._v("手动分账（冻结商户资金， 只能通过API发起分账后解冻）")])],1)])],1),s("a-divider"),s("div",{staticClass:"paydemo-form-item"},[s("span",[a._v("支付金额(元)：")]),s("a-radio-group",{staticStyle:{display:"flex"},attrs:{name:"radioGroup","default-value":.01}},[s("div",{staticStyle:{display:"flex"},on:{click:function(t){a.amountInput=!1}}},[s("a-radio",{attrs:{value:.01},on:{click:function(t){a.paytestAmount=.01}}},[a._v("￥0.01")]),s("a-radio",{attrs:{value:.15},on:{click:function(t){a.paytestAmount=.15}}},[a._v("￥0.15")]),s("a-radio",{attrs:{value:.21},on:{click:function(t){a.paytestAmount=.21}}},[a._v("￥0.21")]),s("a-radio",{attrs:{value:.29},on:{click:function(t){a.paytestAmount=.29}}},[a._v("￥0.29")]),s("a-radio",{attrs:{value:.64},on:{click:function(t){a.paytestAmount=.64}}},[a._v("￥0.64")])],1),s("a-radio",{on:{click:a.amountInputShow}},[s("span",{staticStyle:{"margin-right":"3px"}},[a._v("自定义金额")]),s("a-input-number",{directives:[{name:"show",rawName:"v-show",value:a.amountInput,expression:"amountInput"}],ref:"amountInputFocus",attrs:{max:1e5,min:.01,precision:2},model:{value:a.paytestAmount,callback:function(t){a.paytestAmount=t},expression:"paytestAmount"}})],1)],1)],1),s("div",{staticStyle:{"margin-top":"20px","text-align":"left"}},[s("a-button",{staticStyle:{padding:"5px 20px","background-color":"#1953ff","border-radius":"5px",color:"#fff"},on:{click:a.immediatelyPay}},[a._v("立即支付")])],1)],1)])],1):a._e()],1),s("pay-test-modal",{ref:"payTestModal",on:{closeBarCode:function(t){a.$refs.payTestBarCode.visible=!1}}}),s("pay-test-bar-code",{ref:"payTestBarCode",on:{barCodeValue:a.barCodeChange,CodeAgainChange:a.testCodeChange}})],1)},i=[],o=(e("d3b7"),e("25f0"),e("0fea")),n=e("6bf0"),r=e("d35f"),c={props:{},components:{PayTestModal:n["default"],PayTestBarCode:r["default"]},data:function(){return{mchAppList:[],appId:"",appPaywayList:[],currentWayCode:"",currentPayDataType:"",mchOrderNo:"",authCode:"",paytestAmount:"0.01",amountInput:!1,noConfigText:!1,divisionMode:0,orderTitle:"接口调试"}},mounted:function(){var a=this,t=this.$route.params.appId;t&&(this.appId=t,this.appPaywayListHandle(t));var e=this;o["G"].list(o["c"],{pageSize:-1}).then((function(t){e.mchAppList=t.records,e.mchAppList.length>0&&(e.appId=e.mchAppList[0].appId,a.appPaywayListHandle(e.appId))})),this.randomOrderNo()},methods:{payTestShow:function(){return""!==this.appId&&0!==this.appPaywayList.length},changeCurrentWayCode:function(a,t){this.currentWayCode=a,this.currentPayDataType=t},changeAppId:function(a){this.appPaywayListHandle(a)},randomOrderNo:function(){this.mchOrderNo="M"+(new Date).getTime()+Math.floor(8999*Math.random()+1e3)},barCodeChange:function(a){this.authCode=a,this.immediatelyPay()},appPaywayListHandle:function(a){if(!a)return this.appPaywayList=[],!1;var t=this;Object(o["C"])(a).then((function(a){t.appPaywayList=a,0===a.length?t.noConfigText=!0:t.noConfigText=!1}))},immediatelyPay:function(){var a=this;if(!this.paytestAmount||0===this.paytestAmount)return this.$message.error("请输入支付金额");if(""===this.currentWayCode)return this.$message.error("请选择支付方式");if(!this.orderTitle||this.orderTitle.length>20)return this.$message.error("请输入正确的订单标题[20字以内]");if(this.$refs.payTestBarCode.getVisible()||"WX_BAR"!==this.currentWayCode&&"ALI_BAR"!==this.currentWayCode&&"AUTO_BAR"!==this.currentWayCode){var t=this;Object(o["D"])({wayCode:"WX_JSAPI"===this.currentWayCode||"ALI_JSAPI"===this.currentWayCode?"QR_CASHIER":this.currentWayCode,amount:this.paytestAmount,appId:this.appId,mchOrderNo:this.mchOrderNo,payDataType:this.currentPayDataType,authCode:this.authCode,divisionMode:this.divisionMode,orderTitle:this.orderTitle}).then((function(e){t.$refs.payTestModal.showModal(a.currentWayCode,e),t.randomOrderNo()})).catch((function(){t.$refs.payTestBarCode.processCatch(),t.randomOrderNo()}))}else this.$refs.payTestBarCode.showModal()},showTitle:function(a){return-1!==this.appPaywayList.toString().indexOf(a)},showQtTitle:function(){return-1!==this.appPaywayList.toString().indexOf("WX")||-1!==this.appPaywayList.toString().indexOf("ALI")||-1!==this.appPaywayList.toString().indexOf("PP_PC")},amountInputShow:function(){var a=this;this.$nextTick((function(){a.$refs.amountInputFocus.focus()})),this.amountInput=!0,this.paytestAmount=""},testCodeChange:function(){this.randomOrderNo()}}},p=c,d=(e("18dc"),e("2877")),l=Object(d["a"])(p,s,i,!1,null,"799e7db3",null);t["default"]=l.exports},d07c:function(a,t,e){a.exports=e.p+"assets/qr_cashier.e47221e3.svg"},d35f:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("a-modal",{attrs:{title:"条码支付",footer:null,width:350},on:{cancel:a.handleChose},model:{value:a.visible,callback:function(t){a.visible=t},expression:"visible"}},[s("div",[s("p",[a._v("请输入用户条形码:")]),s("div",{staticStyle:{display:"flex","flex-direction":"row","margin-bottom":"14px"}},[s("a-input",{ref:"barCodeInput",on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.handleOk.apply(null,arguments)}},model:{value:a.barCodeValue,callback:function(t){a.barCodeValue=t},expression:"barCodeValue"}}),s("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:a.loading},on:{click:a.handleOk}},[a._v("确认支付")])],1),s("p",[a._v("或者使用(扫码枪/扫码盒)扫码:")]),s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e("ff75"),alt:""}})])])])],1)},i=[],o={data:function(){return{visible:!1,barCodeValue:"",loading:!1}},methods:{showModal:function(){var a=this;this.loading=!1,this.barCodeValue="",this.visible=!0,this.$nextTick((function(){a.$refs.barCodeInput.focus()}))},handleOk:function(){""!==this.barCodeValue&&(this.loading=!0,this.$emit("barCodeValue",this.barCodeValue))},handleChose:function(){this.$emit("CodeAgainChange")},getVisible:function(){return this.visible},processCatch:function(){this.loading=!1}}},n=o,r=e("2877"),c=Object(r["a"])(n,s,i,!1,null,null,null);t["default"]=c.exports},ff75:function(a,t,e){a.exports=e.p+"assets/scan.9c0e0a28.svg"}}]);