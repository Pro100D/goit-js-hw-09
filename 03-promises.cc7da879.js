!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var i=u("6JpON"),r={delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector("button")};function a(e,n){return new Promise((function(t,o){var u=Math.random()>.3;setTimeout((function(){u?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.submitBtn.addEventListener("click",(function(n){n.preventDefault();for(var t=Number(r.delayInput.value),o=Number(r.stepInput.value),u=r.amountInput.value,l=0;l<u;l+=1)a(1+l,t+l*o).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success(console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure(console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms")))}))}))}();
//# sourceMappingURL=03-promises.cc7da879.js.map
