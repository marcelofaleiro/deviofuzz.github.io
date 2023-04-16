!function(){"use strict";var e,t=void 0;e=()=>{const e="search-results",{nonce:n,restUrl:r,strings:o}=window.liveSearchData;document.querySelectorAll(".o-live-search").forEach((e=>{const o=e.querySelector("input.wp-block-search__input");if(!o)return;const u=e.querySelector("form"),h=e.querySelector(".wp-block-search__inside-wrapper"),g=getComputedStyle(o),m=o.parentElement?getComputedStyle(o.parentElement):null;o.value="";const v=document.createElement("div");v.classList.add("container-wrap"),v.style.width=o.offsetWidth+"px",v.style.borderRadius=g.borderRadius,v.style.backgroundColor=g.backgroundColor;const w=document.documentElement.scrollHeight-(o.getBoundingClientRect().bottom+window.scrollY);let f,E=w;300<w?v.style.top=`calc( ${g.height} + ${m?.paddingTop} + ${m?.paddingBottom} + ${m?.borderBottomWidth} )`:(v.style.bottom=`calc( ${g.height} + ${m?.paddingTop} + ${m?.paddingBottom} + ${m?.borderBottomWidth} )`,E=o.getBoundingClientRect().top+window.scrollY),v.style.maxHeight=Math.min(500,E-20)+"px";const{postTypes:y}=e.dataset,C=y?JSON.parse(y):[];o.setAttribute("autocomplete","off");const H=function(e){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];clearTimeout(n),n=setTimeout((()=>{e.apply(t,i)}),r)}}((e=>{c(f),(async(e,t)=>{const o={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","x-wp-nonce":n}},i=t.reduce(((e,t)=>e+`&post_type[]=${t}`),`s=${e}`),l=0<window.liveSearchData.permalinkStructure.length?"?":"&";return(await fetch(`${r}${l}${i}`,o).catch((e=>(console.error(e.message),e)))).json()})(e,C).then((t=>{if(a(h),!t.success)return console.error(t.message),void(f=l(h,f,!1));const{results:n}=t;s(e,h,n,o)}))}),300);u?.addEventListener("keypress",(e=>{if("Enter"===e.key&&f){const t=f.querySelector(".highlight > a");if(!t)return;e.preventDefault(),window.location=t?.href}})),o.addEventListener("input",(e=>{const t=e.target?.value;0!==t.length?(h?.querySelector(".container-wrap")||(f=i(v,f,h,g)),H(t)):f=l(h,f,!1)})),o.addEventListener("focusin",(()=>{0!==o.value.length&&(f=i(v,f,h,g),f&&!f.querySelector(".search-results > :not(.spinner-container):not(.no-results)")&&H(o.value))})),o.addEventListener("keydown",(e=>{if(!f||!f.parentElement)return;const t=e,n=f.parentElement.getBoundingClientRect();if(!["ArrowDown","ArrowUp","Escape"].includes(t.key))return;if("Escape"===t.key)return o.blur(),void(f=l(h,f));const r=f?.querySelector(".highlight");if(r){if("ArrowDown"===t.key&&r.nextElementSibling){p(r),d(r.nextElementSibling,o);const e=r.nextElementSibling.getBoundingClientRect();e.bottom>n.bottom&&f.parentElement.scrollBy(0,e.height)}else if("ArrowUp"===t.key&&r.previousElementSibling){p(r),d(r.previousElementSibling,o);const e=r.previousElementSibling.getBoundingClientRect();e.top<n.top&&f.parentElement.scrollBy(0,-e.height)}}else d(f.children[0],o)})),window.addEventListener("click",(e=>{null===e?.target?.closest(`#${o.id}`)&&(f=l(h,f))}))}));const i=(t,n,r,o)=>{if(t.innerHTML="",n&&!r?.querySelector(".search_results"))return t.appendChild(n),r?.appendChild(t),n;const i=document.createElement("div");return i.classList.add(e),i.setAttribute("role","list"),i.style.fontSize=`max( calc( ${o.fontSize} - 4px ), 14px )`,i.style.color=o.color,c(i),t.appendChild(i),r?.appendChild(t),i},l=function(t,n){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const o=t?.querySelector(".container-wrap");if(o){if(r){const n=t?.removeChild(o);return n?.querySelector(`.${e}`)}return t?.removeChild(o),null}},s=(t,n,r,i)=>{const l=n?.querySelector(`.${e}`);if(l){if(l.innerHTML="",0===r.length){const n=document.createElement("div");return n.classList.add(`${e}__row`,"no-results"),n.innerHTML=o.noResults+` "<b>${t}</b>"`,void l?.appendChild(n)}r.forEach(((e,t)=>{const n=u(e,t,i);n.addEventListener("mouseover",(()=>{const e=l.querySelector(".highlight");e&&p(e),d(n,i)})),l?.appendChild(n)}))}},c=t=>{if(!t||t.querySelector(".spinner-container"))return;const n=document.createElement("div");n.classList.add(`${e}__row`,"spinner-container"),n.innerHTML='<svg class="spinner" viewBox="0 0 100 100" width="16" height="16" xmlns="http://www.w3.org/2000/svg" focusable="false" style="width: calc(16px); height: calc(16px);"><circle cx="50" cy="50" r="50" vector-effect="non-scaling-stroke" class="main-circle"></circle><path d="m 50 0 a 50 50 0 0 1 50 50" vector-effect="non-scaling-stroke" class="moving-circle"></path></svg>',t.innerHTML="",t?.appendChild(n)},a=t=>{const n=t?.querySelector(`.${e}`);if(!n)return;const r=n.querySelector(".spinner-container");r&&n.removeChild(r)},d=(e,t)=>{const n=getComputedStyle(t).backgroundColor,[,,r]=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=e.substring(4,e.length-1).replace(/ /g,"").split(","),r=parseFloat(n[0])/255,o=parseFloat(n[1])/255,i=parseFloat(n[2])/255,l=Math.max(r,o,i),s=Math.min(r,o,i);let c,a,d=(l+s)/2;if(l===s)c=a=0;else{const e=l-s;switch(a=.5<d?e/(2-l-s):e/(l+s),l){case r:c=(o-i)/e+(o<i?6:0);break;case o:c=(i-r)/e+2;break;case i:c=(r-o)/e+4}c/=6}return t?[360*c,100*a,100*d]:`hsl( ${360*c}, ${100*a}, ${100*d} )`}(n),o=50>=r;e.classList.add("highlight"),e.style.backgroundColor=o?"rgba(255, 255, 255, 0.12)":"rgba(49, 50, 51, 0.12)"},p=e=>{e.classList.remove("highlight"),e.removeAttribute("style")},u=(t,n,r)=>{const i=document.createElement("div"),l=document.createElement("a");i.classList.add(`${e}__row`,`is-type-${t.type}`,`is-id-${t.id}`),i.setAttribute("role","option"),l.href=t.link;const s=document.createElement("div");s.classList.add(`${e}__row-left`),s.innerHTML=(e=>{switch(e){case"post":return'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V2C14.5 1.72386 14.2761 1.5 14 1.5ZM2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2C0 0.895431 0.895431 0 2 0ZM3 5H5V7H3V5ZM5 9H3V11H5V9ZM6 5H13V7H6V5ZM13 9H6V11H13V9Z" fill="#1E1E1E"/></svg>';case"page":return'<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.75H3V5.25H11V3.75Z" fill="#1E1E1E"/><path d="M3 7H11V8.5H3V7Z" fill="#1E1E1E"/><path d="M9 10.25H3V11.75H9V10.25Z" fill="#1E1E1E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H2C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.89543 16 2 16H12C13.1046 16 14 15.1046 14 14V2C14 0.895431 13.1046 0 12 0ZM2 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V14C12.5 14.2761 12.2761 14.5 12 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V2C1.5 1.72386 1.72386 1.5 2 1.5Z" fill="#1E1E1E"/></svg>';case"product":return'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3126 2.34369L13.6563 4.68737L11.3126 7.03106L8.96894 4.68737L11.3126 2.34369ZM4.96894 2.7412V6.05383H1.65631V2.7412H4.96894ZM13.2505 11.0228V14.3354H9.93789V11.0228H13.2505ZM4.96894 11.0228V14.3354H1.65631V11.0228H4.96894ZM11.3126 0L6.62526 4.67909L11.3126 9.36646L16 4.67909L11.3126 0ZM6.62526 1.08489H0V7.71014H6.62526V1.08489ZM14.9068 9.36646H8.28157V15.9917H14.9068V9.36646ZM6.62526 9.36646H0V15.9917H6.62526V9.36646Z" fill="#1E1E1E"/></svg>';default:return'<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5571 3.0619L8.93575 0.440539C8.65456 0.159344 8.27338 0 7.87659 0H1.49971C0.671744 0.00312439 0 0.674868 0 1.50283V14.5003C0 15.3283 0.671744 16 1.49971 16H10.4979C11.3259 16 11.9977 15.3283 11.9977 14.5003V4.12419C11.9977 3.7274 11.8383 3.3431 11.5571 3.0619ZM10.3761 4.00234H7.99844V1.62468L10.3761 4.00234ZM1.49971 14.5003V1.50283H6.49873V4.7522C6.49873 5.16774 6.83304 5.50205 7.24858 5.50205H10.4979V14.5003H1.49971Z" fill="#1E1E1E"/></svg>'}})(t.type);const c=document.createElement("div");c.classList.add(`${e}__row-right`);const a=document.createElement("p");a.classList.add("post-title"),a.setAttribute("title",t.title),a.innerText=0<t.title.length?t.title:o.noTitle,c.appendChild(a);const d=(e=>{const t=document.createElement("div");switch(e.type){case"post":t.innerHTML=`${e.date} / by ${e.author}${e.parent?" / "+e.parent:""}`;break;case"page":var n;t.innerHTML=null!==(n=e.parent)&&void 0!==n?n:"";break;case"product":var r;t.innerHTML=null!==(r=e.price)&&void 0!==r?r:"";break;default:return null}return t.classList.add("meta"),t})(t);if(d){const e=getComputedStyle(r).fontSize;d.style.fontSize=`max( calc( ${e} - 6px ), 12px )`,c.appendChild(d)}return l.appendChild(s),l.appendChild(c),i.appendChild(l),i}},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}();