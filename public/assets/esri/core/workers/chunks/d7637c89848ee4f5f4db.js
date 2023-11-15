"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4720,1444],{41123:(e,t,r)=>{r.d(t,{DO:()=>a,dG:()=>i,zS:()=>s});const n="randomUUID"in crypto;function a(){if(n)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function s(){return`{${a().toUpperCase()}}`}function i(){return`{${a()}}`}},16306:(e,t,r)=>{r.d(t,{aX:()=>v});var n=r(68773),a=r(20102),s=r(92604),i=r(38913),o=r(58901),l=r(73913),d=r(8744),u=r(40488),c=(r(66577),r(3172)),p=r(33955),h=r(11282),f=r(17452);async function m(e,t,r){const n="string"==typeof e?(0,f.mN)(e):e,a=t[0].spatialReference,s=(0,p.Ji)(t[0]),i={...r,query:{...n.query,f:"json",sr:(0,d.B9)(a),geometries:JSON.stringify((l=t,{geometryType:(0,p.Ji)(l[0]),geometries:l.map((e=>e.toJSON()))}))}},{data:o}=await(0,c.Z)(n.path+"/simplify",i);var l;return function(e,t,r){const n=(0,p.q9)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}(o.geometries,s,a)}const y=s.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function b(e){return"polyline"===e[0].type}function w(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw y.error(e),new a.Z(e)}const r=(0,l.x3)(e),n=[];for(const e of r){const r=[];n.push(r),r.push([e[0][0],e[0][1]]);for(let n=0;n<e.length-1;n++){const a=e[n][0],s=e[n][1],i=e[n+1][0],o=e[n+1][1],l=Math.sqrt((i-a)*(i-a)+(o-s)*(o-s)),d=(o-s)/l,u=(i-a)/l,c=l/t;if(c>1){for(let e=1;e<=c-1;e++){const n=e*t,i=u*n+a,o=d*n+s;r.push([i,o])}const e=(l+Math.floor(c-1)*t)/2,n=u*e+a,i=d*e+s;r.push([n,i])}r.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:n,spatialReference:e.spatialReference}):new o.Z({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,u.Sx)(t,!0)}return r&&(e=(0,l.Sy)(e,r)),e}function F(e,t,r){if(Array.isArray(e)){const n=e[0];if(n>t){const r=(0,l.XZ)(n,t);e[0]=n+r*(-2*t)}else if(n<r){const t=(0,l.XZ)(n,r);e[0]=n+t*(-2*r)}}else{const n=e.x;if(n>t){const r=(0,l.XZ)(n,t);e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=(0,l.XZ)(n,r);e=e.clone().offset(t*(-2*r),0)}}return e}function I(e,t){let r=-1;for(let n=0;n<t.cutIndexes.length;n++){const a=t.cutIndexes[n],s=t.geometries[n],i=(0,l.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const n=t[e][0];r=n>r?n:r}r=Number(r.toFixed(9));const n=-360*(0,l.XZ)(r,180);for(let r=0;r<t.length;r++){const t=s.getPoint(e,r);s.setPoint(e,r,t.clone().offset(n,0))}return!0}}))}if(a===r){if(g(e))for(const t of(0,l.x3)(s))e[a]=e[a].addRing(t);else if(b(e))for(const t of(0,l.x3)(s))e[a]=e[a].addPath(t)}else r=a,e[a]=s}return e}async function v(e,t,r){if(!Array.isArray(e))return v([e],t);t&&"string"!=typeof t&&y.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const a="string"==typeof t?t:t?.url??n.default.geometryServiceUrl;let s,f,g,b,A,Z,S,R,$=0;const E=[],x=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,f=(0,d.C5)(s),g=s.isWebMercator,Z=g?102100:4326,b=l.UZ[Z].maxX,A=l.UZ[Z].minX,S=l.UZ[Z].plus180Line,R=l.UZ[Z].minus180Line),f)if("mesh"===t.type)x.push(t);else if("point"===t.type)x.push(F(t.clone(),b,A));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>F(e,b,A))),x.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,f);x.push(e.rings?new i.Z(e):e)}else if(t.extent){const e=t.extent,r=(0,l.XZ)(e.xmin,A)*(2*b);let n=0===r?t.clone():(0,l.Sy)(t.clone(),r);e.offset(r,0),e.intersects(S)&&e.xmax!==b?($=e.xmax>$?e.xmax:$,n=w(n,g),E.push(n),x.push("cut")):e.intersects(R)&&e.xmin!==A?($=e.xmax*(2*b)>$?e.xmax*(2*b):$,n=w(n,g,360),E.push(n),x.push("cut")):x.push(n)}else x.push(t.clone());else x.push(t);else x.push(t);let M=(0,l.XZ)($,b),O=-90;const U=M,L=new o.Z;for(;M>0;){const e=360*M-180;L.addPath([[e,O],[e,-1*O]]),O*=-1,M--}if(E.length>0&&U>0){const t=I(E,await async function(e,t,r,n){const a=(0,h.en)(e),s=t[0].spatialReference,i={...n,responseType:"json",query:{...a.query,f:"json",sr:(0,d.B9)(s),target:JSON.stringify({geometryType:(0,p.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},o=await(0,c.Z)(a.path+"/cut",i),{cutIndexes:l,geometries:u=[]}=o.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,p.im)(e);return t.spatialReference=s,t}))}}(a,E,L,r)),n=[],s=[];for(let r=0;r<x.length;r++){const a=x[r];if("cut"!==a)s.push(a);else{const a=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&a.rings.length>=i.rings.length?(n.push(a),s.push("simplify")):s.push(g?(0,u.$)(a):a)}}if(!n.length)return s;const i=await m(a,n,r),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(g?(0,u.$)(i.shift()):i.shift())}return o}const j=[];for(let e=0;e<x.length;e++){const t=x[e];if("cut"!==t)j.push(t);else{const e=E.shift();j.push(!0===g?(0,u.$)(e):e)}}return j}},73913:(e,t,r)=>{r.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>d});var n=r(58901),a=r(82971),s=r(33955);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator}),minus180Line:new n.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.Z({paths:[[[180,-180],[180,180]]],spatialReference:a.Z.WGS84}),minus180Line:new n.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:a.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=d(e);for(const e of r)for(const r of e)r[0]+=t;return e}function d(e){return(0,s.oU)(e)?e.rings:e.paths}},14720:(e,t,r)=>{r.d(t,{Ey:()=>F,applyEdits:()=>I,aw:()=>b,uploadAssets:()=>E});var n=r(38171),a=r(46791),s=r(20102),i=r(22974),o=r(92604),l=r(95330),d=r(17452),u=r(41123),c=r(16306),p=r(66361),h=r(69165),f=r(2981),m=r(84230);function y(e){return null!=e?.applyEdits}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function I(e,t,r,n={}){let d;const c="gdbVersion"in e?e.gdbVersion:null,h=n.gdbVersion??c;if((0,p.lQ)(e)&&e.url)d=(0,p.jF)(e.url,e.layerId,h,"original-and-current-features"===n.returnServiceEditsOption);else{d=(0,l.hh)(),d.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:d.promise};e.emit("apply-edits",t)}try{const{results:l,edits:c}=await async function(e,t,r,n){if(await e.load(),!y(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,r){const n=(0,m.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(function(e,t,r,n,a,i){if(!e||!n&&!a)throw new s.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new s.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&a)throw new s.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&a)throw new s.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,n,r,!!i,!!l,`${e.type}-layer`),!n.data.isVersioned&&r?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!n.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...r};if(null!=c.rollbackOnFailureEnabled||n.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),c.rollbackOnFailureEnabled=!0),!n.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,r){const n=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&a.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(n.addFeatures?.length&&!t.operations.supportsAdd)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support adding features.");if(n.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support updating features.");if(n.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support deleting features.");return n.addFeatures=n.addFeatures.map(R),n.updateFeatures=n.updateFeatures.map(R),n.addAssetFeatures=[],n}(t,n,`${e.type}-layer`),h=r?.globalIdUsed||d,y=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new s.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,u.zS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n),A(e,t)}(t,e,h,y))),p.updateFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n),A(e,t);const a=(0,m.S1)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,y))),p.deleteFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n)}(t,e,h,y))),p.addAttachments.forEach((t=>Z(t,e))),p.updateAttachments.forEach((t=>Z(t,e))),d&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,n=(0,f.S0)("model/gltf-binary",r.supportedFormats)??(0,f.Ow)("glb",r.supportedFormats);if(!n||!r.editFormats.includes(n))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:a}=e;for(const t of e.addFeatures??[])$(t)&&a.push(t);for(const t of e.updateFeatures??[])$(t)&&a.push(t)}(p,e),{edits:await S(p),options:c}}(e,r,n);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,n),p=e=>e.filter((e=>!e.error)).map(i.d9),h={edits:c,addedFeatures:p(l.addFeatureResults),updatedFeatures:p(l.updateFeatureResults),deletedFeatures:p(l.deleteFeatureResults),addedAttachments:p(l.addAttachmentResults),updatedAttachments:p(l.updateAttachmentResults),deletedAttachments:p(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:n.globalIdToObjectId};return l.editedFeatureResults?.length&&(h.editedFeatures=l.editedFeatureResults),d.resolve(h),l}catch(e){throw d.reject(e),e}}function v(e,t,r,n){function a(e){return/[a-z]/.test(e)}if(r){if("attributes"in e){if(!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(a(e.attributes[t.globalIdField]))throw new s.Z(`${t.type}-layer:invalid-parameter`,"provided globalId is required to only have uppercase characters")}if(!("attributes"in e)){if(!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true");if(a(e.globalId))throw new s.Z(`${t.type}-layer:invalid-parameter`,"provided globalId is required to only have uppercase characters")}}if(n.length&&"attributes"in e)for(const r of n){const n=e.attributes[r.name];if(void 0!==n&&!(0,h.d2)(r,n))throw new s.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${r.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function A(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new s.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function Z(e,t){const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name||n.name))throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&n.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,d.sJ)(n.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function S(e){const t=e.addFeatures??[],r=e.updateFeatures??[],n=t.concat(r).map((e=>e.geometry)),a=await(0,c.aX)(n),s=t.length,i=r.length;return a.slice(0,s).forEach(((e,r)=>t[r].geometry=e)),a.slice(s,s+i).forEach(((e,t)=>r[t].geometry=e)),e}function R(e){const t=new n.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function $(e){return"mesh"===e?.geometry?.type}function E(e,t,r,n){if(!y(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,n)}},66361:(e,t,r)=>{r.d(t,{jF:()=>u,lQ:()=>h,o1:()=>y});var n=r(43697),a=r(32448),s=r(22974),i=r(95330),o=(r(92604),r(75215),r(20102),r(80442),r(52011)),l=r(18596);const d=new a.Z.EventEmitter;function u(e,t,r=null,n=!1){const a=(0,i.hh)();return n=null==t||n,d.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:r,mayReceiveServiceEdits:n,result:a.promise}),a}const c="esri.layers.mixins.EditBusLayer",p=Symbol(c);function h(e){return null!=e&&"object"==typeof e&&p in e}function f(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function m(e,t,r){const n=new URL(e).host,a=l.Jp.get(n),s=e=>!e||e===a;return s(t)&&s(r)||t===r}const y=e=>{var t;let r=class extends e{constructor(...e){super(...e),this[t]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:r,gdbVersion:n,mayReceiveServiceEdits:a,result:i}=e,o=t===this.url,d=null!=r&&null!=this.layerId&&r===this.layerId,u=f(this),c=f(this)&&m(t,n,this.gdbVersion);if(!o||u&&!c||!d&&!a)return;const p=i.then((e=>{if(d&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,s.d9)(e)),e;const t=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(t){const{adds:r,updates:n,deletes:a}=t.editedFeatures,i={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:r?r.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:a?a.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:n?n.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,s.d9)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.d9)(e.historicMoment)};return this.emit("edits",i),i}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,s.d9)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.d9)(e.historicMoment)}})).then((e=>("historicMoment"in this&&this.historicMoment!==e.historicMoment&&(0,l.JV)(t,n)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:p})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:r,moment:n}=e,a=t===this.url,s=f(this),i=f(this)&&m(t,r,this.gdbVersion),o=f(this)&&!m(t,this.gdbVersion,null);a&&s&&i&&o&&"historicMoment"in this&&this.historicMoment!==n&&(this.historicMoment=n)},this.when().then((()=>{this.addHandles(function(e){return d.on("apply-edits",new WeakRef(e))}(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(function(e){return d.on("update-moment",new WeakRef(e))}(this._updateMomentHandler))}),(()=>{}))}};return t=p,r=(0,n._)([(0,o.j)(c)],r),r}},2981:(e,t,r)=>{r.d(t,{$6:()=>f,$z:()=>s,F7:()=>a,Ow:()=>o,S0:()=>i,d1:()=>l,dm:()=>d});const n=[["binary","application/octet-stream","bin",""]];function a(e,t){return null!=c(t.name,e?.supportedFormats??[])}function s(e,t){if(!e)return!1;const r=d(t,e.supportedFormats??[]);return null!=r&&e.editFormats.includes(r)}function i(e,t){return p(function(e,t){const r=e.toLowerCase();return u(t).find((e=>h(e)===r))}(e,t))}function o(e,t){return p(c(e,t))}function l(e,t){return h(function(e,t){return u(t).find((t=>p(t)===e))}(e,t))}function d(e,t){return o(e.name,t)??i(e.type,t)}function u(e){return[...n,...e]}function c(e,t){const r=e.toLowerCase();return u(t).find((e=>function(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}(e).some((e=>r.endsWith(e)))))}function p(e){return e?.[0]}function h(e){return e?.[1].toLowerCase()}function f(e){return e.tables?.find((e=>"assetMaps"===e.role))}},11282:(e,t,r)=>{r.d(t,{cv:()=>o,en:()=>i,lA:()=>s}),r(68773),r(40330);var n=r(22974),a=r(17452);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,a.mN)(e):(0,n.d9)(e)}function o(e,t,r){const n={};for(const a in e){if("declaredClass"===a)continue;const s=e[a];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[a]=[];for(let e=0;e<s.length;e++)n[a][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r?.[a]);n[a]=t?e:JSON.stringify(e)}else n[a]=t?s:JSON.stringify(s);else n[a]=s}return n}r(71058)},18596:(e,t,r)=>{r.d(t,{JV:()=>o,Jp:()=>a,Px:()=>i,U8:()=>n});const n=(0,r(41123).dG)(),a=new Map,s=new Map;async function i(e,t,a=!1){if(!e||!t)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=s.get(i)?.entries();if(o)for(const[e,s]of o)if(s.name===t){const t=!s.stack?.hasForwardEdits();if(!t&&a){const[{deleteForwardEdits:t},{default:a}]=await Promise.all([r.e(1316).then(r.bind(r,51316)),r.e(4573).then(r.bind(r,84573))]);return t(i,e,new a({sessionId:n,moment:s.moment}))}return t}return!0}function o(e,t){if(!e)return!1;const r=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=s.get(r)?.entries();if(n)for(const[e,r]of n)if(r.name===t)return"edit"===r.lockType;return!1}new Map}}]);