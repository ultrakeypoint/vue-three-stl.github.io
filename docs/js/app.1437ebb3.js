(function(e){function t(t){for(var a,r,c=t[0],d=t[1],s=t[2],l=0,h=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var d=n[c];0!==o[d]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-three-stl.github.io/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"144d":function(e,t,n){},"150b":function(e,t,n){},"2fab":function(e,t,n){"use strict";n("58ac")},"4b63":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=n("5502");function i(e,t){var n=Object(a["u"])("Main");return Object(a["o"])(),Object(a["d"])(n)}var r=Object(a["z"])("data-v-7c8ead9a");Object(a["r"])("data-v-7c8ead9a");var c={id:"nav"},d=Object(a["e"])("Home"),s=Object(a["e"])("Viewer"),u=Object(a["e"])("Viewport"),l=Object(a["e"])("Renderer"),h=Object(a["e"])("STL_Loader"),w=Object(a["e"])("Sample");Object(a["p"])();var f=r((function(e,t){var n=Object(a["u"])("router-link"),o=Object(a["u"])("router-view");return Object(a["o"])(),Object(a["d"])(a["a"],null,[Object(a["f"])("div",c,[Object(a["f"])("ul",null,[Object(a["f"])("li",null,[Object(a["f"])(n,{to:"/home"},{default:r((function(){return[d]})),_:1})]),Object(a["f"])("li",null,[Object(a["f"])(n,{to:"/viewer"},{default:r((function(){return[s]})),_:1})]),Object(a["f"])("li",null,[Object(a["f"])(n,{to:"/viewport"},{default:r((function(){return[u]})),_:1})]),Object(a["f"])("li",null,[Object(a["f"])(n,{to:"/renderer"},{default:r((function(){return[l]})),_:1})]),Object(a["f"])("li",null,[Object(a["f"])(n,{to:"/stl_loader"},{default:r((function(){return[h]})),_:1})]),Object(a["f"])("li",null,[Object(a["f"])(n,{to:"/sample"},{default:r((function(){return[w]})),_:1})])])]),Object(a["f"])(o)],64)})),p={name:"Main"};n("fde2");p.render=f,p.__scopeId="data-v-7c8ead9a";var m=p,b={name:"App",components:{Main:m}};b.render=i;var v=b,O=n("6c02"),g=Object(a["z"])("data-v-6c571a78");Object(a["r"])("data-v-6c571a78");var j={class:""};Object(a["p"])();var I=g((function(e,t){return Object(a["o"])(),Object(a["d"])("div",j," Home ")})),S={name:"Home",props:{msg:String}};n("5c3f");S.render=I,S.__scopeId="data-v-6c571a78";var M=S,E=Object(a["z"])("data-v-098b22be");Object(a["r"])("data-v-098b22be");var _={class:""},P=Object(a["f"])("br",null,null,-1);Object(a["p"])();var R=E((function(e,t){return Object(a["o"])(),Object(a["d"])("div",_,[Object(a["f"])("h1",null,Object(a["w"])(e.count),1),P,Object(a["f"])("h2",null,"computed: "+Object(a["w"])(e.calculated),1),Object(a["f"])("h2",null,"watch: "+Object(a["w"])(e.watchedCount),1),Object(a["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.count--})},"카운트 감소")])})),y={name:"Viewer",data:function(){return{count:3,watchedCount:9}},computed:{calculated:function(){return 2===this.count&&alert("값이 2가 되었습니다."),console.log("computed"),3*this.count}},watch:{count:function(e,t){console.log("watch"),console.log(e),console.log(t),this.watchedCount=3*e}}};n("2fab");y.render=R,y.__scopeId="data-v-098b22be";var L=y,A={class:"viewport"};function T(e,t){return Object(a["o"])(),Object(a["d"])("div",A)}var C=n("5530"),N={name:"Viewport",data:function(){return{height:0}},methods:Object(C["a"])(Object(C["a"])({},Object(o["c"])(["RESIZE"])),Object(o["b"])(["INIT","ANIMATE"])),mounted:function(){var e=this;this.INIT({width:this.$el.offsetWidth,height:this.$el.offsetHeight,el:this.$el}).then((function(){e.ANIMATE(),window.addEventListener("resize",(function(){e.RESIZE({width:e.$el.offsetWidth,height:e.$el.offsetHeight})}),!0)}))}};n("9979");N.render=T;var x=N,W={class:"scene-3",ref:"container"},D={class:"scene-3__item"},z={ref:"aspect",class:"scene-3__item-aspect"},H={ref:"canvas",class:"scene-3__canvas"};function Z(e,t){return Object(a["o"])(),Object(a["d"])("div",W,[Object(a["f"])("figure",D,[Object(a["f"])("div",z,null,512)]),Object(a["f"])("canvas",H,null,512)],512)}n("d3b7");var k,V,G,B,$=n("5a89"),F={name:"Renderer",data:function(){return{aspect:{}}},methods:{init:function(){k=new $["Scene"],V=new $["OrthographicCamera"](window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3),V.position.z=1,G=new $["WebGLRenderer"]({antialias:!0,alpha:!0,canvas:this.$refs.canvas}),G.setSize(window.innerWidth,window.innerHeight);var e=new $["PlaneBufferGeometry"](this.aspect.data.width,this.aspect.data.height,5),t=new $["MeshBasicMaterial"]({color:16711680});B=new $["Mesh"](e,t),k.add(B),G.render(k,V)},loadTexture:function(e,t){return new Promise((function(n){e.load(t,(function(e){n(e)}))}))}},mounted:function(){this.aspect={ref:this.$refs.aspect,data:this.$refs.aspect.getBoundingClientRect()},this.init()}};n("79d3");F.render=Z;var q=F,J={id:"template"};function U(e,t){return Object(a["o"])(),Object(a["d"])("div",J)}var X,Y,K,Q,ee,te,ne=n("ef20"),ae=n("518e"),oe=n("4721"),ie={name:"STL_Loader",data:function(){return{}},methods:{init:function(){X=document.getElementById("template"),K=new $["PerspectiveCamera"](35,window.innerWidth/window.innerHeight,1,15),K.position.set(3,.15,3),Q=new $["Vector3"](0,-.25,0),ee=new $["Scene"],ee.background=new $["Color"](7496795),ee.fog=new $["Fog"](7496795,2,15);var e=new $["Mesh"](new $["PlaneGeometry"](40,40),new $["MeshPhongMaterial"]({color:10066329,specular:1052688}));e.rotation.x=-Math.PI/2,e.position.y=-.5,ee.add(e),e.receiveShadow=!0;var t=new ae["a"];t.load("./models/stl/ascii/slotted_disk.stl",(function(e){var t=new $["MeshPhongMaterial"]({color:16733491,specular:1118481,shininess:200}),n=new $["Mesh"](e,t);n.position.set(0,-.25,.6),n.rotation.set(0,-Math.PI/2,0),n.scale.set(.5,.5,.5),n.castShadow=!0,n.receiveShadow=!0,ee.add(n)}));var n=new $["MeshPhongMaterial"]({color:11184810,specular:1118481,shininess:200});t.load("./models/stl/binary/pr2_head_pan.stl",(function(e){var t=new $["Mesh"](e,n);t.position.set(0,-.37,-.6),t.rotation.set(-Math.PI/2,0,0),t.scale.set(2,2,2),t.castShadow=!0,t.receiveShadow=!0,ee.add(t)})),t.load("./models/stl/binary/pr2_head_tilt.stl",(function(e){var t=new $["Mesh"](e,n);t.position.set(.136,-.37,-.6),t.rotation.set(-Math.PI/2,.3,0),t.scale.set(2,2,2),t.castShadow=!0,t.receiveShadow=!0,ee.add(t)})),t.load("./models/stl/binary/colored.stl",(function(e){var t=n;e.hasColors&&(t=new $["MeshPhongMaterial"]({opacity:e.alpha,vertexColors:!0}));var a=new $["Mesh"](e,t);a.position.set(.5,.2,0),a.rotation.set(-Math.PI/2,Math.PI/2,0),a.scale.set(.3,.3,.3),a.castShadow=!0,a.receiveShadow=!0,ee.add(a)})),ee.add(new $["HemisphereLight"](4469555,1118498)),this.addShadowedLight(1,1,1,16777215,1.35),this.addShadowedLight(.5,1,-1,16755200,1),te=new $["WebGLRenderer"]({antialias:!0}),te.setPixelRatio(window.devicePixelRatio),te.setSize(window.innerWidth,window.innerHeight),te.outputEncoding=$["sRGBEncoding"],te.shadowMap.enabled=!0,X.appendChild(te.domElement);var a=new oe["a"](K,te.domElement);a.update(),Y=new ne["a"],X.appendChild(Y.dom),window.addEventListener("resize",this.onWindowResize),window.addEventListener("mousedown",this.onDocumentMouseDown,!1)},addShadowedLight:function(e,t,n,a,o){var i=new $["DirectionalLight"](a,o);i.position.set(e,t,n),ee.add(i),i.castShadow=!0;var r=1;i.shadow.camera.left=-r,i.shadow.camera.right=r,i.shadow.camera.top=r,i.shadow.camera.bottom=-r,i.shadow.camera.near=1,i.shadow.camera.far=4,i.shadow.bias=-.002},animate:function(){requestAnimationFrame(this.animate),this.render(),Y.update()},render:function(){K.lookAt(Q),te.render(ee,K)},onWindowResize:function(){K.aspect=window.innerWidth/window.innerHeight,K.updateProjectionMatrix(),te.setSize(window.innerWidth,window.innerHeight)},onDocumentMouseDown:function(){console.log("onDocumentMouseDown")}},mounted:function(){this.init(),this.animate()}};n("776c");ie.render=U;var re,ce,de,se,ue,le=ie,he={id:"template"};function we(e,t){return Object(a["o"])(),Object(a["d"])("div",he)}var fe={name:"Sample",data:function(){return{}},methods:{init:function(){re=document.getElementById("template"),ce=new $["PerspectiveCamera"](35,window.innerWidth/window.innerHeight,1,15),ce.position.set(3,.15,3),de=new $["Vector3"](0,-.25,0),se=new $["Scene"],se.background=new $["Color"](16777215);var e=new ae["a"];e.load("./models/stl/sample/s-1.stl",(function(e){var t=new $["MeshPhongMaterial"]({color:486873,specular:16777215,shininess:0}),n=new $["Mesh"](e,t);n.position.set(0,.1,0),n.rotation.set(-Math.PI/2.6,0,0),n.scale.set(.8,.8,.8),se.add(n)})),e.load("./models/stl/sample/s-2.stl",(function(e){var t=new $["MeshPhongMaterial"]({color:60275,specular:1118481,shininess:200}),n=new $["Mesh"](e,t);n.position.set(0,.1,0),n.rotation.set(-Math.PI/2.6,0,0),n.scale.set(.8,.8,.8),n.castShadow=!0,n.receiveShadow=!0,se.add(n)}));var t=16777215,n=16777215,a=1,o=new $["HemisphereLight"](t,n,a);se.add(o),ue=new $["WebGLRenderer"]({antialias:!0}),ue.setPixelRatio(window.devicePixelRatio),ue.setSize(window.innerWidth,window.innerHeight),ue.outputEncoding=$["sRGBEncoding"],ue.shadowMap.enabled=!0,re.appendChild(ue.domElement);var i=new oe["a"](ce,ue.domElement);i.update(),window.addEventListener("resize",this.onWindowResize),window.addEventListener("mousedown",this.onDocumentMouseDown,!1)},addShadowedLight:function(e,t,n,a,o){var i=new $["DirectionalLight"](a,o);i.position.set(e,t,n),se.add(i),i.castShadow=!0;var r=1;i.shadow.camera.left=-r,i.shadow.camera.right=r,i.shadow.camera.top=r,i.shadow.camera.bottom=-r,i.shadow.camera.near=1,i.shadow.camera.far=4,i.shadow.bias=-.002},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){ce.lookAt(de),ue.render(se,ce)},onWindowResize:function(){ce.aspect=window.innerWidth/window.innerHeight,ce.updateProjectionMatrix(),ue.setSize(window.innerWidth,window.innerHeight)},onDocumentMouseDown:function(){console.log("onDocumentMouseDown")}},mounted:function(){this.init(),this.animate()}};n("776d");fe.render=we;var pe=fe,me=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:M},{path:"/viewer",name:"Viewer",component:L},{path:"/viewport",name:"Viewport",component:x},{path:"/renderer",name:"Renderer",component:q},{path:"/stl_loader",name:"STL_Loader",component:le},{path:"/sample",name:"Sample",component:pe}],be=Object(O["a"])({history:Object(O["b"])(),routes:me}),ve=be,Oe=n("2909"),ge=(n("ddb0"),n("a5d4")),je=new o["a"].Store({state:{width:0,height:0,camera:null,controls:null,scene:null,renderer:null,axisLines:[],pyramids:[]},getters:{CAMERA_POSITION:function(e){return e.camera?e.camera.position:null}},mutations:{SET_VIEWPORT_SIZE:function(e,t){var n=t.width,a=t.height;e.width=n,e.height=a},INITIALIZE_RENDERER:function(e,t){e.renderer=new $["WebGLRenderer"]({antialias:!0}),e.renderer.setPixelRatio(window.devicePixelRatio),e.renderer.setSize(e.width,e.height),t.appendChild(e.renderer.domElement)},INITIALIZE_CAMERA:function(e){e.camera=new $["PerspectiveCamera"](60,e.width/e.height,1,1e3),e.camera.position.z=500},INITIALIZE_CONTROLS:function(e){e.controls=new ge["a"](e.camera,e.renderer.domElement),e.controls.rotateSpeed=1,e.controls.zoomSpeed=1.2,e.controls.panSpeed=.8,e.controls.noZoom=!1,e.controls.noPan=!1,e.controls.staticMoving=!0,e.controls.dynamicDampingFactor=.3,e.controls.keys=[65,83,68]},UPDATE_CONTROLS:function(e){e.controls.update()},INITIALIZE_SCENE:function(e){var t;e.scene=new $["Scene"],e.scene.background=new $["Color"](13421772),e.scene.fog=new $["FogExp2"](13421772,.002);for(var n=new $["CylinderBufferGeometry"](0,10,30,4,1),a=new $["MeshPhongMaterial"]({color:16777215,flatShading:!0}),o=0;o<500;o++){var i=new $["Mesh"](n,a);i.position.x=1e3*(Math.random()-.5),i.position.y=1e3*(Math.random()-.5),i.position.z=1e3*(Math.random()-.5),i.updateMatrix(),i.matrixAutoUpdate=!1,e.pyramids.push(i)}(t=e.scene).add.apply(t,Object(Oe["a"])(e.pyramids));var r=new $["DirectionalLight"](16777215);r.position.set(1,1,1),e.scene.add(r);var c=new $["DirectionalLight"](8840);c.position.set(-1,-1,-1),e.scene.add(c);var d=new $["AmbientLight"](2236962);e.scene.add(d)},RESIZE:function(e,t){var n=t.width,a=t.height;e.width=n,e.height=a,e.camera.aspect=n/a,e.camera.updateProjectionMatrix(),e.renderer.setSize(n,a),e.controls.handleResize(),e.renderer.render(e.scene,e.camera)},SET_CAMERA_POSITION:function(e,t){var n=t.x,a=t.y,o=t.z;e.camera&&e.camera.position.set(n,a,o)},RESET_CAMERA_ROTATION:function(e){e.camera&&(e.camera.rotation.set(0,0,0),e.camera.quaternion.set(0,0,0,1),e.camera.up.set(0,1,0),e.controls.target.set(0,0,0))},HIDE_AXIS_LINES:function(e){var t;(t=e.scene).remove.apply(t,Object(Oe["a"])(e.axisLines)),e.renderer.render(e.scene,e.camera)},SHOW_AXIS_LINES:function(e){var t;(t=e.scene).add.apply(t,Object(Oe["a"])(e.axisLines)),e.renderer.render(e.scene,e.camera)},HIDE_PYRAMIDS:function(e){var t;(t=e.scene).remove.apply(t,Object(Oe["a"])(e.pyramids)),e.renderer.render(e.scene,e.camera)},SHOW_PYRAMIDS:function(e){var t;(t=e.scene).add.apply(t,Object(Oe["a"])(e.pyramids)),e.renderer.render(e.scene,e.camera)}},actions:{INIT:function(e,t){var n=e.state,a=e.commit,o=t.width,i=t.height,r=t.el;return new Promise((function(e){a("SET_VIEWPORT_SIZE",{width:o,height:i}),a("INITIALIZE_RENDERER",r),a("INITIALIZE_CAMERA"),a("INITIALIZE_CONTROLS"),a("INITIALIZE_SCENE"),n.renderer.render(n.scene,n.camera),n.controls.addEventListener("change",(function(){n.renderer.render(n.scene,n.camera)})),e()}))},ANIMATE:function(e){var t=e.state,n=e.dispatch;window.requestAnimationFrame((function(){n("ANIMATE"),t.controls.update()}))}}}),Ie=(n("150b"),Object(a["c"])(v));Ie.use(o["a"]),Ie.use(ve),Ie.use(je),Ie.mount("#app")},"58ac":function(e,t,n){},"5c3f":function(e,t,n){"use strict";n("834c")},7208:function(e,t,n){},"776c":function(e,t,n){"use strict";n("86da")},"776d":function(e,t,n){"use strict";n("144d")},"79d3":function(e,t,n){"use strict";n("4b63")},"834c":function(e,t,n){},"86da":function(e,t,n){},9979:function(e,t,n){"use strict";n("fa29")},fa29:function(e,t,n){},fde2:function(e,t,n){"use strict";n("7208")}});
//# sourceMappingURL=app.1437ebb3.js.map