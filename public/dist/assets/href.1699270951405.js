var t=Object.defineProperty,i=(i,e,s)=>(((i,e,s)=>{e in i?t(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s})(i,"symbol"!=typeof e?e+"":e,s),s);import{p as e,L as s}from"./index.1699270951405.js";const h={"tab://setting":()=>{e.emit("openController")},"tab://addicon":(t={})=>{t.full=!1,t.size={width:"900px",height:"500px"},t.component="addicon",e.emit("openPlugin",t)},"tab://editAll":(t={})=>{setTimeout((()=>{s.state.editStatus=!0}),100)}};var n=[];const l={subject:[],closeLast(){const t=n.pop();return t?(t.close(),!0):(this.emit("refresh",n),!1)},closeAll(){let t=this.closeLast();for(;t;)t=this.closeLast();this.emit("refresh",n)},on(t,i){this.subject.push({event:t,callback:i})},off(t,i){if(t)for(let e=0;e<this.subject.length;e++)if(this.subject[e].event===t&&this.subject[e].callback===i){this.subject.splice(e,1);break}},emit(t,i){for(let e=0;e<this.subject.length;e++)this.subject[e].event===t&&this.subject[e].callback(i)}};let a=document.createElement("style");a.innerHTML="\n    .mtabUi-dialog{\n         opacity:0;\n         transform: scale(0.8) ;\n         animation: showDialog .3s forwards;\n    }\n    @keyframes showDialog{\n      0%{\n        opacity:0;\n        transform: scale(0.8) translateY(60px);\n      }\n      100%{\n        opacity:1;\n        transform:scale(1) translateY(0px);\n      }\n    }\n",document.head.append(a);class o{constructor(t={}){i(this,"dialogHandle",null),i(this,"frameHandle",null),i(this,"iframeHandle",null),i(this,"zIndex",1e3),i(this,"width",1e3),i(this,"height",700),i(this,"left",-1),i(this,"top",-1),i(this,"url",""),i(this,"isMove",!1),i(this,"isFull",!1),i(this,"isMinimize",!1),i(this,"title",""),i(this,"headerHeight",30),i(this,"footerHeight",80),i(this,"minWidth",1200),i(this,"minHeight",550),i(this,"movePoint",{x:0,y:0,layerX:0,layerY:0}),i(this,"lastSize",{left:0,top:0,width:0,height:0}),i(this,"origin",{}),i(this,"uid",""),i(this,"ico",""),i(this,"lastClickTime",""),i(this,"tmpTime",!1),i(this,"uuid",(()=>"xxxxxxxx-xxx-xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const i=16*Math.random()|0;return("x"===t?i:3&i|8).toString(16)})))),i(this,"windowMove",(t=>{if(this.isMove){const{x:i,y:e}=t;this.isFull||this.setPosition(i-this.movePoint.layerX,e-this.movePoint.layerY)}})),i(this,"windowMouseUp",(()=>{this.isMove=!1,this.iframeHandle.style.pointerEvents="",this.frameHandle.style.cursor=""})),this.lastClickTime=(new Date).getTime(),this.uid=this.uuid();const{url:e=!1,ico:s=!1,width:h=!1,height:l=!1,top:a=!1,left:o=!1,title:d="",origin:r={},minHeight:g=0,minWidth:c=0}=t;e&&(this.url=e),this.ico=s,h&&(this.width=h),this.origin=r,this.title=d,n.push(this)}setTitle(t=""){this.title=t.length>0?t:this.title,this.titleHandle=document.createElement("div"),this.titleHandle.innerHTML=`${this.ico?`<img class="mtabUI-ico" src="${this.ico}" alt="ico"/>`:""}<span>${this.title}</span>`,Object.assign(this.titleHandle.style,{position:"absolute",left:"5px",display:"flex",fontSize:"17px",fontWeight:"600",pointerEvents:"none",alignItems:"center",height:this.px(this.headerHeight)}),this.frameHandle.appendChild(this.titleHandle)}Frame(){return this.frameHandle=document.createElement("div"),this.frameHandle.dataset.drag="move",Object.assign(this.frameHandle.style,{position:"absolute",background:"#fff",top:"0px",left:"0px",borderRadius:"8px 8px 0px 0px",width:"100%",height:this.px(this.headerHeight),userSelect:"none"}),this.frameHandle.onmousedown=t=>{const{drag:i=""}=t.target.dataset;if("move"===i){if(this.lastClickTime>(new Date).getTime()-500)return void this.setFull();this.lastClickTime=(new Date).getTime();const{x:i,y:e,layerX:s,layerY:h}=t;this.movePoint.x=i,this.movePoint.y=e,this.movePoint.layerX=s,this.movePoint.layerY=h,this.iframeHandle.style.pointerEvents="none",this.isMove=!0,this.frameHandle.style.cursor="move"}this.resetIndex()},this.miniFrame(),this.fullFrame(),this.closeFrame(),this.frameHandle}closeFrame(){let t=document.createElement("div");t.className="window-close",t.innerHTML='<img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjg2NjUwMTgxNjU1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2MDEiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik01NTAuODQ4IDUwMi40OTZsMzA4LjY0LTMwOC44OTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDgtNDUuMjQ4bC0zMDguNjA4IDMwOC44OTYtMzA4LjY0LTMwOC45MjhhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMwOC42NCAzMDguODk2LTMwOC42NCAzMDguODk2YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwzMDguNjQtMzA4Ljg5NiAzMDguNjA4IDMwOC44OTZhMzEuOTY4IDMxLjk2OCAwIDEgMCA0NS4yNDgtNDUuMjQ4bC0zMDguNjQtMzA4Ljg2NHoiIHAtaWQ9IjE2MDIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkwIj48L3BhdGg+PC9zdmc+Cg==" style="width: 20px;height: 20px;margin: auto;cursor: pointer;"  alt="close"/>',t.title="关闭窗口",Object.assign(t.style,{width:"50px",position:"absolute",height:this.px(this.headerHeight),display:"flex",right:"0px"}),t.onclick=t=>{this.close(),t.stopPropagation()},this.frameHandle.appendChild(t)}fullFrame(){let t=document.createElement("div");t.className="window-full",t.innerHTML='<img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjg2NjU3NTYzMjgxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU5MzIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHBhdGggZD0iTTgxOC43NTIgMTYwbC0yNDEuMTUyIDI0MS4xNTJhMzIgMzIgMCAwIDAgNDUuMjQ4IDQ1LjI0OEw4NjQgMjA1LjI0OFYzMjBhMzIgMzIgMCAwIDAgNjQgMFYxMjhhMzEuOTA0IDMxLjkwNCAwIDAgMC0zMi0zMmgtMTkyYTMyIDMyIDAgMCAwIDAgNjRoMTE0Ljc1MnpNMTA1LjM3NiA5MTguNjI0QTMxLjkwNCAzMS45MDQgMCAwIDEgOTYgODk2di0xOTJhMzIgMzIgMCAwIDEgNjQgMHYxMTQuNzUybDI0MS4xNTItMjQxLjE1MmEzMiAzMiAwIDAgMSA0NS4yNDggNDUuMjQ4TDIwNS4yNDggODY0SDMyMGEzMiAzMiAwIDAgMSAwIDY0SDEyOGEzMS45MDQgMzEuOTA0IDAgMCAxLTIyLjYyNC05LjM3NnoiIGZpbGw9IiMwMDAwMDAiIHAtaWQ9IjU5MzMiPjwvcGF0aD48L3N2Zz4=" style="width: 20px;height: 20px;margin: auto;cursor: pointer;"  alt="close"/>',t.title="最大化窗口",Object.assign(t.style,{width:"50px",position:"absolute",height:this.px(this.headerHeight),display:"flex",userSelect:"none",right:"50px"}),t.onclick=()=>{this.setFull()},this.frameHandle.appendChild(t)}setFull(){this.tmpTime&&this.tmpTime>(new Date).getTime()-500||(this.tmpTime=(new Date).getTime(),this.isFull?(Object.assign(this.dialogHandle.style,{width:this.px(this.lastSize.width),height:this.px(this.lastSize.height),left:this.px(this.lastSize.left),top:this.px(this.lastSize.top)}),setTimeout((()=>{Object.assign(this.dialogHandle.style,{transition:"none"})}),300),this.isFull=!1):(Object.assign(this.dialogHandle.style,{transition:"all .3s"}),Object.assign(this.dialogHandle.style,{width:"100%",height:`calc(100% - ${this.footerHeight}px)`,left:"0px",top:"0px"}),this.lastSize={left:this.left,top:this.top,width:this.width,height:this.height},this.isFull=!0))}miniFrame(){let t=document.createElement("div");t.className="window-mini",t.innerHTML='<img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjg2NjcxODYzNzUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NzQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHBhdGggZD0iTTQ1LjYwMjEzMzMzIDQ3OC4xMzk3MzMzM2g5MzIuNzk1NzMzMzRjMjIuOTM3NiAwIDMzLjg2MDI2NjY3IDExLjQ2ODggMzQuNDA2NCAzNC40MDY0IDAgMjIuOTM3Ni0xMS40Njg4IDM0LjQwNjQtMzQuNDA2NCAzNC40MDY0SDQ1LjYwMjEzMzMzYy0yMi45Mzc2IDAtMzQuNDA2NC0xMS40Njg4LTM0LjQwNjQtMzQuNDA2NCAwLTIzLjQ4MzczMzMzIDExLjQ2ODgtMzQuNDA2NCAzNC40MDY0LTM0LjQwNjR6IiBwLWlkPSI2Nzc1IiBmaWxsPSIjMmMyYzJjIj48L3BhdGg+PC9zdmc+" style="width: 20px;height: 20px;margin: auto;cursor: pointer;"  alt="close"/>',t.title="最小化",t.onclick=()=>{this.setMineSize()},Object.assign(t.style,{width:"50px",position:"absolute",height:this.px(this.headerHeight),display:"flex",userSelect:"none",right:"100px"}),this.frameHandle.appendChild(t)}resetIndex(){let t=0,i=null;n.forEach((e=>{e.zIndex>t&&(t=e.zIndex,i=e)})),i.uid!==this.uid&&(t+=1),this.setZIndex(t)}Iframe(){return this.iframeHandle=document.createElement("iframe"),this.iframeHandle.src=this.url,this.iframeHandle.dataset.uid=this.uid,Object.assign(this.iframeHandle.style,{position:"absolute",top:this.px(this.headerHeight),border:"none",outline:"none",transform:"scale(1)",width:"100%",height:`calc(100% - ${this.px(this.headerHeight)})`}),this.iframeHandle}px(t){return t+"px"}getElementCenterPosition(t,i){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{x:Math.floor((e-t)/2),y:Math.floor((s-i)/2)}}setPosition(t=0,i=0){t<0&&(t=0),t>window.innerWidth-this.width&&(t=window.innerWidth-this.width),i<0&&(i=0),i>window.innerHeight-this.height&&(i=window.innerHeight-this.height),this.left=t,this.top=i,Object.assign(this.dialogHandle.style,{left:this.px(t),top:this.px(i)})}setZIndex(t=1e3){this.zIndex=t,this.dialogHandle.style.zIndex=this.zIndex}append(){document.body.appendChild(this.dialogHandle),l.emit("refresh",n)}setMineSize(){!0===this.isMinimize?(this.dialogHandle.style.display="block",this.isMinimize=!1):(this.dialogHandle.style.display="none",this.isMinimize=!0)}open(){this.dialogHandle=document.createElement("div");const{x:t,y:i}=this.getElementCenterPosition(this.width,this.height);this.left=t,this.top=i,this.dialogHandle.className="mtabUi-dialog",Object.assign(this.dialogHandle.style,{position:"fixed",background:"#fff",width:this.px(this.width),height:this.px(this.height),left:this.px(t),top:this.px(i),minWidth:this.px(this.minWidth),minHeight:this.px(this.minHeight),resize:"auto"}),this.dialogHandle.appendChild(this.Frame()),this.dialogHandle.appendChild(this.Iframe()),this.setTitle(this.title),this.resetIndex(),this.append(),this.bindEvent(),this.resetIndex()}bindEvent(){window.addEventListener("mousemove",this.windowMove),window.addEventListener("mouseup",this.windowMouseUp);new MutationObserver((t=>{t.forEach((t=>{this.width=this.dialogHandle.clientWidth,this.height=this.dialogHandle.clientHeight}))})).observe(this.dialogHandle,{attributes:!0,childList:!1,subtree:!1})}close(){window.removeEventListener("mousemove",this.windowMove),window.removeEventListener("mouseup",this.windowMouseUp),n.forEach(((t,i)=>{t.uid===this.uid&&n.splice(i,1)})),document.body.removeChild(this.dialogHandle),l.emit("refresh",n)}}window.MtabManager=l;const d=(t,i=0)=>{const e=s.getters.find(t);if(e){const{app:t=0}=e;if(1===t){let t="";t=(/^http/.test(e.url),e.url);new o({width:1200,title:e.name,ico:e.src,url:t}).open()}else g(e.url)}},r=t=>{let i=document.createElement("a");/http/.test(t)||(t="https://"+t),i.href=t,i.target="_blank",i.click(),i.remove()},g=(t,i=!1)=>{h[t]?h[t]():i||s.state.config.openType.linkOpen?r(t):location.href=t};export{h as C,l as M,g as a,n as d,r as o,d as r};