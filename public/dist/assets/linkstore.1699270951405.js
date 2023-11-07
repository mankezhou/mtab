import{r as e,u as l,b as a,c as t,d as o,e as u,k as d,h as n,S as i,F as r,f as s,g as p,W as m,t as c,j as v,Q as h,a5 as f,X as g}from"./index.1699270951405.js";const w={class:"linkstoreAdmin"},V={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},b={class:"ml-auto"},_={class:"mt-4 p-4 bg-white rounded-lg overflow-hidden w-full"},y=["src"],k={class:"folderManager"},x={class:"flex w-full mt-6"},C={class:"flex mt-6"},U={__name:"linkstore",setup(U){const j={id:"",name:"",sort:""},O=e(Object.assign({},j)),S=e([]),z=()=>{i({url:"/linkStore/getFolder"}).then((e=>{S.value=e.data}))};z();const A=e({name:"",area:""}),F=(e="")=>{e=e.split(",");const l=[];return e.forEach((e=>{const a=S.value.find((l=>l.id.toString()===e));a&&l.push(a.name)})),l.join(",")},L=e(!1),D=e(!1),W=l(),I=e(!1),M=e({}),P=()=>{M.value={},I.value=!0},E=()=>{D.value=!0},G=(e={})=>{O.value=0===e?Object.assign({},j):Object.assign({},e),L.value=!0},Q=()=>{i({url:"/linkStore/createFolder",method:"post",data:{type:"edit",info:O.value}}).then((e=>{f.success(e.msg),1===e.code&&(z(),L.value=!1)}))},R=e=>{1===e.code&&(M.value.src=e.data.url)},X=()=>{let e=Object.assign({},M.value);e.area=e.area.join(","),i({url:"/linkStore/add",method:"post",data:{form:e}}).then((e=>{f.success(e.msg),I.value=!1,B()}))},$=e({current_page:1,per_page:15,total:0,refresh(e){$.value.current_page=e,B()}}),q=e([]),B=()=>{i({url:"/LinkStore/ListManager",method:"post",data:{search:A.value,page:$.value.current_page,limit:$.value.per_page}}).then((e=>{q.value=e.data.data,Object.assign($.value,e.data)}))};return B(),(e,l)=>{const U=a("el-input"),j=a("el-option"),H=a("el-select"),J=a("el-button"),K=a("el-table-column"),N=a("el-tag"),T=a("el-table"),Y=a("el-pagination"),Z=a("el-form-item"),ee=a("el-upload"),le=a("el-switch"),ae=a("el-input-number"),te=a("el-form"),oe=a("el-dialog");return t(),o("div",w,[u("div",V,[d(U,{modelValue:A.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>A.value.name=e),style:{width:"200px"},placeholder:"名称搜索",clearable:""},null,8,["modelValue"]),d(H,{modelValue:A.value.area,"onUpdate:modelValue":l[1]||(l[1]=e=>A.value.area=e),style:{width:"200px"},placeholder:"分类搜索",clearable:""},{default:n((()=>[(t(!0),o(r,null,s(S.value,(e=>(t(),p(j,{value:e.id,label:e.name},null,8,["value","label"])))),256))])),_:1},8,["modelValue"]),d(J,{onClick:B,type:"primary"},{default:n((()=>[m("搜索")])),_:1}),d(J,{type:"danger",onClick:P},{default:n((()=>[m("添加新标签")])),_:1}),u("div",b,[d(J,{type:"info",onClick:E},{default:n((()=>[m("标签分类管理")])),_:1})])]),u("div",_,[d(T,{height:"calc(100vh - 203px)",stripe:"",data:q.value},{default:n((()=>[d(K,{fixed:"left",prop:"id",label:"ID",align:"center",width:"100"}),d(K,{prop:"name",label:"网站名称",align:"center",width:"200"}),d(K,{prop:"src",label:"LOGO",align:"center",width:"80"},{default:n((e=>[u("img",{src:e.row.src,class:"logoiconRadius",alt:"Logo",style:{"max-width":"100%","max-height":"100%"}},null,8,y)])),_:1}),d(K,{prop:"url","show-overflow-tooltip":"",label:"域名链接",align:"center",width:"260"}),d(K,{prop:"domain",label:"Domain",align:"center",width:"260"}),d(K,{prop:"app",label:"是否WebApp",align:"center",width:"140"},{default:n((e=>[1===e.row.app?(t(),p(N,{key:0},{default:n((()=>[m("WebApp")])),_:1})):(t(),p(N,{key:1,type:"info"},{default:n((()=>[m("标签")])),_:1}))])),_:1}),d(K,{prop:"area",width:"200px","show-overflow-tooltip":"",label:"分类",align:"center"},{default:n((e=>[m(c(F(e.row.area)),1)])),_:1}),d(K,{prop:"tips",label:"简介",align:"center",width:"300"}),d(K,{prop:"install_num",label:"安装量(次)",align:"center",width:"100"}),d(K,{prop:"create_time",label:"创建时间",align:"center",width:"200"}),d(K,{fixed:"right",label:"操作",align:"center",width:"150"},{default:n((e=>[d(J,{type:"primary",size:"small",onClick:l=>(e=>{M.value=Object.assign({},e);const l=e.area.split(",");l.length>0&&""!==l[0]?M.value.area=l:M.value.area=[],I.value=!0})(e.row)},{default:n((()=>[m("操作")])),_:2},1032,["onClick"]),d(J,{type:"danger",size:"small",onClick:l=>{return a=e.row.id,void g.confirm("是否批量删除","删除提示").then((e=>{i({url:"/linkStore/del",method:"post",data:{ids:[a]}}).then((e=>{f.success(e.msg),B()}))})).catch();var a}},{default:n((()=>[m("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),d(Y,{onCurrentChange:$.value.refresh,"page-size":15,class:"mt-6",layout:"total,prev, pager, next",total:$.value.total},null,8,["onCurrentChange","total"])]),d(oe,{modelValue:I.value,"onUpdate:modelValue":l[12]||(l[12]=e=>I.value=e),title:"编辑标签",size:"400px","close-on-click-modal":!1,top:"5vh"},{default:n((()=>[d(te,{modelValue:M.value,"onUpdate:modelValue":l[11]||(l[11]=e=>M.value=e),"label-position":"top"},{default:n((()=>[d(Z,{label:"名称"},{default:n((()=>[d(U,{modelValue:M.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>M.value.name=e),"show-word-limit":"",maxlength:"50",placeholder:"请输入网站title或名称"},null,8,["modelValue"])])),_:1}),d(Z,{label:"logo"},{default:n((()=>[d(U,{modelValue:M.value.src,"onUpdate:modelValue":l[3]||(l[3]=e=>M.value.src=e),placeholder:"标签图标地址(120x120)px尺寸最佳"},{append:n((()=>[d(ee,{class:"upload-demo","show-file-list":!1,"on-success":R,action:v(h)+v(W).state.site.upload},{default:n((()=>[d(J,{type:"primary"},{default:n((()=>[m("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])),_:1}),d(Z,{label:"域名"},{default:n((()=>[d(U,{modelValue:M.value.domain,"onUpdate:modelValue":l[4]||(l[4]=e=>M.value.domain=e),"show-word-limit":"",maxlength:"251",placeholder:"请输入域名多个可以用,隔开。域名不要携带http协议"},null,8,["modelValue"])])),_:1}),d(Z,{label:"网址"},{default:n((()=>[d(U,{modelValue:M.value.url,"onUpdate:modelValue":l[5]||(l[5]=e=>M.value.url=e),"show-word-limit":"",maxlength:"251",placeholder:"请输入网址,请携带http协议"},null,8,["modelValue"])])),_:1}),d(Z,{label:"分类"},{default:n((()=>[d(H,{modelValue:M.value.area,"onUpdate:modelValue":l[6]||(l[6]=e=>M.value.area=e),multiple:!0,placeholder:"分类选择可多选",class:"w-full"},{default:n((()=>[(t(!0),o(r,null,s(S.value,(e=>(t(),p(j,{key:e.id,label:e.name,value:`${e.id}`},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(Z,{label:"简介"},{default:n((()=>[d(U,{modelValue:M.value.tips,"onUpdate:modelValue":l[7]||(l[7]=e=>M.value.tips=e),placeholder:"请简单介绍一下建议30字符以内","show-word-limit":"",maxlength:"200"},null,8,["modelValue"])])),_:1}),d(Z,{label:"是否网页APP"},{default:n((()=>[d(le,{"active-value":1,"inactive-value":0,modelValue:M.value.app,"onUpdate:modelValue":l[8]||(l[8]=e=>M.value.app=e)},null,8,["modelValue"])])),_:1}),d(Z,{label:"标签添加量（热度）"},{default:n((()=>[d(ae,{modelValue:M.value.install_num,"onUpdate:modelValue":l[9]||(l[9]=e=>M.value.install_num=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1}),d(Z,{label:"排行"},{default:n((()=>[d(ae,{modelValue:M.value.hot,"onUpdate:modelValue":l[10]||(l[10]=e=>M.value.hot=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),d(J,{type:"primary",class:"w-full",onClick:X},{default:n((()=>[m("保存")])),_:1})])),_:1},8,["modelValue"]),d(oe,{modelValue:D.value,"onUpdate:modelValue":l[18]||(l[18]=e=>D.value=e),width:"1000px",title:"分类管理","close-on-click-modal":!1},{default:n((()=>[u("div",k,[d(T,{border:"",data:S.value,style:{width:"100%"},height:"450"},{default:n((()=>[d(K,{prop:"id",fixed:"",label:"分类ID",width:"90",align:"center"}),d(K,{prop:"name",label:"分类名称"}),d(K,{prop:"sort",sortable:"",align:"center",width:"120",label:"分类排序"}),d(K,{fixed:"right",label:"操作",align:"center",width:"150"},{default:n((e=>[d(J,{type:"success",size:"small",onClick:l=>G(e.row)},{default:n((()=>[m("修改")])),_:2},1032,["onClick"]),d(J,{type:"danger",size:"small",onClick:l=>{return a=e.row,void g.confirm("是否删除当前标签分类","危险警告").then((e=>{i({url:"/linkStore/createFolder",method:"post",data:{type:"del",id:a.id}}).then((e=>{f.success(e.msg),1===e.code&&(z(),L.value=!1)}))}));var a}},{default:n((()=>[m("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),u("div",x,[d(J,{type:"primary",class:"m-auto w-1/5",onClick:l[13]||(l[13]=e=>G(0))},{default:n((()=>[m("新增")])),_:1})]),d(oe,{modelValue:L.value,"onUpdate:modelValue":l[17]||(l[17]=e=>L.value=e),width:"500px","align-center":"","append-to-body":"",title:"分类编辑"},{default:n((()=>[d(te,{modelValue:M.value,"onUpdate:modelValue":l[16]||(l[16]=e=>M.value=e),"label-position":"top"},{default:n((()=>[d(Z,{label:"分类名称"},{default:n((()=>[d(U,{modelValue:O.value.name,"onUpdate:modelValue":l[14]||(l[14]=e=>O.value.name=e),"show-word-limit":"",maxlength:"50",placeholder:"请输入分类名称"},null,8,["modelValue"])])),_:1}),d(Z,{label:"分类排序"},{default:n((()=>[d(ae,{modelValue:O.value.sort,"onUpdate:modelValue":l[15]||(l[15]=e=>O.value.sort=e),class:"w-full",placeholder:"请输入展示排序（值越大越靠前）"},null,8,["modelValue"])])),_:1}),u("div",C,[d(J,{class:"m-auto w-2/5",type:"primary",onClick:Q},{default:n((()=>[m("保存")])),_:1})])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"])])}}};export{U as default};