(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{294:function(t,e,r){},317:function(t,e){},319:function(t,e){},330:function(t,e,r){"use strict";var n=r(294);r.n(n).a},354:function(t,e,r){"use strict";r.r(e);r(310);var n,o=r(15),l=(r(6),r(79),r(312),r(80)),c=(r(56),r(58),r(2)),d=(r(11),r(313),r(33),r(46),r(47),r(4),r(50),r(314)),f=r.n(d);n=r(328),r(329);var map,v,h,m,y,_={filters:{spaceNumbers:function(t){return t?t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 "):""},toPercent:function(t){return Math.round(1e4*t)/100},sex:function(t){return"жінка"===t?"fas fa-female":"fas fa-male"},name:function(t){return""!==t.name&void 0!==t.name?t.name:t.shortName},address:function(t){return[t.postalCode,t.region,t.district,t.locality,t.street,t.steetNumber].filter((function(t){return void 0!==t&&""!==t})).join(", ")}},data:function(){var t;return t={totalAmountOfOSBB:0,selectedAmountOfOSBB:0,cityOSBB:0,livingOSBB:0,search:"",color:"nocolor",size:"nosize",rowsPerPage:[5,10,25,{text:"Показати всі",value:-1}],latMin:0,latMax:Number.MAX_SAFE_INTEGER,lonMin:0,lonMax:Number.MAX_SAFE_INTEGER},Object(c.a)(t,"search",""),Object(c.a)(t,"horizontalBarOtpions1",{seriesBarDistance:7,reverseData:!0,horizontalBars:!0,axisY:{offset:120}}),Object(c.a)(t,"headers",[{text:"ЄДРПОУ",align:"left",sortable:!1,value:"edrpou"},{text:"Назва",value:"name",sortable:!1},{text:"Статус",value:"status"},{text:"Кількість членів",value:"number"},{text:"Голова",value:"head"},{text:"Адреса",value:"postalCode",sortable:!1}]),Object(c.a)(t,"statisticHeaders",[{text:"Категорія",align:"left",value:"label"},{text:"Кількість",align:"center",value:"count",width:"15%"},{text:"%",align:"center",value:"percent",width:"15%"}]),Object(c.a)(t,"filteredOsbb",[]),t},computed:{horizontalBarOtpions:function(){return{seriesBarDistance:7,reverseData:!0,horizontalBars:!0,axisY:{offset:120},chartPadding:{top:0,right:40,bottom:0,left:0},plugins:[this.$chartist.plugins.ctBarLabels({position:{x:function(data){return data.x2+26}},labelOffset:{y:4},labelInterpolationFnc:function(text){return text+"%"}})]}},statisticSex:function(){return z(this.filteredOsbb,"headSex")},statisticStatus:function(){return z(this.filteredOsbb,"status")},statisticLocalityType:function(){return z(this.filteredOsbb,"localityType")},statisticKVED:function(){return z(this.filteredOsbb,"kved")},statisticRegion:function(){return z(this.filteredOsbb,"region")},statisticNumber:function(){return data=this.filteredOsbb,t=(data=(data=(data=data.map((function(t){return t.number}))).filter((function(t){return""!==t}))).map((function(t){return function(t){for(var e in N)if(t<=N[e])return e}(t)}))).length,(e=Object(l.a)(new Set(data)).map((function(t){return{label:t,count:data.filter((function(e){return e===t})).length}}))).forEach((function(e){e.percent=Math.round(1e4*e.count/t)/100,""===e.label&&(e.label="не визначено")})),e;var data,t,e}},watch:{layerActive:function(){this.layerActive?this.map.addLayer(this.points):this.map.removeLayer(this.points)},color:function(){this.setLocations()},size:function(){this.setLocations()}},mounted:function(){var t=this;this.$eventBus.$on("setColor",(function(e){return t.color=e})),this.$eventBus.$on("setSize",(function(e){return t.size=e})),map=n.map("map",{preferCanvas:!0,fullscreenControl:!0}).setView([48.5854715,31.2083201],6),n.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',maxZoom:18}).addTo(map),document.getElementsByClassName("leaflet-control-fullscreen-button")[0].innerHTML='<i aria-hidden="true" class="v-icon notranslate fas fa-compress" style="font-size: 1em;"></i>',this.init()},methods:{init:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(A("osbb.csv"));case 2:return v=t.sent,t.next=5,regeneratorRuntime.awrap(v.text());case 5:return v=(v=(v=(v=t.sent).split(/\n/)).map((function(t){return f.a.parse(t)[0]}))).map((function(t){return e=t,r=Object(o.a)(e,20),n=r[0],l=r[1],c=r[2],d=r[3],f=r[4],v=r[5],h=r[6],head=r[7],m=r[8],y=r[9],_=r[10],x=r[11],S=r[12],O=r[13],B=r[14],w=r[15],C=r[16],A=r[17],z=r[18],N=r[19],{type:"Feature",properties:{edrpou:(n+"").padStart(8,"0"),status:l,shortName:c,name:d,kved:f,funds:v,number:h,head:head,headSex:m,country:y,postalCode:_,district:x,locality:S,street:O,steetNumber:B,precision:A,region:z,localityType:N},geometry:{type:"Point",coordinates:[C,w]}};var e,r,n,l,c,d,f,v,h,head,m,y,_,x,S,O,B,w,C,A,z,N})),this.totalAmountOfOSBB=v.length,v=v.filter((function(t){return""!==t.geometry.coordinates[0]})),h=Object(l.a)(v),t.next=14,regeneratorRuntime.awrap(this.setRegions());case 14:this.setLocations(),this.recalculate();case 16:case"end":return t.stop()}}),null,this)},setRegions:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this,e.next=3,regeneratorRuntime.awrap(A("ukraine.json"));case 3:return t=e.sent,e.next=6,regeneratorRuntime.awrap(t.text());case 6:t=e.sent,t=JSON.parse(t),{type:"FeatureCollection",features:t},y=n.geoJSON(t,{style:function(t){var style=JSON.parse(JSON.stringify(S));return style}}),map.addLayer(y);case 11:case"end":return e.stop()}}),null,this)},setLocations:function(){var t=this;if(!v)return!1;m&&map.removeLayer(m);var e={type:"FeatureCollection",features:v};m=n.geoJSON(e,{pointToLayer:function(e,r){return n.circleMarker(r,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nocolor",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nosize",n=JSON.parse(JSON.stringify(x));switch(e){case"status":n.fillColor=(o=t.properties.status,void 0===O[o]?"#90A4AE":O[o]);break;case"localityType":n.fillColor=function(t){return void 0===B[t]?"#90A4AE":B[t]}(t.properties.localityType);break;case"headSex":n.fillColor=function(t){return""===t||void 0===t?"#90A4AE":"жінка"===t?"#F50057":"#0D47A1"}(t.properties.headSex);break;case"number":n.fillColor=function(t){for(var e in C)if(t<=C[e])return e}(t.properties.number)}var o;switch(r){case"localityType":n.radius=8*(function(t){return w.indexOf(t)}(t.properties.localityType)+1)/5+4;break;case"number":if(""===t.properties.number){n.radius=3;break}n.radius=20*(t.properties.number-3)/997+3}return n}(e,t.color,t.size))},onEachFeature:function(t,e){var r="<strong>ОСББ:</strong> "+(""!==t.properties.name?t.properties.name:t.properties.shortName)+"<br/>";r+="<strong>ЄДРПОУ:</strong> "+t.properties.edrpou+"<br/>",t.properties.status&&(r+="<strong>Статус:</strong> "+t.properties.status+"<br/>"),t.properties.head&&(r+="<strong>Голова:</strong> "+t.properties.head+"<br/>"),t.properties.localityType&&(r+="<strong>Тип:</strong> "+t.properties.localityType+"<br/>"),t.properties.number&&(r+="<strong>Кількість членів:</strong> "+t.properties.number+"<br/>"),e.bindPopup(r)}}),map.addLayer(m)},selectOSBB:function(){var t=map.getBounds();this.latMax=t._northEast.lat,this.latMin=t._southWest.lat,this.lonMax=t._northEast.lng,this.lonMin=t._southWest.lng,this.recalculate()},recalculate:function(){var t=this;h=(h=Object(l.a)(v).filter((function(e){return e.geometry.coordinates[0]<t.lonMax&&e.geometry.coordinates[0]>t.lonMin}))).filter((function(e){return e.geometry.coordinates[1]<t.latMax&&e.geometry.coordinates[1]>t.latMin})),this.selectedAmountOfOSBB=h.length,this.cityOSBB=h.filter((function(t){return"місто"===t.properties.localityType})).length,this.livingOSBB=h.filter((function(t){return"зареєстровано"===t.properties.status})).length,this.filteredOsbb=h.map((function(t){return t.properties}))}}};var x={radius:8,fillColor:"#ff7800",color:"#000",weight:1,opacity:.1,fillOpacity:.8};var S={color:"#1976D7",dashArray:"3",cursor:"default",weight:2,opacity:.2,fillOpacity:0,fillColor:"#333"};var O={"в стані припинення":"#5D4037","зареєстровано":"#1565C0","зареєстровано, свідоцтво про державну реєстрацію недійсне":"#F4511E","припинено":"#455A64"};var B={"місто":"#1565C0","селище":"#1565C0","селище міського типу":"#F4511E","село":"#455A64"},w=["село","селище","селище міського типу","місто"];var C={"#0D47A1":20,"#1976D2":50,"#42A5F5":100,"#E57373":200,"#E53935":500,"#B71C1C":4e3};function A(t){return new Promise((function(e,r){var n=new XMLHttpRequest;n.onload=function(){e(new Response(n.responseText,{status:n.status}))},n.onerror=function(){r(new TypeError("Local request failed"))},n.open("GET",t),n.send(null)}))}function z(data,t){var e=(data=data.map((function(e){return e[t]}))).length,r=Object(l.a)(new Set(data)).map((function(t){return{label:t,count:data.filter((function(e){return e===t})).length}}));return r.forEach((function(t){t.percent=Math.round(1e4*t.count/e)/100,""===t.label&&(t.label="не визначено")})),r}var N={"3-20":20,"21-50":50,"51-100":100,"101-200":200,"201-500":500,"501+":4e3};var k=_,E=(r(330),r(59)),T=r(93),M=r.n(T),L=r(304),R=r(266),V=r(118),j=r(67),F=r(283),D=r(353),P=r(308),H=r(120),J=r(104),$=r(309),I=r(278),G=r(348),component=Object(E.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{staticClass:"mb-4",attrs:{xs12:""}},[r("v-container",{staticStyle:{padding:"0px"},attrs:{"grid-list-lg":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:"",lg4:"","mb-2":""}},[r("v-card",{attrs:{tile:""}},[r("v-layout",{staticStyle:{margin:"0px"},attrs:{"align-center":"",row:""}},[r("v-avatar",{staticStyle:{flex:"0 1 !important"},attrs:{tile:!0,size:"90px",color:"blue darken-2"}},[r("v-icon",{staticStyle:{"font-size":"3.5em"},attrs:{color:"white"}},[t._v("fas fa-home")])],1),t._v(" "),r("div",{staticClass:"pl-2"},[r("div",{staticClass:"blue-grey--text text--darken-2"},[r("strong",{staticStyle:{"font-size":"0.8em"}},[t._v("Відображено ОСББ")])]),t._v(" "),r("div",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("\n                    "+t._s(t._f("toPercent")(t.selectedAmountOfOSBB/t.totalAmountOfOSBB))+"%\n                ")]),t._v(" "),r("div",{staticClass:"grey--text text--darken-1",staticStyle:{"font-size":"0.8em"}},[t._v("\n                  "+t._s(t._f("spaceNumbers")(t.selectedAmountOfOSBB))+" ОСББ з "+t._s(t._f("spaceNumbers")(t.totalAmountOfOSBB))+"\n                ")])])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:"",lg4:"","mb-2":""}},[r("v-card",{attrs:{tile:""}},[r("v-layout",{staticStyle:{margin:"0px"},attrs:{"align-center":"",row:""}},[r("v-avatar",{staticStyle:{flex:"0 1 !important"},attrs:{tile:!0,size:"90px",color:"orange darken-2"}},[r("v-icon",{staticStyle:{"font-size":"3.5em"},attrs:{color:"white"}},[t._v("fas fa-city")])],1),t._v(" "),r("div",{staticClass:"pl-2"},[r("div",{staticClass:"blue-grey--text text--darken-2"},[r("strong",{staticStyle:{"font-size":"0.8em"}},[t._v("Кількість міських ОСББ")])]),t._v(" "),r("div",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("\n                  "+t._s(t._f("toPercent")(t.cityOSBB/t.selectedAmountOfOSBB))+"%\n                ")]),t._v(" "),r("div",{staticClass:"grey--text text--darken-1",staticStyle:{"font-size":"0.8em"}},[t._v("\n                  "+t._s(t._f("spaceNumbers")(t.cityOSBB))+" ОСББ з "+t._s(t._f("spaceNumbers")(t.selectedAmountOfOSBB))+"\n                ")])])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md12:"",lg4:"","mb-2":""}},[r("v-card",{attrs:{tile:""}},[r("v-layout",{staticStyle:{margin:"0px"},attrs:{"align-center":"",row:""}},[r("v-avatar",{staticStyle:{flex:"0 1 !important"},attrs:{tile:!0,size:"90px",color:"red darken-2"}},[r("v-icon",{staticStyle:{"font-size":"3.5em"},attrs:{color:"white"}},[t._v("fas fa-play")])],1),t._v(" "),r("div",{staticClass:"pl-2"},[r("div",{staticClass:"blue-grey--text text--darken-2"},[r("strong",{staticStyle:{"font-size":"0.8em"}},[t._v("Кількість працюючих ОСББ")])]),t._v(" "),r("div",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("\n                  "+t._s(t._f("toPercent")(t.livingOSBB/t.selectedAmountOfOSBB))+"%\n                ")]),t._v(" "),r("div",{staticClass:"grey--text text--darken-1",staticStyle:{"font-size":"0.8em"}},[t._v("\n                  "+t._s(t._f("spaceNumbers")(t.livingOSBB))+" ОСББ з "+t._s(t._f("spaceNumbers")(t.selectedAmountOfOSBB))+"\n                ")])])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-container",{staticStyle:{padding:"0px"},attrs:{"grid-list-lg":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-text",[r("v-img",{attrs:{src:"","aspect-ratio":"2"}},[r("v-container",{staticStyle:{padding:"0px",position:"relative"},attrs:{"fill-height":"",fluid:""}},[r("v-btn",{staticStyle:{position:"absolute",right:"10px",top:"10px","z-index":"999"},attrs:{color:"primary"},on:{click:t.selectOSBB}},[r("v-icon",{attrs:{small:"",left:""}},[t._v("fas fa-sync")]),t._v(" Оновити\n                  ")],1),t._v(" "),r("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:"map"}})],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-title",{staticClass:"display-1",attrs:{"primary-title":""}},[t._v("\n              Статистичні відомості про відображені ОСББ\n            ")]),t._v(" "),r("v-card-text",[r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  Розподіл за статусом\n                ")]),t._v(" "),r("v-data-table",{attrs:{headers:t.statisticHeaders,items:t.statisticStatus,"sort-by":"percent","sort-desc":"","hide-default-footer":"","calculate-widths":""}})],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  Розподіл за типом населеного пункту\n                ")]),t._v(" "),r("v-data-table",{attrs:{headers:t.statisticHeaders,items:t.statisticLocalityType,"sort-by":"percent","sort-desc":"","hide-default-footer":"","calculate-widths":""}})],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  Розподіл за КВЕД\n                ")]),t._v(" "),r("v-data-table",{attrs:{headers:t.statisticHeaders,items:t.statisticKVED,"sort-by":"percent","sort-desc":"","hide-default-footer":"","calculate-widths":""}})],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  Розподіл за регіонами\n                ")]),t._v(" "),r("v-data-table",{attrs:{headers:t.statisticHeaders,items:t.statisticRegion,"sort-by":"percent","sort-desc":"","hide-default-footer":"","calculate-widths":""}})],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  Розподіл за статтю голови\n                ")]),t._v(" "),r("v-data-table",{attrs:{headers:t.statisticHeaders,items:t.statisticSex,"sort-by":"percent","sort-desc":"","hide-default-footer":"","calculate-widths":""}})],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  Розподіл за статтю кількістю членів\n                ")]),t._v(" "),r("v-data-table",{attrs:{headers:t.statisticHeaders,items:t.statisticNumber,"sort-by":"percent","sort-desc":"","hide-default-footer":"","calculate-widths":""}})],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-title",{staticClass:"display-1",attrs:{"primary-title":""}},[t._v("\n              Перелік відображених ОСББ\n            ")]),t._v(" "),r("v-card-text",[r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n                  ОСББ\n                  "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"fas fa-search",label:"Пошук","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-data-table",{attrs:{headers:t.headers,items:t.filteredOsbb,search:t.search},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.items;return[r("tbody",t._l(n,(function(e,i){return r("tr",{key:i},[r("td",[t._v(t._s(e.edrpou))]),t._v(" "),r("td",[t._v(t._s(t._f("name")(e)))]),t._v(" "),r("td",[t._v(t._s(e.status))]),t._v(" "),r("td",[t._v(t._s(e.number))]),t._v(" "),r("td",{staticStyle:{"white-space":"nowrap"}},[r("v-icon",[t._v(t._s(t._f("sex")(e.headSex)))]),t._v(" "+t._s(e.head))],1),t._v(" "),r("td",[t._v(t._s(t._f("address")(e)))])])})),0)]}}])})],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;M()(component,{VAvatar:L.a,VBtn:R.a,VCard:V.a,VCardText:j.a,VCardTitle:j.b,VContainer:F.a,VDataTable:D.a,VFlex:P.a,VIcon:H.a,VImg:J.a,VLayout:$.a,VSpacer:I.a,VTextField:G.a})}}]);