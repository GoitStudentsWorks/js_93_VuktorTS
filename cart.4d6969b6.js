!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}function n(t,e){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t}var o,i,r,a,s,c,l,u,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},p={},h={},f=d.parcelRequired7c6;null==f&&((f=function(t){if(t in p)return p[t].exports;if(t in h){var e=h[t];delete h[t];var n={id:t,exports:{}};return p[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){h[t]=e},d.parcelRequired7c6=f);var m=f.register;m("iE7OH",function(e,n){t(e.exports,"register",function(){return o},function(t){return o=t});var o,i=new Map;o=function(t,e){for(var n=0;n<e.length-1;n+=2)i.set(e[n],{baseUrl:t,path:e[n+1]})}}),m("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return o},function(t){return o=t});var o,i={};o=function(t){var e=i[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[t]=e),e}}),m("i8Q71",function(e,n){t(e.exports,"amountProductsInCart",function(){return r});var o=f("hFvf7"),i=f("1AOzd");function r(){let t=(0,o.loadFromLocalStorage)(i.CART_KEY)??[];document.getElementById("cart-counter").textContent=`(${t.length})`}(0,o.removeFromLocalStorage)(i.PRODUCTS_KEY),r()}),m("hFvf7",function(e,n){t(e.exports,"saveToLocalStorage",function(){return o}),t(e.exports,"loadFromLocalStorage",function(){return i}),t(e.exports,"removeFromLocalStorage",function(){return r}),t(e.exports,"saveUniqueElements",function(){return a});let o=(t,e)=>{try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},i=t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},r=t=>{try{localStorage.removeItem(t)}catch(t){console.error("Get state error: ",t.message)}},a=(t,e=[])=>{let n=i(t)??[];n.length>0&&e.length>0?o(t,[...new Map([...e,...n].map(t=>[t._id,t])).values()]):n.length>0&&0===e.length?o(t,n):o(t,e)}}),m("1AOzd",function(e,n){t(e.exports,"FILTER_KEY",function(){return o}),t(e.exports,"PRODUCTS_KEY",function(){return i}),t(e.exports,"CART_KEY",function(){return r}),t(e.exports,"CATEGORY_KEY",function(){return a});let o="filter",i="products",r="cart",a="categories"}),m("9X4zL",function(n,o){t(n.exports,"createCartMarkup",function(){return l}),t(n.exports,"createCardsMarkup",function(){return u}),t(n.exports,"createModalMarkup",function(){return d}),t(n.exports,"createPopularProductsMarkup",function(){return p}),t(n.exports,"createDiscountProductsMarkup",function(){return h});var i=f("hFvf7"),r=f("1AOzd"),a=f("ggT7j"),s=f("a5kaH"),c=f("ecma8");function l(t){return 0!==t.length?t.map(({img:t,name:n,category:o,size:i,price:r,_id:s})=>`
            <li class="products-item" id="${s}">
            <div class="cart-product-img-container">
              <img
                src="${t}"
                alt="${n}"
              />
            </div>
            <div class="product-info">
            <div class="cart-product-name-container">
              <h3 class="cart-product-name">${n}</h3>
              <button type="button" id="${s}" aria-label="delete-item" data-id="${s}" class="cart-delete-btn">
              <svg class="icon-delete-product">
                <use href="${e(a)}#icon-close"></use>
              </svg>
            </button>
            </div>
              <ul class="product-info-list">
                <li class="product-info-item">
                  <p class="cart-category-text">
                    Category:
                    <span class="cart-category-name">${o}</span>
                  </p>
                </li>
                <li class="product-info-item">
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${i}</span>
                  </p>
                </li>
              </ul>
              <p class="cart-product-price">$${r}</p>
            </div>            
          </li>
            `).join(""):`
          <div class="cart-empty-product">
            <img
              src="${e(c)}"
              alt="empty"
              class="cart-epmpty-img"
            />
            <p class="cart-empty-title">
              Your basket is <span class=cart-empty-accent> empty...</span>
            </p>
            <p class="cart-empty-text">
              Go to the main page to select your favorite products and add them to the cart.
            </p>
          </div>`}function u(t){return t.map(({img:t,name:n,category:o,size:s,popularity:c,price:l,_id:u})=>{let d=(0,i.loadFromLocalStorage)(r.CART_KEY),p="",h=!0;return d&&d.some(t=>t._id===u)?p=`<svg class="cart_svg" width="18" height="18"><use href="${e(a)}#icon-check"></use></svg>`:(p=`<svg class="cart_svg" width="18" height="18"><use href="${e(a)}#icon-shopping-cart"></use></svg>`,h=!1),`
            <li class="card" id="${u}">
            <div class="bg_img">
              <img src="${t}" class="img_card" alt="${n}" />
            </div>
            <div class="text_wrapped">
              <h2 class="text_name_prod">${n}</h2>
              <div class="wrapper_info">
                <p class="text_title">Category:</p>
                <span class="text_subtitle">${o}</span>
                <p class="text_title">Size:</p>
                <span class="text_subtitle">${s}</span><br/>
                <p class="text_title">Popularity:</p>
                <span class="text_subtitle">${c}</span>
              </div>
            </div>
            <div class="wrapper_price">
              <span class="text_price">$${l}</span>
              <button type="button" id="${u}" aria-label="add-item" data-id="${u}" data-is-added=${h} class="products-cart-btn js-btn">
                ${p}
              </button>
            </div>
          </li>
            `}).join("")}function d({img:t,name:n,category:o,size:s,popularity:c,price:l,desc:u,_id:d}){let p=(0,i.loadFromLocalStorage)(r.CART_KEY),h=!0,f="Add to";return p&&p.some(t=>t._id===d)?f="Remove from":(f="Add to",h=!1),`
            
              <div class="modal" data-modal-id = "${d}">
                <button type="button" id="${d}" aria-label="close-modal" class="modal-close-btn" data-modal-close>
                  <svg class="modal-close-icon">
                    <use href="${e(a)}#icon-close"></use>
                  </svg>
                </button>
                <div class="modal-content">
                  <div class="modal-main-row">
                    <div class="modal-image-bg">
                      <img src="${t}" alt="${n}" class="modal-image" />
                    </div>
                    <div class="modal-description-wrapper">
                      <div class="modal-list-wrapper">
                        <h3 class="modal-product-name">${n}</h3>
                        <ul class="modal-list">
                          <li class="modal-list-item">
                            <p>Category: <span class="modal-span">${o}</span></p>
                          </li>
                          <li class="modal-list-item">
                            <p>Size: <span class="modal-span">${s}</span></p>
                          </li>
                          <li class="modal-list-item">
                            <p>Popularity: <span class="modal-span">${c}</span></p>
                          </li>
                        </ul>
                      </div>
                      <p class="modal-text">
                        ${u}
                      </p>
                    </div>
                  </div>
                  <div class="modal-bottom-row">
                    <h3 class="modal-price">$${l}</h3>
                    <button type="button" id="${d}" aria-label="add-modal" class="modal-btn js-btn" data-is-added=${h} data-id="${d}">
                      ${f}
                     <svg class="cart_svg" width="18" height="18"><use href="${e(a)}#icon-shopping-cart"></use></svg>
                    </button>
                  </div>
                </div>
              
            `}function p(t){return t.map(({img:t,name:n,category:o,size:s,popularity:c,_id:l})=>{let u=(0,i.loadFromLocalStorage)(r.CART_KEY),d="",p="add-to-basket",h=!0;return u&&u.some(t=>t._id===l)?(d=`<svg class="popular-basket" width="18" height="18"><use href="${e(a)}#icon-check"></use></svg>`,p+=" add"):(d=`<svg class="popular-basket" width="18" height="18"><use href="${e(a)}#icon-shopping-cart"></use></svg>`,h=!1),`
            <li class="popular-item" id = "${l}"><div class="product-card">
            <div class="popular-product-icon"><img src="${t}" alt="${n}"></div>
            
            <div class="product-details">
                <p class="popular-name">${n}</p>
            <p class="popular-text">Category: <span class="popular-span popular-category">${o}</span></p>
            <div class="row">
            <p class="popular-text">Size: <span class="popular-span popular-size">${s}</span></p>
            <p class="popular-text">Popularity: <span class="popular-span popular-size">${c}</span></p>
        </div>
            </div>
            <button class="${p} js-btn" id="${l}" aria-label="popular-add-item" data-is-added=${h} data-id="${l}">${d}</button>
          </div></li>
            `}).join("")}function h(t){return t.map(({img:t,name:n,_id:o,price:c})=>{let l=(0,i.loadFromLocalStorage)(r.CART_KEY),u="",d=!0;return l&&l.some(t=>t._id===o)?u=`<svg class="cart_svg" width="18" height="18"><use href="${e(a)}#icon-check"></use></svg>`:(u=`<svg class="cart_svg" width="18" height="18"><use href="${e(a)}#icon-shopping-cart"></use></svg>`,d=!1),`
            <li class="discount-item" id = "${o}">
            <div class="discount-image-bg">
              <img src="${t}" alt="${n}" class="discount-image" />
            </div>
            <div class="discount-info">
              <h3 class="discount-name">${n}</h3>
              <div class="discount-price-btn-wrapper">
                <p class="discount-price">${c}</p>
                <button type="button" id="${o}" aria-label="discount-add-item" class="button discount-btn js-btn" data-is-added=${d} data-id="${o}">
                  ${u}
                </button>
              </div>
            </div>
            <img
              src="${e(s)}"
              alt="discount sticker"
              class="discount-sticker"
            />
          </li>
            `}).join("")}}),m("ggT7j",function(t,e){t.exports=f("aNJCr").getBundleURL("86U9d")+"icons.7d2de116.svg"}),m("a5kaH",function(t,e){t.exports=f("aNJCr").getBundleURL("86U9d")+"discount.bf9ea60d.png"}),m("ecma8",function(t,e){t.exports=f("aNJCr").getBundleURL("86U9d")+"yellow-shopping-basket.69e8f8e3.png"}),f("iE7OH").register(f("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.4d6969b6.js","410VS","icons.7d2de116.svg","1NlXG","discount.bf9ea60d.png","bmIuT","yellow-shopping-basket.69e8f8e3.png"]'));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var v=function(t,e){return(v=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},y=function(){return(y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function g(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a}var b=new WeakMap;function _(){if(void 0!==a)return a;var t=!1;try{var e=function(){},n=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return t=!0,!0}});window.addEventListener("testPassive",e,n),window.removeEventListener("testPassive",e,n)}catch(t){}return a=!!t&&{passive:!1}}function x(t){var e=b.get(t)||[];return b.set(t,e),function(t,n,o){function i(t){t.defaultPrevented||o(t)}n.split(/\s+/g).forEach(function(n){e.push({elem:t,eventName:n,handler:i}),t.addEventListener(n,i,_())})}}function w(t){var e=t.touches?t.touches[t.touches.length-1]:t;return{x:e.clientX,y:e.clientY}}function E(t,e){return void 0===e&&(e=[]),e.some(function(e){return t===e})}var T=["webkit","moz","ms","o"],S=RegExp("^-(?!(?:"+T.join("|")+")-)");function A(t,e){var n,o;o={},Object.keys(n=e).forEach(function(t){if(!S.test(t)){o[t]=n[t];return}var e=n[t];o[t=t.replace(/^-/,"")]=e,T.forEach(function(n){o["-"+n+"-"+t]=e})}),Object.keys(e=o).forEach(function(n){var o=n.replace(/^-/,"").replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});t.style[o]=e[n]})}var M=function(){function t(t){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=w(t)}return t.prototype.update=function(t){var e=this.velocity,n=this.updateTime,o=this.lastPosition,i=Date.now(),r=w(t),a={x:-(r.x-o.x),y:-(r.y-o.y)},s=i-n||16.7,c=a.x/s*16.7,l=a.y/s*16.7;e.x=c*this.velocityMultiplier,e.y=l*this.velocityMultiplier,this.delta=a,this.updateTime=i,this.lastPosition=r},t}(),P=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?y({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?y({},t.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(t){var e=1-t,n={x:0,y:0},o=this.getVelocity();return Object.keys(o).forEach(function(t){for(var i=10>=Math.abs(o[t])?0:o[t];0!==i;)n[t]+=i,i=i*e|0}),n},t.prototype.track=function(t){var e=this;return Array.from(t.targetTouches).forEach(function(t){e._add(t)}),this._touchList},t.prototype.update=function(t){var e=this,n=t.touches,o=t.changedTouches;return Array.from(n).forEach(function(t){e._renew(t)}),this._setActiveID(o),this._touchList},t.prototype.release=function(t){var e=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach(function(t){e._delete(t)})},t.prototype._add=function(t){this._has(t)&&this._delete(t);var e=new M(t);this._touchList[t.identifier]=e},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();function $(t,e,n){return Math.max(e,Math.min(n,t))}function k(t,e,n){void 0===e&&(e=0);var o,i=-1/0;return function(){for(var r=this,a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];if(n){var c=Date.now(),l=c-i;i=c,l>=e&&t.apply(this,a)}clearTimeout(o),o=setTimeout(function(){t.apply(r,a)},e)}}function O(t,e){return void 0===t&&(t=-1/0),void 0===e&&(e=1/0),function(n,o){var i="_"+o;Object.defineProperty(n,o,{get:function(){return this[i]},set:function(n){Object.defineProperty(this,i,{value:$(n,t,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function L(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(t){Object.defineProperty(this,n,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function C(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,n,o){var i=o.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:k.apply(void 0,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var o=Array(t),i=0,e=0;e<n;e++)for(var r=arguments[e],a=0,s=r.length;a<s;a++,i++)o[i]=r[a];return o}([i],t))}),this[n]}}}}var z=function(){function t(t){var e=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach(function(n){e[n]=t[n]})}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),g([O(0,1)],t.prototype,"damping",void 0),g([O(0,1/0)],t.prototype,"thumbMinSize",void 0),g([L],t.prototype,"renderByPixels",void 0),g([L],t.prototype,"alwaysShowTracks",void 0),g([L],t.prototype,"continuousScrolling",void 0),t}();(o=s||(s={})).X="x",o.Y="y";var R=function(){function t(t,e){void 0===e&&(e=0),this._direction=t,this._minSize=e,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,e,n){this.realSize=Math.min(e/n,1)*e,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/n*(e+(this.realSize-this.displaySize)),A(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case s.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case s.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),D=function(){function t(t,e){void 0===e&&(e=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new R(t,e),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,e,n){A(this.element,{display:n<=e?"none":"block"}),this.thumb.update(t,e,n)},t}(),H=function(){function t(t){this._scrollbar=t;var e=t.options.thumbMinSize;this.xAxis=new D(s.X,e),this.yAxis=new D(s.Y,e),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,e=t.size,n=t.offset;this.xAxis.update(n.x,e.container.width,e.content.width),this.yAxis.update(n.y,e.container.height,e.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},g([C(300)],t.prototype,"autoHideOnIdle",null),t}(),F=new WeakMap;function N(t){return Math.pow(t-1,3)+1}var j=function(){function t(t,e){var n=this.constructor;this.scrollbar=t,this.name=n.pluginName,this.options=y(y({},n.defaultOptions),e)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,e){return y({},t)},t.pluginName="",t.defaultOptions={},t}(),I={order:new Set,constructors:{}};function Y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.forEach(function(t){var e=t.pluginName;if(!e)throw TypeError("plugin name is required");I.order.add(e),I.constructors[e]=t})}var U={},B={};function X(t){var e=x(t),n=t.containerEl;e(n,"keydown",function(e){var o=document.activeElement;if(!(o!==n&&!n.contains(o)||("INPUT"===o.tagName||"SELECT"===o.tagName||"TEXTAREA"===o.tagName||o.isContentEditable)&&!o.disabled)){var i=function(t,e){var n=t.size,o=t.limit,i=t.offset;switch(e){case c.TAB:return void requestAnimationFrame(function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,offsetLeft:t.size.container.width/2,onlyScrollIfNeeded:!0})});case c.SPACE:return[0,200];case c.PAGE_UP:return[0,-n.container.height+40];case c.PAGE_DOWN:return[0,n.container.height-40];case c.END:return[0,o.y-i.y];case c.HOME:return[0,-i.y];case c.LEFT:return[-40,0];case c.UP:return[0,-40];case c.RIGHT:return[40,0];case c.DOWN:return[0,40];default:return null}}(t,e.keyCode||e.which);if(i){var r=i[0],a=i[1];t.addTransformableMomentum(r,a,e,function(n){n?e.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())})}}})}t(B,"keyboardHandler",function(){return X}),(i=c||(c={}))[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN";var q={};function K(t){var e,n,o,i,r,a=x(t),s=t.containerEl,c=t.track,u=c.xAxis,d=c.yAxis;function p(e,n){var o=t.size,i=t.limit,r=t.offset;return e===l.X?$(n/(o.container.width+(u.thumb.realSize-u.thumb.displaySize))*o.content.width,0,i.x)-r.x:e===l.Y?$(n/(o.container.height+(d.thumb.realSize-d.thumb.displaySize))*o.content.height,0,i.y)-r.y:0}function h(t){return E(t,[u.element,u.thumb.element])?l.X:E(t,[d.element,d.thumb.element])?l.Y:void 0}a(s,"click",function(e){if(!n&&E(e.target,[u.element,d.element])){var o=e.target,i=h(o),r=o.getBoundingClientRect(),a=w(e);if(i===l.X){var s=a.x-r.left-u.thumb.displaySize/2;t.setMomentum(p(i,s),0)}if(i===l.Y){var s=a.y-r.top-d.thumb.displaySize/2;t.setMomentum(0,p(i,s))}}}),a(s,"mousedown",function(n){if(E(n.target,[u.thumb.element,d.thumb.element])){e=!0;var a=n.target,c=w(n),l=a.getBoundingClientRect();i=h(a),o={x:c.x-l.left,y:c.y-l.top},r=s.getBoundingClientRect(),A(t.containerEl,{"-user-select":"none"})}}),a(window,"mousemove",function(a){if(e){n=!0;var s=w(a);if(i===l.X){var c=s.x-o.x-r.left;t.setMomentum(p(i,c),0)}if(i===l.Y){var c=s.y-o.y-r.top;t.setMomentum(0,p(i,c))}}}),a(window,"mouseup blur",function(){e=n=!1,A(t.containerEl,{"-user-select":""})})}t(q,"mouseHandler",function(){return K}),(r=l||(l={}))[r.X=0]="X",r[r.Y=1]="Y";var G={};function W(t){x(t)(window,"resize",k(t.update.bind(t),300))}t(G,"resizeHandler",function(){return W});var V={};function J(t){var e,n=x(t),o=t.containerEl,i=t.contentEl,r=!1,a=!1;n(window,"mousemove",function(n){var o,i,a,s,c,l,u,d,p;r&&(cancelAnimationFrame(e),function n(o){var i=o.x,r=o.y;if(i||r){var a=t.offset,s=t.limit;t.setMomentum($(a.x+i,0,s.x)-a.x,$(a.y+r,0,s.y)-a.y),e=requestAnimationFrame(function(){n({x:i,y:r})})}}((i=(o=t.bounding).top,a=o.right,s=o.bottom,c=o.left,u=(l=w(n)).x,d=l.y,p={x:0,y:0},0===u&&0===d||(u>a-20?p.x=u-a+20:u<c+20&&(p.x=u-c-20),d>s-20?p.y=d-s+20:d<i+20&&(p.y=d-i-20),p.x*=2,p.y*=2),p)))}),n(i,"contextmenu",function(){a=!0,cancelAnimationFrame(e),r=!1}),n(i,"mousedown",function(){a=!1}),n(i,"selectstart",function(){a||(cancelAnimationFrame(e),r=!0)}),n(window,"mouseup blur",function(){cancelAnimationFrame(e),r=!1,a=!1}),n(o,"scroll",function(t){t.preventDefault(),o.scrollTop=o.scrollLeft=0})}t(V,"selectHandler",function(){return J});var Q={};function Z(t){var e,n=t.options.delegateTo||t.containerEl,o=new P,i=x(t),r=0;i(n,"touchstart",function(n){o.track(n),t.setMomentum(0,0),0===r&&(e=t.options.damping,t.options.damping=Math.max(e,.5)),r++}),i(n,"touchmove",function(e){if(!u||u===t){o.update(e);var n=o.getDelta(),i=n.x,r=n.y;t.addTransformableMomentum(i,r,e,function(n){n&&e.cancelable&&(e.preventDefault(),u=t)})}}),i(n,"touchcancel touchend",function(n){var i=o.getEasingDistance(e);t.addTransformableMomentum(i.x,i.y,n),0==--r&&(t.options.damping=e),o.release(n),u=null})}t(Q,"touchHandler",function(){return Z});var tt={};function te(t){x(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",function(e){var n=function(t){if("deltaX"in t){var e=to[t.deltaMode]||1;return{x:t.deltaX/tn.STANDARD*e,y:t.deltaY/tn.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/tn.OTHERS,y:t.wheelDeltaY/tn.OTHERS}:{x:0,y:t.wheelDelta/tn.OTHERS}}(e),o=n.x,i=n.y;t.addTransformableMomentum(o,i,e,function(t){t&&e.preventDefault()})})}t(tt,"wheelHandler",function(){return te});var tn={STANDARD:1,OTHERS:-3},to=[1,28,500];n(U,B),n(U,q),n(U,G),n(U,V),n(U,Q),n(U,tt);var ti=new Map,tr=function(){function t(t,e){var n,o,i=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new z(e),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),A(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach(function(t){r.appendChild(t)}),t.appendChild(r),this.track=new H(this),this.size=this.getSize(),this._plugins=(n=this,o=this.options.plugins,Array.from(I.order).filter(function(t){return!1!==o[t]}).map(function(t){var e=new I.constructors[t](n,o[t]);return o[t]=e.options,e}));var a=t.scrollLeft,s=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(a,s,{withoutCallbacks:!0});var c=window.ResizeObserver;"function"==typeof c&&(this._observer=new c(function(){i.update()}),this._observer.observe(r)),ti.set(t,this),requestAnimationFrame(function(){i._init()})}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var e=ti.get(t);if(e)return e;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){var t,e,n,o,i,r;return t=this.containerEl,e=this.contentEl,n=getComputedStyle(t),i=(o=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(t){return n[t]?parseFloat(n[t]):0}))[0]+o[1],r=o[2]+o[3],{container:{width:t.clientWidth,height:t.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth+r,height:e.offsetHeight-e.clientHeight+e.scrollHeight+i}}},t.prototype.update=function(){var t,e,n,o;e={x:Math.max((t=this.getSize()).content.width-t.container.width,0),y:Math.max(t.content.height-t.container.height,0)},o={top:Math.max((n=this.containerEl.getBoundingClientRect()).top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)},this.size=t,this.limit=e,this.bounding=o,this.track.update(),this.setPosition(),this._plugins.forEach(function(t){t.onUpdate()})},t.prototype.isVisible=function(t){var e,n,o,i,r;return e=this.bounding,n=t.getBoundingClientRect(),o=Math.max(e.top,n.top),i=Math.max(e.left,n.left),r=Math.min(e.right,n.right),o<Math.min(e.bottom,n.bottom)&&i<r},t.prototype.setPosition=function(t,e,n){var o,i,r,a,s,c,l,u=this;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n={});var d=(o=t,i=e,r=this.options,a=this.offset,s=this.limit,c=this.track,l=this.contentEl,(r.renderByPixels&&(o=Math.round(o),i=Math.round(i)),o=$(o,0,s.x),i=$(i,0,s.y),o!==a.x&&c.xAxis.show(),i!==a.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),o===a.x&&i===a.y)?null:(a.x=o,a.y=i,A(l,{"-transform":"translate3d("+-o+"px, "+-i+"px, 0)"}),c.update(),{offset:y({},a),limit:y({},s)}));d&&!n.withoutCallbacks&&this._listeners.forEach(function(t){t.call(u,d)})},t.prototype.scrollTo=function(t,e,n,o){var i,r,a,s,c,l,u,d,p,h,f,m,v,y,g,b,_;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n=0),void 0===o&&(o={}),i=this,r=t,a=e,void 0===(s=n)&&(s=0),d=void 0===(u=(l=void 0===(c=o)?{}:c).easing)?N:u,p=l.callback,h=i.options,f=i.offset,m=i.limit,h.renderByPixels&&(r=Math.round(r),a=Math.round(a)),v=f.x,y=f.y,g=$(r,0,m.x)-v,b=$(a,0,m.y)-y,_=Date.now(),cancelAnimationFrame(F.get(i)),function t(){var e=Date.now()-_,n=s?d(Math.min(e/s,1)):1;if(i.setPosition(v+g*n,y+b*n),e>=s)"function"==typeof p&&p.call(i);else{var o=requestAnimationFrame(t);F.set(i,o)}}()},t.prototype.scrollIntoView=function(t,e){void 0===e&&(e={}),function(t,e,n){var o=void 0===n?{}:n,i=o.alignToTop,r=o.onlyScrollIfNeeded,a=o.offsetTop,s=o.offsetLeft,c=o.offsetBottom,l=t.containerEl,u=t.bounding,d=t.offset,p=t.limit;if(e&&l.contains(e)){var h=e.getBoundingClientRect();if(!(void 0!==r&&r&&t.isVisible(e))){var f=void 0===i||i?h.top-u.top-(void 0===a?0:a):h.bottom-u.bottom+(void 0===c?0:c);t.setMomentum(h.left-u.left-(void 0===s?0:s),$(f,-d.y,p.y-d.y))}}}(this,t,e)},t.prototype.addListener=function(t){if("function"!=typeof t)throw TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,e,n,o){this._updateDebounced();var i=this._plugins.reduce(function(t,e){return e.transformDelta(t,n)||t},{x:t,y:e}),r=!this._shouldPropagateMomentum(i.x,i.y);r&&this.addMomentum(i.x,i.y),o&&o.call(this,r)},t.prototype.addMomentum=function(t,e){this.setMomentum(this._momentum.x+t,this._momentum.y+e)},t.prototype.setMomentum=function(t,e){0===this.limit.x&&(t=0),0===this.limit.y&&(e=0),this.options.renderByPixels&&(t=Math.round(t),e=Math.round(e)),this._momentum.x=t,this._momentum.y=e},t.prototype.updatePluginOptions=function(t,e){this._plugins.forEach(function(n){n.name===t&&Object.assign(n.options,e)})},t.prototype.destroy=function(){var t,e=this.containerEl,n=this.contentEl;(t=b.get(this))&&(t.forEach(function(t){var e=t.elem,n=t.eventName,o=t.handler;e.removeEventListener(n,o,_())}),b.delete(this)),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),ti.delete(this.containerEl);for(var o=Array.from(n.childNodes);e.firstChild;)e.removeChild(e.firstChild);o.forEach(function(t){e.appendChild(t)}),A(e,{overflow:""}),e.scrollTop=this.scrollTop,e.scrollLeft=this.scrollLeft,this._plugins.forEach(function(t){t.onDestroy()}),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(U).forEach(function(e){U[e](t)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);var n=this.options,o=this.offset,i=this.limit;if(!n.continuousScrolling)return!1;0===i.x&&0===i.y&&this._updateDebounced();var r=$(t+o.x,0,i.x),a=$(e+o.y,0,i.y);return r===o.x&&a===o.y&&(o.x===i.x||0===o.x||o.y===i.y||0===o.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var e=this._nextTick("x"),n=this._nextTick("y");t.x=e.momentum,t.y=n.momentum,this.setPosition(e.position,n.position)}var o=y({},this._momentum);this._plugins.forEach(function(t){t.onRender(o)}),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var e=this.options,n=this.offset,o=this._momentum,i=n[t],r=o[t];if(.1>=Math.abs(r))return{momentum:0,position:i+r};var a=r*(1-e.damping);return e.renderByPixels&&(a|=0),{momentum:a,position:i+r-a}},g([C(100,!0)],t.prototype,"_updateDebounced",null),t}(),ta="smooth-scrollbar-style",ts=!1;function tc(){if(!ts&&"undefined"!=typeof window){var t=document.createElement("style");t.id=ta,t.textContent="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",document.head&&document.head.appendChild(t),ts=!0}}var tl=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return!function(t,e){function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.init=function(t,e){if(!t||1!==t.nodeType)throw TypeError("expect element to be DOM Element, but got "+t);return(tc(),ti.has(t))?ti.get(t):new tr(t,e)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return ti.has(t)},e.get=function(t){return ti.get(t)},e.getAll=function(){return Array.from(ti.values())},e.destroy=function(t){var e=ti.get(t);e&&e.destroy()},e.destroyAll=function(){ti.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Y.apply(void 0,t)},e.attachStyle=function(){return tc()},e.detachStyle=function(){return function(){if(ts&&"undefined"!=typeof window){var t=document.getElementById(ta);t&&t.parentNode&&(t.parentNode.removeChild(t),ts=!1)}}()},e.version="8.8.4",e.ScrollbarPlugin=j,e}(tr),tu=f("i8Q71"),td=f("hFvf7"),tp=f("1AOzd"),th=f("9X4zL");let tf=document.querySelector(".products-list"),tm=document.querySelector(".delete-btn-all"),tv=document.querySelector(".sum-total-product"),ty=document.querySelector(".amount-product-in-cart"),tg=document.querySelector(".product-cart");function tb(){let t=(0,td.loadFromLocalStorage)(tp.CART_KEY)??[];if(0===t.length){tg.innerHTML=(0,th.createCartMarkup)(t);return}let e=(0,th.createCartMarkup)(t);tf.innerHTML=e,tf.addEventListener("click",tx)}function t_(){!function(){var t;let e=(t=(0,td.loadFromLocalStorage)(tp.CART_KEY)??[])?t.reduce((t,e)=>t+=e.price,0).toFixed(2):0;tv.innerHTML=e}(),(0,tu.amountProductsInCart)(),function(){let t=(0,td.loadFromLocalStorage)(tp.CART_KEY)??[];ty.innerHTML=t.length}()}function tx(t){if(!t.target.closest(".cart-delete-btn"))return;let e=t.target.closest("button").dataset.id,n=(0,td.loadFromLocalStorage)(tp.CART_KEY).filter(({_id:t})=>t!==e);console.log("findProduct: ",n),(0,td.saveToLocalStorage)(tp.CART_KEY,n),0===n.length&&(t_(),tb()),t.target.closest("li").remove(),t_()}tm.addEventListener("click",function(t){(0,td.removeFromLocalStorage)(tp.CART_KEY),t_(),tb()}),tb(),t_(),new tl.init(document.querySelector("#my-scrollbar"))}();
//# sourceMappingURL=cart.4d6969b6.js.map
