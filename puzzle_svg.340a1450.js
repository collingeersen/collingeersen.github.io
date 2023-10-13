// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9COKA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "540083fb340a1450";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jZjhh":[function(require,module,exports) {
//Almost always extends from HTMLElements for general components
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class puzzleComp extends HTMLElement {
    constructor(){
        //Always invoke an empty super first
        super();
        //Attaches a shadow to the DOMFragment
        this.attachShadow({
            mode: "open"
        });
        //Attaches to the shadow root the innerHTML
        this.shadowRoot.append(puzzleComp.template.content.cloneNode(true));
    }
}
//Attaching through template so HTML is readily available for reuse on page 
puzzleComp.template = document.createElement("template");
//Use innerHTML to insert, add html within the backticks
puzzleComp.template.innerHTML = `
    <style>
    svg {
        width: 20dvh;
        height: 20dvh;
        filter: grayscale(0);
      }
    #piece-1,
    #piece-2,
    #piece-3,
    #piece-4{
        animation-duration: 10s;
        //animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: piece-animation;
        translate: 0 -150px;
    }
    
    #piece-1{
        animation-delay: 1.5s;
    }
    
    #piece-2{
        animation-delay: 1s;
    }
    
    #piece-3{
        animation-delay: 500ms;
    }
    
    @keyframes piece-animation {
        from{
            translate: 0 -150px;
        }
        30%{
            translate: 0;
        }
        80%{
            translate: 0;
        }
        to{
            translate: 0 -150px;
        }
    }

    </style>
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="puzzle" clip-path="url(#clip0_33_5)">
      <g id="sides">
        <path id="side-4" d="M125.5 125V75.5h24v74h-74v-24h50v-.5Z" fill="#122E1D" stroke="#000"/>
        <path id="side-3" d="M25 125.5h49.5v24H.5v-74h24v50h.5Z" fill="#300D0D" stroke="#000"/>
        <path id="side-2" d="M24.5 25v49.5H.5V.5h74v24h-50v.5Z" fill="#160D30" stroke="#000"/>
        <path id="side-1" d="M125 24.5H75.5V.5h74v74h-24v-50h-.5Z" fill="#5C4311" stroke="#000"/>
      </g>
      <g id="piece-1">
        <g id="puzzle-piece-1">
          <mask id="path-26-inside-4_33_5" fill="#fff">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M125 75V25H75v20.6976a2.7007 2.7007 0 0 1-.0517.0781c-.3646.53-.9471.9626-1.6652 1.2367-.718.2741-1.5354.3757-2.3366.2907-.7319-.0777-1.4165-.3077-1.9735-.6612C67.8944 45.0478 66.0696 44 64 44c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6c2.0696 0 3.8944-1.0478 4.973-2.6419.557-.3535 1.2416-.5835 1.9735-.6612.8012-.085 1.6186.0166 2.3366.2907.7181.2741 1.3006.7067 1.6652 1.2367.0178.0259.035.0519.0517.0781V75h20.6976a2.7007 2.7007 0 0 0 .0781-.0517c.53-.3646.9626-.9471 1.2367-1.6652.2741-.718.3757-1.5354.2907-2.3366-.0777-.7319-.3077-1.4165-.6612-1.9735C95.0478 67.8944 94 66.0696 94 64c0-3.3137 2.6863-6 6-6 3.314 0 6 2.6863 6 6 0 2.0696-1.048 3.8944-2.642 4.973-.353.557-.583 1.2416-.661 1.9735-.085.8012.017 1.6186.291 2.3366.274.7181.706 1.3006 1.236 1.6652.026.0178.052.035.078.0517H125Z"/>
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M125 75V25H75v20.6976a2.7007 2.7007 0 0 1-.0517.0781c-.3646.53-.9471.9626-1.6652 1.2367-.718.2741-1.5354.3757-2.3366.2907-.7319-.0777-1.4165-.3077-1.9735-.6612C67.8944 45.0478 66.0696 44 64 44c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6c2.0696 0 3.8944-1.0478 4.973-2.6419.557-.3535 1.2416-.5835 1.9735-.6612.8012-.085 1.6186.0166 2.3366.2907.7181.2741 1.3006.7067 1.6652 1.2367.0178.0259.035.0519.0517.0781V75h20.6976a2.7007 2.7007 0 0 0 .0781-.0517c.53-.3646.9626-.9471 1.2367-1.6652.2741-.718.3757-1.5354.2907-2.3366-.0777-.7319-.3077-1.4165-.6612-1.9735C95.0478 67.8944 94 66.0696 94 64c0-3.3137 2.6863-6 6-6 3.314 0 6 2.6863 6 6 0 2.0696-1.048 3.8944-2.642 4.973-.353.557-.583 1.2416-.661 1.9735-.085.8012.017 1.6186.291 2.3366.274.7181.706 1.3006 1.236 1.6652.026.0178.052.035.078.0517H125Z" fill="#300D0D"/>
          <path d="M125 25v-1h1v1h-1Zm0 50h1v1h-1v-1ZM75 25h-1v-1h1v1Zm0 20.6976h1v.2912l-.1563.2456L75 45.6976Zm-.0517.0781.8239.5667-.8239-.5667Zm-1.6652 1.2367.3566.9342-.3566-.9342Zm-2.3366.2907.1056-.9944-.1056.9944Zm-1.9735-.6612-.5358.8444-.1758-.1116-.1167-.1724.8283-.5604Zm0 6.7162-.8283-.5604.1167-.1724.1758-.1116.5358.8444Zm1.9735-.6612.1056.9944-.1056-.9944Zm4.0018 1.5274-.8239.5668.8239-.5668Zm.0517.0781.8437-.5369.1563.2457v.2912h-1ZM75 75v1h-1v-1h1Zm20.6976 0 .5368.8437-.2457.1563h-.2911v-1Zm.0781-.0517.5667.8239-.5667-.8239Zm1.2367-1.6652.9342.3566-.9342-.3566Zm.2907-2.3366.9944-.1056-.9944.1056Zm-.6612-1.9735.5604-.8283.1724.1167.1116.1758-.8444.5358Zm6.7161 0-.844-.5358.111-.1758.173-.1167.56.8283Zm-.661 1.9735.994.1056-.994-.1056Zm.291 2.3366-.935.3566.935-.3566Zm1.236 1.6652-.566.8239.566-.8239Zm.078.0517v1h-.291l-.245-.1563.536-.8437ZM126 25v50h-2V25h2Zm-51-1h50v2H75v-2Zm-1 21.6976V25h2v20.6976h-2Zm.1244-.4887a1.4839 1.4839 0 0 0 .0319-.0482l1.6874 1.0737a3.4758 3.4758 0 0 1-.0715.108l-1.6478-1.1335Zm-1.1978.8692c.5662-.2161.969-.5366 1.1978-.8692l1.6478 1.1335c-.5004.7274-1.2626 1.2722-2.1325 1.6042l-.7131-1.8685Zm-1.8745.2306c.6523.0692 1.3107-.0154 1.8745-.2306l.7131 1.8685c-.8724.333-1.8487.4518-2.7988.3509l.2112-1.9888Zm-1.5434-.5112c.4135.2624.9476.4479 1.5434.5112l-.2112 1.9888c-.868-.0922-1.703-.3667-2.4037-.8112l1.0715-1.6888Zm-1.364 1.4048C67.2443 45.8714 65.7237 45 64 45v-2c2.4154 0 4.5446 1.2243 5.8012 3.0815l-1.6565 1.1208ZM64 45c-2.7614 0-5 2.2386-5 5h-2c0-3.866 3.134-7 7-7v2Zm-5 5c0 2.7614 2.2386 5 5 5v2c-3.866 0-7-3.134-7-7h2Zm5 5c1.7237 0 3.2443-.8714 4.1447-2.2023l1.6565 1.1208C68.5446 55.7757 66.4154 57 64 57v-2Zm7.0521-1.3087c-.5958.0633-1.1299.2488-1.5434.5112l-1.0715-1.6888c.7007-.4445 1.5357-.719 2.4037-.8112l.2112 1.9888Zm1.8745.2306c-.5638-.2152-1.2222-.2998-1.8745-.2306l-.2112-1.9888c.9501-.1009 1.9264.0179 2.7988.3509l-.7131 1.8685Zm1.1978.8692c-.2288-.3326-.6316-.6531-1.1978-.8692l.7131-1.8685c.8699.332 1.6321.8768 2.1325 1.6042l-1.6478 1.1335Zm.0319.0482a1.3823 1.3823 0 0 0-.0319-.0482l1.6478-1.1335c.0246.0357.0484.0717.0715.1079l-1.6874 1.0738ZM74 75V54.3024h2V75h-2Zm21.6976 1H75v-2h20.6976v2Zm.6448-.2278a3.4758 3.4758 0 0 1-.108.0715l-1.0736-1.6874c.016-.0102.032-.0208.0481-.0319l1.1335 1.6478Zm1.6042-2.1325c-.332.8699-.8768 1.6321-1.6042 2.1325l-1.1335-1.6478c.3326-.2288.6531-.6316.8692-1.1978l1.8685.7131Zm.3509-2.7988c.1009.9501-.0179 1.9264-.3509 2.7988l-1.8685-.7131c.2152-.5638.2998-1.2222.2306-1.8745l1.9888-.2112Zm-.8112-2.4037c.4445.7007.719 1.5357.8112 2.4037l-1.9888.2112c-.0633-.5958-.2488-1.1299-.5112-1.5434l1.6888-1.0715ZM95 64c0 1.7237.8714 3.2443 2.2023 4.1447l-1.1208 1.6565C94.2243 68.5446 93 66.4154 93 64h2Zm5-5c-2.7614 0-5 2.2386-5 5h-2c0-3.866 3.134-7 7-7v2Zm5 5c0-2.7614-2.239-5-5-5v-2c3.866 0 7 3.134 7 7h-2Zm-2.202 4.1447C104.129 67.2443 105 65.7237 105 64h2c0 2.4154-1.224 4.5446-3.082 5.8012l-1.12-1.6565Zm-1.095 2.6962c.092-.868.366-1.703.811-2.4037l1.688 1.0715c-.262.4135-.447.9476-.511 1.5434l-1.988-.2112Zm.35 2.7988c-.333-.8724-.451-1.8487-.35-2.7988l1.988.2112c-.069.6523.016 1.3107.231 1.8745l-1.869.7131Zm1.605 2.1325c-.728-.5004-1.273-1.2626-1.605-2.1325l1.869-.7131c.216.5662.536.969.869 1.1978l-1.133 1.6478Zm.108.0715a2.4623 2.4623 0 0 1-.108-.0715l1.133-1.6478c.016.0111.032.0217.048.0319l-1.073 1.6874ZM125 76h-20.698v-2H125v2Z" fill="#000" mask="url(#path-26-inside-4_33_5)"/>
        </g>
        <circle id="circle_4" cx="108.5" cy="41.5" r="11.5" fill="#7B7B7B" stroke="#000" stroke-width="2"/>
        <g id="molecule">
          <g id="H2O">
            <path d="m107.803 36.0385.531.5303-5.304 5.3033-.53-.5303 5.303-5.3033Zm.697.5303.53-.5303 5.304 5.3033-.531.5303-5.303-5.3033Z" fill="#000"/>
            <path d="M111.385 36.0385c0 1.5931-1.292 2.8846-2.885 2.8846-1.593 0-2.885-1.2915-2.885-2.8846 0-1.5932 1.292-2.8847 2.885-2.8847 1.593 0 2.885 1.2915 2.885 2.8847Z" fill="#004596"/>
            <path d="M104.462 41.8077c0 .9559-.775 1.7308-1.731 1.7308-.956 0-1.731-.7749-1.731-1.7308 0-.9559.775-1.7308 1.731-1.7308.956 0 1.731.7749 1.731 1.7308Zm11.538 0c0 .9559-.775 1.7308-1.731 1.7308-.956 0-1.731-.7749-1.731-1.7308 0-.9559.775-1.7308 1.731-1.7308.956 0 1.731.7749 1.731 1.7308Z" fill="#860D0D"/>
            <path d="M102.308 42.3v-1.0909h.197v.4618h.506v-.4618h.198V42.3h-.198v-.4634h-.506V42.3h-.197Zm6.212-4.7467c-.266 0-.497-.0586-.693-.1758-.195-.1172-.346-.2812-.454-.4919-.107-.2107-.16-.4569-.16-.7386 0-.2817.053-.5285.16-.7404.108-.2119.259-.3764.454-.4936.196-.1172.427-.1758.693-.1758.266 0 .497.0586.692.1758.196.1172.347.2817.453.4936.108.2119.162.4587.162.7404 0 .2817-.054.5279-.162.7386-.106.2107-.257.3747-.453.4919-.195.1172-.426.1758-.692.1758Zm.003-.515c.145 0 .266-.0396.363-.1189.097-.0805.169-.1882.216-.3232.049-.1349.073-.2852.073-.451 0-.1669-.024-.3178-.073-.4527-.047-.1362-.119-.2445-.216-.325-.097-.0805-.218-.1207-.363-.1207-.148 0-.271.0402-.369.1207-.097.0805-.17.1888-.218.325-.048.1349-.071.2858-.071.4527 0 .1658.023.3161.071.451.048.135.121.2427.218.3232.098.0793.221.1189.369.1189ZM113.8 42.3v-1.0909h.198v.4618h.505v-.4618h.198V42.3h-.198v-.4634h-.505V42.3h-.198Z" fill="#000"/>
            <path d="M105.365 36.0385c0 .5964.167 1.1539.456 1.6286l-2.317 2.3166a1.9714 1.9714 0 0 0-.773-.1568c-1.094 0-1.981.8868-1.981 1.9808 0 1.0939.887 1.9808 1.981 1.9808s1.981-.8869 1.981-1.9808a1.975 1.975 0 0 0-.268-.9954l2.227-2.2276a3.1232 3.1232 0 0 0 1.829.5884c.64 0 1.234-.1916 1.73-.5205l2.268 2.2676c-.134.267-.21.5684-.21.8875 0 1.0939.887 1.9808 1.981 1.9808s1.981-.8869 1.981-1.9808c0-1.094-.887-1.9808-1.981-1.9808-.319 0-.62.0755-.887.2095l-2.268-2.2676a3.1197 3.1197 0 0 0 .521-1.7303c0-1.7312-1.404-3.1347-3.135-3.1347-1.731 0-3.135 1.4035-3.135 3.1347Z" stroke="#000" stroke-width=".5"/>
          </g>
          <g id="label">
            <path d="M104 45h9v5h-9v-5Z" fill="#000"/>
            <path d="M104.287 49v-2.9091h.527v1.2315h1.348v-1.2315h.528V49h-.528v-1.2358h-1.348V49h-.527Zm2.948 0v-.3807l1.01-.99a4.877 4.877 0 0 0 .242-.26c.064-.0757.112-.1491.144-.2202a.532.532 0 0 0 .049-.2272c0-.0919-.021-.1705-.063-.2358-.041-.0663-.099-.1175-.172-.1534-.073-.036-.155-.054-.248-.054-.096 0-.18.0199-.252.0596a.4052.4052 0 0 0-.167.1662c-.039.072-.059.1577-.059.2571h-.501c0-.1846.042-.3451.126-.4815.085-.1364.201-.2419.348-.3168.149-.0748.32-.1122.512-.1122.195 0 .366.0365.514.1094.148.0729.262.1728.344.2997.082.1269.123.2718.123.4347a.857.857 0 0 1-.062.321c-.042.1051-.115.2216-.22.3494-.104.1279-.251.2827-.439.4645l-.502.51v.0199h1.267V49h-1.994Zm5.112-1.4546c0 .3135-.058.582-.176.8054-.116.2226-.275.393-.477.5114-.201.1184-.429.1776-.683.1776-.255 0-.483-.0592-.685-.1776-.201-.1193-.36-.2902-.477-.5128-.117-.2235-.175-.4915-.175-.804 0-.3134.058-.5814.175-.8039.117-.2235.276-.3944.477-.5128.202-.1184.43-.1776.685-.1776.254 0 .482.0592.683.1776.202.1184.361.2893.477.5128.118.2225.176.4905.176.8039Zm-.53 0c0-.2206-.034-.4067-.103-.5582-.068-.1525-.163-.2675-.284-.3452-.122-.0786-.261-.1179-.419-.1179-.158 0-.298.0393-.419.1179-.122.0777-.217.1927-.286.3452-.068.1515-.102.3376-.102.5582 0 .2207.034.4072.102.5597.069.1515.164.2666.286.3452.121.0776.261.1165.419.1165.158 0 .297-.0389.419-.1165.121-.0786.216-.1937.284-.3452.069-.1525.103-.339.103-.5597Z" fill="#fff"/>
          </g>
        </g>
      </g>
      <g id="piece-2">
        <g id="puzzle-piece-2">
          <mask id="path-22-inside-3_33_5" fill="#fff">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M75 25H25v50h20.6976c.0262.0167.0522.0339.0781.0517.53.3646.9626.9471 1.2367 1.6652.2741.718.3757 1.5354.2907 2.3366-.0777.7319-.3077 1.4165-.6612 1.9735C45.0478 82.1056 44 83.9304 44 86c0 3.3137 2.6863 6 6 6s6-2.6863 6-6c0-2.0696-1.0478-3.8944-2.6419-4.973-.3535-.557-.5835-1.2416-.6612-1.9735-.085-.8012.0166-1.6186.2907-2.3366.2741-.7181.7067-1.3006 1.2367-1.6652A2.7007 2.7007 0 0 1 54.3024 75H75V54.3024a2.7007 2.7007 0 0 0-.0517-.0781c-.3646-.53-.9471-.9626-1.6652-1.2367-.718-.2741-1.5354-.3757-2.3366-.2907-.7319.0777-1.4165.3077-1.9735.6612C67.8944 54.9522 66.0696 56 64 56c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6c2.0696 0 3.8944 1.0478 4.973 2.6419.557.3535 1.2416.5835 1.9735.6612.8012.085 1.6186-.0166 2.3366-.2907.7181-.2741 1.3006-.7067 1.6652-1.2367A2.7007 2.7007 0 0 0 75 45.6976V25Z"/>
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M75 25H25v50h20.6976c.0262.0167.0522.0339.0781.0517.53.3646.9626.9471 1.2367 1.6652.2741.718.3757 1.5354.2907 2.3366-.0777.7319-.3077 1.4165-.6612 1.9735C45.0478 82.1056 44 83.9304 44 86c0 3.3137 2.6863 6 6 6s6-2.6863 6-6c0-2.0696-1.0478-3.8944-2.6419-4.973-.3535-.557-.5835-1.2416-.6612-1.9735-.085-.8012.0166-1.6186.2907-2.3366.2741-.7181.7067-1.3006 1.2367-1.6652A2.7007 2.7007 0 0 1 54.3024 75H75V54.3024a2.7007 2.7007 0 0 0-.0517-.0781c-.3646-.53-.9471-.9626-1.6652-1.2367-.718-.2741-1.5354-.3757-2.3366-.2907-.7319.0777-1.4165.3077-1.9735.6612C67.8944 54.9522 66.0696 56 64 56c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6c2.0696 0 3.8944 1.0478 4.973 2.6419.557.3535 1.2416.5835 1.9735.6612.8012.085 1.6186-.0166 2.3366-.2907.7181-.2741 1.3006-.7067 1.6652-1.2367A2.7007 2.7007 0 0 0 75 45.6976V25Z" fill="#122E1D"/>
          <path d="M25 25h-1v-1h1v1Zm50 0v-1h1v1h-1ZM25 75v1h-1v-1h1Zm20.6976 0v-1h.2912l.2456.1563-.5368.8437Zm.0781.0517.5667-.8239-.5667.8239Zm1.2367 1.6652.9342-.3566-.9342.3566Zm.2907 2.3366-.9944-.1056.9944.1056Zm-.6612 1.9735.8444.5358-.1116.1758-.1724.1167-.5604-.8283Zm6.7162 0-.5604.8283-.1724-.1167-.1116-.1758.8444-.5358Zm-.6612-1.9735.9944-.1056-.9944.1056Zm1.5274-4.0018.5668.8239-.5668-.8239ZM54.3024 75l-.5369-.8437.2457-.1563h.2912v1ZM75 75h1v1h-1v-1Zm0-20.6976.8437-.5368.1563.2457v.2911h-1Zm-.0517-.0781.8239-.5667-.8239.5667Zm-1.6652-1.2367.3566-.9342-.3566.9342Zm-2.3366-.2907-.1056-.9944.1056.9944Zm-1.9735.6612-.8283-.5604.1167-.1724.1758-.1116.5358.8444Zm0-6.7162-.5358.8444-.1758-.1116-.1167-.1724.8283-.5604Zm1.9735.6612.1056-.9944-.1056.9944Zm2.3366-.2907.3566.9342-.3566-.9342Zm1.6652-1.2367.8239.5667-.8239-.5667ZM75 45.6976h1v.2911l-.1563.2457L75 45.6976ZM25 24h50v2H25v-2Zm-1 51V25h2v50h-2Zm21.6976 1H25v-2h20.6976v2Zm-.4887-.1244a1.4839 1.4839 0 0 0-.0482-.0319l1.0737-1.6874c.0364.0231.0724.047.108.0715l-1.1335 1.6478Zm.8692 1.1978c-.2161-.5662-.5366-.969-.8692-1.1978l1.1335-1.6478c.7274.5004 1.2722 1.2626 1.6042 2.1325l-1.8685.7131Zm.2306 1.8745c.0692-.6523-.0154-1.3107-.2306-1.8745l1.8685-.7131c.333.8724.4518 1.8487.3509 2.7988l-1.9888-.2112Zm-.5112 1.5434c.2624-.4135.4479-.9476.5112-1.5434l1.9888.2112c-.0922.868-.3667 1.703-.8112 2.4037l-1.6888-1.0715Zm1.4048 1.364C45.8714 82.7557 45 84.2763 45 86h-2c0-2.4154 1.2243-4.5446 3.0815-5.8012l1.1208 1.6565ZM45 86c0 2.7614 2.2386 5 5 5v2c-3.866 0-7-3.134-7-7h2Zm5 5c2.7614 0 5-2.2386 5-5h2c0 3.866-3.134 7-7 7v-2Zm5-5c0-1.7237-.8714-3.2443-2.2023-4.1447l1.1208-1.6565C55.7757 81.4554 57 83.5846 57 86h-2Zm-1.3087-7.0521c.0633.5958.2488 1.1299.5112 1.5434l-1.6888 1.0715c-.4445-.7007-.719-1.5357-.8112-2.4037l1.9888-.2112Zm.2306-1.8745c-.2152.5638-.2998 1.2222-.2306 1.8745l-1.9888.2112c-.1009-.9501.0179-1.9264.3509-2.7988l1.8685.7131Zm.8692-1.1978c-.3326.2288-.6531.6316-.8692 1.1978l-1.8685-.7131c.332-.8699.8768-1.6321 1.6042-2.1325l1.1335 1.6478Zm.0482-.0319a1.3823 1.3823 0 0 0-.0482.0319l-1.1335-1.6478a3.6587 3.6587 0 0 1 .1079-.0715l1.0738 1.6874ZM75 76H54.3024v-2H75v2Zm1-21.6976V75h-2V54.3024h2Zm-.2278-.6448c.0245.0356.0484.0716.0715.108l-1.6874 1.0736a1.5983 1.5983 0 0 0-.0319-.0481l1.6478-1.1335Zm-2.1325-1.6042c.8699.332 1.6321.8768 2.1325 1.6042l-1.6478 1.1335c-.2288-.3326-.6316-.6531-1.1978-.8692l.7131-1.8685Zm-2.7988-.3509c.9501-.1009 1.9264.0179 2.7988.3509l-.7131 1.8685c-.5638-.2152-1.2222-.2998-1.8745-.2306l-.2112-1.9888Zm-2.4037.8112c.7007-.4445 1.5357-.719 2.4037-.8112l.2112 1.9888c-.5958.0633-1.1299.2488-1.5434.5112l-1.0715-1.6888ZM64 55c1.7237 0 3.2443-.8714 4.1447-2.2023l1.6565 1.1208C68.5446 55.7757 66.4154 57 64 57v-2Zm-5-5c0 2.7614 2.2386 5 5 5v2c-3.866 0-7-3.134-7-7h2Zm5-5c-2.7614 0-5 2.2386-5 5h-2c0-3.866 3.134-7 7-7v2Zm4.1447 2.2023C67.2443 45.8714 65.7237 45 64 45v-2c2.4154 0 4.5446 1.2243 5.8012 3.0815l-1.6565 1.1208Zm2.6962 1.0952c-.868-.0922-1.703-.3667-2.4037-.8112l1.0715-1.6888c.4135.2624.9476.4479 1.5434.5112l-.2112 1.9888Zm2.7988-.3509c-.8724.333-1.8487.4518-2.7988.3509l.2112-1.9888c.6523.0692 1.3107-.0154 1.8745-.2306l.7131 1.8685Zm2.1325-1.6042c-.5004.7274-1.2626 1.2722-2.1325 1.6042l-.7131-1.8685c.5662-.2161.969-.5366 1.1978-.8692l1.6478 1.1335Zm.0715-.108a3.4758 3.4758 0 0 1-.0715.108l-1.6478-1.1335a1.5983 1.5983 0 0 0 .0319-.0481l1.6874 1.0736ZM76 25v20.6976h-2V25h2Z" fill="#000" mask="url(#path-22-inside-3_33_5)"/>
        </g>
        <circle id="circle_3" cx="41.5" cy="41.5" r="11.5" fill="#7B7B7B" stroke="#000" stroke-width="2"/>
        <g id="lambda">
          <path d="m41.579 40.4463.772 1.1197-4.3997 7.9714-1.2158-.7019 4.8435-8.3892Zm-.7842-4.7342c-.0955-.3562-.2426-.6948-.433-.9964-.1903-.3017-.4203-.5605-.6766-.7617-.2564-.2013-.5342-.3409-.8175-.4111-.2833-.0702-.5666-.0695-.8337.0021-.2671.0716-.5128.2126-.723.415-.2103.2025-.381.4623-.5024.7648-.1214.3024-.1911.6415-.2052.998-.014.3564.0279.7231.1233 1.0793l.6794-.1821a2.4244 2.4244 0 0 1-.0821-.7188c.0094-.2373.0558-.4632.1367-.6646.0808-.2014.1945-.3745.3345-.5093.1401-.1348.3037-.2287.4816-.2764.1779-.0476.3665-.0481.5552-.0014.1887.0468.3736.1398.5444.2738.1707.134.3238.3064.4506.5073.1268.2009.2248.4263.2883.6635l.6795-.182ZM43.2052 47.42c.0954.3561.2425.6947.4329.9964.1904.3016.4204.5604.6767.7617.2564.2012.5341.3409.8174.411.2833.0702.5666.0695.8337-.0021.2672-.0716.5129-.2126.7231-.415.2103-.2024.381-.4623.5024-.7647.1214-.3025.1911-.6416.2052-.998.014-.3564-.0279-.7232-.1233-1.0794l-.6794.1821c.0635.2372.0914.4814.082.7188-.0093.2374-.0557.4632-.1366.6646-.0808.2015-.1945.3745-.3346.5093-.14.1348-.3036.2287-.4815.2764-.1779.0477-.3666.0481-.5552.0014-.1887-.0467-.3737-.1397-.5444-.2738-.1707-.134-.3239-.3063-.4506-.5072a2.4228 2.4228 0 0 1-.2884-.6636l-.6794.1821Z" fill="#000"/>
          <path d="m40.1168 35.8937.678-.1816 3.0884 11.5262-.678.1817-3.0884-11.5263Z" fill="#000"/>
        </g>
      </g>
      <g id="piece-3">
        <g id="puzzle-piece-3">
          <mask id="path-13-inside-2_33_5" fill="#fff">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 75v50h50v-20.698c.0167-.026.0339-.052.0517-.078.3646-.53.9471-.962 1.6652-1.236.718-.274 1.5354-.376 2.3366-.291.7319.078 1.4165.308 1.9735.661C82.1056 104.952 83.9304 106 86 106c3.3137 0 6-2.686 6-6 0-3.3137-2.6863-6-6-6-2.0696 0-3.8944 1.0478-4.973 2.6419-.557.3535-1.2416.5835-1.9735.6612-.8012.0851-1.6186-.0166-2.3366-.2907-.7181-.2741-1.3006-.7067-1.6652-1.2367A2.7007 2.7007 0 0 1 75 95.6976V75H54.3024a2.7007 2.7007 0 0 0-.0781.0517c-.53.3646-.9626.9471-1.2367 1.6652-.2741.718-.3757 1.5354-.2907 2.3366.0777.7319.3077 1.4165.6612 1.9735C54.9522 82.1056 56 83.9304 56 86c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6c0-2.0696 1.0478-3.8944 2.6419-4.973.3535-.557.5835-1.2416.6612-1.9735.085-.8012-.0166-1.6186-.2907-2.3366-.2741-.7181-.7067-1.3006-1.2367-1.6652A2.7007 2.7007 0 0 0 45.6976 75H25Z"/>
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25 75v50h50v-20.698c.0167-.026.0339-.052.0517-.078.3646-.53.9471-.962 1.6652-1.236.718-.274 1.5354-.376 2.3366-.291.7319.078 1.4165.308 1.9735.661C82.1056 104.952 83.9304 106 86 106c3.3137 0 6-2.686 6-6 0-3.3137-2.6863-6-6-6-2.0696 0-3.8944 1.0478-4.973 2.6419-.557.3535-1.2416.5835-1.9735.6612-.8012.0851-1.6186-.0166-2.3366-.2907-.7181-.2741-1.3006-.7067-1.6652-1.2367A2.7007 2.7007 0 0 1 75 95.6976V75H54.3024a2.7007 2.7007 0 0 0-.0781.0517c-.53.3646-.9626.9471-1.2367 1.6652-.2741.718-.3757 1.5354-.2907 2.3366.0777.7319.3077 1.4165.6612 1.9735C54.9522 82.1056 56 83.9304 56 86c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6c0-2.0696 1.0478-3.8944 2.6419-4.973.3535-.557.5835-1.2416.6612-1.9735.085-.8012-.0166-1.6186-.2907-2.3366-.2741-.7181-.7067-1.3006-1.2367-1.6652A2.7007 2.7007 0 0 0 45.6976 75H25Z" fill="#5C4311"/>
          <path d="M25 125v1h-1v-1h1Zm0-50h-1v-1h1v1Zm50 50h1v1h-1v-1Zm0-20.698h-1v-.291l.1563-.245.8437.536Zm.0517-.078-.8239-.566.8239.566Zm1.6652-1.236-.3566-.935.3566.935Zm2.3366-.291-.1056.994.1056-.994Zm1.9735.661.5358-.844.1758.111.1167.173-.8283.56Zm0-6.7161.8283.5604-.1167.1724-.1758.1116-.5358-.8444Zm-1.9735.6612-.1056-.9944.1056.9944Zm-4.0018-1.5274.8239-.5668-.8239.5668ZM75 95.6976l-.8437.5369L74 95.9888v-.2912h1ZM75 75v-1h1v1h-1Zm-20.6976 0-.5368-.8437.2457-.1563h.2911v1Zm-.0781.0517-.5667-.8239.5667.8239Zm-1.2367 1.6652-.9342-.3566.9342.3566Zm-.2907 2.3366-.9944.1056.9944-.1056Zm.6612 1.9735-.5604.8283-.1724-.1167-.1116-.1758.8444-.5358Zm-6.7162 0 .8444.5358-.1116.1758-.1724.1167-.5604-.8283Zm.6612-1.9735-.9944-.1056.9944.1056Zm-.2907-2.3366.9342-.3566-.9342.3566Zm-1.2367-1.6652.5667-.8239-.5667.8239ZM45.6976 75v-1h.2911l.2457.1563-.5368.8437ZM24 125V75h2v50h-2Zm51 1H25v-2h50v2Zm1-21.698V125h-2v-20.698h2Zm-.1244.489a1.4772 1.4772 0 0 0-.0319.048l-1.6874-1.073c.0231-.037.047-.073.0715-.108l1.6478 1.133Zm1.1978-.869c-.5662.216-.969.536-1.1978.869l-1.6478-1.133c.5004-.728 1.2626-1.273 2.1325-1.605l.7131 1.869Zm1.8745-.231c-.6523-.069-1.3107.016-1.8745.231l-.7131-1.869c.8724-.333 1.8487-.451 2.7988-.35l-.2112 1.988Zm1.5434.511c-.4135-.262-.9476-.447-1.5434-.511l.2112-1.988c.868.092 1.703.366 2.4037.811l-1.0715 1.688Zm1.364-1.404C82.7557 104.129 84.2763 105 86 105v2c-2.4154 0-4.5446-1.224-5.8012-3.082l1.6565-1.12ZM86 105c2.7614 0 5-2.239 5-5h2c0 3.866-3.134 7-7 7v-2Zm5-5c0-2.7614-2.2386-5-5-5v-2c3.866 0 7 3.134 7 7h-2Zm-5-5c-1.7237 0-3.2443.8714-4.1447 2.2023l-1.6565-1.1208C81.4554 94.2243 83.5846 93 86 93v2Zm-7.0521 1.3087c.5958-.0633 1.1299-.2488 1.5434-.5112l1.0715 1.6888c-.7007.4445-1.5357.719-2.4037.8112l-.2112-1.9888Zm-1.8745-.2306c.5638.2152 1.2222.2998 1.8745.2306l.2112 1.9888c-.9501.1009-1.9264-.0179-2.7988-.3509l.7131-1.8685Zm-1.1978-.8692c.2288.3326.6316.6531 1.1978.8692l-.7131 1.8685c-.8699-.332-1.6321-.8768-2.1325-1.6042l1.6478-1.1335Zm-.0319-.0482c.0102.0161.0208.0322.0319.0482l-1.6478 1.1335a3.6587 3.6587 0 0 1-.0715-.1079l1.6874-1.0738ZM76 75v20.6976h-2V75h2Zm-21.6976-1H75v2H54.3024v-2Zm-.6448.2278a3.6658 3.6658 0 0 1 .108-.0715l1.0736 1.6874a1.5983 1.5983 0 0 0-.0481.0319l-1.1335-1.6478Zm-1.6042 2.1325c.332-.8699.8768-1.6321 1.6042-2.1325l1.1335 1.6478c-.3326.2288-.6531.6316-.8692 1.1978l-1.8685-.7131Zm-.3509 2.7988c-.1009-.9501.0179-1.9264.3509-2.7988l1.8685.7131c-.2152.5638-.2998 1.2222-.2306 1.8745l-1.9888.2112Zm.8112 2.4037c-.4445-.7007-.719-1.5357-.8112-2.4037l1.9888-.2112c.0633.5958.2488 1.1299.5112 1.5434l-1.6888 1.0715ZM55 86c0-1.7237-.8714-3.2443-2.2023-4.1447l1.1208-1.6565C55.7757 81.4554 57 83.5846 57 86h-2Zm-5 5c2.7614 0 5-2.2386 5-5h2c0 3.866-3.134 7-7 7v-2Zm-5-5c0 2.7614 2.2386 5 5 5v2c-3.866 0-7-3.134-7-7h2Zm2.2023-4.1447C45.8714 82.7557 45 84.2763 45 86h-2c0-2.4154 1.2243-4.5446 3.0815-5.8012l1.1208 1.6565Zm1.0952-2.6962c-.0922.868-.3667 1.703-.8112 2.4037l-1.6888-1.0715c.2624-.4135.4479-.9476.5112-1.5434l1.9888.2112Zm-.3509-2.7988c.333.8724.4518 1.8487.3509 2.7988l-1.9888-.2112c.0692-.6523-.0154-1.3107-.2306-1.8745l1.8685-.7131Zm-1.6042-2.1325c.7274.5004 1.2722 1.2626 1.6042 2.1325l-1.8685.7131c-.2161-.5662-.5366-.969-.8692-1.1978l1.1335-1.6478Zm-.108-.0715c.0364.0231.0724.047.108.0715l-1.1335 1.6478a1.5983 1.5983 0 0 0-.0481-.0319l1.0736-1.6874ZM25 74h20.6976v2H25v-2Z" fill="#000" mask="url(#path-13-inside-2_33_5)"/>
        </g>
        <circle id="circle_2" cx="41.5" cy="108.5" r="11.5" fill="#7B7B7B" stroke="#000" stroke-width="2"/>
        <g id="book">
          <path id="bookcover" d="M47.25 114.75H36.6097c-1.1516 0-1.9892-1.093-1.6898-2.205l2.423-9a1.7501 1.7501 0 0 1 1.6899-1.295H47.25v12.5Z" fill="#0F6072" stroke="#000" stroke-width=".5"/>
          <path id="book-bottom" d="M47.25 111.25v3.722H36.5c-.9434 0-1.6935-.791-1.6428-1.733l.0061-.114.0008-.014-.0008-.013-.0061-.114c-.0507-.942.6994-1.734 1.6428-1.734h10.75Z" fill="#FFF7CF" stroke="#000" stroke-width=".5"/>
          <path id="title" d="M44.25 104.75v1.5h-4.4298l.375-1.5H44.25Z" fill="#E4F9FF" stroke="#000" stroke-width=".5"/>
          <g id="pages">
            <path d="M35.3038 111.8h12v.2h-12v-.2Zm-.3038.5h12.5v.2H35v-.2Zm0 .5h12.5v.2H35v-.2Zm0 .5h12.5v.2H35v-.2Zm-.1752.5h12.5v.2h-12.5v-.2Zm.1752.5h12.5v.2H35v-.2Z" fill="#000"/>
          </g>
          <path id="bookmark" d="m37.9445 114.25-.8445.563V113.1h1.8v1.713l-.8445-.563-.0555-.037-.0555.037Z" fill="#A70F0F" stroke="#000" stroke-width=".2"/>
          <g id="tabs">
            <path d="M47.5 107h.5v1h-.5v-1Zm0 3h.5v1h-.5v-1Z" fill="#A70F0F"/>
          </g>
        </g>
      </g>
      <g id="piece-4">
        <g id="puzzle-piece-4">
          <mask id="path-5-inside-1_33_5" fill="#fff">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M75 125h50V75h-20.698a3.1837 3.1837 0 0 1-.078-.0517c-.53-.3646-.962-.9471-1.236-1.6652-.274-.718-.376-1.5354-.291-2.3366.078-.7319.308-1.4165.661-1.9735C104.952 67.8944 106 66.0696 106 64c0-3.3137-2.686-6-6-6-3.3137 0-6 2.6863-6 6 0 2.0696 1.0478 3.8944 2.6419 4.973.3535.557.5835 1.2416.6612 1.9735.085.8012-.0166 1.6186-.2907 2.3366-.2741.7181-.7067 1.3006-1.2367 1.6652a2.7007 2.7007 0 0 1-.0781.0517H75v20.6976c.0167.0262.0339.0522.0517.0781.3646.53.9471.9626 1.6652 1.2367.718.2741 1.5354.3757 2.3366.2907.7319-.0777 1.4165-.3077 1.9735-.6612C82.1056 95.0478 83.9304 94 86 94c3.3137 0 6 2.6863 6 6 0 3.314-2.6863 6-6 6-2.0696 0-3.8944-1.048-4.973-2.642-.557-.353-1.2416-.583-1.9735-.661-.8012-.085-1.6186.017-2.3366.291-.7181.274-1.3006.706-1.6652 1.236-.0178.026-.035.052-.0517.078V125Z"/>
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M75 125h50V75h-20.698a3.1837 3.1837 0 0 1-.078-.0517c-.53-.3646-.962-.9471-1.236-1.6652-.274-.718-.376-1.5354-.291-2.3366.078-.7319.308-1.4165.661-1.9735C104.952 67.8944 106 66.0696 106 64c0-3.3137-2.686-6-6-6-3.3137 0-6 2.6863-6 6 0 2.0696 1.0478 3.8944 2.6419 4.973.3535.557.5835 1.2416.6612 1.9735.085.8012-.0166 1.6186-.2907 2.3366-.2741.7181-.7067 1.3006-1.2367 1.6652a2.7007 2.7007 0 0 1-.0781.0517H75v20.6976c.0167.0262.0339.0522.0517.0781.3646.53.9471.9626 1.6652 1.2367.718.2741 1.5354.3757 2.3366.2907.7319-.0777 1.4165-.3077 1.9735-.6612C82.1056 95.0478 83.9304 94 86 94c3.3137 0 6 2.6863 6 6 0 3.314-2.6863 6-6 6-2.0696 0-3.8944-1.048-4.973-2.642-.557-.353-1.2416-.583-1.9735-.661-.8012-.085-1.6186.017-2.3366.291-.7181.274-1.3006.706-1.6652 1.236-.0178.026-.035.052-.0517.078V125Z" fill="#160D30"/>
          <path d="M125 125h1v1h-1v-1Zm-50 0v1h-1v-1h1Zm50-50v-1h1v1h-1Zm-20.698 0v1h-.291l-.245-.1563.536-.8437Zm-.078-.0517-.566.8239.566-.8239Zm-1.236-1.6652-.935.3566.935-.3566Zm-.291-2.3366.994.1056-.994-.1056Zm.661-1.9735-.844-.5358.111-.1758.173-.1167.56.8283Zm-6.7161 0 .5604-.8283.1724.1167.1116.1758-.8444.5358Zm.6612 1.9735-.9944.1056.9944-.1056Zm-1.5274 4.0018-.5668-.8239.5668.8239ZM95.6976 75l.5369.8437-.2457.1563h-.2912v-1ZM75 75h-1v-1h1v1Zm0 20.6976-.8437.5368L74 95.9887v-.2911h1Zm.0517.0781-.8239.5667.8239-.5667Zm1.6652 1.2367-.3566.9342.3566-.9342Zm2.3366.2907.1056.9944-.1056-.9944Zm1.9735-.6612.8283.5604-.1167.1724-.1758.1116-.5358-.8444Zm0 6.7161.5358-.844.1758.111.1167.173-.8283.56Zm-1.9735-.661-.1056.994.1056-.994Zm-2.3366.291-.3566-.935.3566.935Zm-1.6652 1.236-.8239-.566.8239.566Zm-.0517.078h-1v-.291l.1563-.245.8437.536ZM125 126H75v-2h50v2Zm1-51v50h-2V75h2Zm-21.698-1H125v2h-20.698v-2Zm.489.1244c.016.0111.032.0217.048.0319l-1.073 1.6874a2.4623 2.4623 0 0 1-.108-.0715l1.133-1.6478Zm-.869-1.1978c.216.5662.536.969.869 1.1978l-1.133 1.6478c-.728-.5004-1.273-1.2626-1.605-2.1325l1.869-.7131Zm-.231-1.8745c-.069.6523.016 1.3107.231 1.8745l-1.869.7131c-.333-.8724-.451-1.8487-.35-2.7988l1.988.2112Zm.511-1.5434c-.262.4135-.447.9476-.511 1.5434l-1.988-.2112c.092-.868.366-1.703.811-2.4037l1.688 1.0715Zm-1.404-1.364C104.129 67.2443 105 65.7237 105 64h2c0 2.4154-1.224 4.5446-3.082 5.8012l-1.12-1.6565ZM105 64c0-2.7614-2.239-5-5-5v-2c3.866 0 7 3.134 7 7h-2Zm-5-5c-2.7614 0-5 2.2386-5 5h-2c0-3.866 3.134-7 7-7v2Zm-5 5c0 1.7237.8714 3.2443 2.2023 4.1447l-1.1208 1.6565C94.2243 68.5446 93 66.4154 93 64h2Zm1.3087 7.0521c-.0633-.5958-.2488-1.1299-.5112-1.5434l1.6888-1.0715c.4445.7007.719 1.5357.8112 2.4037l-1.9888.2112Zm-.2306 1.8745c.2152-.5638.2998-1.2222.2306-1.8745l1.9888-.2112c.1009.9501-.0179 1.9264-.3509 2.7988l-1.8685-.7131Zm-.8692 1.1978c.3326-.2288.6531-.6316.8692-1.1978l1.8685.7131c-.332.8699-.8768 1.6321-1.6042 2.1325l-1.1335-1.6478Zm-.0482.0319a1.3823 1.3823 0 0 0 .0482-.0319l1.1335 1.6478a3.6587 3.6587 0 0 1-.1079.0715l-1.0738-1.6874ZM75 74h20.6976v2H75v-2Zm-1 21.6976V75h2v20.6976h-2Zm.2278.6448a3.4758 3.4758 0 0 1-.0715-.108l1.6874-1.0736c.0102.016.0208.032.0319.0481l-1.6478 1.1335Zm2.1325 1.6042c-.8699-.332-1.6321-.8768-2.1325-1.6042l1.6478-1.1335c.2288.3326.6316.6531 1.1978.8692l-.7131 1.8685Zm2.7988.3509c-.9501.1009-1.9264-.0179-2.7988-.3509l.7131-1.8685c.5638.2152 1.2222.2998 1.8745.2306l.2112 1.9888Zm2.4037-.8112c-.7007.4445-1.5357.719-2.4037.8112l-.2112-1.9888c.5958-.0633 1.1299-.2488 1.5434-.5112l1.0715 1.6888ZM86 95c-1.7237 0-3.2443.8714-4.1447 2.2023l-1.6565-1.1208C81.4554 94.2243 83.5846 93 86 93v2Zm5 5c0-2.7614-2.2386-5-5-5v-2c3.866 0 7 3.134 7 7h-2Zm-5 5c2.7614 0 5-2.239 5-5h2c0 3.866-3.134 7-7 7v-2Zm-4.1447-2.202C82.7557 104.129 84.2763 105 86 105v2c-2.4154 0-4.5446-1.224-5.8012-3.082l1.6565-1.12Zm-2.6962-1.095c.868.092 1.703.366 2.4037.811l-1.0715 1.688c-.4135-.262-.9476-.447-1.5434-.511l.2112-1.988Zm-2.7988.35c.8724-.333 1.8487-.451 2.7988-.35l-.2112 1.988c-.6523-.069-1.3107.016-1.8745.231l-.7131-1.869Zm-2.1325 1.605c.5004-.728 1.2626-1.273 2.1325-1.605l.7131 1.869c-.5662.216-.969.536-1.1978.869l-1.6478-1.133Zm-.0715.108c.0231-.037.047-.073.0715-.108l1.6478 1.133a1.4772 1.4772 0 0 0-.0319.048l-1.6874-1.073ZM74 125v-20.698h2V125h-2Z" fill="#000" mask="url(#path-5-inside-1_33_5)"/>
        </g>
        <circle id="circle" cx="108.5" cy="108.5" r="11.5" fill="#7B7B7B" stroke="#000" stroke-width="2"/>
        <g id="globe">
          <g id="base">
            <path d="M104.818 117.182c0-.452.366-.818.818-.818h6.546c.452 0 .818.366.818.818 0 .452-.366.818-.818.818h-6.546a.8177.8177 0 0 1-.818-.818Z" fill="#553016"/>
            <path d="M108.636 114.182h.546v2.182h-.546v-2.182Zm0-13.909h.546v1.636h-.546v-1.636Z" fill="#000"/>
            <path d="M108.932 116.114h-.046v-1.682h.046v1.682Zm-3.296 1.636a.5683.5683 0 0 1-.568-.568c0-.314.255-.568.568-.568h6.546c.314 0 .568.254.568.568 0 .314-.254.568-.568.568h-6.546Zm3.25-17.227h.046v1.136h-.046v-1.136Z" stroke="#000" stroke-width=".5"/>
          </g>
          <g id="world">
            <circle id="Ellipse 43" cx="108.909" cy="107.909" r="6.5227" transform="rotate(-15 108.909 107.909)" fill="#7269E0" stroke="#000" stroke-width=".5"/>
            <path id="Vector 1" d="m111.111 112.966.668.386.983-.546.913-.809.964-1.67-.475-.72-.861-.052-.983.546-1.124.019-.861-.052-.932-.315-1.195-.244.052-.861.983-.546.405.456.668.386.527-.141-.071-.264-.334-.193-.071-.263.316-.931-.283-1.054.386-.668.842-1.073-.405-.456-1.053.282-.386.668-.264.071-.263.07-.263.071-.669-.386.123-.597.912-.809.598.122.79-.212 1.195.245.193-.334-.739-.65-.334-.192-1.914.23-.791.212-1.053.282-.913.81-.598-.123.123-.597-.405-.456-1.176.879-1.228 1.741-.122.598.791-.212.719-.475.598.122.141.527-.245 1.195.019 1.124.546.983 1.002.579 1.073.842.861.051.527-.141.141.527-.315.932.809.912 1.458.174Z" fill="#324E29" stroke="#000" stroke-width=".5"/>
          </g>
          <path id="ring" d="M109.731 100.026c-1.204-.0861-2.416.042-3.563.376-1.148.334-2.206.868-3.114 1.57-.907.701-1.644 1.556-2.167 2.513-.523.958-.822 1.998-.877 3.059-.0562 1.061.132 2.121.552 3.116.42.996 1.065 1.907 1.894 2.679.83.772 1.828 1.39 2.935 1.816 1.108.425 2.301.651 3.509.663l.006-.426c-1.144-.011-2.273-.224-3.321-.627-1.047-.403-1.992-.987-2.777-1.718-.785-.73-1.394-1.593-1.792-2.535-.398-.942-.576-1.945-.523-2.949.053-1.003.335-1.988.83-2.893.495-.906 1.193-1.715 2.051-2.379.859-.664 1.86-1.169 2.946-1.485 1.085-.317 2.232-.438 3.372-.356l.039-.424Z" fill="#000"/>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_33_5">
        <rect width="150" height="150" fill="#fff"/>
      </clipPath>
    </defs>
  </svg>
    `;
//Lastly declare the web component with kebab case
customElements.define("puzzle-comp", puzzleComp);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9COKA"], null, "parcelRequirec8c2")

//# sourceMappingURL=puzzle_svg.340a1450.js.map
