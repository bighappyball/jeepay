(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45463a7a","chunk-27222714","chunk-6bbf78ea"],{"0fea":function(e,t,n){"use strict";n.d(t,"G",(function(){return a})),n.d(t,"H",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"j",(function(){return u})),n.d(t,"l",(function(){return s})),n.d(t,"n",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"m",(function(){return b})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return v})),n.d(t,"g",(function(){return T})),n.d(t,"M",(function(){return E})),n.d(t,"r",(function(){return S})),n.d(t,"J",(function(){return O})),n.d(t,"u",(function(){return k})),n.d(t,"C",(function(){return w})),n.d(t,"D",(function(){return D})),n.d(t,"p",(function(){return I})),n.d(t,"w",(function(){return C})),n.d(t,"v",(function(){return _})),n.d(t,"x",(function(){return F})),n.d(t,"y",(function(){return q})),n.d(t,"t",(function(){return L})),n.d(t,"L",(function(){return R})),n.d(t,"K",(function(){return $})),n.d(t,"z",(function(){return x})),n.d(t,"A",(function(){return N})),n.d(t,"E",(function(){return j})),n.d(t,"F",(function(){return P})),n.d(t,"q",(function(){return G})),n.d(t,"o",(function(){return A})),n.d(t,"s",(function(){return U})),n.d(t,"B",(function(){return B})),n.d(t,"I",(function(){return J}));n("2ca0"),n("ac1f"),n("5319");var r=n("4667"),a={list:function(e,t){return r["a"].request({url:e,method:"GET",params:t},!0,!0,!1)},add:function(e,t){return r["a"].request({url:e,method:"POST",data:t},!0,!0,!1)},getById:function(e,t){return r["a"].request({url:e+"/"+t,method:"GET"},!0,!0,!1)},updateById:function(e,t,n){return r["a"].request({url:e+"/"+t,method:"PUT",data:n},!0,!0,!1)},delById:function(e,t){return r["a"].request({url:e+"/"+t,method:"DELETE"},!0,!0,!1)}},i={list:function(e,t){return r["a"].request({url:e,method:"GET",params:t},!0,!0,!0)},add:function(e,t){return r["a"].request({url:e,method:"POST",data:t},!0,!0,!0)},getById:function(e,t){return r["a"].request({url:e+"/"+t,method:"GET"},!0,!0,!0)},updateById:function(e,t,n){return r["a"].request({url:e+"/"+t,method:"PUT",data:n},!0,!0,!0)},delById:function(e,t){return r["a"].request({url:e+"/"+t,method:"DELETE"},!0,!0,!0)}},o="/api/sysRoles",u="/api/sysRoleEntRelas",s="/api/sysUsers",c="/api/sysUserRoleRelas",l="api/mainChart",d="/api/mchApps",f="/api/payOrder",p="/api/refundOrder",h="/api/payWays",m="/api/mch/payConfigs",g="/api/mch/payPassages",b="/api/transferOrders",y="/api/divisionReceiverGroups",v="/api/divisionReceivers",T="/api/division/records",E={avatar:r["a"].baseUrl+"/api/ossFiles/avatar",cert:r["a"].baseUrl+"/api/ossFiles/cert"};function S(){return r["a"].request({url:"/api/sysEnts/showTree",method:"GET"})}function O(e,t){return r["a"].request({url:"api/sysUserRoleRelas/relas/"+e,method:"POST",data:{roleIdListStr:JSON.stringify(t)}})}function k(e,t){return r["a"].request({url:"/api/mch/payConfigs/"+e+"/"+t,method:"get"})}function w(e){return r["a"].request({url:"api/paytest/payways/"+e,method:"GET"})}function D(e){return r["a"].request({url:"/api/paytest/payOrders",method:"POST",data:e})}function I(e,t){return r["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+e+"/"+t,method:"GET"})}function C(){return r["a"].request({url:l+"/payAmountWeek",method:"GET"})}function _(){return r["a"].request({url:l+"/numCount",method:"GET"})}function F(e){return r["a"].request({url:l+"/payCount",method:"GET",params:e})}function q(e){return r["a"].request({url:l+"/payTypeCount",method:"GET",params:e})}function L(){return r["a"].request({url:l,method:"GET"})}function R(e){return r["a"].request({url:"/api/current/modifyPwd",method:"put",data:e})}function $(e){return r["a"].request({url:"/api/current/user",method:"put",data:e})}function x(){return r["a"].request({url:"/api/current/user",method:"get"})}function N(){var e=document.location.protocol+"//"+document.location.host;return e.startsWith("https:")?"wss://"+e.replace("https://",""):"ws://"+e.replace("http://","")}function j(e){return r["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+e,method:"GET"})}function P(e){return r["a"].request({url:"api/mchTransfers/ifCodes/"+e,method:"GET"})}function G(e,t,n){return r["a"].request({url:"/api/mchTransfers/channelUserId",method:"GET",params:{ifCode:e,appId:t,extParam:n}})}function A(e){return r["a"].request({url:"/api/mchTransfers/doTransfer",method:"POST",data:e},!0,!0,!0)}function U(e){return r["a"].request({url:"/api/mch/payConfigs/ifCodes/"+e,method:"GET"},!0,!0,!0)}function B(e,t,n){return r["a"].request({url:"/api/payOrder/refunds/"+e,method:"POST",data:{refundAmount:t,refundReason:n}})}function J(e){return r["a"].request({url:"/api/division/records/resend/"+e,method:"POST"})}},"27fc":function(e,t,n){},4162:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("page-header-wrapper",[r("a-card",[t.$access("ENT_UR_ROLE_SEARCH")?r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{staticClass:"table-head-ground",attrs:{layout:"inline"}},[r("div",{staticClass:"table-layer"},[r("jeepay-text-up",{attrs:{placeholder:"角色ID",msg:t.searchData.roleId},model:{value:t.searchData.roleId,callback:function(e){t.$set(t.searchData,"roleId",e)},expression:"searchData.roleId"}}),r("jeepay-text-up",{attrs:{placeholder:"角色名称",msg:t.searchData.roleName},model:{value:t.searchData.roleName,callback:function(e){t.$set(t.searchData,"roleName",e)},expression:"searchData.roleName"}}),r("span",{staticClass:"table-page-search-submitButtons"},[r("a-button",{attrs:{type:"primary",icon:"search",loading:t.btnLoading},on:{click:t.searchFunc}},[t._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"reload"},on:{click:function(){return e.searchData={}}}},[t._v("重置")])],1)],1)]),r("div",[t.$access("ENT_UR_ROLE_ADD")?r("a-button",{staticClass:"mg-b-30",attrs:{type:"primary",icon:"plus"},on:{click:t.addFunc}},[t._v("新建")]):t._e()],1)],1):t._e(),r("JeepayTable",{ref:"infoTable",attrs:{initData:!0,reqTableDataFunc:t.reqTableDataFunc,tableColumns:t.tableColumns,searchData:t.searchData,rowKey:"roleId"},on:{btnLoadClose:function(e){t.btnLoading=!1}},scopedSlots:t._u([{key:"roleIdSlot",fn:function(e){var n=e.record;return[r("b",[t._v(t._s(n.roleId))])]}},{key:"opSlot",fn:function(e){var n=e.record;return[r("JeepayTableColumns",[t.$access("ENT_UR_ROLE_EDIT")?r("a",{on:{click:function(e){return t.editFunc(n.roleId)}}},[t._v("修改")]):t._e(),t.$access("ENT_UR_ROLE_DEL")?r("a",{staticStyle:{color:"red"},on:{click:function(e){return t.delFunc(n.roleId)}}},[t._v("删除")]):t._e()])]}}])})],1),r("InfoAddOrEdit",{ref:"infoAddOrEdit",attrs:{callbackFunc:t.searchFunc}})],1)},a=[],i=n("f339"),o=n("5d5e"),u=n("0fea"),s=n("7752"),c=n("4f53"),l=[{key:"roleId",title:"角色ID",sorter:!0,scopedSlots:{customRender:"roleIdSlot"}},{key:"roleName",title:"角色名称",dataIndex:"roleName",sorter:!0},{key:"op",title:"操作",width:"200px",fixed:"right",align:"center",scopedSlots:{customRender:"opSlot"}}],d={name:"RolePage",components:{JeepayTable:i["a"],JeepayTableColumns:o["a"],InfoAddOrEdit:s["default"],JeepayTextUp:c["a"]},data:function(){return{tableColumns:l,searchData:{},btnLoading:!1}},mounted:function(){},methods:{reqTableDataFunc:function(e){return u["G"].list(u["k"],e)},searchFunc:function(){this.btnLoading=!0,this.$refs.infoTable.refTable(!0)},addFunc:function(){this.$refs.infoAddOrEdit.show()},editFunc:function(e){this.$refs.infoAddOrEdit.show(e)},delFunc:function(e){var t=this;this.$infoBox.confirmDanger("确认删除？","",(function(){return u["G"].delById(u["k"],e).then((function(e){t.$message.success("删除成功！"),t.$refs.infoTable.refTable(!1)}))}))}}},f=d,p=n("2877"),h=Object(p["a"])(f,r,a,!1,null,null,null);t["default"]=h.exports},"440a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"padding-bottom":"50px"}},[e.hasEnt?n("p",[e._v("请选择权限： ")]):e._e(),n("a-tree",{attrs:{"tree-data":e.treeData,replaceFields:e.replaceFields,checkable:!0},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1)},a=[],i=(n("d81d"),n("0fea")),o={data:function(){return{hasEnt:this.$access("ENT_UR_ROLE_DIST"),recordId:null,treeData:[],replaceFields:{key:"entId",title:"entName"},checkedKeys:[],allEntList:{}}},methods:{initTree:function(e){var t=this,n=this;if(!this.hasEnt)return!1;n.checkedKeys=[],n.treeData=[],n.allEntList={},n.recordId=e,Object(i["r"])().then((function(r){n.treeData=r,t.recursionTreeData(r,(function(e){n.allEntList[e.entId]={pid:e.pid,children:e.children||[]}})),i["G"].list(i["j"],{roleId:e||"NONE",pageSize:-1}).then((function(e){var t=[];e.records.map((function(e){n.allEntList[e.entId]&&n.allEntList[e.entId].children.length<=0&&t.push(e.entId)})),n.checkedKeys=t}))}))},getSelectedEntIdList:function(){if(!this.hasEnt)return!1;var e=this,t=[];return this.checkedKeys.map((function(n){var r=[];e.getAllPid(n,r),r.map((function(e){t.indexOf(e)<0&&t.push(e)}))})),t},recursionTreeData:function(e,t){for(var n=0;n<e.length;n++){var r=e[n];r.children&&r.children.length>0&&this.recursionTreeData(r.children,t),t(r)}},getAllPid:function(e,t){this.allEntList[e]&&"ROOT"!==e&&(t.push(e),this.getAllPid(this.allEntList[e].pid,t))}}},u=o,s=n("2877"),c=Object(s["a"])(u,r,a,!1,null,null,null);t["default"]=c.exports},44423:function(e,t,n){"use strict";n("aa30")},"4f53":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jee-text-up"},[n("a-input",{attrs:{required:"required",value:e.msg},on:{input:function(t){return e.$emit("input",t.target.value)}}}),n("label",[e._v(e._s(e.placeholder))])],1)},a=[],i={name:"JeepayTextUp",props:{msg:{type:String},placeholder:{type:String}}},o=i,u=(n("a72a"),n("2877")),s=Object(u["a"])(o,r,a,!1,null,"4d207278",null);t["a"]=s.exports},"5d5e":function(e,t,n){"use strict";n("d81d");var r,a,i={name:"JeepayTableColumns",render:function(e,t){var n=arguments[0],r=[];if(this.$slots.default.map((function(e){return e.tag&&r.push(e),!1})),r.length<=3)return e("div",{style:"display:flex; justify-content: space-evenly;"},r);for(var a=[r[0],r[1]],i=[],o=2;o<r.length;o++)i.push(n("a-menu-item",[r[o]]));return n("div",{style:"display:flex; justify-content: space-evenly;"},[" ",a,n("a-dropdown",[n("a-button",{style:"",attrs:{type:"link"},class:"ant-dropdown-link"},["更多",n("a-icon",{attrs:{type:"down"}})]),n("a-menu",{slot:"overlay"},[i])])])}},o=i,u=(n("44423"),n("2877")),s=Object(u["a"])(o,r,a,!1,null,"207fd926",null);t["a"]=s.exports},7752:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-drawer",{attrs:{visible:e.isShow,title:e.isAdd?"新增角色":"修改角色",width:"30%",maskClosable:!1},on:{close:function(t){e.isShow=!1}}},[n("a-form-model",{ref:"infoFormModel",attrs:{model:e.saveObject,"label-col":{span:4},"wrapper-col":{span:15},rules:e.rules}},[n("a-form-model-item",{attrs:{label:"角色名称：",prop:"roleName"}},[n("a-input",{model:{value:e.saveObject.roleName,callback:function(t){e.$set(e.saveObject,"roleName",t)},expression:"saveObject.roleName"}})],1)],1),n("RoleDist",{ref:"roleDist"}),n("div",{staticClass:"drawer-btn-center"},[n("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),n("a-button",{attrs:{type:"primary",loading:e.confirmLoading,icon:"check"},on:{click:e.handleOkFunc}},[e._v("保存")])],1)],1)},a=[],i=n("0fea"),o=n("440a"),u={components:{RoleDist:o["default"]},props:{callbackFunc:{type:Function}},data:function(){return{confirmLoading:!1,isAdd:!0,isShow:!1,saveObject:{},recordId:null,rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}}},created:function(){},methods:{show:function(e){this.isAdd=!e,this.saveObject={},this.confirmLoading=!1,void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields();var t=this;this.$nextTick((function(){return t.$refs.roleDist.initTree(e)})),this.isAdd?t.isShow=!0:(t.recordId=e,i["G"].getById(i["k"],e).then((function(e){t.saveObject=e})),this.isShow=!0)},handleOkFunc:function(){var e=this;this.$refs.infoFormModel.validate((function(t){if(t){e.confirmLoading=!0;var n=e.$refs.roleDist.getSelectedEntIdList();e.saveObject.entIdListStr=n?JSON.stringify(n):"",e.isAdd?i["G"].add(i["k"],e.saveObject).then((function(t){e.$message.success("新增成功"),e.isShow=!1,e.callbackFunc()})).catch((function(t){e.confirmLoading=!1})):i["G"].updateById(i["k"],e.recordId,e.saveObject).then((function(t){e.$message.success("修改成功"),e.isShow=!1,e.callbackFunc()})).catch((function(t){e.confirmLoading=!1}))}}))}}},s=u,c=n("2877"),l=Object(c["a"])(s,r,a,!1,null,null,null);t["default"]=l.exports},a72a:function(e,t,n){"use strict";n("de7e")},aa30:function(e,t,n){},de7e:function(e,t,n){},f339:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-table",{attrs:{columns:e.tableColumns,"data-source":e.apiResData.records,pagination:e.pagination,loading:e.showLoading,"row-selection":e.rowSelection,rowKey:e.rowKey,scroll:{x:e.scrollX},customRow:function(t,n){return e.tableRowCrossColor?{style:{"background-color":n%2==0?"#FCFCFC":"#FFFFFF"}}:{}}},on:{change:e.handleTableChange},scopedSlots:e._u([e._l(e.columnsCustomSlots,(function(t){return{key:t.customRender,fn:function(n){return[e._t(t.customRender,null,{record:n})]}}}))],null,!0)})],1)},a=[],i=n("5530"),o=(n("a9e3"),n("d81d"),n("4de4"),{name:"JeepayTable",props:{initData:{type:Boolean,default:!0},tableColumns:Array,reqTableDataFunc:{type:Function},currentChange:{type:Function,default:function(e,t){}},searchData:Object,pageSize:{type:Number,default:10},rowSelection:Object,rowKey:{type:[String,Function]},scrollX:{type:Number,default:800},tableRowCrossColor:{type:Boolean,default:!1}},data:function(){return{apiResData:{total:0,records:[]},iPage:{pageNumber:1,pageSize:this.pageSize},pagination:{total:0,current:1,pageSize:this.pageSize,showSizeChanger:!0,showTotal:function(e){return"共".concat(e,"条")}},showLoading:!1}},computed:{columnsCustomSlots:function(){return this.tableColumns.filter((function(e){return e.scopedSlots})).map((function(e){return e.scopedSlots}))}},mounted:function(){this.initData&&this.refTable(!0)},methods:{handleTableChange:function(e,t,n){this.pagination=e,this.iPage=Object(i["a"])({pageSize:e.pageSize,pageNumber:e.current,sortField:n.columnKey,sortOrder:n.order},t),this.refTable()},refTable:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this;t&&(this.iPage.pageNumber=1,this.pagination.current=1),this.showLoading=!0,this.reqTableDataFunc(Object.assign({},this.iPage,this.searchData)).then((function(t){e.pagination.total=t.total,e.apiResData=t,e.showLoading=!1,0===t.records.length&&e.iPage.pageNumber>1&&n.$nextTick((function(){var r=t.total/e.iPage.pageSize+(t.total%e.iPage.pageSize===0?0:1);if(0===r)return!1;var a=e.iPage.pageNumber-1>r?r:e.iPage.pageNumber-1;e.iPage.pageNumber=a,e.pagination.current=a,n.refTable(!1)})),n.$emit("btnLoadClose")})).catch((function(t){e.showLoading=!1,n.$emit("btnLoadClose")}))}}}),u=o,s=(n("f705"),n("2877")),c=Object(s["a"])(u,r,a,!1,null,null,null);t["a"]=c.exports},f705:function(e,t,n){"use strict";n("27fc")}}]);