(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13660f92"],{"0fea":function(a,t,e){"use strict";e.d(t,"H",(function(){return i})),e.d(t,"I",(function(){return s})),e.d(t,"a",(function(){return n})),e.d(t,"n",(function(){return o})),e.d(t,"m",(function(){return u})),e.d(t,"q",(function(){return l})),e.d(t,"s",(function(){return c})),e.d(t,"c",(function(){return d})),e.d(t,"f",(function(){return p})),e.d(t,"e",(function(){return f})),e.d(t,"k",(function(){return m})),e.d(t,"l",(function(){return y})),e.d(t,"g",(function(){return b})),e.d(t,"p",(function(){return v})),e.d(t,"o",(function(){return h})),e.d(t,"b",(function(){return g})),e.d(t,"j",(function(){return C})),e.d(t,"d",(function(){return x})),e.d(t,"h",(function(){return _})),e.d(t,"i",(function(){return S})),e.d(t,"r",(function(){return O})),e.d(t,"M",(function(){return E})),e.d(t,"w",(function(){return k})),e.d(t,"F",(function(){return T})),e.d(t,"J",(function(){return j})),e.d(t,"x",(function(){return R})),e.d(t,"y",(function(){return q})),e.d(t,"t",(function(){return $})),e.d(t,"A",(function(){return I})),e.d(t,"z",(function(){return K})),e.d(t,"B",(function(){return A})),e.d(t,"C",(function(){return w})),e.d(t,"L",(function(){return F})),e.d(t,"K",(function(){return U})),e.d(t,"D",(function(){return L})),e.d(t,"u",(function(){return G})),e.d(t,"v",(function(){return J})),e.d(t,"E",(function(){return M})),e.d(t,"G",(function(){return B}));var r=e("4667"),i={list:function(a,t){return r["a"].request({url:a,method:"GET",params:t},!0,!0,!1)},add:function(a,t){return r["a"].request({url:a,method:"POST",data:t},!0,!0,!1)},getById:function(a,t){return r["a"].request({url:a+"/"+t,method:"GET"},!0,!0,!1)},updateById:function(a,t,e){return r["a"].request({url:a+"/"+t,method:"PUT",data:e},!0,!0,!1)},delById:function(a,t){return r["a"].request({url:a+"/"+t,method:"DELETE"},!0,!0,!1)}},s={list:function(a,t){return r["a"].request({url:a,method:"GET",params:t},!0,!0,!0)},add:function(a,t){return r["a"].request({url:a,method:"POST",data:t},!0,!0,!0)},getById:function(a,t){return r["a"].request({url:a+"/"+t,method:"GET"},!0,!0,!0)},updateById:function(a,t,e){return r["a"].request({url:a+"/"+t,method:"PUT",data:e},!0,!0,!0)},delById:function(a,t){return r["a"].request({url:a+"/"+t,method:"DELETE"},!0,!0,!0)}},n="/api/sysEnts",o="/api/sysRoles",u="/api/sysRoleEntRelas",l="/api/sysUsers",c="/api/sysUserRoleRelas",d="/api/isvInfo",p="/api/mchInfo",f="/api/mchApps",m="/api/payOrder",y="/api/refundOrder",b="/api/mchNotify",v="api/sysLog",h="api/sysConfigs",P="api/mainChart",g="/api/payIfDefines",C="/api/payWays",x="/api/isv/payConfigs",_="/api/mch/payConfigs",S="/api/mch/payPassages",O="/api/transferOrders",E={avatar:r["a"].baseUrl+"/api/ossFiles/avatar",ifBG:r["a"].baseUrl+"/api/ossFiles/ifBG",cert:r["a"].baseUrl+"/api/ossFiles/cert"};function k(a){return r["a"].request({url:"/api/sysEnts/showTree?sysType="+a,method:"GET"})}function T(a,t,e){return r["a"].request({url:"/api/payOrder/refunds/"+a,method:"POST",data:{refundAmount:t,refundReason:e}})}function j(a,t){return r["a"].request({url:"api/sysUserRoleRelas/relas/"+a,method:"POST",data:{roleIdListStr:JSON.stringify(t)}})}function R(a,t){return r["a"].request({url:"/api/isv/payConfigs/"+a+"/"+t,method:"get"})}function q(a,t){return r["a"].request({url:"/api/mch/payConfigs/"+a+"/"+t,method:"get"})}function $(a,t){return r["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+a+"/"+t,method:"GET"})}function I(){return r["a"].request({url:P+"/payAmountWeek",method:"GET"})}function K(){return r["a"].request({url:P+"/numCount",method:"GET"})}function A(a){return r["a"].request({url:P+"/payCount",method:"GET",params:a})}function w(a){return r["a"].request({url:P+"/payTypeCount",method:"GET",params:a})}function F(a){return r["a"].request({url:"/api/current/modifyPwd",method:"put",data:a})}function U(a){return r["a"].request({url:"/api/current/user",method:"put",data:a})}function L(){return r["a"].request({url:"/api/current/user",method:"get"})}function G(a){return r["a"].request({url:h+"/"+a,method:"GET"})}function J(a,t){return r["a"].request({url:"/api/sysEnts/bySysType",method:"GET",params:{entId:a,sysType:t}})}function M(a){return r["a"].request({url:"/api/mchNotify/resend/"+a,method:"POST"})}function B(a){return r["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+a,method:"GET"})}},"61d4":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-drawer",{attrs:{title:"填写参数",width:"40%",closable:!0,maskClosable:!1,visible:a.visible,"body-style":{paddingBottom:"80px"}},on:{close:a.onClose}},[e("a-form-model",{ref:"infoFormModel",attrs:{model:a.saveObject,layout:"vertical",rules:a.rules}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{attrs:{span:12}},[e("a-form-model-item",{attrs:{label:"支付接口费率",prop:"ifRate"}},[e("a-input",{attrs:{placeholder:"请输入",suffix:"%"},model:{value:a.saveObject.ifRate,callback:function(t){a.$set(a.saveObject,"ifRate",t)},expression:"saveObject.ifRate"}})],1)],1),e("a-col",{attrs:{span:12}},[e("a-form-model-item",{attrs:{label:"状态",prop:"state"}},[e("a-radio-group",{model:{value:a.saveObject.state,callback:function(t){a.$set(a.saveObject,"state",t)},expression:"saveObject.state"}},[e("a-radio",{attrs:{value:1}},[a._v(" 启用 ")]),e("a-radio",{attrs:{value:0}},[a._v(" 停用 ")])],1)],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[e("a-input",{attrs:{placeholder:"请输入",type:"textarea"},model:{value:a.saveObject.remark,callback:function(t){a.$set(a.saveObject,"remark",t)},expression:"saveObject.remark"}})],1)],1)],1)],1),e("a-divider",{attrs:{orientation:"left"}},[e("a-tag",{attrs:{color:"#FF4B33"}},[a._v(" "+a._s(a.saveObject.ifCode)+" 服务商参数配置 ")])],1),e("a-form-model",{ref:"isvParamFormModel",attrs:{model:a.ifParams,layout:"vertical",rules:a.ifParamsRules}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{attrs:{span:"24"}},[e("a-form-model-item",{attrs:{label:"环境配置",prop:"sandbox"}},[e("a-radio-group",{model:{value:a.ifParams.sandbox,callback:function(t){a.$set(a.ifParams,"sandbox",t)},expression:"ifParams.sandbox"}},[e("a-radio",{attrs:{value:1}},[a._v("沙箱环境")]),e("a-radio",{attrs:{value:0}},[a._v("生产环境")])],1)],1)],1),e("a-col",{attrs:{span:"12"}},[e("a-form-model-item",{attrs:{label:"合作伙伴身份（PID）",prop:"pid"}},[e("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.pid,callback:function(t){a.$set(a.ifParams,"pid",t)},expression:"ifParams.pid"}})],1)],1),e("a-col",{attrs:{span:"12"}},[e("a-form-model-item",{attrs:{label:"应用AppID",prop:"appId"}},[e("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.appId,callback:function(t){a.$set(a.ifParams,"appId",t)},expression:"ifParams.appId"}})],1)],1),e("a-col",{attrs:{span:"24"}},[e("a-form-model-item",{attrs:{label:"应用私钥",prop:"privateKey"}},[e("a-input",{attrs:{placeholder:a.ifParams.privateKey_ph,type:"textarea"},model:{value:a.ifParams.privateKey,callback:function(t){a.$set(a.ifParams,"privateKey",t)},expression:"ifParams.privateKey"}})],1)],1),e("a-col",{attrs:{span:"24"}},[e("a-form-model-item",{attrs:{label:"支付宝公钥",prop:"alipayPublicKey"}},[e("a-input",{attrs:{placeholder:a.ifParams.alipayPublicKey_ph,type:"textarea"},model:{value:a.ifParams.alipayPublicKey,callback:function(t){a.$set(a.ifParams,"alipayPublicKey",t)},expression:"ifParams.alipayPublicKey"}})],1)],1),e("a-col",{attrs:{span:"12"}},[e("a-form-model-item",{attrs:{label:"接口签名方式(推荐使用RSA2)",prop:"signType"}},[e("a-radio-group",{attrs:{defaultValue:"RSA"},model:{value:a.ifParams.signType,callback:function(t){a.$set(a.ifParams,"signType",t)},expression:"ifParams.signType"}},[e("a-radio",{attrs:{value:"RSA"}},[a._v("RSA")]),e("a-radio",{attrs:{value:"RSA2"}},[a._v("RSA2")])],1)],1)],1),e("a-col",{attrs:{span:"12"}},[e("a-form-model-item",{attrs:{label:"公钥证书",prop:"useCert"}},[e("a-radio-group",{attrs:{defaultValue:"1"},model:{value:a.ifParams.useCert,callback:function(t){a.$set(a.ifParams,"useCert",t)},expression:"ifParams.useCert"}},[e("a-radio",{attrs:{value:1}},[a._v("使用证书（请使用RSA2私钥）")]),e("a-radio",{attrs:{value:0}},[a._v("不使用证书")])],1)],1)],1),e("a-col",{attrs:{span:"24"}},[e("a-form-model-item",{attrs:{label:"应用公钥证书（.crt格式）",prop:"appPublicCert"}},[e("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.appPublicCert,callback:function(t){a.$set(a.ifParams,"appPublicCert",t)},expression:"ifParams.appPublicCert"}}),e("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.appPublicCert},on:{uploadSuccess:function(t){return a.uploadSuccess(t,"appPublicCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(t){var r=t.loading;return[e("a-button",{staticStyle:{marginTop:"5px"}},[e("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}])})],1)],1),e("a-col",{attrs:{span:"24"}},[e("a-form-model-item",{attrs:{label:"支付宝公钥证书（.crt格式）",prop:"alipayPublicCert"}},[e("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.alipayPublicCert,callback:function(t){a.$set(a.ifParams,"alipayPublicCert",t)},expression:"ifParams.alipayPublicCert"}}),e("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.alipayPublicCert},on:{uploadSuccess:function(t){return a.uploadSuccess(t,"alipayPublicCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(t){var r=t.loading;return[e("a-button",{staticStyle:{marginTop:"5px"}},[e("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}])})],1)],1),e("a-col",{attrs:{span:"24"}},[e("a-form-model-item",{attrs:{label:"支付宝根证书（.crt格式）",prop:"alipayRootCert"}},[e("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.alipayRootCert,callback:function(t){a.$set(a.ifParams,"alipayRootCert",t)},expression:"ifParams.alipayRootCert"}}),e("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.alipayRootCert},on:{uploadSuccess:function(t){return a.uploadSuccess(t,"alipayRootCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(t){var r=t.loading;return[e("a-button",{staticStyle:{marginTop:"5px"}},[e("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}])})],1)],1)],1)],1),a.$access("ENT_MCH_PAY_CONFIG_ADD")?e("div",{staticClass:"drawer-btn-center"},[e("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:a.onClose}},[a._v("取消")]),e("a-button",{attrs:{type:"primary",icon:"check",loading:a.btnLoading},on:{click:a.onSubmit}},[a._v("保存")])],1):a._e()],1)},i=[],s=(e("b64b"),e("c73b")),n=e("909a"),o=e("0fea"),u={components:{JeepayCard:s["a"],JeepayUpload:n["a"]},props:{callbackFunc:{type:Function,default:function(){return{}}}},data:function(){var a=this;return{btnLoading:!1,visible:!1,isAdd:!0,action:o["M"].cert,saveObject:{},ifParams:{},rules:{ifRate:[{required:!1,pattern:/^(([1-9]{1}\d{0,1})|(0{1}))(\.\d{1,4})?$/,message:"请输入0-100之间的数字，最多四位小数",trigger:"blur"}]},ifParamsRules:{pid:[{required:!0,message:"请输入合作伙伴身份（PID）",trigger:"blur"}],appId:[{required:!0,message:"请输入应用AppID",trigger:"blur"}],privateKey:[{trigger:"blur",validator:function(t,e,r){a.isAdd&&!e&&r(new Error("请输入应用私钥")),r()}}],alipayPublicKey:[{trigger:"blur",validator:function(t,e,r){0===a.ifParams.useCert&&a.isAdd&&!e&&r(new Error("请输入支付宝公钥")),r()}}],appPublicCert:[{trigger:"blur",validator:function(t,e,r){1!==a.ifParams.useCert||a.ifParams.appPublicCert||r(new Error("请上传应用公钥证书（.crt格式）")),r()}}],alipayPublicCert:[{trigger:"blur",validator:function(t,e,r){1!==a.ifParams.useCert||a.ifParams.alipayPublicCert||r(new Error("请上传支付宝公钥证书（.crt格式）")),r()}}],alipayRootCert:[{trigger:"blur",validator:function(t,e,r){1!==a.ifParams.useCert||a.ifParams.alipayRootCert||r(new Error("请上传支付宝根证书（.crt格式）")),r()}}]}}},methods:{show:function(a,t){void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields(),void 0!==this.$refs.isvParamFormModel&&this.$refs.isvParamFormModel.resetFields(),this.saveObject={infoId:a,ifCode:t.ifCode,state:0===t.ifConfigState?0:1},this.ifParams={sandbox:0,signType:"RSA2",useCert:0,privateKey:"",privateKey_ph:"请输入",alipayPublicKey:"",alipayPublicKey_ph:"请输入"},this.visible=!0,this.getIsvPayConfig()},getIsvPayConfig:function(){var a=this;Object(o["x"])(a.saveObject.infoId,a.saveObject.ifCode).then((function(t){t&&t.ifParams?(a.saveObject=t,a.ifParams=JSON.parse(t.ifParams),a.ifParams.privateKey_ph=a.ifParams.privateKey,a.ifParams.privateKey="",a.ifParams.alipayPublicKey_ph=a.ifParams.alipayPublicKey,a.ifParams.alipayPublicKey="",a.isAdd=!1):void 0===t&&(a.isAdd=!0)}))},onSubmit:function(){var a=this,t=this;this.$refs.infoFormModel.validate((function(e){a.$refs.isvParamFormModel.validate((function(r){if(e&&r){t.btnLoading=!0;var i={};if(i.infoId=t.saveObject.infoId,i.ifCode=t.saveObject.ifCode,i.ifRate=t.saveObject.ifRate,i.state=t.saveObject.state,i.remark=t.saveObject.remark,0===Object.keys(t.ifParams).length)return void a.$message.error("参数不能为空！");if(t.clearEmptyKey("privateKey"),t.clearEmptyKey("alipayPublicKey"),i.ifParams=JSON.stringify(t.ifParams),0===Object.keys(i).length)return void a.$message.error("参数不能为空！");o["H"].add(o["d"],i).then((function(a){t.$message.success("保存成功"),t.visible=!1,t.btnLoading=!1,t.callbackFunc()}))}}))}))},clearEmptyKey:function(a){this.ifParams[a]||(this.ifParams[a]=void 0),this.ifParams[a+"_ph"]=void 0},uploadSuccess:function(a,t){this.ifParams[t]=a,this.$forceUpdate()},onClose:function(){this.visible=!1}}},l=u,c=e("2877"),d=Object(c["a"])(l,r,i,!1,null,"78199d34",null);t["default"]=d.exports},"909a":function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("a-upload",{attrs:{name:"file",action:a.action,headers:a.headers,accept:a.accept,showUploadList:!1,multiple:!0,"before-upload":a.beforeUpload},on:{change:a.handleChange}},[a._t("uploadSlot",null,{loading:a.loading})],2)],1)},i=[],s=(e("a9e3"),e("381c")),n=e("ffef");function o(){var a={};return a[s["b"].ACCESS_TOKEN_NAME]=n["a"].getToken(),a}var u={name:"JeepayUpload",props:{action:{type:String,default:""},accept:{type:String,default:""},size:{type:Number,default:10},num:{type:Number,default:1}},data:function(){return{loading:!1,fileList:[],headers:o()}},created:function(){},methods:{handleChange:function(a){var t=a.file.response;"uploading"===a.file.status&&(this.loading=!0),"done"===a.file.status?(0!==t.code&&this.$message.error(t.msg),this.loading=!1,this.$emit("uploadSuccess",t.data)):"error"===a.file.status&&(console.log(a),this.$message.error("上传失败"))},beforeUpload:function(a){var t=a.size/1024/1024<this.size;return t||this.$message.error("文件应小于"+this.size+"M!"),t}}},l=u,c=e("2877"),d=Object(c["a"])(l,r,i,!1,null,null,null);t["a"]=d.exports},"9d22":function(a,t,e){"use strict";e("fd66")},c73b:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",[r("a-row",{staticStyle:{width:"100%"},attrs:{gutter:[24,24]}},[a.addAuthority?r("a-col",{attrs:{xxl:24/a.span.xxl,xl:24/a.span.xl,lg:24/a.span.lg,md:24/a.span.md,sm:24/a.span.sm,xs:24/a.span.xs},on:{click:function(t){return a.$emit("addJeepayCard")}}},[r("div",{staticClass:"jeepay-card-add",style:{height:a.height+"px"}},[r("div",{staticClass:"jeepay-card-add-top"},[r("img",{staticClass:"jeepay-card-add-icon",attrs:{src:e("e8c7"),alt:"add-icon"}}),r("img",{staticClass:"jeepay-card-add-icon-hover",attrs:{src:e("e19e"),alt:"add-icon"}})]),r("div",{staticClass:"jeepay-card-add-text"},[a._v(" 新建"+a._s(a.name)+" ")])])]):a._e(),a._l(a.cardList,(function(t,e){return r("a-col",{key:e,attrs:{xxl:24/a.span.xxl,xl:24/a.span.xl,lg:24/a.span.lg,md:24/a.span.md,sm:24/a.span.sm,xs:24/a.span.xs}},[a._t("cardContentSlot",null,{record:t}),a._t("cardOpSlot",null,{record:t})],2)}))],2)],1)},i=[],s=(e("a9e3"),{name:"JeepayCard",props:{span:{type:Object,default:function(){return{xxl:6,xl:4,lg:4,md:3,sm:2,xs:1}}},height:{type:Number,default:200},name:{type:String,default:""},addAuthority:{type:Boolean,default:!1},reqCardListFunc:{type:Function,default:function(){return function(){return{}}}}},data:function(){return{cardList:[]}},created:function(){this.refCardList()},methods:{refCardList:function(){var a=this;this.reqCardListFunc().then((function(t){a.cardList=t}))}}}),n=s,o=(e("9d22"),e("2877")),u=Object(o["a"])(n,r,i,!1,null,"47ed671f",null);t["a"]=u.exports},e19e:function(a,t,e){a.exports=e.p+"assets/add-icon-hover.50df40dd.svg"},e8c7:function(a,t,e){a.exports=e.p+"assets/add-icon.a2f73e90.svg"},fd66:function(a,t,e){}}]);