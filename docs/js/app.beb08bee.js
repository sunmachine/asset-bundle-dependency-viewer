(function(e){function t(t){for(var i,a,r=t[0],l=t[1],c=t[2],u=0,f=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/asset-bundle-dependency-viewer/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0cd8":function(e,t,n){"use strict";n("de09")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BundleGraph")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("bundle-graph-header",{attrs:{"bundle-count":e.bundleCount,"visible-bundles-count":e.visibleBundlesCount,"manifest-path":e.manifestPath}}),n("bundle-graph-selection-nav",{attrs:{selectionNavProps:e.selectionNavProps}}),n("d3-network",{attrs:{"net-nodes":e.nodes,"net-links":e.links,options:e.options},on:{"node-click":e.onSelectedNode}})],1)},r=[],l=(n("b0c0"),n("a5b7")),c=n.n(l),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bgr-header-container"},[n("h1",[e._v("Asset Bundle Topology")]),n("p",[e._v(" "+e._s("Manifest path: "+e.manifestPath)),n("br"),e._v(" "+e._s("Total bundles: "+e.bundleCount)),n("br"),e._v(" "+e._s("Visible bundles: "+e.visibleBundlesCount)+" ")])])},u=[],f={name:"BundleGraphHeader",props:{bundleCount:{default:function(){return 0}},visibleBundlesCount:{default:function(){return 0}},manifestPath:{default:function(){return"Please select a file..."}}}},p=f,h=(n("8d32"),n("2877")),v=Object(h["a"])(p,d,u,!1,null,"3b7e0680",null),b=v.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bgr-selection-nav-container"},[n("bundle-graph-selection-nav-button",{attrs:{buttonProps:e.openManifestFileButton}}),n("bundle-graph-selection-nav-button",{attrs:{buttonProps:e.clearSelectionButton}}),n("bundle-graph-selection-nav-button",{attrs:{buttonProps:e.isolateNodeButton}}),n("bundle-graph-selection-nav-button",{attrs:{buttonProps:e.isolateNodeDependentsButton}})],1)},g=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return void 0!==e.buttonProps?n("div",{staticClass:"bgr-selection-nav-button"},[n("div",{staticClass:"tooltip"},["isolate"===e.buttonProps.name?n("div",{on:{click:e.buttonProps.onClick}},[n("isolate-image",{staticClass:"button-icon",attrs:{id:"button-isolate"}})],1):e._e(),"isolate-dependents"===e.buttonProps.name?n("div",{on:{click:e.buttonProps.onClick}},[n("isolate-image",{staticClass:"button-icon",attrs:{id:"button-isolate-dependents"}})],1):e._e(),"clear"===e.buttonProps.name?n("div",{on:{click:e.buttonProps.onClick}},[n("cancel-image",{staticClass:"button-icon",attrs:{id:"button-clear-selection"}})],1):e._e(),"open-file"===e.buttonProps.name?n("div",[n("input",{staticClass:"input-file-field",attrs:{type:"file",name:"file",id:"button-open-manifest-file"},on:{change:e.buttonProps.onClick}}),n("label",{attrs:{for:"button-open-manifest-file"}},[n("open-file-image",{staticClass:"label-icon"})],1)]):e._e(),n("span",{staticClass:"tooltip-text"},[e._v(e._s(e.buttonProps.toolTip))])])]):e._e()},_=[],C=n("b388"),P=n.n(C),S=n("b752"),N=n.n(S),w=n("e159"),B=n.n(w),k={name:"BundleGraphNavButton",components:{IsolateImage:P.a,OpenFileImage:N.a,CancelImage:B.a},props:{buttonProps:{type:Object,default:function(){}}}},O=k,F=(n("0cd8"),Object(h["a"])(O,y,_,!1,null,"640aba92",null)),j=F.exports,x={name:"BundleGraphSelectionNav",components:{BundleGraphSelectionNavButton:j},props:{selectionNavProps:{type:Object,default:function(){}}},data:function(){return{openManifestFileButton:{name:"open-file",toolTip:"Open manifest file.",onClick:this.selectionNavProps.onOpenManifestFile},clearSelectionButton:{name:"clear",toolTip:"Clear selection.",onClick:this.selectionNavProps.onClearSelectedNode},isolateNodeButton:{name:"isolate",toolTip:"Isolate selected node.",onClick:this.selectionNavProps.onIsolateSelectedNode},isolateNodeDependentsButton:{name:"isolate-dependents",toolTip:"Isolate dependents.",onClick:this.selectionNavProps.onIsolateSelectedNodeDependents}}}},M=x,I=(n("f9bd"),Object(h["a"])(M,m,g,!1,null,"327de0d2",null)),G=I.exports,z=n("d4ec"),E=n("bee2"),T=n("ade3"),D=(n("99af"),n("2ca0"),n("caad"),n("2532"),n("d81d"),n("7db0"),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(z["a"])(this,e),this.name=t,this.dependencies=n}),V=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(z["a"])(this,e),this.id=t,this.name=void 0!==t?t:void 0,this.dependencies=n,this._color=void 0,this._size=void 0},A=function e(t,n){Object(z["a"])(this,e),this.sid=t,this.tid=n,this._color=void 0},H=(n("4d63"),n("ac1f"),n("25f0"),function(){function e(t,n){Object(z["a"])(this,e),this.patterns=t,this.enabled=n}return Object(E["a"])(e,[{key:"isFiltered",value:function(e){if(this.enabled)for(var t in this.patterns){var n=this.patterns[t],i=new RegExp(n);if(i.test(e))return!0}return!1}}]),e}()),L=n("8f3c"),U=n.n(L),$=function(){function e(){Object(z["a"])(this,e),Object(T["a"])(this,"fileBuffer",void 0)}return Object(E["a"])(e,[{key:"setFile",value:function(e,t){var n=this;console.log("Setting file: ".concat(e.name," (").concat(e.type?e.type:"type/none",")")),!e.type||e.type.startsWith("text/")?e.text().then((function(i){try{n.fileBuffer=U.a.parse(i),n.filePath=e.name,t()}catch(s){console.error(s),n._onError(),t()}})):console.log("File is not a text document. Aborting...",e.type,e)}},{key:"process",value:function(e,t){if(void 0!==this.fileBuffer){if("error"===this.fileBuffer)return this._onError("Problems on parsing provided file buffer.");var n=this.fileBuffer,i=n["ManifestFileVersion"],s=n["CRC"],o=n["AssetBundleManifest"];try{var a=this._parseBundleInfo(o["AssetBundleInfos"]),r=this._extractNodes(a,e),l=this._generateNodeLinks(r,(function(e){e._size=20+Math.pow(e.dependencies.length,1.5),e._color="#dcfaf3"})),c={manifestPath:this.filePath,manifestFileVersion:i,crc:s,bundleCount:a.length,visibleBundlesCount:a.length,nodes:r,links:l,error:!1};if(void 0!==t){var d=[],u=function e(t){if(void 0!==r&&void 0!==t&&!d.map((function(e){return e.id})).includes(t)){var n=r.find((function(e){return e.id===t}));if(void 0!==n)for(var i in d.push(n),n.dependencies){var s=n.dependencies[i];e(s)}}};u(t.id);var f=d.find((function(e){return e.id===t.id}));f._color="#FFFF00",c.nodes=d,c.links=this._generateNodeLinks(d)}return c}catch(p){return this._onError("Problems while processing file.")}}}},{key:"_extractNodes",value:function(e,t){var n=[];for(var i in e){var s=e[i];if(!this._isFiltered(s,t)){var o=new V(s.name,s.dependencies);void 0!==o.name&&n.push(o)}}return n}},{key:"_generateNodeLinks",value:function(e,t){var n=[];for(var i in e){var s=e[i];for(var o in s.dependencies){var a=s.dependencies[o];if(e.map((function(e){return e.name})).includes(a)){var r=new A(s.id,a);n.push(r)}}void 0!==t&&t(s)}return n}},{key:"_isFiltered",value:function(e,t){var n=Object.assign(new D,e);for(var i in t){var s=Object.assign(new H,t[i]);if(s.isFiltered(n.name))return!0}return!1}},{key:"_parseBundleInfo",value:function(e){var t=[];for(var n in e){var i=new D,s=e[n];i.name=s["Name"];var o=s["Dependencies"];for(var a in o){var r=o[a];i.dependencies.push(r)}void 0!==i.name&&t.push(i)}return t}},{key:"_onError",value:function(e){return this.filePath="Please try another file...",this.fileBuffer="error",{manifestPath:this.filePath,error:e,nodes:[],links:[]}}}]),e}(),W=function(){function e(){Object(z["a"])(this,e),Object(T["a"])(this,"graphState",void 0),this.parser=new $}return Object(E["a"])(e,[{key:"setFilters",value:function(e){this.filters=e}},{key:"setFile",value:function(e,t){this.parser.setFile(e,t)}},{key:"update",value:function(e){this.parser.fileBuffer&&(this.graphState=this.parser.process(this.filters,e),this.graphState.nodes&&(this.graphState.visibleBundlesCount=this.graphState.nodes.length))}}]),e}(),J=new W,R={components:{BundleGraphSelectionNav:G,BundleGraphHeader:b,D3Network:c.a},name:"BundleGraph",created:function(){J.setFilters([]),J.update(),this.forceUpdateGraph()},data:function(){return{selectedNode:void 0,manifestPath:void 0,manifestFileVersion:void 0,manifestCrc:void 0,bundleCount:void 0,visibleBundlesCount:void 0,nodes:[],links:[],options:{size:{w:window.innerWidth,h:window.innerHeight},force:1600,nodeLabels:!0,linkWidth:1,canvas:!1}}},computed:{selectionNavProps:function(){return{node:this.selectedNode,onOpenManifestFile:this.onOpenManifestFile,onClearSelectedNode:this.onClearSelectedNode,onIsolateSelectedNode:this.onIsolateSelectedNode,onIsolateSelectedNodeDependents:this.onIsolateSelectedNodeDependents}}},methods:{onSelectedNode:function(e,t){void 0!==this.selectedNode&&(this.selectedNode._color="#DCFAF3"),this.selectedNode=t,this.selectedNode._color="#FFFF00"},onOpenManifestFile:function(e){var t=this,n=e.target.files[0];this.manifestPath=n.name,J.setFile(n,(function(){J.update(),t.forceUpdateGraph()}))},onClearSelectedNode:function(){J.update(),this.forceUpdateGraph()},onIsolateSelectedNode:function(){J.update(this.selectedNode),this.forceUpdateGraph()},onIsolateSelectedNodeDependents:function(){J.update(this.selectedNode),this.forceUpdateGraph()},forceUpdateGraph:function(){J&&J.graphState&&(this.manifestPath=J.graphState.manifestPath,this.manifestFileVersion=J.graphState.manifestFileVersion,this.manifestCrc=J.graphState.crc,this.bundleCount=J.graphState.bundleCount,this.visibleBundlesCount=J.graphState.visibleBundlesCount,this.nodes=J.graphState.nodes,this.links=J.graphState.links)}}},q=R,K=(n("6420"),Object(h["a"])(q,a,r,!1,null,null,null)),Q=K.exports,X={name:"App",components:{BundleGraph:Q}},Y=X,Z=(n("034f"),Object(h["a"])(Y,s,o,!1,null,null,null)),ee=Z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(ee)}}).$mount("#app")},6205:function(e,t,n){},"85ec":function(e,t,n){},"8d32":function(e,t,n){"use strict";n("6205")},b388:function(e,t,n){var i=n("ded3").default,s=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),r=t.children,l=void 0===r?[]:r,c=a.class,d=a.staticClass,u=a.style,f=a.staticStyle,p=a.attrs,h=void 0===p?{}:p,v=s(a,o);return n("svg",i({class:[c,d],style:[u,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 384"},h)},v),l.concat([n("path",{attrs:{d:"M298.667 213.333v128h-256v-256h128V42.667h-128C19.103 42.667 0 61.769 0 85.333v256C0 364.898 19.103 384 42.667 384h256c23.564 0 42.667-19.102 42.667-42.667v-128h-42.667z"}}),n("path",{attrs:{d:"M298.667 0c-47.128 0-85.333 38.205-85.333 85.333s38.205 85.333 85.333 85.333S384 132.462 384 85.333 345.795 0 298.667 0zm0 128C275.103 128 256 108.898 256 85.333s19.102-42.667 42.667-42.667c23.564 0 42.667 19.103 42.667 42.667S322.231 128 298.667 128z"}})]))}}},b752:function(e,t,n){var i=n("ded3").default,s=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),r=t.children,l=void 0===r?[]:r,c=a.class,d=a.staticClass,u=a.style,f=a.staticStyle,p=a.attrs,h=void 0===p?{}:p,v=s(a,o);return n("svg",i({class:[c,d],style:[u,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426.292 426.292"},h)},v),l.concat([n("path",{attrs:{d:"M362.314 87.065H182.261l.197.326c.127.18.275.455.528.875l-.528-.875c-.165-.234-.296-.307-.58-.326h-.958c.454 0 .748-.015.958 0h.382l-14.814-24.523c-6.898-11.418-21.08-19.404-34.403-19.404H63.955C28.63 43.138 0 71.746 0 107.074v212.143c0 35.348 28.612 63.936 64.038 63.936h298.215c35.386 0 64.038-28.618 64.038-64.036V151.101c.001-35.382-28.577-64.036-63.977-64.036zm21.311 232.052a21.326 21.326 0 01-21.372 21.37H64.038c-11.87 0-21.372-9.494-21.372-21.27V107.074c0-11.757 9.52-21.27 21.289-21.27h67.696l-.185-.306c-.13-.18-.278-.46-.541-.895l.541.895c.154.213.281.285.543.306h-.358l14.814 24.523c6.917 11.45 21.085 19.404 34.454 19.404h181.394c11.811 0 21.311 9.526 21.311 21.37v168.016z"}})]))}}},c1f1:function(e,t,n){},de09:function(e,t,n){},e159:function(e,t,n){var i=n("ded3").default,s=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),r=t.children,l=void 0===r?[]:r,c=a.class,d=a.staticClass,u=a.style,f=a.staticStyle,p=a.attrs,h=void 0===p?{}:p,v=s(a,o);return n("svg",i({class:[c,d],style:[u,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 341.751 341.751"},h)},v),l.concat([n("path",{attrs:{d:"M-.007 311.525L311.535.072 341.7 30.246 30.16 341.699z"}}),n("path",{attrs:{d:"M.047 30.226L30.212.052l311.542 311.454-30.166 30.174z"}})]))}}},f9bd:function(e,t,n){"use strict";n("c1f1")}});
//# sourceMappingURL=app.beb08bee.js.map