(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},"4vM/":function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){return'<div class="chart-container">  \r\n        <div class="chart-inner-container">\r\n            <div class="hide-chart-container" is-hidden>\r\n        <h2 class="chart-title hide-chart">Hide Chart</h2>\r\n            <button class="pointer-button hide-chart-btn">\r\n                <svg class="icon-arrow-up-svg">\r\n                    <use href="./images/symbol-defs.svg#icon-arrow-up"></use>\r\n                </svg>\r\n            </button>\r\n        </div>\r\n        <div class="chart-canvas">\r\n            <canvas id="myChart"></canvas>\r\n            </div>\r\n        </div>\r\n    </div>'},useData:!0})},BEPG:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,i){return'<li class="list_item">\r\n    <p class="list_item_name">'+e.escapeExpression(e.lambda(t,t))+'</p> <button class="close"> <svg class="svg">\r\n            <use href="./images/symbol-defs.svg#icon-close"></use>\r\n        </svg> </button>\r\n</li>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=s(n,"each").call(null!=t?t:e.nullContext||{},null!=t?s(t,"favPos"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?o:""},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("0HMw"),n("JBxO"),n("FdtR"),n("wcNg"),n("RtS0"),n("WB5j"),n("D/wG"),n("3dw1");function r(e,t,n,r,i,o,s){try{var a=e[o](s),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,i)}var i="https://api.openweathermap.org/data/2.5/",o="48bbbb719c2c5b12dc6d3c6ec2e60cd2",s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function c(e){return fetch(i+"forecast?"+e+"&appid="+o+"&cnt=40&units=metric").then((function(e){return e.json()})).catch((function(e){localStorage.setItem("currentPos",JSON.stringify({city:"Kiev"})),console.log(e)}))}function u(e){var t="";return e.getHours()<10?t+="0"+e.getHours():t+=""+e.getHours(),t+=":",e.getMinutes()<10?t+="0"+e.getMinutes():t+=""+e.getMinutes(),t}var d={getWeatherApi:function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,d,h,m,g,p,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.city,r=t.latitude,d=t.longitude,h="",h=n?"q="+n:"lat="+r+"&lon="+d,m={everyDay:[],eachDayEveryThreeHours:[]},e.next=6,c(h);case 6:return g=e.sent,e.next=9,y=g.city.coord.lat,b=g.city.coord.lon,fetch(i+"onecall?lat="+y+"&lon="+b+"&exclude=minutely,hourly&appid="+o+"&units=metric").then((function(e){return e.json()})).catch((function(e){localStorage.setItem("currentPos",JSON.stringify({city:"Kiev"})),console.log(e)}));case 9:return p=e.sent,m.cityName=g.city.name,m.countryName=g.city.country,m.currentWeatherIcon=p.current.weather[0].icon,m.currentDayOfWeek=s[new Date(1e3*p.current.dt).getDay()].slice(0,3),m.currentMonth=l[new Date(1e3*p.current.dt).getMonth()],m.currentTemp=Math.round(p.current.temp),m.currentMinTemp=Math.round(p.daily[0].temp.min),m.currentMaxTemp=Math.round(p.daily[0].temp.max),m.currentSunRise=u(new Date(1e3*p.current.sunrise)),m.currentSunSet=u(new Date(1e3*p.current.sunset)),p.daily.forEach((function(e,t){m.everyDay.push({elementIndex:t,dayOfWeek:s[new Date(1e3*e.dt).getDay()],day:new Date(1e3*e.dt).getDate(),month:a[new Date(1e3*e.dt).getMonth()],year:new Date(1e3*e.dt).getFullYear(),dayAvarageTemp:Math.round((e.temp.max+e.temp.min)/2),dayMinTemp:Math.round(e.temp.min),dayMaxTemp:Math.round(e.temp.max),dayWeatherIcon:e.weather[0].icon,humidity:e.humidity,pressure:e.pressure,windSpeed:Math.round(10*e.wind_speed)/10})})),m.everyDay=m.everyDay.slice(0,5),f=(new Date).getDate(),g.list.forEach((function(e){new Date(e.dt_txt).getDate()===f&&(m.eachDayEveryThreeHours.push([]),f++)})),f=(new Date).getDate(),v=0,g.list.forEach((function(e){new Date(e.dt_txt).getDate()===f?m.eachDayEveryThreeHours[v].push({time:u(new Date(e.dt_txt)),weatherIcon:e.weather[0].icon,temp:Math.round(e.main.temp),pressure:e.main.pressure,humidity:e.main.humidity,windSpeed:Math.round(10*e.wind.speed)/10}):(v++,m.eachDayEveryThreeHours[v].push({time:u(new Date(e.dt_txt)),weatherIcon:e.weather[0].icon,temp:Math.round(e.main.temp),pressure:e.main.pressure,humidity:e.main.humidity,windSpeed:Math.round(10*e.wind.speed)/10}),f++)})),m.eachDayEveryThreeHours=m.eachDayEveryThreeHours.slice(0,5),e.abrupt("return",m);case 29:case"end":return e.stop()}var y,b}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,l,"next",e)}function l(e){r(s,i,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()};function h(e,t,n,r,i,o,s){try{var a=e[o](s),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,i)}var m={},g={getWeather:function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.city){e.next=19;break}if(e.prev=1,!(JSON.parse(localStorage.getItem(t.city)).location===t.city&&JSON.parse(localStorage.getItem(t.city)).createTime+6e5>new Date&&new Date(JSON.parse(localStorage.getItem(t.city)).createTime).getDay()===(new Date).getDay())){e.next=7;break}return console.log("Берет данные из LocalStorage"),e.abrupt("return",JSON.parse(localStorage.getItem(t.city)).object);case 7:return e.next=9,d.getWeatherApi(t).then((function(e){m.location=t.city,m.createTime=Date.now(),m.object=e,localStorage.setItem(t.city,JSON.stringify(m)),console.log("Берет данные из Fetch запроса")}));case 9:return e.abrupt("return",m.object);case 10:e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,d.getWeatherApi(t).then((function(e){m.location=t.city,m.createTime=Date.now(),m.object=e,localStorage.setItem(t.city,JSON.stringify(m)),console.log("Берет данные из Fetch запроса")})).catch((function(e){console.log(e)}));case 16:return e.abrupt("return",m.object);case 17:e.next=35;break;case 19:if(e.prev=19,!(JSON.parse(localStorage.getItem(t.latitude+"+"+t.longitude)).location===t.latitude+"+"+t.longitude&&JSON.parse(localStorage.getItem(t.latitude+"+"+t.longitude)).createTime+3e5>new Date&&new Date(JSON.parse(localStorage.getItem(t.latitude+"+"+t.longitude)).createTime).getDay()===(new Date).getDay())){e.next=25;break}return console.log("Берет данные из LocalStorage"),e.abrupt("return",JSON.parse(localStorage.getItem(t.latitude+"+"+t.longitude)).object);case 25:return e.next=27,d.getWeatherApi(t).then((function(e){m.location=t.latitude+"+"+t.longitude,m.createTime=Date.now(),m.object=e,localStorage.setItem(t.latitude+"+"+t.longitude,JSON.stringify(m)),console.log("Берет данные из Fetch запроса")}));case 27:return e.abrupt("return",m.object);case 28:e.next=35;break;case 30:return e.prev=30,e.t1=e.catch(19),e.next=34,d.getWeatherApi(t).then((function(e){m.location=t.latitude+"+"+t.longitude,m.createTime=Date.now(),m.object=e,localStorage.setItem(t.latitude+"+"+t.longitude,JSON.stringify(m)),console.log("Берет данные из Fetch запроса")})).catch((function(e){console.log(e)}));case 34:return e.abrupt("return",m.object);case 35:case"end":return e.stop()}}),e,null,[[1,12],[19,30]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){h(o,r,i,s,a,"next",e)}function a(e){h(o,r,i,s,a,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}()};n("IvQZ"),n("uQK7"),n("Xlt+"),n("Muwe"),n("4NM0"),n("y89P"),n("SgDD"),n("8cZI"),n("aZFp");var p={getBackgroundApi:function(e){try{return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+e.split(" ").join("-").toLowerCase()+"&page=1&per_page=200&key=21145461-ec858c83a87163ad119fff078").then((function(e){return e.json()})).then((function(e){return e.hits})).then((function(t){var n=[];return t.forEach((function(t){t.tags.split(", ").includes(e.toLowerCase())&&t.tags.split(", ").includes("city")&&n.push(t.largeImageURL)})),n[Math.round(Math.random()*(n.length-1))]})).catch((function(e){return console.log(e)}))}catch(e){return!1}}},f=function(e){document.querySelector("body").style.backgroundImage="linear-gradient(0.56deg, #000000 -13.48%, rgba(0, 0, 0, 0) 78.75%), url("+e+")"},v=function(){try{p.getBackgroundApi(JSON.parse(localStorage.getItem("currentPos")).city).then((function(e){f(e||"https://images.wallpaperscraft.ru/image/nebo_oblaka_goluboj_108523_3840x2400.jpg")})).catch((function(e){return console.log(e)}))}catch(e){f("https://images.wallpaperscraft.ru/image/nebo_oblaka_goluboj_108523_3840x2400.jpg")}};v();var y=v,b=n("BEPG"),S=n.n(b),x={box1:document.querySelector("#conBox"),weBox:document.querySelector(".weatherBox"),positionBtn:document.querySelector(".positionBtn")};var w={renderFirstPart:function(){x.weBox.style.flexDirection="column-reverse",x.box1.classList.remove("contentBox"),x.positionBtn.classList.remove("positionBtn"),g.getWeather(JSON.parse(localStorage.getItem("currentPos"))).then((function(e){x.box1.innerHTML='\n            <div class="firstPart">\n                <svg class="firstPart-icon" width="35" height="35">\n                     <use href="./images/symbol-defs.svg#'+e.currentWeatherIcon+'"></use>\n                 </svg>\n                <h1 class="firstPart-location">'+e.cityName+","+e.countryName+'</h1>\n                <div class="firstPart-temperature">\n                    <h2 class="firstPart-temperature-main">'+e.currentTemp+'</h2>\n                    <div class="firstPart-temperature-box">\n                        <div class="firstPart-temperature-box1">\n                            <p class="firstPart-temperature-min">min</p>\n                            <p class="firstPart-temperature-minnumb">'+e.currentMinTemp+'&deg;</p>\n                        </div>\n                        <div class="firstPart-temperature-box2">\n                            <p class="firstPart-temperature-max">max</p>\n                            <p class="firstPart-temperature-maxnumb">'+e.currentMaxTemp+"&deg;</p>\n                        </div>\n                    </div>\n                </div>\n            </div>"})).catch((function(e){alert("Неправильный ввод"),localStorage.setItem("currentPos",JSON.stringify({city:"Kiev"})),console.log(e)}))}};var P={fetchQuote:function(){return fetch("https://favqs.com/api/qotd").then((function(e){return e.json()})).then((function(e){return e.quote})).catch((function(e){console.log(e)}))}};var E,D={renderQuote:function(){P.fetchQuote().then((function(e){document.querySelector(".additionalInfo").insertAdjacentHTML("beforeend","<div class='quoteBox'> \n        <svg class='quoteIcon'>\n        <use href=\"./images/symbol-defs.svg#icon-quote-icon\"></use>\n        </svg>\n    <p class='quote'>"+e.body+"</p>\n    <p class='quoteAuthor'>"+e.author+"</p>\n    </div>")}))}},T=document.querySelector(".additionalInfo"),k=document.querySelector('[data-action="fiveDays"]'),I=document.querySelector('[data-action="today"]'),B=function e(){L(),q(),y(),T.innerHTML="",w.renderFirstPart(),D.renderQuote(),I.removeEventListener("click",e),k.addEventListener("click",M)},M=function e(){clearInterval(E),y(),I.addEventListener("click",B),k.removeEventListener("click",e)};function L(){g.getWeather(JSON.parse(localStorage.getItem("currentPos"))).then((function(e){console.log(e),function(e){T.innerHTML='<div class="secondPartBox">\n    <h2 class="secondPartBox-date">'+e.everyDay[0].day+"<sup>th</sup> "+e.currentDayOfWeek+'</h2>\n    <div class=\'secondPartBox-combi\'>\n    <div class="secondPartBox-dateBox">\n    <p class="secondPartBox-dateBox-month">'+e.currentMonth+'</p>\n    <p class="secondPartBox-dateBox-time"></p>\n    </div>\n    <div class="secondPartBox-sun">\n    <p class="secondPartBox-sun-sunrise"><svg class="secondPartBox-sun-icon" width="20" height="20">    \n    <use href="./images/symbol-defs.svg#icon-sunrise"></use>\n    </svg>'+e.currentSunRise+'</p>\n    <p class="secondPartBox-sun-sunset"><svg class="secondPartBox-sun-icon" width="20" height="20">\n    <use href="./images/symbol-defs.svg#icon-sunset"></use>\n    </svg>'+e.currentSunSet+"</p>\n    </div>\n    </div>"}(e)})).catch((function(e){localStorage.setItem("currentPos",JSON.stringify({city:"Kiev"})),console.log(e)}))}function q(){E=setInterval((function(){document.querySelector(".secondPartBox-dateBox-time").innerHTML=(new Date).toLocaleTimeString()}),500)}k.addEventListener("click",M),q();var H={getFetch:L};function O(){w.renderFirstPart(),H.getFetch(),y(),setTimeout((function(){D.renderQuote()}),200)}null===JSON.parse(localStorage.getItem("currentPos"))&&localStorage.setItem("currentPos",JSON.stringify({city:"Kiev"}));var N,C={inputForm:document.querySelector(".inputForm"),locBtn:document.querySelector(".locationBtn"),input:document.querySelector(".search-box"),checkbox:document.querySelector(".star")},F=JSON.parse(localStorage.getItem("favPos"));var W=[];if(document.querySelector(".city_list").addEventListener("click",(function(e){var t=[],n=e.target;for(;n&&"BUTTON"!=n.tagName;)(n=n.parentNode)===this&&(n=null);n&&(this.removeChild(n.parentNode),t.push(n.parentNode.textContent.replace(/\s+/g," ").trim()),W.splice(W.indexOf(t[0]),1),localStorage.setItem("favPos",JSON.stringify({favPos:W})),0===W.length&&(document.querySelector(".favBtn").style.display="none"));e.target&&(localStorage.setItem("currentPos",JSON.stringify({city:e.target.textContent})),O())})),0===W.length&&(document.querySelector(".favBtn").style.display="none"),W.includes(N)){var J=document.querySelector(".star").checked=!0;console.log(J),console.log(W)}document.addEventListener("DOMContentLoaded",(function(){null!==F&&(W=F.favPos,document.querySelector(".city_list").insertAdjacentHTML("beforeend",S()(F))),0===W.length?document.querySelector(".favBtn").style.display="none":document.querySelector(".favBtn").style.display="block",O()})),C.input.addEventListener("change",(function(e){if(W.includes(e.currentTarget.value))document.querySelector(".star").checked=!0;N=e.currentTarget.value,localStorage.setItem("currentPos",JSON.stringify({city:N})),setTimeout((function(){O()}),100)})),C.locBtn.addEventListener("click",(function(e){navigator.geolocation.getCurrentPosition((function(e){localStorage.setItem("currentPos",JSON.stringify({latitude:e.coords.latitude,longitude:e.coords.longitude}))})),setTimeout((function(){O()}),100),console.log("location-fetch")})),C.checkbox.addEventListener("click",(function(e){W.includes(N)?alert("Этот город добавлен в избранное!"):void 0===N||" "===N?alert("Вы ничего не ввели!"):(W.push(N),localStorage.setItem("favPos",JSON.stringify({favPos:W})),document.querySelector(".city_list").insertAdjacentHTML("beforeend",'<li class="list_item">\n    <p class="list_item_name">'+N+'</p> <button class="close"> <svg class="svg">\n            <use href="./images/symbol-defs.svg#icon-close"></use></svg> </button></li>'),document.querySelector(".favBtn").style.display="block")})),C.inputForm.addEventListener("submit",(function(e){e.preventDefault()}));var A=n("vLI7"),j=n.n(A),X=n("bkpq"),_=n.n(X),R=function(){function e(t){var n=this;if(this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach((function(e){n[e]=n[e].bind(n)})),this.init()}e.mergeSettings=function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},n=e;for(var r in n)t[r]=n[r];return t},e.webkitOrNot=function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"};var t=e.prototype;return t.attachEvents=function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))},t.detachEvents=function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)},t.init=function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)},t.buildSliderFrame=function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var n=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var i=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));n.appendChild(i)}for(var o=0;o<this.innerElements.length;o++){var s=this.buildSliderFrameItem(this.innerElements[o]);n.appendChild(s)}if(this.config.loop)for(var a=0;a<this.perPage;a++){var l=this.buildSliderFrameItem(this.innerElements[a].cloneNode(!0));n.appendChild(l)}this.sliderFrame.appendChild(n),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()},t.buildSliderFrameItem=function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t},t.resolveSlidesNumber=function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"==typeof this.config.perPage)for(var e in this.perPage=1,this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])},t.prev=function(e,t){if(void 0===e&&(e=1),!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;if(this.config.loop)if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,i=r+this.perPage,o=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage),s=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(o+s)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e;else this.currentSlide=Math.max(this.currentSlide-e,0);n!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}},t.next=function(e,t){if(void 0===e&&(e=1),!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;if(this.config.loop)if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,i=r+this.perPage,o=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage),s=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(o+s)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e;else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);n!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}},t.disableTransition=function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing},t.enableTransition=function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing},t.goTo=function(e,t){if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}},t.slideToCurrent=function(e){var t=this,n=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*n*(this.selectorWidth/this.perPage);e?requestAnimationFrame((function(){requestAnimationFrame((function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"}))})):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"},t.updateAfterDrag=function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),n=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-n<0,i=e<0&&this.currentSlide+n>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent(r||i)},t.resizeHandler=function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()},t.clearDrag=function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}},t.touchstartHandler=function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)},t.touchendHandler=function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()},t.touchmoveHandler=function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),n=this.drag.endX-this.drag.startX,r=this.config.rtl?t+n:t-n;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*r+"px, 0, 0)"}},t.mousedownHandler=function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)},t.mouseupHandler=function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()},t.mousemoveHandler=function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),n=this.drag.endX-this.drag.startX,r=this.config.rtl?t+n:t-n;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*r+"px, 0, 0)"}},t.mouseleaveHandler=function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())},t.clickHandler=function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1},t.remove=function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var n=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(n||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)},t.insert=function(e,t,n){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),n&&n.call(this)},t.prepend=function(e,t){this.insert(e,0),t&&t.call(this)},t.append=function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)},t.destroy=function(e,t){if(void 0===e&&(e=!1),this.detachEvents(),this.selector.style.cursor="auto",e){for(var n=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)n.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(n),this.selector.removeAttribute("style")}t&&t.call(this)},e}(),z={contentBox:document.querySelector("#conBox"),fiveDays:document.querySelector('[data-action="fiveDays"]'),scrollBtnR:document.querySelector('[data-action="right"]'),scrollBtnL:document.querySelector('[data-action="left"]'),weBox:document.querySelector(".weatherBox"),form:document.querySelector(".inputForm"),buttonBox:document.querySelector(".buttonBox"),positionBtn:document.querySelector(".positionBtn"),moreinfo:document.querySelector(".contentBox-cont-box-moreInfo"),contentBoxButton:document.querySelector(".contentBox-button")};function G(){}function Q(){console.log("The index of current slide is: "+this.currentSlide)}z.fiveDays.addEventListener("click",(function(){return g.getWeather(JSON.parse(localStorage.getItem("currentPos"))).then((function(e){!function(e){z.contentBox.classList.add("contentBox"),z.weBox.style.flexDirection="column",z.contentBox.innerHTML=j()(e.everyDay),document.querySelector(".contentBox-location").textContent=e.cityName+" "+e.countryName,z.buttonBox.classList.add("positionBtn"),document.querySelector(".additionalInfo").innerHTML="";var t=new R({onInit:G,onChange:Q});document.querySelector('[data-action="right"]').addEventListener("click",(function(){return t.prev()})),document.querySelector('[data-action="left"]').addEventListener("click",(function(){return t.next()})),document.querySelector(".forMoreInfo").style.display="none",document.querySelector(".contentBox-cont").addEventListener("click",(function(t){"BUTTON"===t.target.nodeName&&("none"===document.querySelector(".forMoreInfo").style.display?document.querySelector(".forMoreInfo").style.display="block":document.querySelector(".forMoreInfo").style.display="none",console.log(parseInt(t.target.dataset.set))),document.querySelector(".forMoreInfo").innerHTML=_()(e.eachDayEveryThreeHours[parseInt(t.target.dataset.set)])}))}(e)}))}));n("zOkR"),n("fp7Y"),n("+XsM");var Y,K=n("Y++z"),U=n("4vM/"),V=n.n(U),Z=document.querySelector(".additionalInfo"),$=document.querySelector('[data-action="fiveDays"]'),ee=[],te=[],ne=[],re=[],ie=[],oe=[],se=[],ae=[];function le(){Z.innerHTML='<div class="show-chart-container">\n        <h2 class="chart-title show-chart">Show Chart</h2>\n            <button class="pointer-button open-chart-btn">\n                <svg class="icon-arrow-down-svg">\n                    <use href="./images/symbol-defs.svg#icon-arrow-down"></use>\n                </svg>\n            </button>\n        </div>',document.querySelector(".show-chart-container").addEventListener("click",(function(){ee=[],te=[],ne=[],re=[],ie=[],oe=[],se=[],ae=[],g.getWeather(JSON.parse(localStorage.getItem("currentPos"))).then((function(e){return function(e){e.forEach((function(e){te.push(e.dayAvarageTemp),ee.push(e.humidity),ne.push(e.windSpeed),re.push(e.pressure),ie.push(e.month),oe.push(e.year),se.push(e.day)}));for(var t=0;t<5;t++)ae.push(ie[t]+" "+se[t]+", "+oe[t]);Z.innerHTML=V()(e),Y=document.querySelector("#myChart"),i=document.querySelector(".chart-canvas"),o=Number.parseInt(window.getComputedStyle(i).getPropertyValue("width")),K.a.defaults.font.size=14,K.a.defaults.color="rgba(255, 255, 255, 0.5)",K.a.defaults.borderColor="rgba(255, 255, 255, 0.2)",new K.a(Y,{type:"line",data:{labels:ae,datasets:[(n={label:o>=588>!1?"AVERAGE: ":"",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 255, 255, 0)"},n.backgroundColor="rgba(255, 255, 255, 0)",n),(r={label:" - Temperature, C°",data:te,backgroundColor:"rgba(255, 255, 255, 0.2)",borderColor:"#ff6b09"},r.backgroundColor="#ff6b09",r.borderWidth=2,r),{label:" - Humidity, %",data:ee,borderColor:"#0906eb",backgroundColor:"#0906eb",borderWidth:2},{label:" - Wind Speed, m/s",data:ne,borderColor:"#ea9a05",backgroundColor:"#ea9a05",borderWidth:2},{label:" - Atmosphere Pressure, m/m",data:re,borderColor:"#067806",backgroundColor:"#067806",borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},animations:{tension:{duration:2e3,easing:"easeInCubic",from:1,to:0,loop:!0}},scales:{y:{title:{display:!(o<588),text:"Value of Indicators",color:"rgba(255, 255, 255, 0.5)",font:{family:"Lato",size:12,weight:400},padding:o>=588>!1?{bottom:70}:{bottom:30}},stacked:!1,beginAtZero:!1,gridLines:{display:!0}},x:{ticks:{align:"start"},gridLines:{display:!1}}},plugins:{legend:{position:"top",align:o<588>!1?"start":"center",labels:{padding:15,boxWidth:10,boxHeight:10}},title:{display:!0,text:o>=588>!1?"":"AVERAGE:",color:"rgba(255, 255, 255, 0.5)",margin:{left:30},align:"start",font:{family:"Lato",weight:400}}}}}),document.querySelector(".hide-chart-container").addEventListener("click",ce);var n,r,i,o}(e.everyDay)})).catch((function(e){return console.log(e)}))}))}function ce(){le()}$.addEventListener("click",le)},bkpq:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,i){var o,s=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <div class="detals-column">\r\n        <p class="detals-column-time">'+c(typeof(o=null!=(o=u(n,"time")||(null!=t?u(t,"time"):t))?o:a)===l?o.call(s,{name:"time",hash:{},data:i,loc:{start:{line:4,column:38},end:{line:4,column:46}}}):o)+'</p>\r\n        <svg class="detals-column-icon" width="35" height="35">\r\n            <use href="./images/symbol-defs.svg#'+c(typeof(o=null!=(o=u(n,"weatherIcon")||(null!=t?u(t,"weatherIcon"):t))?o:a)===l?o.call(s,{name:"weatherIcon",hash:{},data:i,loc:{start:{line:6,column:48},end:{line:6,column:63}}}):o)+'"></use>\r\n        </svg>\r\n        <p class="detals-column-temperature">'+c(typeof(o=null!=(o=u(n,"temp")||(null!=t?u(t,"temp"):t))?o:a)===l?o.call(s,{name:"temp",hash:{},data:i,loc:{start:{line:8,column:45},end:{line:8,column:53}}}):o)+'&deg;</p>\r\n        <ul class="list">\r\n            <li class="list-item">\r\n                <svg class="list-item-icon" width="20" height="20">\r\n                    <use href="./images/symbol-defs.svg#icon-barometr"></use>\r\n                </svg>\r\n                <p class="list-item-number">'+c(typeof(o=null!=(o=u(n,"pressure")||(null!=t?u(t,"pressure"):t))?o:a)===l?o.call(s,{name:"pressure",hash:{},data:i,loc:{start:{line:14,column:44},end:{line:14,column:56}}}):o)+' mm</p>\r\n            </li>\r\n            <li class="list-item">\r\n                <svg class="list-item-icon" width="20" height="20">\r\n                    <use href="./images/symbol-defs.svg#icon-kaplya"></use>\r\n                </svg>\r\n                <p class="list-item-number">'+c(typeof(o=null!=(o=u(n,"humidity")||(null!=t?u(t,"humidity"):t))?o:a)===l?o.call(s,{name:"humidity",hash:{},data:i,loc:{start:{line:20,column:44},end:{line:20,column:56}}}):o)+'%</p>\r\n            </li>\r\n            <li class="list-item">\r\n                <svg class="list-item-icon" width="20" height="20">\r\n                    <use href="./images/symbol-defs.svg#icon-wind"></use>\r\n                </svg>\r\n                <p class="list-item-number">'+c(typeof(o=null!=(o=u(n,"windSpeed")||(null!=t?u(t,"windSpeed"):t))?o:a)===l?o.call(s,{name:"windSpeed",hash:{},data:i,loc:{start:{line:26,column:44},end:{line:26,column:57}}}):o)+" m/s</p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o;return'<div class="detals">\r\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:2,column:4},end:{line:30,column:13}}}))?o:"")+"</div>"},useData:!0})},vLI7:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,i){var o,s=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\r\n        <div class="contentBox-cont-box">\r\n            <h2 class="contentBox-cont-box-day">'+c(typeof(o=null!=(o=u(n,"dayOfWeek")||(null!=t?u(t,"dayOfWeek"):t))?o:a)===l?o.call(s,{name:"dayOfWeek",hash:{},data:i,loc:{start:{line:9,column:48},end:{line:9,column:61}}}):o)+'</h2>\r\n            <h3 class="contentBox-cont-box-date">'+c(typeof(o=null!=(o=u(n,"day")||(null!=t?u(t,"day"):t))?o:a)===l?o.call(s,{name:"day",hash:{},data:i,loc:{start:{line:10,column:49},end:{line:10,column:56}}}):o)+" "+c(typeof(o=null!=(o=u(n,"month")||(null!=t?u(t,"month"):t))?o:a)===l?o.call(s,{name:"month",hash:{},data:i,loc:{start:{line:10,column:57},end:{line:10,column:66}}}):o)+'</h3>\r\n            <svg class="contentBox-cont-box-icon" width="35" height="35">\r\n                <use href="./images/symbol-defs.svg#'+c(typeof(o=null!=(o=u(n,"dayWeatherIcon")||(null!=t?u(t,"dayWeatherIcon"):t))?o:a)===l?o.call(s,{name:"dayWeatherIcon",hash:{},data:i,loc:{start:{line:12,column:52},end:{line:12,column:70}}}):o)+'"></use>\r\n            </svg>\r\n            <div class="contentBox-cont-box-cont">\r\n                <div class="contentBox-cont-box-cont-box1">\r\n                    <p class="contentBox-cont-box-cont-min">min</p>\r\n                    <p class="contentBox-cont-box-cont-minnumb">'+c(typeof(o=null!=(o=u(n,"dayMinTemp")||(null!=t?u(t,"dayMinTemp"):t))?o:a)===l?o.call(s,{name:"dayMinTemp",hash:{},data:i,loc:{start:{line:17,column:64},end:{line:17,column:78}}}):o)+'&deg;</p>\r\n                </div>\r\n                <div class="contentBox-cont-box-cont-box2">\r\n                    <p class="contentBox-cont-box-cont-max">max</p>\r\n                    <p class="contentBox-cont-box-cont-maxnumb">'+c(typeof(o=null!=(o=u(n,"dayMaxTemp")||(null!=t?u(t,"dayMaxTemp"):t))?o:a)===l?o.call(s,{name:"dayMaxTemp",hash:{},data:i,loc:{start:{line:21,column:64},end:{line:21,column:78}}}):o)+'&deg;</p>\r\n                </div>\r\n            </div>\r\n            <button class="contentBox-cont-box-moreInfo" data-set=\''+c(typeof(o=null!=(o=u(n,"elementIndex")||(null!=t?u(t,"elementIndex"):t))?o:a)===l?o.call(s,{name:"elementIndex",hash:{},data:i,loc:{start:{line:24,column:67},end:{line:24,column:83}}}):o)+"'>more info</button>\r\n        </div>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o;return'<h1 class="contentBox-location"></h1>\r\n\r\n<div class="contentBox-cont">\r\n\r\n    <div class="siema">\r\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:6,column:8},end:{line:27,column:17}}}))?o:"")+'\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class="contentBox-button">\r\n    <button type="button" data-action="right" class="contentBox-button-arrow">\r\n        <svg width="20" height="20">\r\n            <use href="./images/symbol-defs.svg#icon-arrow-left"></use>\r\n        </svg>\r\n    </button>\r\n    <button type="button" data-action="left" class="contentBox-button-arrow">\r\n        <svg width="20" height="20">\r\n            <use href="./images/symbol-defs.svg#icon-arrow-right"></use>\r\n        </svg>\r\n    </button>\r\n</div>\r\n<div class="forMoreInfo"></div>'},useData:!0})},zOkR:function(e,t){var n=document.querySelector(".favBtn"),r=document.querySelector(".city_list");n.addEventListener("click",(function(){r.scrollTo(1e3,0)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9c255c04ca78425b7bee.js.map