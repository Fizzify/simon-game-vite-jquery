const p=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function f(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=f(e);fetch(e.href,o)}};p();var m=["red","blue","green","yellow"],s=[],n=[],i=!1,a=0;$(".btn").click(function(){var t=$(this).attr("id");n.push(t),d(t),v(t),y(n.length-1)});$(document).keypress(function(){i||($("#app-level").text("Level "+a),c(),i=!0)});function d(t){var r=new Audio("/assets/sounds/"+t+".mp3");r.play()}function c(){n=[],a++,$("#app-level").text("Level "+a);var t=Math.floor(Math.random()*4),r=m[t];s.push(r),$("#"+r).fadeIn(200).fadeOut(200).fadeIn(200),d(r)}function v(t){$("#"+t).addClass("pressed"),setInterval(()=>{$("#"+t).removeClass("pressed")},200)}function y(t){if(s[t]===n[t])console.log("correct"),n.length===s.length&&setTimeout(function(){c()},1e3);else{h(),$("#app-level").text("Game Over, Press Any Key to Restart"),$("body").addClass("game-over"),setTimeout(function(){$("body").removeClass("game-over")},200);var r=new Audio("/assets/sounds/wrong.mp3");r.play()}}function h(){i=!1,a=0,s=[]}
