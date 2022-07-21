"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5944:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"rn-1.0.0",title:"Release Announcement v1.0.0"},l=void 0,p={type:"mdx",permalink:"/release-announce/1.0.0",source:"@site/src/pages/release-announce/1.0.0.md",title:"Release Announcement v1.0.0",description:"\x3c!--",frontMatter:{id:"rn-1.0.0",title:"Release Announcement v1.0.0"}},u=[{value:"Overview",id:"overview",level:2},{value:"Incompatible changes",id:"incompatible-changes",level:2},{value:"helm upgrade",id:"helm-upgrade",level:3},{value:"Configuration changes",id:"configuration-changes",level:3},{value:"Resource Display and Communication",id:"resource-display-and-communication",level:3},{value:"Timestamps in REST responses",id:"timestamps-in-rest-responses",level:3},{value:"Removal of old REST API endpoints",id:"removal-of-old-rest-api-endpoints",level:3},{value:"Highlights",id:"highlights",level:2},{value:"Plugin mode technical Preview",id:"plugin-mode-technical-preview",level:3},{value:"Memory and cpu usage fixes",id:"memory-and-cpu-usage-fixes",level:3},{value:"Security improvements",id:"security-improvements",level:3},{value:"Validation tool",id:"validation-tool",level:3},{value:"Community",id:"community",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-announcement-v100"},"Release Announcement v1.0.0"),(0,i.kt)("p",null,"We are pleased to announce that the Apache YuniKorn community has voted to release 1.0.0. This is the first release of Apache YuniKorn after graduation from the incubator. "),(0,i.kt)("p",null,"Apache YuniKorn is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on container orchestration frameworks like Kubernetes for on-prem and on-cloud use cases."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache YuniKorn community has fixed 173 ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12350818"},"JIRAs")," in this release. "),(0,i.kt)("p",null,"Release manager: Wilfred Spiegelenburg"),(0,i.kt)("p",null,"Release date: 3 May 2022"),(0,i.kt)("h2",{id:"incompatible-changes"},"Incompatible changes"),(0,i.kt)("p",null,"As part of this release a number of incompatible changes have been introduced."),(0,i.kt)("h3",{id:"helm-upgrade"},"helm upgrade"),(0,i.kt)("p",null,"With the changes made to the helm charts running a helm upgrade from an older version to 1.0.0 might not work.\nThe workaround is to first uninstall the old version and then perform a clean installation of the current release."),(0,i.kt)("h3",{id:"configuration-changes"},"Configuration changes"),(0,i.kt)("p",null,"Size modifiers are now supported for the queue configuration.\nThis changes the way quota values are interpreted in the configuration.\nBefore 1.0.0 all memory values were interpreted as ",(0,i.kt)("em",{parentName:"p"},"megabytes")," and vcore (cpu) values as ",(0,i.kt)("em",{parentName:"p"},"milli cores"),".\nFrom 1.0.0 onwards memory values are specified in ",(0,i.kt)("strong",{parentName:"p"},"bytes")," and vcores are specified in ",(0,i.kt)("strong",{parentName:"p"},"cores")," ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-629"},"YUNIKORN-629"),"."),(0,i.kt)("p",null,"To maintain the same interpretation of values in the configuration make the following changes to the pre-1.0.0 configuration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"change"),(0,i.kt)("th",{parentName:"tr",align:null},"old value"),(0,i.kt)("th",{parentName:"tr",align:null},"new value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"memory"),(0,i.kt)("td",{parentName:"tr",align:null},"add M"),(0,i.kt)("td",{parentName:"tr",align:null},"memory: 2048"),(0,i.kt)("td",{parentName:"tr",align:null},"memory: 2048M")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vcore"),(0,i.kt)("td",{parentName:"tr",align:null},"add m"),(0,i.kt)("td",{parentName:"tr",align:null},"vcore: 250"),(0,i.kt)("td",{parentName:"tr",align:null},"vcore: 250m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"other"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"license: 1"),(0,i.kt)("td",{parentName:"tr",align:null},"license: 1")))),(0,i.kt)("h3",{id:"resource-display-and-communication"},"Resource Display and Communication"),(0,i.kt)("p",null,"The conversion of memory resources of pods and other objects by the k8shim into megabytes could cause a discrepancy between the size accounted for by the Kubernetes tools and YuniKorn.\nThis could lead to issues around node fits and autoscaling of nodes.\nIn 1.0.0 all memory resources are converted to ",(0,i.kt)("strong",{parentName:"p"},"bytes")," before being used in calculation and communications ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1105"},"YUNIKORN-1105"),"."),(0,i.kt)("p",null,"Resources in all REST response objects are no longer a single string but are JSON structures using a key-value pair for each resource type.\nAn example of the new resource JSON response object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"allocatedResource": {\n  "memory": 54000000,\n  "vcore": 80\n}\n')),(0,i.kt)("p",null,"The REST representation does not include or support size modifiers.\nThe change for using ",(0,i.kt)("strong",{parentName:"p"},"bytes")," in all communication for memory flows through into the REST response objects.\nCPU values, i.e. vcore, communication has not changed and still uses ",(0,i.kt)("strong",{parentName:"p"},"milli cores"),".\nThe REST documentation has been updated to show the new resource structures ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-165"},"YUNIKORN-165"),"."),(0,i.kt)("h3",{id:"timestamps-in-rest-responses"},"Timestamps in REST responses"),(0,i.kt)("p",null,"All timestamps in the rest API are now returned as the number of nanoseconds elapsed since 1 January 1970 UTC.\nThe time range in a ",(0,i.kt)("inlineCode",{parentName:"p"},"int64")," that can be displayed ranges from the year 1678 or to the year 2262, see ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#Time.UnixNano"},"Go Time UnixNano")," for details.\nTimestamps in earlier releases were converted to a string as part of the REST response creation with inconsistent layouts ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1170"},"YUNIKORN-1170"),"."),(0,i.kt)("h3",{id:"removal-of-old-rest-api-endpoints"},"Removal of old REST API endpoints"),(0,i.kt)("p",null,"The REST API has been updated with endpoints that support specifying partitions. The old versions which do not take a partition argument have been removed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/queues")," replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/partition/{partitionName}/queues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/apps")," replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"ws/v1/partition/{partitionName}/queues/{queueName}/application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/nodes")," replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"/ws/v1/partition/{partitionName}/nodes"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-954"},"YUNIKORN-954")),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"plugin-mode-technical-preview"},"Plugin mode technical Preview"),(0,i.kt)("p",null,"As part of this release a new deployment mode is added which is built on top of the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"},"Scheduling Framework"),".\nThis is a major change in the way the scheduler k8shim works. As the implementation is not considered mature yet the deployment mode is considered a tech preview.\nThe design document can be found on the website as the ",(0,i.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/next/design/scheduler_plugin"},"K8s Scheduler Plugin")," design document.\nBoth standard and plugin deployment images are build by the default build process.\nThe choice between deployment types is ",(0,i.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/next/user_guide/deployment_modes"},"based on a helm variable"),"."),(0,i.kt)("h3",{id:"memory-and-cpu-usage-fixes"},"Memory and cpu usage fixes"),(0,i.kt)("p",null,"As part of the release the communication between the core and the k8shim has been simplified ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-462"},"YUNIKORN-462"),".\nUsing those changes the caches in the k8shim have been simplified and numerous memory leaks have been fixed.\nMore detail in the jiras ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-876"},"YUNIKORN-876")," and ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1100"},"YUNIKORN-1100"),"."),(0,i.kt)("p",null,"An idle loop in the core has been removed which drops CPU usage of the scheduler if no scheduling action are performed ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1106"},"YUNIKORN-1106"),"."),(0,i.kt)("h3",{id:"security-improvements"},"Security improvements"),(0,i.kt)("p",null,"A number of changes have been made to improve security. "),(0,i.kt)("p",null,"The scheduler no longer uses ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privileges.\nThe privileges used by the scheduler are the same as the default scheduler uses.\nSome additional privileges required for placeholder pods have been added ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-997"},"YUNIKORN-997"),"."),(0,i.kt)("p",null,"The processes within the docker images no longer run as the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user but use the ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn")," user ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1111"},"YUNIKORN-1111"),"."),(0,i.kt)("p",null,"Certificates used by the admission controller are automatically rotated before they expire without downtime ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1119"},"YUNIKORN-1119"),"."),(0,i.kt)("p",null,"Placeholders run a simple pause image. This pause image by default is loaded from an external image repository.\nYuniKorn now allows setting a custom image for placeholder. One image can be specified for the deployment.\nIt accepts an image name, including a hostname, that can use a local repository for air-gapped deployments ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-638"},"YUNIKORN-638"),". "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The placeholder image should be a lightweight image, preferable a pause or sleep image. ")),(0,i.kt)("h3",{id:"validation-tool"},"Validation tool"),(0,i.kt)("p",null,"As part of the release a new script is distributed that allows the creation of a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," based Kubernetes cluster."),(0,i.kt)("p",null,"Unpack the archive and follow the instructions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file to build the images.\nRun the script for more instructions and to list the tools required for validating the release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./validate_cluster.sh\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," cluster created is a small, but fully functional Kubernetes cluster, with Apache YuniKorn deployed ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-764"},"YUNIKORN-764")),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Since the last release Apache YuniKorn has graduated from the incubator."))}m.isMDXComponent=!0}}]);