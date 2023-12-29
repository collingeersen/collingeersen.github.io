(function () {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirec8c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirec8c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("6LUSR", function(module, exports) {


(parcelRequire("9xqYB")).register((parcelRequire("cHmwT")).getBundleURL("3WOOB"), JSON.parse('["3WOOB","index.f03b55ae.js","8rs0F","nav-bar_script.ca542f82.js","3r7Kb","scroll-to-top_script.860bcca7.js","jEeSe","puzzle_svg.c7fea249.js","dVhTq","computer_svg.3d6a29ce.js","ccXVW","projects_svg.e104629f.js"]'));

});
parcelRegister("9xqYB", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf; }, function (v) { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $6f1c1f1b2dada3ed$export$f7ad0328861e2f03; }, function (v) { return $6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = v; });
var $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf;
var $6f1c1f1b2dada3ed$export$f7ad0328861e2f03;
"use strict";
var $6f1c1f1b2dada3ed$var$mapping = new Map();
function $6f1c1f1b2dada3ed$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$6f1c1f1b2dada3ed$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $6f1c1f1b2dada3ed$var$resolve(id) {
    var resolved = $6f1c1f1b2dada3ed$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = $6f1c1f1b2dada3ed$var$register;
$6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = $6f1c1f1b2dada3ed$var$resolve;

});

parcelRegister("cHmwT", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $93eafa1434f2e08a$export$bdfd709ae4826697; }, function (v) { return $93eafa1434f2e08a$export$bdfd709ae4826697 = v; });
var $93eafa1434f2e08a$export$bdfd709ae4826697;
var $93eafa1434f2e08a$export$c9e73fbda7da57b6;
var $93eafa1434f2e08a$export$5a759dc7a1cfb72a;
"use strict";
var $93eafa1434f2e08a$var$bundleURL = {};
function $93eafa1434f2e08a$var$getBundleURLCached(id) {
    var value = $93eafa1434f2e08a$var$bundleURL[id];
    if (!value) {
        value = $93eafa1434f2e08a$var$getBundleURL();
        $93eafa1434f2e08a$var$bundleURL[id] = value;
    }
    return value;
}
function $93eafa1434f2e08a$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $93eafa1434f2e08a$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $93eafa1434f2e08a$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $93eafa1434f2e08a$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$93eafa1434f2e08a$export$bdfd709ae4826697 = $93eafa1434f2e08a$var$getBundleURLCached;
$93eafa1434f2e08a$export$c9e73fbda7da57b6 = $93eafa1434f2e08a$var$getBaseURL;
$93eafa1434f2e08a$export$5a759dc7a1cfb72a = $93eafa1434f2e08a$var$getOrigin;

});


parcelRegister("fCwMo", function(module, exports) {


module.exports = (parcelRequire("iZaa8"))((parcelRequire("9xqYB")).resolve("8rs0F")).then(()=>parcelRequire("1KDeX"));

});
parcelRegister("iZaa8", function(module, exports) {
"use strict";

var $aj6Nf = parcelRequire("aj6Nf");
module.exports = $aj6Nf(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

});
parcelRegister("aj6Nf", function(module, exports) {
"use strict";
var $7810f2bc935532b7$var$cachedBundles = {};
var $7810f2bc935532b7$var$cachedPreloads = {};
var $7810f2bc935532b7$var$cachedPrefetches = {};
function $7810f2bc935532b7$var$getCache(type) {
    switch(type){
        case "preload":
            return $7810f2bc935532b7$var$cachedPreloads;
        case "prefetch":
            return $7810f2bc935532b7$var$cachedPrefetches;
        default:
            return $7810f2bc935532b7$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $7810f2bc935532b7$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});



parcelRegister("aOyTx", function(module, exports) {


module.exports = (parcelRequire("iZaa8"))((parcelRequire("9xqYB")).resolve("3r7Kb")).then(()=>parcelRequire("1a4Ip"));

});

parcelRegister("a9uY7", function(module, exports) {


module.exports = (parcelRequire("iZaa8"))((parcelRequire("9xqYB")).resolve("jEeSe")).then(()=>parcelRequire("gSKVC"));

});

parcelRegister("YWvx1", function(module, exports) {


module.exports = (parcelRequire("iZaa8"))((parcelRequire("9xqYB")).resolve("dVhTq")).then(()=>parcelRequire("c0O6E"));

});

parcelRegister("2Ga6O", function(module, exports) {


module.exports = (parcelRequire("iZaa8"))((parcelRequire("9xqYB")).resolve("ccXVW")).then(()=>parcelRequire("eg317"));

});



parcelRequire("6LUSR");
})();
parcelRequirec8c2("fCwMo").then();
parcelRequirec8c2("aOyTx").then();
parcelRequirec8c2("a9uY7").then();
parcelRequirec8c2("YWvx1").then();
parcelRequirec8c2("2Ga6O").then();
const OBSERVER_OPTIONS = {
    rootMargin: "0px",
    threshold: 0.8
};
const observer = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if (element.isIntersecting) element.target.classList.add("scroll--show");
        else element.target.classList.remove("scroll--show");
    });
}, OBSERVER_OPTIONS);
const hideElements = document.querySelectorAll(".scroll--hide");
hideElements.forEach((e)=>observer.observe(e));
const observerOnce = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if (element.isIntersecting) element.target.classList.add("scroll--show--once");
    });
}, OBSERVER_OPTIONS);
const hideElementsOnce = document.querySelectorAll(".scroll--hide--once");
hideElementsOnce.forEach((e)=>observerOnce.observe(e));

//# sourceMappingURL=index.f03b55ae.js.map