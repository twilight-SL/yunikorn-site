"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1530],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92531:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"rn-0.12.2",title:"Release Announcement v0.12.2"},s=void 0,u={type:"mdx",permalink:"/release-announce/0.12.2",source:"@site/src/pages/release-announce/0.12.2.md",title:"Release Announcement v0.12.2",description:"\x3c!--",frontMatter:{id:"rn-0.12.2",title:"Release Announcement v0.12.2"}},p=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Supported Kubernetes versions",id:"supported-kubernetes-versions",level:3},{value:"Separation of admission controller deployment from scheduler deployment",id:"separation-of-admission-controller-deployment-from-scheduler-deployment",level:3},{value:"Removal of beta API usage in admission controller",id:"removal-of-beta-api-usage-in-admission-controller",level:3},{value:"Deprecation of old REST API endpoints",id:"deprecation-of-old-rest-api-endpoints",level:3},{value:"Community",id:"community",level:2}],c={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-announcement-v0122"},"Release Announcement v0.12.2"),(0,i.kt)("p",null,"We are pleased to announce that the Apache YuniKorn (Incubating) community has voted to release 0.12.2. Apache YuniKorn (Incubating) is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on container orchestration frameworks like Kubernetes for on-prem and on-cloud use cases."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache YuniKorn (Incubating) community has fixed 19 ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1038?filter=12351270"},"JIRAs")," in this release. Version 0.12.2 is primarily a maintenance release to allow better compatibility with current Kubernetes releases. There is also a fix for a critical issue affecting the usage of dynamic volumes that was found in 0.12.1, so all users of 0.12.1 are urged to upgrade."),(0,i.kt)("p",null,"Release manager: Craig Condit"),(0,i.kt)("p",null,"Release date: 2022-02-03"),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"supported-kubernetes-versions"},"Supported Kubernetes versions"),(0,i.kt)("p",null,"In this release, support for Kubernetes 1.22.x and 1.23.x was added (the last release supported 1.19.x, 1.20.x and 1.21.x). Apache YuniKorn (Incubating) attempts to support all current Kubernetes releases."),(0,i.kt)("h3",{id:"separation-of-admission-controller-deployment-from-scheduler-deployment"},"Separation of admission controller deployment from scheduler deployment"),(0,i.kt)("p",null,"As of 0.12.2, the Admission controller is now managed explicitly via Helm instead of being ad-hoc installed from within the scheduler. This will make scheduler restarts and future upgrades more reliable. However, this does mean that migration from versions < 0.12.2 to versions >= 0.12.2 will require an uninstall/reinstall cycle via Helm. We expect that Helm upgrades will function properly moving forward."),(0,i.kt)("h3",{id:"removal-of-beta-api-usage-in-admission-controller"},"Removal of beta API usage in admission controller"),(0,i.kt)("p",null,"In 0.12.2, the admission controller was updated to remove usage of a few beta Kubernetes APIs which were dropped from Kubernetes 1.22. This now allows us to deploy on all currently maintained Kubernetes releases."),(0,i.kt)("h3",{id:"deprecation-of-old-rest-api-endpoints"},"Deprecation of old REST API endpoints"),(0,i.kt)("p",null,"The REST API has been updated with endpoints that support specifying partitions. The old versions which do not take a partition argument have been deprecated and will be removed in an upcoming release:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/queues")," replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/partition/{partitionName}/queues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/apps")," replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/partition/{partitionName}/apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/nodes")," replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/partition/{partitionName}/nodes"))),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"The Apache YuniKorn (Incubating) community is pleased to welcome new committers Peter Bacsko and Yu Teng Chen. We would love to see more committers joining the community and help to shape the project. We continue to have bi-weekly community meetings in 2 different time zones, ad-hoc meetings, and offline channel discussions. The community continues to be open to all interested parties."))}d.isMDXComponent=!0}}]);