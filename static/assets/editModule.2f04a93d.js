var y=Object.defineProperty;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var D=(o,l,e)=>l in o?y(o,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[l]=e,V=(o,l)=>{for(var e in l||(l={}))k.call(l,e)&&D(o,e,l[e]);if(h)for(var e of h(l))S.call(l,e)&&D(o,e,l[e]);return o};import{u as G,a as I}from"./api.95bec91e.js";import{_ as P}from"./index.d7413c26.js";import{r as z,i as R,t as U,k as s,a4 as M,l as A,y as t,z as a,a6 as j,b as E,C as f,w as q,m as b,s as F,x as C,X as N,W as O,P as w,F as L}from"./vendor.14d7a511.js";const W={name:"editMenu",props:{title:{type:String,default:()=>""}},setup(){const{proxy:o}=L(),l=z(null),e=R({isShowDialog:!1,ruleForm:{id:0,path:"",description:"",apiGroup:"",method:""},methodOptions:[],ruleRules:{path:[{required:!0,message:"API\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],apiGroup:[{required:!0,message:"API\u5206\u7EC4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],method:[{required:!0,message:"API\u65B9\u6CD5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),p=r=>{r.id&&r.id!=null&&r.id!=0?(e.ruleForm=r,e.ruleForm.id=r.id,e.ruleForm.path=r.path,e.ruleForm.description=r.description,e.ruleForm.apiGroup=r.apiGroup,e.ruleForm.method=r.method):i(),e.isShowDialog=!0,o.getDicts("sys_method_api").then(m=>{e.methodOptions=m.data})},d=r=>{o.mittBus.emit("onEditApiModule",r),e.isShowDialog=!1},_=()=>{d()},n=()=>{const r=j(l);!r||r.validate(m=>{m&&(e.ruleForm.id!=null&&e.ruleForm.id!=0?G(e.ruleForm).then(c=>{E.success("\u4FEE\u6539\u6210\u529F"),d(e.ruleForm)}):I(e.ruleForm).then(c=>{E.success("\u65B0\u589E\u6210\u529F"),d(e.ruleForm)}))})},i=()=>{e.ruleForm.id=0,e.ruleForm.path="",e.ruleForm.description="",e.ruleForm.method="",e.ruleForm.apiGroup=""};return V({ruleFormRef:l,openDialog:p,closeDialog:d,onCancel:_,initForm:i,onSubmit:n},U(e))}},T={class:"system-menu-container"},X={style:{"font-size":"large"}},$={class:"dialog-footer"},H=F("\u53D6 \u6D88"),J=F("\u7F16 \u8F91");function K(o,l,e,p,d,_){const n=s("el-input"),i=s("el-form-item"),r=s("el-radio"),m=s("el-radio-group"),c=s("el-form"),g=s("el-button"),v=s("el-dialog"),B=M("drag");return f(),A("div",T,[t(v,{modelValue:o.isShowDialog,"onUpdate:modelValue":l[4]||(l[4]=u=>o.isShowDialog=u),width:"769px"},{title:a(()=>[q(b("div",X,[F(C(e.title),1)],512),[[B,[".app-container .el-dialog",".app-container .el-dialog__header"]]])]),footer:a(()=>[b("span",$,[t(g,{onClick:p.onCancel,size:"small"},{default:a(()=>[H]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:p.onSubmit,size:"small"},{default:a(()=>[J]),_:1},8,["onClick"])])]),default:a(()=>[t(c,{model:o.ruleForm,size:"small",rules:o.ruleRules,ref:"ruleFormRef","label-width":"80px"},{default:a(()=>[t(i,{label:"\u8DEF\u5F84",prop:"path"},{default:a(()=>[t(n,{modelValue:o.ruleForm.path,"onUpdate:modelValue":l[0]||(l[0]=u=>o.ruleForm.path=u),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84"},null,8,["modelValue"])]),_:1}),t(i,{label:"API\u63CF\u8FF0",prop:"description"},{default:a(()=>[t(n,{modelValue:o.ruleForm.description,"onUpdate:modelValue":l[1]||(l[1]=u=>o.ruleForm.description=u),placeholder:"\u8BF7\u8F93\u5165API\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),t(i,{label:"API\u5206\u7EC4",prop:"apiGroup"},{default:a(()=>[t(n,{modelValue:o.ruleForm.apiGroup,"onUpdate:modelValue":l[2]||(l[2]=u=>o.ruleForm.apiGroup=u),placeholder:"\u8BF7\u8F93\u5165API\u5206\u7EC4"},null,8,["modelValue"])]),_:1}),t(i,{label:"\u65B9\u6CD5\u540D",prop:"method"},{default:a(()=>[t(m,{modelValue:o.ruleForm.method,"onUpdate:modelValue":l[3]||(l[3]=u=>o.ruleForm.method=u)},{default:a(()=>[(f(!0),A(N,null,O(o.methodOptions,u=>(f(),w(r,{key:u.dictValue,label:u.dictValue},{default:a(()=>[F(C(u.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var ee=P(W,[["render",K]]);export{ee as default};