"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[521],{9062:(e,t,a)=>{a.d(t,{Z:()=>D});var r=a(3366),n=a(7462),l=a(7294),i=a(6010),s=a(4780),o=a(917),c=a(8216),m=a(6122),u=a(9602),d=a(5677);function v(e){return(0,d.Z)("MuiCircularProgress",e)}(0,a(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=a(5893);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let f,y,Z,E,g=e=>e;const b=44,k=(0,o.F4)(f||(f=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),M=(0,o.F4)(y||(y=g`
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
`)),S=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`color${(0,c.Z)(a.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,o.iv)(Z||(Z=g`
      animation: ${0} 1.4s linear infinite;
    `),k))),w=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),x=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.circle,t[`circle${(0,c.Z)(a.variant)}`],a.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.iv)(E||(E=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),M))),D=l.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiCircularProgress"}),{className:l,color:o="primary",disableShrink:u=!1,size:d=40,style:f,thickness:y=3.6,value:Z=0,variant:E="indeterminate"}=a,g=(0,r.Z)(a,p),k=(0,n.Z)({},a,{color:o,disableShrink:u,size:d,thickness:y,value:Z,variant:E}),M=(e=>{const{classes:t,variant:a,color:r,disableShrink:n}=e,l={root:["root",a,`color${(0,c.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(a)}`,n&&"circleDisableShrink"]};return(0,s.Z)(l,v,t)})(k),D={},N={},C={};if("determinate"===E){const e=2*Math.PI*((b-y)/2);D.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(Z),D.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,N.transform="rotate(-90deg)"}return(0,h.jsx)(S,(0,n.Z)({className:(0,i.Z)(M.root,l),style:(0,n.Z)({width:d,height:d},N,f),ownerState:k,ref:t,role:"progressbar"},C,g,{children:(0,h.jsx)(w,{className:M.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,h.jsx)(x,{className:M.circle,style:D,ownerState:k,cx:b,cy:b,r:(b-y)/2,fill:"none",strokeWidth:y})})}))}))},8801:(e,t,a)=>{a.d(t,{h:()=>p});var r=a(7294),n=a(6501),l=a(5295),i=a(4563),s=a(6867),o=a(4962),c=a(2643),m=a(2658),u=a(6447),d=a(9161),v=a(6914),h=a(3343),p=function(e){var t,a,p,f,y=e.route,Z=e.image,E=e.title,g=e.restaurantChain,b=e.nutrition,k=e.url,M=e.handleOpeningDialog,S=e.isMealPlanItem,w=e.servings;return void 0!==b&&"recipes"===y||"RECIPE"===y?b.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(b.nutrients[0].amount):"Protein"===e.name?f=Math.floor(b.nutrients[1].amount)+"g":"Fat"===e.name?p=Math.floor(b.nutrients[1].amount):"Carbohydrates"===e.name&&(a=Math.floor(b.nutrients[3].amount)+"g")})):void 0!==b&&(t=b.calories,f=b.protein,p=b.fat,a=b.carbs),r.createElement(n.Z,{elevation:1,className:"food-search-paper"},r.createElement(l.Z,{className:"search-item","data-testid":"food-search-item"},S&&void 0!==M?r.createElement(i.Z,{title:"Delete from Mealplan"},r.createElement(s.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:M},r.createElement(h.Z,null))):null,r.createElement(o.Z,{component:"img",alt:"food item image",height:"160",image:Z}),r.createElement(c.Z,null,r.createElement(m.Z,{align:"center",noWrap:!0,variant:"subtitle1"},E),S&&void 0!==w?r.createElement(u.Z,{direction:"row"},r.createElement(m.Z,{variant:"subtitle2"},"Servings: ",w)):null,"menuItems"===y||"MENU_ITEM"===y?r.createElement(m.Z,{variant:"subtitle2"},g):null,void 0!==b?r.createElement("div",{className:"search-item-nutrition"},r.createElement("div",{className:"search-item-nutrient"},r.createElement(m.Z,{variant:"subtitle2"},r.createElement("strong",null,"Calories")),r.createElement(m.Z,{variant:"body1"},t)),r.createElement("div",{className:"search-item-nutrient"},r.createElement(m.Z,{variant:"subtitle2"},r.createElement("strong",null,"Carbs")),r.createElement(m.Z,{variant:"body1"},a)),r.createElement("div",{className:"search-item-nutrient"},r.createElement(m.Z,{variant:"subtitle2"},r.createElement("strong",null,"Protein")),r.createElement(m.Z,{variant:"body1"},f)),r.createElement("div",{className:"search-item-nutrient"},r.createElement(m.Z,{variant:"subtitle2"},r.createElement("strong",null,"Fat")),r.createElement(m.Z,{variant:"body1"},p))):null),r.createElement(d.Z,{sx:{display:"flex"}},void 0!==k?r.createElement(v.Z,{fullWidth:!0,component:"a",href:k,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,S?null:r.createElement(v.Z,{fullWidth:!0,className:"card-button",onClick:M,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},7204:(e,t,a)=>{a.d(t,{b:()=>c});var r=a(7294),n=a(6501),l=a(584),i=a(8779),s=a(7090),o=a(2658),c=function(e){var t=e.currentDay,a=(0,i.Z)((0,l.Z)(new Date(t)),"MMMM dd, yyyy"),c=(0,i.Z)((0,s.Z)(new Date(t)),"MMMM dd, yyyy");return r.createElement(r.Fragment,null,r.createElement(n.Z,{className:"mealplan-week-text",color:"secondary"},r.createElement(o.Z,{variant:"body1"},"Viewing Week:"),r.createElement(o.Z,{variant:"body1"},a),r.createElement(o.Z,{variant:"body1"},"-"),r.createElement(o.Z,{variant:"body1"},c)))}},6521:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var r=a(7294),n=a(8801),l=a(2658),i=function(e){var t=e.mealplanItems,a=e.sampleMealplanItems;return r.createElement(r.Fragment,null,r.createElement("div",{className:"meal-plan-slots-container"},t.map((function(e,t){return r.createElement("div",{className:"mealplan-day-slot",key:e.id},0===t&&r.createElement(l.Z,{align:"center",variant:"h4",component:"h1"},"Breakfast"),1===t&&r.createElement(l.Z,{align:"center",variant:"h4",component:"h1"},"Lunch"),2===t&&r.createElement(l.Z,{align:"center",variant:"h4",component:"h1"},"Dinner"),r.createElement("div",{className:"mealplan-item-row"},r.createElement(n.h,{route:"recipes",image:e.image,title:e.title,nutrition:e.nutrition,url:e.sourceUrl,isMealPlanItem:!0,servings:a[t].servings})))}))))},s=a(4656),o=a(2640),c=a(9062);const m=(0,a(1354).Z)();var u=a(9669),d=a.n(u),v=a(7349),h=a(8779),p=a(466),f=a(7069),y=a(7204),Z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const E=function(e){var t=e.setNutritionSummary,a=e.setAlertSeverity,n=e.setOpenAlert,l=e.setSampleMealplanItems,u=e.setMealplanItems,E=e.setAlertMessage,g=e.mealplanItems,b=e.sampleMealplanItems,k=(0,r.useState)((0,p.Z)(Date.now())),M=k[0],S=k[1],w=r.useState(new Date(Date.now())),x=(w[0],w[1]),D=(0,r.useState)((0,h.Z)(new Date(Date.now()),"yyyy-MM-dd")),N=D[0],C=D[1],P=function(e){var t=e.split("-");return{year:t[0],month:t[1],day:t[2]}};return(0,r.useEffect)((function(){d().get("/api/mealplan/sample").then((function(e){t(e.data.nutrients);var a=e.data.meals;l(a);var r=a.map((function(e){return d().get("/api/recipes/".concat(e.id)).then((function(e){return e.data}))}));Promise.all(r).then((function(e){u(e)}))})).catch((function(e){E("Unable to retrieve meal plan items. Please try again later."),a("error"),n(!0)}))}),[N]),r.createElement(r.Fragment,null,r.createElement("div",{className:"sample-mealplan-page"},r.createElement(y.b,{currentDay:N}),r.createElement(m,{sx:{maxWidth:{xs:320,sm:480}}},r.createElement(s.Z,{value:M,onChange:function(e,a){u([]),t({calories:0,protein:0,fat:0,carbohydrates:0});var r,n=a-M,l=P(N),i=l.year,s=l.month,o=l.day;n>0?r=(0,v.Z)(new Date("".concat(i,", ").concat(s,", ").concat(o)),n):n<0&&(r=(0,f.Z)(new Date("".concat(i,", ").concat(s,", ").concat(o)),Math.abs(n))),void 0!==r&&(x(r),S(a),C((0,h.Z)(r,"yyyy-MM-dd")))},variant:"scrollable",scrollButtons:"auto","aria-label":"change mealplan date"},Z.map((function(e){return r.createElement(o.Z,{key:e,label:e})})))),g.length>0&&b.length>0?r.createElement(i,{mealplanItems:g,sampleMealplanItems:b}):r.createElement(c.Z,{size:100})))}}}]);