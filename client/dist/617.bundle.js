"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[617],{3343:(e,t,r)=>{var a=r(5318);t.Z=void 0;var n=a(r(4938)),i=r(5893),o=(0,n.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=o},9161:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(3366),n=r(7462),i=r(7294),o=r(6010),s=r(4780),l=r(9602),c=r(6122),m=r(5677);function u(e){return(0,m.Z)("MuiCardActions",e)}(0,r(1588).Z)("MuiCardActions",["root","spacing"]);var d=r(5893);const p=["disableSpacing","className"],v=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,n.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),g=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:l}=r,m=(0,a.Z)(r,p),g=(0,n.Z)({},r,{disableSpacing:i}),h=(e=>{const{classes:t,disableSpacing:r}=e,a={root:["root",!r&&"spacing"]};return(0,s.Z)(a,u,t)})(g);return(0,d.jsx)(v,(0,n.Z)({className:(0,o.Z)(h.root,l),ownerState:g,ref:t},m))}))},4962:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(3366),n=r(7462),i=r(7294),o=r(6010),s=r(4780),l=r(6122),c=r(9602),m=r(5677);function u(e){return(0,m.Z)("MuiCardMedia",e)}(0,r(1588).Z)("MuiCardMedia",["root","media","img"]);var d=r(5893);const p=["children","className","component","image","src","style"],v=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:a,isImageComponent:n}=r;return[t.root,a&&t.media,n&&t.img]}})((({ownerState:e})=>(0,n.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),g=["video","audio","picture","iframe","img"],h=["picture","img"],f=i.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:c,component:m="div",image:f,src:Z,style:E}=r,b=(0,a.Z)(r,p),k=-1!==g.indexOf(m),C=!k&&f?(0,n.Z)({backgroundImage:`url("${f}")`},E):E,S=(0,n.Z)({},r,{component:m,isMediaComponent:k,isImageComponent:-1!==h.indexOf(m)}),M=(e=>{const{classes:t,isMediaComponent:r,isImageComponent:a}=e,n={root:["root",r&&"media",a&&"img"]};return(0,s.Z)(n,u,t)})(S);return(0,d.jsx)(v,(0,n.Z)({className:(0,o.Z)(M.root,c),as:m,role:!k&&f?"img":void 0,ref:t,style:C,ownerState:S,src:k?f||Z:void 0},b,{children:i}))}))},9062:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(3366),n=r(7462),i=r(7294),o=r(6010),s=r(4780),l=r(917),c=r(8216),m=r(6122),u=r(9602),d=r(5677);function p(e){return(0,d.Z)("MuiCircularProgress",e)}(0,r(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v=r(5893);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let h,f,Z,E,b=e=>e;const k=44,C=(0,l.F4)(h||(h=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.F4)(f||(f=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),M=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(Z||(Z=b`
      animation: ${0} 1.4s linear infinite;
    `),C))),y=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),x=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(E||(E=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S))),w=i.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:u=!1,size:d=40,style:h,thickness:f=3.6,value:Z=0,variant:E="indeterminate"}=r,b=(0,a.Z)(r,g),C=(0,n.Z)({},r,{color:l,disableShrink:u,size:d,thickness:f,value:Z,variant:E}),S=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,i={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,s.Z)(i,p,t)})(C),w={},P={},R={};if("determinate"===E){const e=2*Math.PI*((k-f)/2);w.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(Z),w.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,v.jsx)(M,(0,n.Z)({className:(0,o.Z)(S.root,i),style:(0,n.Z)({width:d,height:d},P,h),ownerState:C,ref:t,role:"progressbar"},R,b,{children:(0,v.jsx)(y,{className:S.svg,ownerState:C,viewBox:"22 22 44 44",children:(0,v.jsx)(x,{className:S.circle,style:w,ownerState:C,cx:k,cy:k,r:(k-f)/2,fill:"none",strokeWidth:f})})}))}))},8801:(e,t,r)=>{r.d(t,{h:()=>g});var a=r(7294),n=r(6501),i=r(5295),o=r(4563),s=r(6867),l=r(4962),c=r(2643),m=r(2658),u=r(6447),d=r(9161),p=r(6914),v=r(3343),g=function(e){var t,r,g,h,f=e.route,Z=e.image,E=e.title,b=e.restaurantChain,k=e.nutrition,C=e.url,S=e.handleOpeningDialog,M=e.isMealPlanItem,y=e.servings;return void 0!==k&&"recipes"===f||"RECIPE"===f?k.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(k.nutrients[0].amount):"Protein"===e.name?h=Math.floor(k.nutrients[1].amount)+"g":"Fat"===e.name?g=Math.floor(k.nutrients[1].amount):"Carbohydrates"===e.name&&(r=Math.floor(k.nutrients[3].amount)+"g")})):void 0!==k&&(t=k.calories,h=k.protein,g=k.fat,r=k.carbs),a.createElement(n.Z,{elevation:1,className:"food-search-paper"},a.createElement(i.Z,{className:"search-item","data-testid":"food-search-item"},M&&void 0!==S?a.createElement(o.Z,{title:"Delete from Mealplan"},a.createElement(s.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:S},a.createElement(v.Z,null))):null,a.createElement(l.Z,{component:"img",alt:"food item image",height:"160",image:Z}),a.createElement(c.Z,null,a.createElement(m.Z,{align:"center",noWrap:!0,variant:"subtitle1"},E),M&&void 0!==y?a.createElement(u.Z,{direction:"row"},a.createElement(m.Z,{variant:"subtitle2"},"Servings: ",y)):null,"menuItems"===f||"MENU_ITEM"===f?a.createElement(m.Z,{variant:"subtitle2"},b):null,void 0!==k?a.createElement("div",{className:"search-item-nutrition"},a.createElement("div",{className:"search-item-nutrient"},a.createElement(m.Z,{variant:"subtitle2"},a.createElement("strong",null,"Calories")),a.createElement(m.Z,{variant:"body1"},t)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(m.Z,{variant:"subtitle2"},a.createElement("strong",null,"Carbs")),a.createElement(m.Z,{variant:"body1"},r)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(m.Z,{variant:"subtitle2"},a.createElement("strong",null,"Protein")),a.createElement(m.Z,{variant:"body1"},h)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(m.Z,{variant:"subtitle2"},a.createElement("strong",null,"Fat")),a.createElement(m.Z,{variant:"body1"},g))):null),a.createElement(d.Z,{sx:{display:"flex"}},void 0!==C?a.createElement(p.Z,{fullWidth:!0,component:"a",href:C,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,M?null:a.createElement(p.Z,{fullWidth:!0,className:"card-button",onClick:S,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},9100:(e,t,r)=>{r.d(t,{C:()=>n});var a=r(6974),n=function(){return(0,a.bx)()}},5617:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(7294),n=r(9226),i=r(2658),o=r(8801),s=function(e){var t=e.popularRecipes,r=e.route,s=e.showPopularRecipes;return a.createElement(a.Fragment,null,a.createElement(n.Z,{sx:{pt:"1rem"}},!0===s?a.createElement(i.Z,{align:"center",variant:"h4",component:"h1"},"Popular Recipes"):a.createElement(i.Z,{align:"center",variant:"h5",component:"h1"},"Results"),a.createElement("div",{className:"sample-recipes-list"},s?t.map((function(e){return a.createElement(o.h,{key:e.id,image:e.image,url:e.sourceUrl,title:e.title,restaurantChain:e.restaurantChain,route:r,isMealPlanItem:!0})})):t.map((function(e){return a.createElement(o.h,{key:e.id,isMealPlanItem:!0,route:r,url:e.sourceUrl,title:e.title,image:e.image,restaurantChain:e.restaurantChain,nutrition:e.nutrition})})))))},l=r(6447),c=r(9062),m=r(9669),u=r.n(m),d=r(9100);const p=function(){var e=(0,d.C)(),t=e.setAlertSeverity,r=(e.openAlert,e.setOpenAlert),n=e.setAlertMessage,i=e.isLoading,o=e.setPopularRecipes,m=e.popularRecipes,p=(e.alertSeverity,e.showPopularRecipes),v=(e.alertMessage,e.route),g=(0,a.useState)(!1),h=(g[0],g[1],(0,a.useState)([]));h[0],h[1];return(0,a.useEffect)((function(){u().get("/api/recipes/popular").then((function(e){o(e.data.recipes)})).catch((function(e){console.log("err: ",e),t("error"),n("An error has occurred. Please try again later."),r(!0)}))}),[]),a.createElement(a.Fragment,null,i?a.createElement(l.Z,{alignItems:"center"},a.createElement(c.Z,{size:100})):null,m.length?a.createElement(s,{showPopularRecipes:p,popularRecipes:m,route:v}):a.createElement(l.Z,{alignItems:"center"},a.createElement(c.Z,{size:100})))}}}]);