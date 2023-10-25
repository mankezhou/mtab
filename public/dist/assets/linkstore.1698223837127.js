import{r as e,u as l,b as a,c as t,d as u,e as o,k as d,h as n,S as r,W as i,g as p,j as s,Q as m,F as c,f as v,X as h,a5 as f}from"./index.1698223837127.js";const g={class:"linkstoreAdmin"},_={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},V={class:"mt-4 p-4 bg-white rounded-lg overflow-hidden w-full"},b=["src"],w={__name:"linkstore",setup(w){const k=e({email:""}),y=l(),x=e(!1),U=e({}),C=()=>{U.value={},x.value=!0},j=e=>{1===e.code&&(U.value.src=e.data.url)},z=()=>{U.value.area=U.value.area.join(","),r({url:"/linkStore/add",method:"post",data:{form:U.value}}).then((e=>{f.success(e.msg),x.value=!1,S()}))},A=e({current_page:1,per_page:15,total:0,refresh(e){A.value.current_page=e,S()}}),O=e([]),S=()=>{r({url:"/LinkStore/list",method:"post",data:{search:k.value,page:A.value.current_page,limit:A.value.per_page}}).then((e=>{O.value=e.data.data,Object.assign(A.value,e.data)}))};return S(),(e,l)=>{const w=a("el-input"),L=a("el-button"),W=a("el-table-column"),D=a("el-tag"),P=a("el-table"),F=a("el-pagination"),G=a("el-form-item"),I=a("el-upload"),Q=a("el-option"),R=a("el-select"),X=a("el-switch"),q=a("el-input-number"),B=a("el-form"),E=a("el-dialog");return t(),u("div",g,[o("div",_,[d(w,{modelValue:k.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value.name=e),style:{width:"200px"},placeholder:"名称搜索",clearable:""},null,8,["modelValue"]),d(L,{onClick:S,type:"primary"},{default:n((()=>[i("搜索")])),_:1}),d(L,{type:"danger",onClick:C},{default:n((()=>[i("添加新标签")])),_:1})]),o("div",V,[d(P,{height:"calc(100vh - 203px)",stripe:"",data:O.value},{default:n((()=>[d(W,{fixed:"left",prop:"id",label:"ID",align:"center",width:"100"}),d(W,{prop:"name",label:"网站名称",align:"center",width:"200"}),d(W,{prop:"src",label:"LOGO",align:"center",width:"80"},{default:n((e=>[o("img",{src:e.row.src,class:"logoiconRadius",alt:"Logo",style:{"max-width":"100%","max-height":"100%"}},null,8,b)])),_:1}),d(W,{prop:"url","show-overflow-tooltip":"",label:"域名链接",align:"center",width:"260"}),d(W,{prop:"domain",label:"Domain",align:"center",width:"260"}),d(W,{prop:"app",label:"是否WebApp",align:"center",width:"140"},{default:n((e=>[1===e.row.app?(t(),p(D,{key:0},{default:n((()=>[i("WebApp")])),_:1})):(t(),p(D,{key:1,type:"info"},{default:n((()=>[i("标签")])),_:1}))])),_:1}),d(W,{prop:"area",width:"200px","show-overflow-tooltip":"",label:"分类",align:"center"}),d(W,{prop:"tips",label:"简介",align:"center",width:"300"}),d(W,{prop:"install_num",label:"安装量(次)",align:"center",width:"100"}),d(W,{prop:"create_time",label:"创建时间",align:"center",width:"200"}),d(W,{fixed:"right",label:"操作",align:"center",width:"150"},{default:n((e=>[d(L,{type:"primary",size:"small",onClick:l=>{return a=e.row,U.value=Object.assign({},a),U.value.area=U.value.area.split(","),void(x.value=!0);var a}},{default:n((()=>[i("操作")])),_:2},1032,["onClick"]),d(L,{type:"danger",size:"small",onClick:l=>{return a=e.row.id,void h.confirm("是否批量删除","删除提示").then((e=>{r({url:"/linkStore/del",method:"post",data:{ids:[a]}}).then((e=>{f.success(e.msg),S()}))})).catch();var a}},{default:n((()=>[i("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),d(F,{onCurrentChange:A.value.refresh,"page-size":15,class:"mt-6",layout:"total,prev, pager, next",total:A.value.total},null,8,["onCurrentChange","total"])]),d(E,{modelValue:x.value,"onUpdate:modelValue":l[11]||(l[11]=e=>x.value=e),title:"编辑标签",size:"400px","close-on-click-modal":!1,top:"5vh"},{default:n((()=>[d(B,{modelValue:U.value,"onUpdate:modelValue":l[10]||(l[10]=e=>U.value=e),"label-position":"top"},{default:n((()=>[d(G,{label:"名称"},{default:n((()=>[d(w,{modelValue:U.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>U.value.name=e),placeholder:"请输入网站title或名称"},null,8,["modelValue"])])),_:1}),d(G,{label:"logo"},{default:n((()=>[d(w,{modelValue:U.value.src,"onUpdate:modelValue":l[2]||(l[2]=e=>U.value.src=e),placeholder:"标签图标地址(120x120)px尺寸最佳"},{append:n((()=>[d(I,{class:"upload-demo","show-file-list":!1,"on-success":j,action:s(m)+s(y).state.site.upload},{default:n((()=>[d(L,{type:"primary"},{default:n((()=>[i("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])),_:1}),d(G,{label:"域名"},{default:n((()=>[d(w,{modelValue:U.value.domain,"onUpdate:modelValue":l[3]||(l[3]=e=>U.value.domain=e),placeholder:"请输入域名多个可以用,隔开。域名不要携带http协议"},null,8,["modelValue"])])),_:1}),d(G,{label:"网址"},{default:n((()=>[d(w,{modelValue:U.value.url,"onUpdate:modelValue":l[4]||(l[4]=e=>U.value.url=e),placeholder:"请输入网址,请携带http协议"},null,8,["modelValue"])])),_:1}),d(G,{label:"分类"},{default:n((()=>[d(R,{modelValue:U.value.area,"onUpdate:modelValue":l[5]||(l[5]=e=>U.value.area=e),multiple:"true",placeholder:"分类选择可多选",class:"w-full"},{default:n((()=>[(t(),u(c,null,v(["系统","推荐","在线工具","资讯","开发","设计","效率","娱乐","社交","阅读","金融","综合"],(e=>d(Q,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),d(G,{label:"简介"},{default:n((()=>[d(w,{modelValue:U.value.tips,"onUpdate:modelValue":l[6]||(l[6]=e=>U.value.tips=e),placeholder:"请简单介绍一下"},null,8,["modelValue"])])),_:1}),d(G,{label:"是否网页APP"},{default:n((()=>[d(X,{"active-value":1,"inactive-value":0,modelValue:U.value.app,"onUpdate:modelValue":l[7]||(l[7]=e=>U.value.app=e)},null,8,["modelValue"])])),_:1}),d(G,{label:"标签添加量（热度）"},{default:n((()=>[d(q,{modelValue:U.value.install_num,"onUpdate:modelValue":l[8]||(l[8]=e=>U.value.install_num=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1}),d(G,{label:"排行"},{default:n((()=>[d(q,{modelValue:U.value.hot,"onUpdate:modelValue":l[9]||(l[9]=e=>U.value.hot=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),d(L,{type:"primary",class:"w-full",onClick:z},{default:n((()=>[i("保存")])),_:1})])),_:1},8,["modelValue"])])}}};export{w as default};