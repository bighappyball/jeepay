(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16fe2486","chunk-1250ae47"],{"0fea":function(t,e,a){"use strict";a.d(e,"G",(function(){return r})),a.d(e,"H",(function(){return o})),a.d(e,"k",(function(){return i})),a.d(e,"j",(function(){return s})),a.d(e,"l",(function(){return u})),a.d(e,"n",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"h",(function(){return f})),a.d(e,"i",(function(){return p})),a.d(e,"f",(function(){return m})),a.d(e,"d",(function(){return h})),a.d(e,"e",(function(){return b})),a.d(e,"m",(function(){return g})),a.d(e,"b",(function(){return v})),a.d(e,"a",(function(){return w})),a.d(e,"g",(function(){return y})),a.d(e,"M",(function(){return O})),a.d(e,"r",(function(){return j})),a.d(e,"J",(function(){return P})),a.d(e,"u",(function(){return T})),a.d(e,"C",(function(){return q})),a.d(e,"D",(function(){return x})),a.d(e,"p",(function(){return L})),a.d(e,"w",(function(){return U})),a.d(e,"v",(function(){return E})),a.d(e,"x",(function(){return S})),a.d(e,"y",(function(){return $})),a.d(e,"t",(function(){return C})),a.d(e,"L",(function(){return k})),a.d(e,"K",(function(){return I})),a.d(e,"z",(function(){return _})),a.d(e,"A",(function(){return G})),a.d(e,"E",(function(){return R})),a.d(e,"F",(function(){return B})),a.d(e,"q",(function(){return F})),a.d(e,"o",(function(){return M})),a.d(e,"s",(function(){return A})),a.d(e,"B",(function(){return H})),a.d(e,"I",(function(){return J}));a("2ca0"),a("ac1f"),a("5319");var n=a("4667"),r={list:function(t,e){return n["a"].request({url:t,method:"GET",params:e},!0,!0,!1)},add:function(t,e){return n["a"].request({url:t,method:"POST",data:e},!0,!0,!1)},getById:function(t,e){return n["a"].request({url:t+"/"+e,method:"GET"},!0,!0,!1)},updateById:function(t,e,a){return n["a"].request({url:t+"/"+e,method:"PUT",data:a},!0,!0,!1)},delById:function(t,e){return n["a"].request({url:t+"/"+e,method:"DELETE"},!0,!0,!1)}},o={list:function(t,e){return n["a"].request({url:t,method:"GET",params:e},!0,!0,!0)},add:function(t,e){return n["a"].request({url:t,method:"POST",data:e},!0,!0,!0)},getById:function(t,e){return n["a"].request({url:t+"/"+e,method:"GET"},!0,!0,!0)},updateById:function(t,e,a){return n["a"].request({url:t+"/"+e,method:"PUT",data:a},!0,!0,!0)},delById:function(t,e){return n["a"].request({url:t+"/"+e,method:"DELETE"},!0,!0,!0)}},i="/api/sysRoles",s="/api/sysRoleEntRelas",u="/api/sysUsers",c="/api/sysUserRoleRelas",d="api/mainChart",l="/api/mchApps",f="/api/payOrder",p="/api/refundOrder",m="/api/payWays",h="/api/mch/payConfigs",b="/api/mch/payPassages",g="/api/transferOrders",v="/api/divisionReceiverGroups",w="/api/divisionReceivers",y="/api/division/records",O={avatar:n["a"].baseUrl+"/api/ossFiles/avatar",cert:n["a"].baseUrl+"/api/ossFiles/cert"};function j(){return n["a"].request({url:"/api/sysEnts/showTree",method:"GET"})}function P(t,e){return n["a"].request({url:"api/sysUserRoleRelas/relas/"+t,method:"POST",data:{roleIdListStr:JSON.stringify(e)}})}function T(t,e){return n["a"].request({url:"/api/mch/payConfigs/"+t+"/"+e,method:"get"})}function q(t){return n["a"].request({url:"api/paytest/payways/"+t,method:"GET"})}function x(t){return n["a"].request({url:"/api/paytest/payOrders",method:"POST",data:t})}function L(t,e){return n["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+t+"/"+e,method:"GET"})}function U(){return n["a"].request({url:d+"/payAmountWeek",method:"GET"})}function E(){return n["a"].request({url:d+"/numCount",method:"GET"})}function S(t){return n["a"].request({url:d+"/payCount",method:"GET",params:t})}function $(t){return n["a"].request({url:d+"/payTypeCount",method:"GET",params:t})}function C(){return n["a"].request({url:d,method:"GET"})}function k(t){return n["a"].request({url:"/api/current/modifyPwd",method:"put",data:t})}function I(t){return n["a"].request({url:"/api/current/user",method:"put",data:t})}function _(){return n["a"].request({url:"/api/current/user",method:"get"})}function G(){var t=document.location.protocol+"//"+document.location.host;return t.startsWith("https:")?"wss://"+t.replace("https://",""):"ws://"+t.replace("http://","")}function R(t){return n["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+t,method:"GET"})}function B(t){return n["a"].request({url:"api/mchTransfers/ifCodes/"+t,method:"GET"})}function F(t,e,a){return n["a"].request({url:"/api/mchTransfers/channelUserId",method:"GET",params:{ifCode:t,appId:e,extParam:a}})}function M(t){return n["a"].request({url:"/api/mchTransfers/doTransfer",method:"POST",data:t},!0,!0,!0)}function A(t){return n["a"].request({url:"/api/mch/payConfigs/ifCodes/"+t,method:"GET"},!0,!0,!0)}function H(t,e,a){return n["a"].request({url:"/api/payOrder/refunds/"+t,method:"POST",data:{refundAmount:e,refundReason:a}})}function J(t){return n["a"].request({url:"/api/division/records/resend/"+t,method:"POST"})}},"341b":function(t,e,a){"use strict";a("c5c6")},"4cbe":function(t,e,a){"use strict";a("b21d")},"909a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-upload",{attrs:{name:"file",action:t.action,headers:t.headers,showUploadList:!1,multiple:!0,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t._t("uploadSlot",null,{loading:t.loading})],2)],1)},r=[],o=(a("a9e3"),a("381c")),i=a("ffef");function s(){var t={};return t[o["b"].ACCESS_TOKEN_NAME]=i["a"].getToken(),t}var u={name:"JeepayUpload",props:{action:{type:String,default:""},size:{type:Number,default:10},num:{type:Number,default:1}},data:function(){return{loading:!1,fileList:[],headers:s()}},created:function(){},methods:{handleChange:function(t){"uploading"===t.file.status&&(this.loading=!0),"done"===t.file.status?(this.loading=!1,this.$emit("uploadSuccess",t.file.response.data)):"error"===t.file.status&&this.$message.error("上传失败")},beforeUpload:function(t){var e=t.size/1024/1024<this.size;return e||this.$message.error("文件应小于"+this.size+"M!"),e}}},c=u,d=a("2877"),l=Object(d["a"])(c,n,r,!1,null,null,null);e["a"]=l.exports},a664:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff"}},[a("a-tabs",{on:{change:t.selectTabs}},[a("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[a("div",{staticClass:"account-settings-info-view"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{md:16,lg:16}},[a("a-form-model",{ref:"infoFormModel",attrs:{model:t.saveObject,"label-col":{span:9},"wrapper-col":{span:10},rules:t.rules}},[a("a-form-model-item",{attrs:{label:"用户登录名:"}},[a("a-input",{attrs:{disabled:""},model:{value:t.saveObject.loginUsername,callback:function(e){t.$set(t.saveObject,"loginUsername",e)},expression:"saveObject.loginUsername"}})],1),a("a-form-model-item",{attrs:{label:"用户姓名：",prop:"realname"}},[a("a-input",{model:{value:t.saveObject.realname,callback:function(e){t.$set(t.saveObject,"realname",e)},expression:"saveObject.realname"}})],1),a("a-form-model-item",{attrs:{label:"手机号：",prop:"telphone"}},[a("a-input",{attrs:{disabled:""},model:{value:t.saveObject.telphone,callback:function(e){t.$set(t.saveObject,"telphone",e)},expression:"saveObject.telphone"}})],1),a("a-form-model-item",{attrs:{label:"请选择性别："}},[a("a-radio-group",{model:{value:t.saveObject.sex,callback:function(e){t.$set(t.saveObject,"sex",e)},expression:"saveObject.sex"}},[a("a-radio",{attrs:{value:1}},[t._v("男")]),a("a-radio",{attrs:{value:2}},[t._v("女")])],1)],1)],1),a("a-form-item",{staticStyle:{display:"flex","justify-content":"center"}},[a("a-button",{attrs:{type:"primary",icon:"check-circle",loading:t.btnLoading},on:{click:t.changeInfo}},[t._v("更新基本信息")])],1)],1),a("a-col",{style:{minHeight:"180px",margin:"0 auto"},attrs:{md:8,lg:8}},[a("div",{staticClass:"ant-upload-preview"},[a("img",{staticStyle:{border:"1px solid rgba(0,0,0,0.08)"},attrs:{src:t.saveObject.avatarUrl}}),a("JeepayUpload",{staticStyle:{"margin-top":"10px"},attrs:{action:t.action,accept:".jpg, .jpeg, .png"},on:{uploadSuccess:function(e){return t.uploadSuccess(e,"")}},scopedSlots:t._u([{key:"uploadSlot",fn:function(e){var n=e.loading;return[a("a-button",{staticStyle:{marginLeft:"5px"}},[a("a-icon",{attrs:{type:n?"loading":"upload"}}),t._v(" "+t._s(n?"正在上传":"更换头像")+" ")],1)]}}])})],1)])],1),a("avatar-modal",{ref:"modal",on:{ok:t.setavatar}})],1)]),a("a-tab-pane",{key:"2",attrs:{tab:"安全信息"}},[a("div",{staticClass:"account-settings-info-view"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{md:16,lg:16}},[a("a-form-model",{ref:"pwdFormModel",attrs:{model:t.updateObject,"label-col":{span:9},"wrapper-col":{span:10},rules:t.rulesPass}},[a("a-form-model-item",{attrs:{label:"原密码：",prop:"originalPwd"}},[a("a-input-password",{attrs:{placeholder:"请输入原密码"},model:{value:t.updateObject.originalPwd,callback:function(e){t.$set(t.updateObject,"originalPwd",e)},expression:"updateObject.originalPwd"}})],1),a("a-form-model-item",{attrs:{label:"新密码：",prop:"newPwd"}},[a("a-input-password",{attrs:{placeholder:"请输入新密码"},model:{value:t.updateObject.newPwd,callback:function(e){t.$set(t.updateObject,"newPwd",e)},expression:"updateObject.newPwd"}})],1),a("a-form-model-item",{attrs:{label:"确认新密码：",prop:"confirmPwd"}},[a("a-input-password",{attrs:{placeholder:"确认新密码"},model:{value:t.updateObject.confirmPwd,callback:function(e){t.$set(t.updateObject,"confirmPwd",e)},expression:"updateObject.confirmPwd"}})],1)],1),a("a-form-item",{staticStyle:{display:"flex","justify-content":"center"}},[a("a-button",{attrs:{type:"primary",icon:"safety-certificate",loading:t.btnLoading},on:{click:t.confirm}},[t._v("更新密码")])],1)],1)],1)],1)])],1)],1)},r=[],o=a("909a"),i=a("7ded"),s=a("27ae"),u=a("0fea"),c=a("b3ab"),d=a("4360"),l={components:{AvatarModal:c["default"],JeepayUpload:o["a"]},data:function(){var t=this;return{action:u["M"].avatar,btnLoading:!1,saveObject:{loginUsername:"",realname:"",sex:"",avatarUrl:""},updateObject:{originalPwd:"",newPwd:"",confirmPwd:""},recordId:d["a"].state.user.userId,rules:{realname:[{required:!0,message:"请输入真实姓名",trigger:"blur"}]},rulesPass:{originalPwd:[{required:!0,message:"请输入原密码",trigger:"blur"}],newPwd:[{min:6,max:12,required:!0,message:"请输入6-12位新密码",trigger:"blur"}],confirmPwd:[{required:!0,message:"请输入确认新密码",trigger:"blur"},{validator:function(e,a,n){t.updateObject.newPwd===a?n():n("新密码与确认密码不一致")}}]}}},created:function(){this.detail()},methods:{setavatar:function(t){this.option.img=t},detail:function(){var t=this;Object(u["z"])().then((function(e){t.saveObject=e}))},changeInfo:function(){var t=this,e=this;this.$refs.infoFormModel.validate((function(a){a&&t.$infoBox.confirmPrimary("确认更新信息吗？","",(function(){e.btnLoading=!0,Object(u["K"])(e.saveObject).then((function(t){return e.btnLoading=!0,Object(i["a"])()})).then((function(t){t.avatarUrl=e.saveObject.avatarUrl,t.realname=e.saveObject.realname,e.btnLoading=!1,d["a"].commit("SET_USER_INFO",t),e.$message.success("修改成功")})).catch((function(t){e.btnLoading=!1}))}))}))},confirm:function(t){var e=this,a=this;this.$refs.pwdFormModel.validate((function(t){t&&e.$infoBox.confirmPrimary("确认更新密码吗？","",(function(){a.btnLoading=!0,a.confirmLoading=!0,a.updateObject.recordId=a.recordId,a.updateObject.originalPwd=s["Base64"].encode(a.updateObject.originalPwd),a.updateObject.confirmPwd=s["Base64"].encode(a.updateObject.confirmPwd),e.$delete(e.updateObject,"newPwd"),Object(u["L"])(a.updateObject).then((function(t){a.$message.success("修改成功"),e.$store.dispatch("Logout").then((function(){e.$router.push({name:"login"})}))})).catch((function(t){a.confirmLoading=!1,a.btnLoading=!1}))}))}))},selectTabs:function(){void 0!==this.$refs.pwdFormModel&&this.$refs.pwdFormModel.resetFields()},uploadSuccess:function(t,e){this.saveObject.avatarUrl=t,this.$forceUpdate()}}},f=l,p=(a("341b"),a("2877")),m=Object(p["a"])(f,n,r,!1,null,"91249420",null);e["default"]=m.exports},b21d:function(t,e,a){},b3ab:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"修改头像",visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading,width:800,footer:null},on:{cancel:t.cancelHandel}},[a("a-row",[a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("div",{staticClass:"avatar-upload-preview"},[a("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),a("br"),a("a-row",[a("a-col",{attrs:{lg:2,md:2}},[a("a-upload",{attrs:{name:"file",beforeUpload:t.beforeUpload,showUploadList:!1}},[a("a-button",{attrs:{icon:"upload"}},[t._v("选择图片")])],1)],1),a("a-col",{attrs:{lg:{span:1,offset:2},md:2}},[a("a-button",{attrs:{icon:"plus"},on:{click:function(e){return t.changeScale(1)}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"minus"},on:{click:function(e){return t.changeScale(-1)}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"undo"},on:{click:t.rotateLeft}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"redo"},on:{click:t.rotateRight}})],1),a("a-col",{attrs:{lg:{span:2,offset:6},md:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.finish("blob")}}},[t._v("保存")])],1)],1)],1)},r=[],o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("0fea")),i=a("4360"),s={data:function(){return{recordId:i["a"].state.user.userId,userLoad:o["M"].avatar,visible:!1,id:null,confirmLoading:!1,fileList:[],uploading:!1,options:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},beforeUpload:function(t){var e=this,a=new FileReader;return a.readAsDataURL(t),a.onload=function(){e.options.img=a.result},!1},finish:function(t){var e=this,a=this,n=new FormData;"blob"===t?this.$refs.cropper.getCropBlob((function(t){var r=window.URL.createObjectURL(t);e.model=!0,e.modelSrc=r,n.append("avatarUrl",r),Object(o["K"])(n).then((function(t){a.$message.success("上传成功"),a.$emit("ok",t.url),a.visible=!1})).catch((function(t){}))})):this.$refs.cropper.getCropData((function(t){e.model=!0,e.modelSrc=t}))},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}},u=s,c=(a("4cbe"),a("2877")),d=Object(c["a"])(u,n,r,!1,null,"4a24de63",null);e["default"]=d.exports},c5c6:function(t,e,a){}}]);