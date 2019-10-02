(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(398)},220:function(e,t,a){},224:function(e,t){},226:function(e,t){},268:function(e,t){},269:function(e,t){},397:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(201),s=a.n(i),l=(a(219),a(220),a(31)),c=a(32),o=a(34),d=a(33),m=a(35),u=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedWines,a=e.changeView,n=e.onChangePrice,i=e.onChangeUpdateEventInfo,s=e.eventInfo,l=e.sheetIncludes,c=e.toggleSheetInfo;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"view-instructions"},r.a.createElement("h2",null,"Tasting Sheet Options"),r.a.createElement("p",null,"Below are the wines you selected for your tasting sheet. If these are incorrect, or in the wrong order, please click the back button, and adjust the list accordingly. The retail price per bottle is shown by default, but these prices can be changed to fit your audience."))),r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{className:"table selected-wines-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Wine"),r.a.createElement("th",{scope:"col"},"Rating(s)"),r.a.createElement("th",{scope:"col"},"Price (SRP)"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.ratings.map(function(e,t){return r.a.createElement("span",{key:t},e.value," - ",e.name," ")})),r.a.createElement("td",null,"$ ",r.a.createElement("input",{type:"number",placeholder:e.price,value:e.price,onChange:function(e){return n(e,t)}})))})))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h4",null,"Sheet Preferences"),r.a.createElement("p",null,"Select the items that you want to appear on your tasting sheet:"),r.a.createElement("div",{className:"sheetPreferences"},r.a.createElement("li",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"checkTastingNotes",onChange:function(){return c("notes")},checked:!0===l.notes}),r.a.createElement("label",{className:"form-check-label",htmlFor:"checkTastingNotes"},"Tasting Notes"))),r.a.createElement("li",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"checkRatings",onChange:function(){return c("ratings")},checked:!0===l.ratings}),r.a.createElement("label",{className:"form-check-label",htmlFor:"checkRatings"},"Ratings"))),r.a.createElement("li",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"checkPricing",onChange:function(){return c("price")},checked:!0===l.price}),r.a.createElement("label",{className:"form-check-label",htmlFor:"checkPricing"},"Pricing"))),r.a.createElement("li",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"checkImages",onChange:function(){return c("images")},checked:!0===l.images}),r.a.createElement("label",{className:"form-check-label",htmlFor:"checkImages"},"Label Images"))),r.a.createElement("li",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"checkWinery",onChange:function(){return c("info")},checked:!0===l.info}),r.a.createElement("label",{className:"form-check-label",htmlFor:"checkWinery"},"Winery Info"))))),r.a.createElement("div",{className:"col-8"},r.a.createElement("h4",null,"Event Information (optional)"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"eventName"},"Event Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"eventName","aria-describedby":"eventName",value:s.eventName,onChange:function(e){return i(e.target.value,"eventName")}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"eventDate"},"Event Date"),r.a.createElement("input",{type:"date",className:"form-control",id:"eventDate","aria-describedby":"eventDate",value:s.eventDate,onChange:function(e){return i(e.target.value,"eventDate")}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"eventTime"},"Event Time"),r.a.createElement("input",{type:"time",className:"form-control",id:"eventTime","aria-describedby":"eventTime",value:s.eventTime,onChange:function(e){return i(e.target.value,"eventTime")}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"eventVenue"},"Event Venue"),r.a.createElement("input",{type:"text",className:"form-control",id:"eventVenue","aria-describedby":"eventVenue",value:s.eventVenue,onChange:function(e){return i(e.target.value,"eventVenue")}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"eventPresenter"},"Presented By"),r.a.createElement("input",{type:"text",className:"form-control",id:"eventPresenter","aria-describedby":"eventPresenter",value:s.eventPresenter,onChange:function(e){return i(e.target.value,"eventPresenter")}}))))))),r.a.createElement("div",{className:"controls col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"button-large back-button",onClick:function(){return a("select-wines")}},"Back")),r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement("button",{className:"button-large next-button d-inline-block",onClick:function(){return a("sheet-preview")}},"Next")))))}}]),t}(n.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.wineList;return r.a.createElement("div",{className:"available-wines"},r.a.createElement("h3",null,"Dollarhide Wines"),r.a.createElement("ul",null,t.dollarhide&&t.dollarhide.map(function(t,a){return r.a.createElement("li",{key:a,onDragStart:function(a){return e.props.fireDragStart(a,t.category,t.id)},draggable:!0},r.a.createElement("div",null,r.a.createElement("span",null,t.title)))})),r.a.createElement("h3",null,"Estate Wines"),r.a.createElement("ul",null,t.estate&&t.estate.map(function(t,a){return r.a.createElement("li",{key:a,onDragStart:function(a){return e.props.fireDragStart(a,t.category,t.id)},draggable:!0},r.a.createElement("div",null,r.a.createElement("span",null,t.title)))})),r.a.createElement("h3",null,"Meritage Wines"),r.a.createElement("ul",null,t.meritage&&t.meritage.map(function(t,a){return r.a.createElement("li",{key:a,onDragStart:function(a){return e.props.fireDragStart(a,t.category,t.id,99)},draggable:!0},r.a.createElement("div",null,r.a.createElement("span",null,t.title)))})))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.allWines,a=e.selectedWines,n=e.onDragStart,i=e.addAllWines,s=e.removeAllWines,l=e.onDragOver,c=e.onDrop,o=e.dragReorderOver,d=e.dragReorder,m=e.removeFromList,u=e.changeView;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"view-instructions"},r.a.createElement("h1",{className:"page-title"},"Tasting Sheet Creator"),r.a.createElement("p",null,"Using the list below, drag and drop the wines you would like to appear in your tasting sheet. You can rearrange you list of selected wines by dragging and dropping them into your preferred order."))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("div",{className:"select-header d-flex justify-content-between"},r.a.createElement("h2",null,"Available Wines"),r.a.createElement("div",{className:"controls top text-right"},r.a.createElement("button",{className:"dark-gray-button d-inline-block",onClick:i},"Add All"))),r.a.createElement(h,{wineList:t,fireDragStart:n}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"selected-wrapper"},r.a.createElement("div",{className:"selected-header d-flex justify-content-between"},r.a.createElement("h2",null,"Selected Wines"),r.a.createElement("div",{className:"controls top text-right"},r.a.createElement("button",{className:"dark-gray-button d-inline-block",onClick:s},"Remove All"))),r.a.createElement("div",{className:"selectedWines",onDragOver:function(e){return l(e)},onDrop:function(e){c(e)}},0===a.length&&r.a.createElement("div",{className:"selected-instructions d-flex justify-content-center align-items-center h-100"},r.a.createElement("div",{className:"text text-center"},r.a.createElement("i",{className:"fa fa-plus-square"}),r.a.createElement("p",null,"Drag items from the left here"))),r.a.createElement("ul",null,a&&a.map(function(e,t){return r.a.createElement("li",{key:t,onDragOver:function(){return o(t)}},r.a.createElement("div",{draggable:!0,onDragStart:function(a){return d(a,t,e.id)}},r.a.createElement("button",{className:"remove",onClick:function(){return m(t,e.id,e.category)}},"Remove"),r.a.createElement("span",null,e.title)))}))))))),r.a.createElement("div",{className:"controls text-right col-12"},a.length>0&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-left"}),r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement("button",{className:"button-large next-button d-inline-block",onClick:function(){return u("sheet-preferences")}},"Next"))))))}}]),t}(n.Component),f=a(13),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this.props,t=e.selectedWines,a=e.eventInfo,n=e.sheetIncludes,i=e.changeView,s=r.a.createElement(f.a,null,r.a.createElement(f.e,{size:"A4",style:{padding:"10pt 10pt 50pt 10pt"},wrap:!0},r.a.createElement(f.g,{style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",alignContent:"stretch",textAlign:"center"}},r.a.createElement(f.b,{src:"img/st-supery-logo.png",style:{maxWidth:"200",height:"30",marginBottom:"20pt",marginTop:"10pt",flex:"0 1"}}),""!==a.eventName&&r.a.createElement(f.g,{style:{width:"100%",flex:"0 1",fontSize:"12pt"}},r.a.createElement(f.f,null,a.eventName,a.eventVenue?" - "+a.eventVenue:"")),""!==a.eventDate&&r.a.createElement(f.f,{style:{width:"100%",flex:"0 1",fontSize:"12pt"}},a.eventDate,""!==a.eventTime?", "+a.eventTime:""),""!==a.eventName&&r.a.createElement(f.f,{style:{width:"100%",flex:"0 1",fontSize:"12pt"}},"Presented by: ",a.eventPresenter),!0===n.info&&r.a.createElement(f.g,{style:{width:"100%",flex:"0 1",padding:"10pt 0"}},r.a.createElement(f.f,{style:{fontSize:14,textAlign:"left"}},"St. Sup\xe9ry Estate Vineyards & Winery is a sustainably farmed, estate winery in Napa Valley, California, with more than 500 acres of certified Napa Green vineyards. All of the grapes for St. Sup\xe9ry Estates' wine portfolio, including the highly regarded Napa Valley Estate Sauvignon Blanc and Dollarhide and Rutherford vineyard designate Cabernet Sauvignon, are grown in two estate vineyards."))),r.a.createElement(f.f,{style:{width:"100%",borderBottom:"1 solid #bdbdbd",marginBottom:10}}),r.a.createElement(f.g,null,t.map(function(e,t){return r.a.createElement(f.g,{key:t,style:{width:"100%"},wrap:!1},r.a.createElement(f.g,{style:{width:"100%",marginBottom:"10pt"}},r.a.createElement(f.f,{style:{fontSize:16}},e.title,n.price?" - $"+e.price:"")),r.a.createElement(f.g,{style:{width:"100%",display:"flex",flexDirection:"row"}},n.images&&r.a.createElement(f.b,{src:"img/wine-label.jpg",style:{height:97,flex:"1",alignSelf:"auto"}}),r.a.createElement(f.g,{style:{flex:"3",flexDirection:"column",alignItems:"stretch"}},n.notes&&r.a.createElement(f.g,{style:{fontSize:"14pt",padding:"0 0 0 10"}},r.a.createElement(f.f,{style:{fontWeight:"bold",marginBottom:"5pt"}},"Winemaker's Notes:"),r.a.createElement(f.f,null,e.notes)))),n.ratings&&r.a.createElement(f.g,{style:{margin:"10pt 0",display:"flex",flexDirection:"row",width:"100%",justifyContent:"flex-start",fontSize:"12pt"}},r.a.createElement(f.f,{style:{flex:1}},"Ratings:"),e.ratings.map(function(e,t){return r.a.createElement(f.f,{style:{flex:1},key:t},e.value," - ",e.name)})),r.a.createElement(f.f,{style:{width:"100%",borderBottom:"1 solid #bdbdbd",marginBottom:10}}))})),r.a.createElement(f.g,{style:{position:"absolute",bottom:10,left:0,right:0,fontSize:"12",textAlign:"center"},fixed:!0},r.a.createElement(f.f,null,"St. Sup\xe9ry Estate Vineyards & Winery"),r.a.createElement(f.f,null,"8440 St. Helena Highway \u2022 Rutherford, CA 94573 \u2022 www.stsupery.com"))));return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"view-instructions"},r.a.createElement("h2",null,"Tasting Sheet Preview"),r.a.createElement("p",null,"Below is a preview of your tasting sheet. If you need to make any changes, click the back button."),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"back-button button-large",onClick:function(){return i("sheet-preferences")}},"Back")))),r.a.createElement("div",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(f.c,{document:s,fileName:"somename.pdf"},function(e){e.blob,e.url;var t=e.loading;e.error;return t?"Loading document...":"Download now!"}),r.a.createElement(f.d,{width:"100%",height:"800px"},s)))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"DEMO FOOTER - WILL BE REPLACED WITH NORMAL SITE FOOTER WHEN DEPLOYED \xa92019 St. Sup\xe9ry Estate Vineyards & Winery"))))}}]),t}(n.Component),b=(a(397),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={allWines:{dollarhide:[{id:231,title:"2013 Dollarhide Estate Vineyard Cabernet Sauvignon",category:"dollarhide",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"},{id:232,title:"2016 Dollarhide Estate Vineyard Sauvignon Blanc",category:"dollarhide",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"},{id:233,title:"2014 Dollarhide Estate Vineyard Cabernet Sauvignon",category:"dollarhide",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"}],estate:[{id:234,title:"2016 Napa Valley Estate Sauvignon Blanc",category:"estate",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"},{id:235,title:"2015 Napa Valley Estate Moscato",category:"estate",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"},{id:236,title:"2014 Napa Valley Estate Cabernet Sauvignon",category:"estate",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"}],meritage:[{id:237,title:"2013 Napa Valley Estate \xc9lu",category:"meritage",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"},{id:238,title:"2016 Napa Valley Estate Virt\xfa",category:"meritage",notes:"This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",ratings:[{name:"Decanter",value:91},{name:"Parker's Wine Advocate",value:93}],price:100,image:"https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"}]},selectedWines:[],selectedIds:{},draggingNewItem:!1,currentView:"select-wines",eventInfo:{eventName:"",eventDate:"",eventTime:"",eventVenue:"",eventPresenter:""},sheetIncludes:{notes:!1,price:!1,images:!1,info:!1,ratings:!1}},a.onDragOver=function(e){e.preventDefault()},a.onDragStart=function(e,t,n,r){a.setState({draggingNewItem:!0}),e.dataTransfer.setData("category",t),e.dataTransfer.setData("id",n)},a.onDrop=function(e){var t=parseInt(e.dataTransfer.getData("id"));if(!a.state.selectedIds.hasOwnProperty(t)){var n=e.dataTransfer.getData("category").toLowerCase(),r=a.state.selectedWines.concat(a.state.allWines[n].filter(function(e){return e.id===t})),i=a.state.selectedIds,s=a.state.allWines;i[t]=t,s[n]=a.state.allWines[n].filter(function(e){return e.id!==t}),a.setState({allWines:s,selectedWines:r,draggingNewItem:!1})}},a.dragReorder=function(e,t,n){a.draggedItem=a.state.selectedWines[t],e.dataTransfer.setData("id",n),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",e.target)},a.dragReorderOver=function(e){var t=a.state.selectedWines[e];if(a.draggedItem!==t&&!0!==a.state.draggingNewItem){var n=a.state.selectedWines.filter(function(e){return e!==a.draggedItem});n.splice(e,0,a.draggedItem),a.setState({selectedWines:n})}},a.removeFromList=function(e,t,n){var r=n.toLowerCase(),i=a.state.selectedWines.filter(function(e){return e.id!==t}),s=a.state.allWines,l=a.state.selectedIds;delete l[t],s[r]=s[r].concat(a.state.selectedWines[e]),a.setState({selectedWines:i,allWines:s,selectedIds:l})},a.addAllWines=function(){var e=a.state.allWines;if(0!==Object.values(e).flat().length){for(var t={},n=a.state.selectedWines.concat(Object.values(e).flat()),r={},i=0;i<n.length;i++){var s=n[i].id;r[s]=s,t[n[i].category]||(t[n[i].category]=[])}a.setState({allWines:t,selectedWines:n,selectedIds:r})}},a.removeAllWines=function(){var e=a.state.selectedWines;if(0!==Object.values(e).length){for(var t=a.state.allWines,n=0;n<e.length;n++)t[e[n].category].push(e[n]);console.log(t),a.setState({allWines:t,selectedWines:[],selectedIds:{}})}},a.onChangePrice=function(e,t){var n=a.state.selectedWines;n[t].price=e.target.value,a.setState({selectedWines:n})},a.changeView=function(e){a.setState({currentView:e})},a.onChangeUpdateEventInfo=function(e,t){var n=a.state.eventInfo;n[t]=e,a.setState({eventInfo:n})},a.toggleSheetInfo=function(e){var t=a.state.sheetIncludes;t[e]=!t[e],a.setState({sheetIncludes:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"tsc"},r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("div",{className:"logo-wrap d-inline-block"},r.a.createElement("h1",null,"DEMO HEADER (will be replaced with site header)"))))),r.a.createElement("div",{className:"page-intro"})),r.a.createElement("div",{className:"main container"},"select-wines"===this.state.currentView&&r.a.createElement(g,{allWines:this.state.allWines,selectedWines:this.state.selectedWines,onDragStart:this.onDragStart,addAllWines:this.addAllWines,removeAllWines:this.removeAllWines,removeFromList:this.removeFromList,onDragOver:this.onDragOver,onDrop:this.onDrop,dragReorderOver:this.dragReorderOver,dragReorder:this.dragReorder,changeView:this.changeView}),"sheet-preferences"===this.state.currentView&&r.a.createElement(u,{selectedWines:this.state.selectedWines,changeView:this.changeView,eventInfo:this.state.eventInfo,onChangeUpdateEventInfo:this.onChangeUpdateEventInfo,onChangePrice:this.onChangePrice,toggleSheetInfo:this.toggleSheetInfo,sheetIncludes:this.state.sheetIncludes}),"sheet-preview"===this.state.currentView&&r.a.createElement(p,{selectedWines:this.state.selectedWines,eventInfo:this.state.eventInfo,sheetIncludes:this.state.sheetIncludes,changeView:this.changeView})),r.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.e47db3a6.chunk.js.map