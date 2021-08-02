import{B as e}from"./index.eabbe37b.js";import{o as t,c as l,b as a,F as d,n as o,f as r,t as s}from"./vendor.fe91043f.js";const b={data:()=>({contactsData:null}),created(){this.contactsData=e()},methods:{toggleDisplay(e){console.log(e);let t=e.target,l=e.target.previousSibling.classList,a=e.target.previousSibling.previousSibling.classList;"preview"===t.textContent?(t.textContent="hide",l.remove("hidden"),a.add("hidden")):(t.textContent="preview",a.remove("hidden"),l.add("hidden"))}}},n={class:"bg-black-1 lg:px-40 px-5 py-5 text-white font-ibm"},i=a("div",{class:"grid grid-cols-1 gap-5 bg-black-1 border-b-2 border-black-2 "},[a("div",{class:"py-10 text-teal-2"},[a("h1",{class:"text-h3 font-medium"},"Contact"),a("h1",{class:"text-sh3"},"Informations from contact form sent by visitors.")])],-1),c={class:"bg-black-2 rounded-lg py-10 w-100 mt-10 my-10 h-auto"},p=a("h1",{class:"text-lg text-center font-bold m-5"},"Data Table",-1),m={class:"table-auto rounded-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200"},g=a("thead",null,[a("tr",null,[a("th",{class:"timeInputCol p-3 font-bold uppercase   border border-gray-300 hidden md:table-cell"},"Time Input"),a("th",{class:"p-3 font-bold uppercase   border border-gray-300 hidden md:table-cell"},"Name"),a("th",{class:"p-3 font-bold uppercase   border border-gray-300 hidden md:table-cell"},"Company"),a("th",{class:"p-3 font-bold uppercase   border border-gray-300 hidden md:table-cell"},"Country"),a("th",{class:"p-3 font-bold uppercase   border border-gray-300 hidden md:table-cell"},"Email"),a("th",{class:"p-3 font-bold uppercase   border border-gray-300 hidden md:table-cell"},"Description")])],-1),u={class:"timeInputCol w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},h=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Time Input",-1),x={class:"w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},f=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Name",-1),y={class:"w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},v=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Company",-1),w={class:"w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},k=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Country",-1),D={class:"w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},C=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Email",-1),I={key:0,class:"w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},S=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Description",-1),T={key:1,class:"w-full md:w-auto p-3  border border-b text-left block md:table-cell relative md:static"},L=a("span",{class:"md:hidden hover:hidden absolute top-0 right-0 bg-gray-700 px-2 py-1 text-xs font-bold uppercase"},"Description",-1),j={id:"shortDesc"},E={id:"longDesc",class:"hidden"};b.render=function(e,b,N,B,F,U){return t(),l("main",n,[i,a("div",c,[p,a("table",m,[g,a("tbody",null,[(t(!0),l(d,null,o(F.contactsData,(({timeInput:e,name:d,company:o,country:n,email:i,description:c})=>(t(),l("tr",{key:e,class:"md:hover:bg-gray-700 align-top flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0"},[a("td",u,[h,r(" "+s(e.toDate().toDateString())+", "+s(e.toDate().toLocaleTimeString("en-US")),1)]),a("td",x,[f,r(" "+s(d),1)]),a("td",y,[v,r(" "+s(o),1)]),a("td",w,[k,r(" "+s(n),1)]),a("td",D,[C,r(" "+s(i),1)]),c.length<=40?(t(),l("td",I,[S,r(" "+s(c),1)])):(t(),l("td",T,[L,a("p",j,s(c.substring(0,40))+"...",1),a("p",E,s(c),1),a("a",{class:"text-xs text-teal-2 hover:text-teal-3 cursor-pointer",onClick:b[1]||(b[1]=(...e)=>U.toggleDisplay&&U.toggleDisplay(...e))},"preview")]))])))),128))])])])])};export default b;
