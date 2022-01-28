"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4404],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),p=i,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||c;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73025:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),o=["components"],a={id:"architecture",title:"Architecture"},s=void 0,u={unversionedId:"design/architecture",id:"design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/docs/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/zh-cn/docs/next/design/architecture",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Development in CodeReady Containers",permalink:"/zh-cn/docs/next/developer_guide/openshift_development"},next:{title:"Scheduler Core Design",permalink:"/zh-cn/docs/next/design/scheduler_core_design"}},l=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Components",id:"components",children:[{value:"Scheduler interface",id:"scheduler-interface",children:[],level:3},{value:"Scheduler core",id:"scheduler-core",children:[],level:3},{value:"Kubernetes shim",id:"kubernetes-shim",children:[],level:3}],level:2}],h={toc:l};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Apache YuniKorn (Incubating) is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),(0,c.kt)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),(0,c.kt)("h2",{id:"architecture"},"Architecture"),(0,c.kt)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),(0,c.kt)("img",{src:r(72426).Z}),(0,c.kt)("h2",{id:"components"},"Components"),(0,c.kt)("h3",{id:"scheduler-interface"},"Scheduler interface"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),(0,c.kt)("h3",{id:"scheduler-core"},"Scheduler core"),(0,c.kt)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",(0,c.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/design/scheduler_core_design"},"here"),"."),(0,c.kt)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),(0,c.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",(0,c.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/design/k8shim"},"here")))}d.isMDXComponent=!0},72426:function(e,t,r){t.Z=r.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);