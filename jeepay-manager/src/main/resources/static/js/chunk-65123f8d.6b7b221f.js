(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65123f8d"],{"30b1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=this,a=t.$createElement,s=t._self._c||a;return s("page-header-wrapper",[s("a-card",[s("div",{staticClass:"table-page-search-wrapper"},[s("a-form",{staticClass:"table-head-ground",attrs:{layout:"inline"}},[s("div",{staticClass:"table-layer"},[s("jeepay-text-up",{attrs:{placeholder:"商户号",msg:t.searchData.mchNo},model:{value:t.searchData.mchNo,callback:function(e){t.$set(t.searchData,"mchNo",e)},expression:"searchData.mchNo"}}),s("jeepay-text-up",{attrs:{placeholder:"应用AppId",msg:t.searchData.appId},model:{value:t.searchData.appId,callback:function(e){t.$set(t.searchData,"appId",e)},expression:"searchData.appId"}}),s("jeepay-text-up",{attrs:{placeholder:"应用名称",msg:t.searchData.appName},model:{value:t.searchData.appName,callback:function(e){t.$set(t.searchData,"appName",e)},expression:"searchData.appName"}}),s("a-form-item",{staticClass:"table-head-layout",attrs:{label:""}},[s("a-select",{attrs:{placeholder:"状态","default-value":""},model:{value:t.searchData.state,callback:function(e){t.$set(t.searchData,"state",e)},expression:"searchData.state"}},[s("a-select-option",{attrs:{value:""}},[t._v("全部")]),s("a-select-option",{attrs:{value:"0"}},[t._v("禁用")]),s("a-select-option",{attrs:{value:"1"}},[t._v("启用")])],1)],1),s("span",{staticClass:"table-page-search-submitButtons",staticStyle:{"flex-grow":"0","flex-shrink":"0"}},[s("a-button",{attrs:{type:"primary",icon:"search",loading:t.btnLoading},on:{click:t.queryFunc}},[t._v("查询")]),s("a-button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"reload"},on:{click:function(){return e.searchData={}}}},[t._v("重置")])],1)],1)]),s("div",[t.$access("ENT_MCH_APP_ADD")?s("a-button",{staticClass:"mg-b-30",attrs:{type:"primary",icon:"plus"},on:{click:t.addFunc}},[t._v("新建")]):t._e()],1)],1),s("JeepayTable",{ref:"infoTable",attrs:{initData:!1,reqTableDataFunc:t.reqTableDataFunc,tableColumns:t.tableColumns,searchData:t.searchData,rowKey:"appId"},on:{btnLoadClose:function(e){t.btnLoading=!1}},scopedSlots:t._u([{key:"appIdSlot",fn:function(e){var a=e.record;return[s("b",[t._v(t._s(a.appId))])]}},{key:"stateSlot",fn:function(e){var t=e.record;return[s("a-badge",{attrs:{status:0===t.state?"error":"processing",text:0===t.state?"禁用":"启用"}})]}},{key:"opSlot",fn:function(e){var a=e.record;return[s("JeepayTableColumns",[t.$access("ENT_MCH_APP_EDIT")?s("a-button",{attrs:{type:"link"},on:{click:function(e){return t.editFunc(a.appId)}}},[t._v("修改")]):t._e(),t.$access("ENT_MCH_PAY_CONFIG_LIST")?s("a-button",{attrs:{type:"link"},on:{click:function(e){return t.showPayIfConfigList(a.appId)}}},[t._v("支付配置")]):t._e(),t.$access("ENT_MCH_APP_DEL")?s("a-button",{staticStyle:{color:"red"},attrs:{type:"link"},on:{click:function(e){return t.delFunc(a.appId)}}},[t._v("删除")]):t._e()],1)]}}])})],1),s("MchAppAddOrEdit",{ref:"mchAppAddOrEdit",attrs:{callbackFunc:t.searchFunc}}),s("MchPayIfConfigList",{ref:"mchPayIfConfigList"})],1)},r=[],c=a("f339"),n=a("4f53"),o=a("5d5e"),l=a("0fea"),i=a("5071"),p=a("0ed0"),u=[{key:"appId",fixed:"left",width:"320px",title:"应用AppId",scopedSlots:{customRender:"appIdSlot"}},{key:"appName",title:"应用名称",dataIndex:"appName"},{key:"mchNo",title:"商户号",dataIndex:"mchNo"},{key:"state",title:"状态",scopedSlots:{customRender:"stateSlot"}},{key:"createdAt",dataIndex:"createdAt",title:"创建日期"},{key:"op",title:"操作",width:"260px",fixed:"right",align:"center",scopedSlots:{customRender:"opSlot"}}],d={name:"MchAppPage",components:{JeepayTable:c["a"],JeepayTableColumns:o["a"],JeepayTextUp:n["a"],MchAppAddOrEdit:i["default"],MchPayIfConfigList:p["default"]},data:function(){return{btnLoading:!1,tableColumns:u,searchData:{mchNo:""}}},mounted:function(){this.searchData.mchNo=this.$route.query.mchNo,this.queryFunc()},methods:{queryFunc:function(){this.btnLoading=!0,this.$refs.infoTable.refTable(!0)},reqTableDataFunc:function(e){return l["H"].list(l["e"],e)},searchFunc:function(){this.$refs.infoTable.refTable(!0)},addFunc:function(){this.$refs.mchAppAddOrEdit.show(this.searchData.mchNo)},editFunc:function(e){this.$refs.mchAppAddOrEdit.show(this.searchData.mchNo,e)},delFunc:function(e){var t=this;this.$infoBox.confirmDanger("确认删除？","",(function(){l["H"].delById(l["e"],e).then((function(e){t.$message.success("删除成功！"),t.searchFunc()}))}))},showPayIfConfigList:function(e){this.$refs.mchPayIfConfigList.show(e)}}},h=d,f=a("2877"),m=Object(f["a"])(h,s,r,!1,null,"13c9ac6a",null);t["default"]=m.exports},"4f53":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jee-text-up table-head-layout"},[a("a-input",{attrs:{required:"required",value:e.msg},on:{input:function(t){return e.$emit("input",t.target.value)}}}),a("label",[e._v(e._s(e.placeholder))])],1)},r=[],c={name:"JeepayTextUp",props:{msg:{type:String,default:""},placeholder:{type:String,default:""}}},n=c,o=(a("8bf8"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"4708ca2b",null);t["a"]=l.exports},5071:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{visible:e.visible,title:e.isAdd?"新增应用":"修改应用",width:"40%",maskClosable:!1},on:{close:e.onClose}},[a("a-form-model",{ref:"infoFormModel",attrs:{model:e.saveObject,layout:"vertical",rules:e.rules}},[a("a-row",{attrs:{gutter:16}},[e.isAdd?e._e():a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"应用 AppId",prop:"appId"}},[a("a-input",{attrs:{placeholder:"请输入",disabled:!e.isAdd},model:{value:e.saveObject.appId,callback:function(t){e.$set(e.saveObject,"appId",t)},expression:"saveObject.appId"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"商户号",prop:"mchNo"}},[a("a-input",{attrs:{placeholder:"请输入",disabled:!e.isAdd},model:{value:e.saveObject.mchNo,callback:function(t){e.$set(e.saveObject,"mchNo",t)},expression:"saveObject.mchNo"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"应用名称",prop:"appName"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.saveObject.appName,callback:function(t){e.$set(e.saveObject,"appName",t)},expression:"saveObject.appName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"状态",prop:"state"}},[a("a-radio-group",{model:{value:e.saveObject.state,callback:function(t){e.$set(e.saveObject,"state",t)},expression:"saveObject.state"}},[a("a-radio",{attrs:{value:1}},[e._v(" 启用 ")]),a("a-radio",{attrs:{value:0}},[e._v(" 停用 ")])],1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"私钥 AppSecret",prop:"appSecret"}},[a("a-input",{attrs:{placeholder:e.saveObject.appSecret_ph,type:"textarea"},model:{value:e.saveObject.appSecret,callback:function(t){e.$set(e.saveObject,"appSecret",t)},expression:"saveObject.appSecret"}}),a("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(t){return e.randomKey(!1,128,0)}}},[a("a-icon",{attrs:{type:"file-sync"}}),e._v("随机生成私钥")],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.saveObject.remark,callback:function(t){e.$set(e.saveObject,"remark",t)},expression:"saveObject.remark"}})],1)],1)],1)],1),a("div",{staticClass:"drawer-btn-center"},[a("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:e.onClose}},[e._v("取消")]),a("a-button",{attrs:{type:"primary",icon:"check"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)},r=[],c=a("0fea"),n={props:{callbackFunc:{type:Function,default:function(){return function(){return{}}}}},data:function(){return{isAdd:!0,visible:!1,appId:"",saveObject:{},rules:{mchNo:[{required:!0,message:"请输入商户号",trigger:"blur"}],appName:[{required:!0,message:"请输入应用名称",trigger:"blur"}]}}},methods:{show:function(e,t){this.isAdd=!t,this.saveObject={state:1,appSecret:"",mchNo:e,appSecret_ph:"请输入"},void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields();var a=this;a.rules.appSecret=[],this.isAdd?(a.rules.appSecret.push({required:!0,message:"请输入私钥或点击随机生成私钥",trigger:"blur"}),a.visible=!0):(a.appId=t,c["H"].getById(c["e"],t).then((function(e){a.saveObject=e,a.saveObject.appSecret_ph=e.appSecret,a.saveObject.appSecret=""})),this.visible=!0)},onSubmit:function(){var e=this;this.$refs.infoFormModel.validate((function(t){t&&(delete e.saveObject.appSecret_ph,e.isAdd?c["H"].add(c["e"],e.saveObject).then((function(t){e.$message.success("新增成功"),e.visible=!1,e.callbackFunc()})):(""===e.saveObject.appSecret&&delete e.saveObject.appSecret,c["H"].updateById(c["e"],e.appId,e.saveObject).then((function(t){e.$message.success("修改成功"),e.visible=!1,e.callbackFunc()}))))}))},randomKey:function(e,t,a){var s="",r=t,c=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(a-t))+t);for(var n=0;n<r;n++){var o=Math.round(Math.random()*(c.length-1));s+=c[o]}this.saveObject.appSecret=s},onClose:function(){this.visible=!1}}},o=n,l=a("2877"),i=Object(l["a"])(o,s,r,!1,null,"d3c5f7e2",null);t["default"]=i.exports},"8bf8":function(e,t,a){"use strict";a("eaa4")},eaa4:function(e,t,a){}}]);