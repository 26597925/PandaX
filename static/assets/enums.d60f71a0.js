import{A as e}from"./Api.a196f191.js";import{E as s}from"./Enum.2b540114.js";const t={list:e.create("/system/resources","get"),detail:e.create("/system/resources/{id}","get"),save:e.create("/system/resources","post"),update:e.create("/system/resources/{id}","put"),del:e.create("/system/resources/{id}","delete"),changeStatus:e.create("/system/resources/{id}/{status}","put")},r={list:e.create("/system/roles","get"),save:e.create("/system/roles","post"),update:e.create("/system/roles/{id}","put"),del:e.create("/system/roles/{id}","delete"),roleResourceIds:e.create("/system/roles/{id}/resourceIds","get"),roleResources:e.create("/system/roles/{id}/resources","get"),saveResources:e.create("/system/roles/{id}/resources","post")},a={list:e.create("/system/accounts","get"),save:e.create("/system/accounts","post"),update:e.create("/system/accounts/{id}","put"),del:e.create("/system/accounts/{id}","delete"),changeStatus:e.create("/system/accounts/{id}/{status}","put"),roleIds:e.create("/system/accounts/{id}/roleIds","get"),roles:e.create("/system/accounts/{id}/roles","get"),resources:e.create("/system/accounts/{id}/resources","get"),saveRoles:e.create("/system/accounts/roles","post")};e.create("/system/logs","get");var c={ResourceTypeEnum:new s().add("MENU","\u83DC\u5355",1).add("PERMISSION","\u6743\u9650",2),accountStatus:new s().add("ENABLE","\u6B63\u5E38",1).add("DISABLE","\u7981\u7528",-1),logType:new s().add("UPDATE","\u4FEE\u6539",2).add("DELETE","\u5220\u9664",3).add("SYS_LOG","\u7CFB\u7EDF",4).add("ERR_LOG","\u5F02\u5E38",5)};export{r as a,a as b,c as e,t as r};