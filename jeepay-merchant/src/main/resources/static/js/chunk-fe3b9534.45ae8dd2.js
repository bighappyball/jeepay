(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe3b9534"],{"0fea":function(e,t,r){"use strict";r.d(t,"G",(function(){return n})),r.d(t,"H",(function(){return u})),r.d(t,"k",(function(){return s})),r.d(t,"j",(function(){return o})),r.d(t,"l",(function(){return i})),r.d(t,"n",(function(){return c})),r.d(t,"c",(function(){return p})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return v})),r.d(t,"m",(function(){return b})),r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return O})),r.d(t,"g",(function(){return q})),r.d(t,"M",(function(){return T})),r.d(t,"r",(function(){return j})),r.d(t,"J",(function(){return S})),r.d(t,"u",(function(){return g})),r.d(t,"C",(function(){return E})),r.d(t,"D",(function(){return k})),r.d(t,"p",(function(){return I})),r.d(t,"w",(function(){return G})),r.d(t,"v",(function(){return w})),r.d(t,"x",(function(){return C})),r.d(t,"y",(function(){return A})),r.d(t,"t",(function(){return P})),r.d(t,"L",(function(){return F})),r.d(t,"K",(function(){return R})),r.d(t,"z",(function(){return _})),r.d(t,"A",(function(){return x})),r.d(t,"E",(function(){return M})),r.d(t,"F",(function(){return $})),r.d(t,"q",(function(){return B})),r.d(t,"o",(function(){return U})),r.d(t,"s",(function(){return N})),r.d(t,"B",(function(){return J})),r.d(t,"I",(function(){return L}));r("2ca0"),r("ac1f"),r("5319");var a=r("4667"),n={list:function(e,t){return a["a"].request({url:e,method:"GET",params:t},!0,!0,!1)},add:function(e,t){return a["a"].request({url:e,method:"POST",data:t},!0,!0,!1)},getById:function(e,t){return a["a"].request({url:e+"/"+t,method:"GET"},!0,!0,!1)},updateById:function(e,t,r){return a["a"].request({url:e+"/"+t,method:"PUT",data:r},!0,!0,!1)},delById:function(e,t){return a["a"].request({url:e+"/"+t,method:"DELETE"},!0,!0,!1)}},u={list:function(e,t){return a["a"].request({url:e,method:"GET",params:t},!0,!0,!0)},add:function(e,t){return a["a"].request({url:e,method:"POST",data:t},!0,!0,!0)},getById:function(e,t){return a["a"].request({url:e+"/"+t,method:"GET"},!0,!0,!0)},updateById:function(e,t,r){return a["a"].request({url:e+"/"+t,method:"PUT",data:r},!0,!0,!0)},delById:function(e,t){return a["a"].request({url:e+"/"+t,method:"DELETE"},!0,!0,!0)}},s="/api/sysRoles",o="/api/sysRoleEntRelas",i="/api/sysUsers",c="/api/sysUserRoleRelas",d="api/mainChart",p="/api/mchApps",l="/api/payOrder",f="/api/refundOrder",m="/api/payWays",h="/api/mch/payConfigs",v="/api/mch/payPassages",b="/api/transferOrders",y="/api/divisionReceiverGroups",O="/api/divisionReceivers",q="/api/division/records",T={avatar:a["a"].baseUrl+"/api/ossFiles/avatar",cert:a["a"].baseUrl+"/api/ossFiles/cert"};function j(){return a["a"].request({url:"/api/sysEnts/showTree",method:"GET"})}function S(e,t){return a["a"].request({url:"api/sysUserRoleRelas/relas/"+e,method:"POST",data:{roleIdListStr:JSON.stringify(t)}})}function g(e,t){return a["a"].request({url:"/api/mch/payConfigs/"+e+"/"+t,method:"get"})}function E(e){return a["a"].request({url:"api/paytest/payways/"+e,method:"GET"})}function k(e){return a["a"].request({url:"/api/paytest/payOrders",method:"POST",data:e})}function I(e,t){return a["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+e+"/"+t,method:"GET"})}function G(){return a["a"].request({url:d+"/payAmountWeek",method:"GET"})}function w(){return a["a"].request({url:d+"/numCount",method:"GET"})}function C(e){return a["a"].request({url:d+"/payCount",method:"GET",params:e})}function A(e){return a["a"].request({url:d+"/payTypeCount",method:"GET",params:e})}function P(){return a["a"].request({url:d,method:"GET"})}function F(e){return a["a"].request({url:"/api/current/modifyPwd",method:"put",data:e})}function R(e){return a["a"].request({url:"/api/current/user",method:"put",data:e})}function _(){return a["a"].request({url:"/api/current/user",method:"get"})}function x(){var e=document.location.protocol+"//"+document.location.host;return e.startsWith("https:")?"wss://"+e.replace("https://",""):"ws://"+e.replace("http://","")}function M(e){return a["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+e,method:"GET"})}function $(e){return a["a"].request({url:"api/mchTransfers/ifCodes/"+e,method:"GET"})}function B(e,t,r){return a["a"].request({url:"/api/mchTransfers/channelUserId",method:"GET",params:{ifCode:e,appId:t,extParam:r}})}function U(e){return a["a"].request({url:"/api/mchTransfers/doTransfer",method:"POST",data:e},!0,!0,!0)}function N(e){return a["a"].request({url:"/api/mch/payConfigs/ifCodes/"+e,method:"GET"},!0,!0,!0)}function J(e,t,r){return a["a"].request({url:"/api/payOrder/refunds/"+e,method:"POST",data:{refundAmount:t,refundReason:r}})}function L(e){return a["a"].request({url:"/api/division/records/resend/"+e,method:"POST"})}},5071:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{visible:e.visible,title:e.isAdd?"新增应用":"修改应用",width:"40%",maskClosable:!1},on:{close:e.onClose}},[r("a-form-model",{ref:"infoFormModel",attrs:{model:e.saveObject,layout:"vertical",rules:e.rules}},[r("a-row",{attrs:{gutter:16}},[e.isAdd?e._e():r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"应用 AppId",prop:"appId"}},[r("a-input",{attrs:{placeholder:"请输入",disabled:!e.isAdd},model:{value:e.saveObject.appId,callback:function(t){e.$set(e.saveObject,"appId",t)},expression:"saveObject.appId"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"应用名称",prop:"appName"}},[r("a-input",{attrs:{placeholder:"请输入"},model:{value:e.saveObject.appName,callback:function(t){e.$set(e.saveObject,"appName",t)},expression:"saveObject.appName"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"状态",prop:"state"}},[r("a-radio-group",{model:{value:e.saveObject.state,callback:function(t){e.$set(e.saveObject,"state",t)},expression:"saveObject.state"}},[r("a-radio",{attrs:{value:1}},[e._v(" 启用 ")]),r("a-radio",{attrs:{value:0}},[e._v(" 停用 ")])],1)],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"私钥 AppSecret",prop:"appSecret"}},[r("a-input",{attrs:{placeholder:e.saveObject.appSecret_ph,type:"textarea"},model:{value:e.saveObject.appSecret,callback:function(t){e.$set(e.saveObject,"appSecret",t)},expression:"saveObject.appSecret"}}),r("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(t){return e.randomKey(!1,128,0)}}},[r("a-icon",{attrs:{type:"file-sync"}}),e._v("随机生成私钥")],1)],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[r("a-input",{attrs:{placeholder:"请输入"},model:{value:e.saveObject.remark,callback:function(t){e.$set(e.saveObject,"remark",t)},expression:"saveObject.remark"}})],1)],1)],1)],1),r("div",{staticClass:"drawer-btn-center"},[r("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:e.onClose}},[e._v("取消")]),r("a-button",{attrs:{type:"primary",icon:"check"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)},n=[],u=r("0fea"),s={props:{callbackFunc:{type:Function,default:function(){return function(){return{}}}}},data:function(){return{isAdd:!0,visible:!1,appId:"",saveObject:{},rules:{appName:[{required:!0,message:"请输入应用名称",trigger:"blur"}]}}},methods:{show:function(e){this.isAdd=!e,this.saveObject={state:1,appSecret:"",appSecret_ph:"请输入"},void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields();var t=this;t.rules.appSecret=[],this.isAdd?(t.rules.appSecret.push({required:!0,message:"请输入私钥或点击随机生成私钥",trigger:"blur"}),t.visible=!0):(t.appId=e,u["G"].getById(u["c"],e).then((function(e){t.saveObject=e,t.saveObject.appSecret_ph=e.appSecret,t.saveObject.appSecret=""})),this.visible=!0)},onSubmit:function(){var e=this;this.$refs.infoFormModel.validate((function(t){t&&(delete e.saveObject.appSecret_ph,e.isAdd?u["G"].add(u["c"],e.saveObject).then((function(t){e.$message.success("新增成功"),e.visible=!1,e.callbackFunc()})):(""===e.saveObject.appSecret&&delete e.saveObject.appSecret,u["G"].updateById(u["c"],e.appId,e.saveObject).then((function(t){e.$message.success("修改成功"),e.visible=!1,e.callbackFunc()}))))}))},randomKey:function(e,t,r){var a="",n=t,u=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(n=Math.round(Math.random()*(r-t))+t);for(var s=0;s<n;s++){var o=Math.round(Math.random()*(u.length-1));a+=u[o]}this.saveObject.appSecret=a},onClose:function(){this.visible=!1}}},o=s,i=r("2877"),c=Object(i["a"])(o,a,n,!1,null,"0e67a9c0",null);t["default"]=c.exports}}]);