"use strict";
(function(){
var T={
en:{title:"Animal Sudoku",back:"← Back to website",path:"Challenge",best:"Best on this device",err:"Failed to load puzzles. Please refresh.",undoTrial:"Back to trial ",confirmTrial:"Confirm latest trial",lang:"文A"},
zh:{title:"动物数独",back:"← 返回个人网站",path:"挑战",best:"本机最佳",err:"题库加载失败，请刷新页面。",undoTrial:"退回试探 ",confirmTrial:"确认最新试探",lang:"EN"}
};
var L={
en:{"btn-sound":"Sound","btn-path-home":"Home","btn-home":"Home","btn-win-home":"Home","btn-undo":"Undo","btn-hint":"Hint (+10 s)","btn-erase":"Erase","btn-trial":"Trial colour","btn-notes":"Candidate notes","btn-next":"Next"},
zh:{"btn-sound":"声音","btn-path-home":"主页","btn-home":"主页","btn-win-home":"主页","btn-undo":"撤销","btn-hint":"提示(+10 秒)","btn-erase":"擦除","btn-trial":"试探颜色","btn-notes":"候选标记","btn-next":"下一关"}
};
var lang=localStorage.getItem("lang")==="zh"?"zh":"en";
function $(id){return document.getElementById(id);}
function t(k){return T[lang][k];}
var menu=$("menu");
var h=document.createElement("h1");
h.style.cssText="text-align:center;margin:8px 0;font-size:1.4rem";
menu.insertBefore(h,$("levels"));
var back=document.createElement("a");
back.href="../";
back.style.cssText="display:block;text-align:center;margin:20px 0;color:inherit;opacity:.7";
menu.appendChild(back);
var lb=document.createElement("button");
lb.id="btn-lang";
lb.className="round";
lb.style.fontSize="0.9rem";
$("menu-bar").appendChild(lb);
function fix(){
var p=$("path-title");
if(p){var m=p.textContent.match(/^(\d+×\d+) (?:挑战|Challenge)$/);if(m){var s=m[1]+" "+t("path");if(p.textContent!==s)p.textContent=s;}}
var w=$("win-best");
if(w){var m2=w.textContent.match(/^(?:本机最佳|Best on this device) (.+)$/);if(m2){var s2=t("best")+" "+m2[1];if(w.textContent!==s2)w.textContent=s2;}}
var l=$("levels");
if(l&&/^(题库加载失败|Failed to load puzzles)/.test(l.textContent)&&l.textContent!==t("err"))l.textContent=t("err");
var tb=$("trial-bar");
if(tb){Array.prototype.forEach.call(tb.children,function(b,i){var a=b.getAttribute("aria-label")||"";var want=null;if(/^(退回试探|Back to trial)/.test(a))want=t("undoTrial")+(i+1);else if(/^(确认最新试探|Confirm latest)/.test(a))want=t("confirmTrial");if(want&&a!==want)b.setAttribute("aria-label",want);});}
}
function apply(){
document.documentElement.lang=lang==="zh"?"zh-CN":"en";
document.title=t("title");
h.textContent=t("title");
back.textContent=t("back");
lb.textContent=t("lang");
lb.setAttribute("aria-label",lang==="zh"?"Switch to English":"切换到中文");
Object.keys(L[lang]).forEach(function(id){var e=$(id);if(e)e.setAttribute("aria-label",L[lang][id]);});
fix();
}
lb.addEventListener("click",function(){lang=lang==="zh"?"en":"zh";localStorage.setItem("lang",lang);apply();});
var obs=new MutationObserver(fix);
["path-title","win-best","levels","trial-bar"].forEach(function(id){var e=$(id);if(e)obs.observe(e,{childList:true,subtree:true,characterData:true});});
apply();
})();
