import{r as e,q as t,f as a,x as i}from"./index.eabbe37b.js";import{C as o}from"./ckeditor.5faa1adb.js";import{o as l,c as s,b as n,q as r,u as d,M as c,t as m,d as p,F as u,n as h,v as g,s as b,r as v}from"./vendor.fe91043f.js";const f={data(){return{errorMessage:null,status:"Idle",editor:o,editorData:String,editorConfig:{ckfinder:{uploadUrl:"https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",options:{resourceType:"Images"}}},ref:e.collection("Insights"),insightsData:null,id:this.$route.params.id,document:{time_input:null,author:null,contentType:null,data:{content:null,title:null,header:null,date:null}},video:{tempVideoUrl:null,videoData:null},image:{tempImageUrl:[],imageData:[]},cover:{tempImageUrl:null,imageData:null}}},created(){t(this.id).then((e=>{console.log(e),this.document=e,this.mapContents()}))},methods:{mapContents(){if("Article"==this.document.contentType){const e=this.document.data.content;let t="";e.forEach((e=>{t+=e,t+="<p>-break-</p>"})),t=t.slice(0,-14),this.editorData=t;let a=this.document.data.images;this.image.tempImageUrl.push.apply(this.image.tempImageUrl,a),this.cover.tempImageUrl=this.document.data.image_main}else if("Video"==this.document.contentType){const e=this.document.data.description;let t="";e.forEach((e=>{t+=e,t+="<p>-break-</p>"})),t=t.slice(0,-14),this.editorData=t,this.video.tempVideoUrl=this.document.data.content,this.cover.tempImageUrl=this.document.data.image_main}console.log(this.document),console.log(this.editorData),console.log(this.$data)},reset(){this.resetContent(),this.resetContentMain(),this.editorData="",document.getElementById("main-form").reset();for(const e in this.document)if("data"===e)for(const t in this.document[e])this.document[e][t]=null;else"contentType"===e||(this.document[e]=null)},resetContent(){this.image.imageData=[],this.image.tempImageUrl=[],"Article"==this.document.contentType?(document.getElementById("input-file").value="",document.getElementById("input-file").required=!0):(document.getElementById("input-file-video").value="",document.getElementById("input-file-video").required=!0),this.document.data.content=null;for(const e in this.video)this.video[e]=null},resetContentMain(){this.cover.imageData=null,this.cover.tempImageUrl=null,document.getElementById("input-file-main").value="",document.getElementById("input-file-main").required=!0},back(){this.$router.back()},previewImage(e){let t,a=e.target.files;for(console.log(a.length),t=0;t<a.length;t++)this.image.imageData.push(a[t]),this.image.tempImageUrl.push(URL.createObjectURL(this.image.imageData[t]))},previewImageMain(e){let t=e.target.files[0];this.cover.imageData=t,this.cover.tempImageUrl=URL.createObjectURL(t)},previewVideo(e){this.video.videoData=e.target.files[0],this.video.tempVideoUrl=URL.createObjectURL(this.video.videoData)},async edit(){var e;console.log(this.document),this.document.time_input=a.firestore.Timestamp.now(),this.status="Process";let t=this.editorData.split("-break-");if("Article"==this.document.contentType)this.document.data.content=t;else if("Video"==this.document.contentType&&(this.document.data.description=t,null!==this.video.videoData)){l=(o=a.storage().ref("/Insights")).child(`${this.video.videoData.name} in Content: ${this.document.data.title}`),await l.put(this.video.videoData);let e=await l.getDownloadURL();this.document.data.content=e}var o=a.storage().ref("/Insights");if(null!==this.cover.imageData){var l=o.child(`${null!=(e=this.cover.imageData.name)?e:"Edited Image"} in Content: ${this.document.data.title}`);await l.put(this.cover.imageData);let t=await l.getDownloadURL();this.document.data.image_main=t}let s=this.image.imageData.length;0!==this.image.imageData.length?this.image.imageData.forEach((async e=>{var t=o.child(`${e.name} in Content: ${this.document.data.title}`);await t.put(e);var a=await t.getDownloadURL();console.log(a),this.document.data.images.push(a),setTimeout((async()=>{s-=1,console.log("not done"),0===s&&(console.log("done"),console.log(this.document),i(this.id,this.document),this.status="Success",setTimeout((()=>{this.status="Idle",this.$router.push("/admin/insight")}),2e3))}),1)})):(i(this.id,this.document),this.status="Success",setTimeout((()=>{this.status="Idle",this.$router.push("/admin/insight")}),2e3))}}},y={class:"bg-black-1 lg:px-40 px-5 text-white font-ibm"},x={class:"grid grid-cols-2 gap-5 bg-black-1 border-b-2 border-black-2 "},k=n("div",{class:"py-10 text-teal-2"},[n("h1",{class:"text-h3 font-medium"},"Edit Insight"),n("h1",{class:"text-sh3"},"The information put here will be displayed on public")],-1),w={class:"py-10 text-teal-2 align-bottom flex items-end"},I={class:"grid lg:grid-cols-1 grid-cols-1 gap-5"},U={class:"h-auto flex flex-col "},C=n("h1",{class:"text-sh3 py-5 mx-auto text-teal-2"},"General Information",-1),D={class:"h-screen flex flex-col"},T=n("label",{class:"text-btn"},"Author:",-1),V=n("label",{class:"text-btn mt-6"},"Date:",-1),M=n("label",{class:"text-btn mt-6"},"Title:",-1),R=n("label",{class:"text-btn mt-6"},"(Optional) Header:",-1),E=n("label",{class:"text-btn mt-6"},"Type:",-1),$={class:"flex flex-row items-center space-x-5 mt-6 px-3"},L=n("label",{class:"inline",for:""},"Article",-1),q={class:"flex flex-row items-center space-x-5 mt-6 px-3"},B=n("label",{class:"inline",for:""},"Video",-1),j={key:0,class:"flex flex-col"},A={class:"text-sh3 py-5 mx-auto text-teal-2"},S={class:"h-auto lg:ml-4 flex flex-col"},P=n("label",{class:"text-btn"},"Content:",-1),_={key:0,class:"py-6 text-black-1"},O={class:"py-6 flex flex-col space-y-2"},H=n("h1",{class:"text-white"},"Upload Cover/Main Image",-1),N={class:"mt-4 cursor-pointer px-2 py-2"},F={key:0,class:"flex"},G={class:"py-6 flex flex-col space-y-2"},Q=n("h1",{class:"text-white"},"Upload Content Image",-1),z={class:"mt-4 cursor-pointer px-2 py-2"},J={key:0,class:"flex"},K={key:1,class:"py-6 flex flex-col space-y-2 "},W={class:"py-6 flex flex-col space-y-2"},X=n("h1",{class:"text-white"},"Upload Cover/Main Image",-1),Y={class:"mt-4 cursor-pointer px-2 py-2"},Z={key:0,class:"flex"},ee=n("h1",null,"Upload Videos",-1),te={class:"mt-4 cursor-pointer px-2 py-2"},ae={key:0},ie={width:"500",height:"281",controls:""},oe={key:2,class:"text-black-1"},le={key:3,class:"h-auto flex flex-col px-5 py-10 space-y-5"},se=n("input",{class:"bg-teal-2 w-grid px-10 rounded text-white hover:bg-teal-3 text-center",type:"submit",value:"Submit"},null,-1),ne=n("label",null,null,-1),re={key:4,class:"bg-black-1 border-t border-yellow-500 text-yellow-500 px-4 py-3",role:"alert"},de=n("p",{class:"font-medium"},"Processing...",-1),ce=n("p",{class:"font-medium"},"Please don't terminate the progress or do anything else.",-1),me={key:5,class:"bg-black-1 border-t border-teal-3 text-teal-3 px-4 py-3",role:"alert"},pe=n("p",{class:"font-medium"},"Data saved!",-1),ue={key:6,class:"bg-black-1 border-t border-red-600 text-red-600 px-4 py-3",role:"alert"},he=n("p",{class:"font-medium"},"Saving data failed! Try again...",-1),ge=n("div",null,null,-1);f.render=function(e,t,a,i,o,f){const be=v("ckeditor");return l(),s("main",y,[n("div",x,[k,n("div",w,[n("button",{class:"bg-black-2 w-grid px-5 rounded text-white hover:bg-black-3",onClick:t[1]||(t[1]=(...e)=>f.back&&f.back(...e))},"Back")])]),n("form",{id:"main-form",onSubmit:t[18]||(t[18]=b(((...e)=>f.edit&&f.edit(...e)),["prevent"]))},[n("div",I,[n("div",U,[C,n("div",D,[T,r(n("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>this.document.author=e),type:"text",id:"authorName",class:"block mt-2 lg:w-4/5 w-4/5 lg:h-11 h-6 lg:text-lg text-sm lg:pt-3 pt-1 bg-black-1 border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-transparent focus:border-black-3 focus:border-opacity-80 hover:border-opacity-80 border-black-3 border-opacity-50 text-black-3",placeholder:"Name",required:""},null,512),[[d,this.document.author]]),V,r(n("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>this.document.data.date=e),type:"date",id:"dateContent",class:"block mt-2 lg:w-4/5 w-4/5 lg:h-11 h-6 lg:text-lg text-sm lg:pt-3 pt-1 bg-black-1 border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-transparent focus:border-black-3 focus:border-opacity-80 hover:border-opacity-80 border-black-3 border-opacity-50 text-black-3",required:""},null,512),[[d,this.document.data.date]]),M,r(n("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>this.document.data.title=e),type:"text",id:"titleContent",class:"block mt-2 lg:w-4/5 w-4/5 lg:h-11 h-6 lg:text-lg text-sm lg:pt-3 pt-1 bg-black-1 border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-transparent focus:border-black-3 focus:border-opacity-80 hover:border-opacity-80 border-black-3 border-opacity-50 text-black-3",placeholder:"Title",required:""},null,512),[[d,this.document.data.title]]),R,r(n("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>this.document.data.header=e),type:"text",id:"titleContent",class:"block mt-2 lg:w-4/5 w-4/5 lg:h-11 h-6 lg:text-lg text-sm lg:pt-3 pt-1 bg-black-1 border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-transparent focus:border-black-3 focus:border-opacity-80 hover:border-opacity-80 border-black-3 border-opacity-50 text-black-3",placeholder:"Header"},null,512),[[d,this.document.data.header]]),E,n("div",$,[r(n("input",{name:"contentType",type:"radio",id:"one",value:"Article","onUpdate:modelValue":t[6]||(t[6]=e=>o.document.contentType=e)},null,512),[[c,o.document.contentType]]),L]),n("div",q,[r(n("input",{name:"contentType",type:"radio",id:"two",value:"Video","onUpdate:modelValue":t[7]||(t[7]=e=>o.document.contentType=e)},null,512),[[c,o.document.contentType]]),B])])]),o.document.contentType?(l(),s("div",j,[n("h1",A,m(o.document.contentType),1),n("div",S,[P,"Article"===o.document.contentType?(l(),s("div",_,[n("div",O,[H,n("div",N,[n("input",{onChange:t[8]||(t[8]=(...e)=>f.previewImageMain&&f.previewImageMain(...e)),type:"file",accept:"image/*",class:"input-file",id:"input-file-main"},null,32),n("button",{type:"button",class:"bg-red-600 w-grid px-10 rounded text-white hover:bg-red-400",onClick:t[9]||(t[9]=(...e)=>f.resetContentMain&&f.resetContentMain(...e))},"Reset Image")]),this.cover.tempImageUrl?(l(),s("div",F,[n("img",{src:this.cover.tempImageUrl,style:{width:"20vw","margin-right":"20px"}},null,8,["src"])])):p("",!0)]),n("div",G,[Q,n("div",z,[n("input",{onChange:t[10]||(t[10]=(...e)=>f.previewImage&&f.previewImage(...e)),type:"file",accept:"image/*",class:"input-file",id:"input-file",multiple:""},null,32),n("button",{type:"button",class:"bg-red-600 w-grid px-10 rounded text-white hover:bg-red-400",onClick:t[11]||(t[11]=(...e)=>f.resetContent&&f.resetContent(...e))},"Reset Image")]),this.image.tempImageUrl?(l(),s("div",J,[(l(!0),s(u,null,h(this.image.tempImageUrl,(e=>(l(),s("div",{key:e},[n("img",{src:e,style:{width:"20vw","margin-right":"20px"}},null,8,["src"])])))),128))])):p("",!0)])])):p("",!0),"Video"===o.document.contentType?(l(),s("div",K,[n("div",W,[X,n("div",Y,[n("input",{onChange:t[12]||(t[12]=(...e)=>f.previewImageMain&&f.previewImageMain(...e)),type:"file",accept:"image/*",class:"input-file",id:"input-file-main"},null,32),n("button",{type:"button",class:"bg-red-600 w-grid px-10 rounded text-white hover:bg-red-400",onClick:t[13]||(t[13]=(...e)=>f.resetContentMain&&f.resetContentMain(...e))},"Reset Image")]),this.cover.tempImageUrl?(l(),s("div",Z,[n("img",{src:this.cover.tempImageUrl,style:{width:"20vw","margin-right":"20px"}},null,8,["src"])])):p("",!0)]),ee,n("div",te,[r(n("input",{onChange:t[14]||(t[14]=(...e)=>f.previewVideo&&f.previewVideo(...e)),type:"file",accept:"video/*",class:"input-file",id:"input-file-video"},null,544),[[g,null===this.video.tempVideoUrl]]),this.video.tempVideoUrl?(l(),s("button",{key:0,class:"bg-red-600 w-grid px-10 rounded text-white hover:bg-red-400",type:"button",onClick:t[15]||(t[15]=(...e)=>f.resetContent&&f.resetContent(...e))},"Reset Video")):p("",!0)]),this.video.tempVideoUrl?(l(),s("div",ae,[n("video",ie,[n("source",{src:this.video.tempVideoUrl,type:"video/mp4"},null,8,["src"])])])):p("",!0)])):p("",!0),o.document.contentType?(l(),s("div",oe,[n(be,{editor:o.editor,modelValue:o.editorData,"onUpdate:modelValue":t[16]||(t[16]=e=>o.editorData=e),config:o.editorConfig},null,8,["editor","modelValue","config"])])):p("",!0),"Process"!=this.status?(l(),s("div",le,[se,n("button",{class:"bg-red-600 w-grid px-10 rounded text-white hover:bg-red-400",onClick:t[17]||(t[17]=(...e)=>f.reset&&f.reset(...e))},"Reset"),ne])):p("",!0),"Process"===this.status?(l(),s("div",re,[de,ce])):p("",!0),"Success"===this.status?(l(),s("div",me,[pe])):p("",!0),"Error"===this.status?(l(),s("div",ue,[he])):p("",!0)])])):p("",!0)])],32),ge])};export default f;
