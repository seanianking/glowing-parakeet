"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1767,7873],{65845:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(81153);function a(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,o.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},81153:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},54295:(e,t,r)=>{r.d(t,{V:()=>i});var o=r(43697),a=r(5600),s=(r(75215),r(67676),r(80442),r(52011));const i=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,o._)([(0,a.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,o._)([(0,s.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>l});var o=r(43697),a=r(92604),s=r(5600),i=(r(75215),r(67676),r(80442),r(52011)),n=r(66677);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.Nm)(e,a.Z.getLogger(this)))}};return(0,o._)([(0,s.Cb)()],t.prototype,"title",null),(0,o._)([(0,s.Cb)({type:String})],t.prototype,"url",null),t=(0,o._)([(0,i.j)("esri.layers.mixins.ArcGISService")],t),t}},37253:(e,t,r)=>{r.d(t,{xp:()=>P,Vt:()=>O});var o=r(43697),a=r(3172),s=r(20102),i=r(92604),n=r(95330),l=r(17452),p=r(5600),c=(r(75215),r(67676),r(80442),r(71715)),u=r(52011),d=r(30556),h=r(65845),y=r(6570),m=r(79235),f=r(82971),v=r(66677),g=r(21506),w=r(61064);var S=r(48522),I=r(15235),_=r(14769),x=r(35755);const b="esri.layers.mixins.SceneService",R=i.Z.getLogger(b),O=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,n.Ds)((async(e,t,r)=>{switch(e){case P.SAVE:return this._save(t);case P.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return f.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f.Z(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return y.Z.fromJSON(o,r)}const o=t.store,a=this._readSpatialReference(t);return null==a||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<Z))?null:new y.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return(0,v.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,v.Qc)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,v.ld)(o)}set url(e){const t=(0,v.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,v.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new s.Z("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<Z||null==this.fullExtent||this.fullExtent.hasZ)return;const o=r.obb.halfSize,a=r.obb.center[2],i=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=a-i,this.fullExtent.zmax=a+i}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<Z)return;const r=t[2],o=t[3],{fullExtent:a}=this;a&&(a.zmin=r-o,a.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new s.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,a.Z)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,a.Z)(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,this._getServiceContext()),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await(0,a.Z)(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===A.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...N,...t};let o=I.default.from(e);if(!o)throw new s.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,_.w)(o),o.id&&(o=o.clone(),o.id=null);const a=o.portal||S.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=C,o.portal=a;const i={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,i,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,A.newItem),await a.signIn(),await(a.user?.addItem({item:o,folder:r?.folder,data:n})),await(0,x.Hn)(this.resourceReferences,i,null),this.portalItem=o,(0,h.D)(i),i.portalItem=o,o}async _save(e){const t={...N,...e};if(!this.portalItem)throw new s.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,_.w)(this.portalItem),this.portalItem.type!==C)throw new s.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${C}"`);await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,l.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||S.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,A.existingItem),await(0,x.bx)(this.portalItem,o,this.resourceReferences,r,null),(0,h.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){let o=t.messages?.filter((e=>"error"===e.type)).map((e=>new s.Z(e.name,e.message,e.details)))??[];r?.validationOptions?.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const a=r?.validationOptions,i=a?.enabled,n=null;if(i&&n){const t=(await n()).validate(e,r.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(R.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===a.failPolicy){const e=t.map((e=>new s.Z("sceneservice:schema-validation",e))).concat(o);throw new s.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new s.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return(0,o._)([(0,p.Cb)(g.id)],t.prototype,"id",void 0),(0,o._)([(0,p.Cb)({type:f.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,c.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,p.Cb)({type:y.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,c.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,p.Cb)({readOnly:!0,type:m.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,p.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,c.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,p.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,p.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,p.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,c.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,c.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,p.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,p.Cb)(g.HQ)],t.prototype,"url",null),(0,o._)([(0,d.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,p.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,p.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,p.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,u.j)(b)],t),t},Z=-1e38;var A,K;(K=A||(A={}))[K.existingItem=0]="existingItem",K[K.newItem=1]="newItem";const C="Scene Service",N={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var P;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(P||(P={}))},61064:(e,t,r)=>{r.d(t,{T:()=>s});var o=r(3172),a=r(20102);async function s(e,t,r,s,i,n){let l=null;if(null!=r){const t=`${e}/nodepages/`,a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.Z)(a,{query:{f:"json",token:s},responseType:"json",signal:n})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,e),l=e}}if(!t)return null;const p=t?.split("/").pop(),c=`${e}/nodes/`,u=c+p;try{return{type:"node",rootNode:(await(0,o.Z)(u,{query:{f:"json",token:s},responseType:"json",signal:n})).data,urlPrefix:c}}catch(e){throw new a.Z("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:e,url:u})}}},97873:(e,t,r)=>{r.d(t,{FO:()=>u,W7:()=>d,addOrUpdateResource:()=>n,fetchResources:()=>i,removeAllResources:()=>p,removeResource:()=>l});var o=r(3172),a=r(20102),s=r(17452);async function i(e,t={},r){await e.load(r);const o=(0,s.v_)(e.itemUrl,"resources"),{start:a=1,num:i=10,sortOrder:n="asc",sortField:l="created"}=t,p={query:{start:a,num:i,sortOrder:n,sortField:l,token:e.apiKey},signal:r?.signal},c=await e.portal.request(o,p);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function n(e,t,r,o){if(!e.hasPath())throw new a.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const i=e.portalItem;await i.load(o);const n=(0,s.v_)(i.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=c(e.path),u=new FormData;return l&&"."!==l&&u.append("resourcesPrefix",l),null!=o&&o.compress&&u.append("compress","true"),u.append("fileName",p),u.append("file",r,p),u.append("f","json"),o?.access&&u.append("access",o.access),await i.portal.request(n,{method:"post",body:u,signal:o?.signal}),e}async function l(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,s.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function p(e,t){await e.load(t);const r=(0,s.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function c(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function u(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,o]=function(e){const[t,r]=function(e){const t=(0,s.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,a]=c(t);return[o,a,r]}(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+o))}},14769:(e,t,r)=>{r.d(t,{w:()=>i});var o=r(68773),a=r(20102),s=r(71058);function i(e){if(o.default.apiKey&&(0,s.r)(e.portal.url))throw new a.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},35755:(e,t,r)=>{r.d(t,{Hn:()=>l,Pl:()=>y,bx:()=>p});var o=r(66643),a=r(20102),s=r(95330),i=r(41123),n=r(97873);async function l(e,t,r=null){const o=await c(e,t,r);await u(o,t,r)}async function p(e,t,r,o,a=null){const s=await c(r,o,a);await e.update({data:t}),await u(s,o,a)}async function c(e,t,r=null){if(!t?.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,c=[];l.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const a of t.resources.toUpdate)if(o.delete(a.resource.path),l.has(a.resource.path)||p.has(a.resource.path)){const{resource:t,content:o,finish:s,error:l}=a,p=(0,n.W7)(t,(0,i.DO)());e.paths.push(p.path),c.push(d({resource:p,content:o,compress:a.compress,finish:s,error:l},r))}else e.paths.push(a.resource.path),c.push(h(a,r)),p.add(a.resource.path);for(const a of t.resources.toAdd)e.paths.push(a.resource.path),o.has(a.resource.path)?o.delete(a.resource.path):c.push(d(a,r));if(0===c.length)return o;const u=await(0,s.UO)(c);if((0,s.k_)(r),u.length>0)throw new a.Z("save:resources","Failed to save one or more resources",{errors:u});return o}async function u(e,t,r=null){if(!e||!t.portalItem)return;const o=[];for(const a of e){const e=t.portalItem.resourceFromPath(a);o.push(e.portalItem.removeResource(e,r))}await(0,s.as)(o)}async function d(e,t){const r={...null!=t?t:{},compress:e.compress},a=await(0,o.q6)(e.resource.portalItem.addResource(e.resource,await(0,n.FO)(e.content),r));if(!0!==a.ok)throw e.error?.(a.error),a.error;e.finish?.(e.resource)}async function h(e,t){const r=await(0,o.q6)(e.resource.update(await(0,n.FO)(e.content),t));if(!0!==r.ok)throw e.error?.(r.error),r.error;e.finish?.(e.resource)}async function y(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}}}]);