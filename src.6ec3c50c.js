// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"storage-system/src/storage/storage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.load = void 0;
var load = exports.load = function load(key) {
  try {
    var serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};
var save = exports.save = function save(key, value) {
  try {
    var serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Set state error: ", err);
  }
};
},{}],"nvsdjvdj.json":[function(require,module,exports) {
module.exports = {
  "skps": [{
    "name": "SCP-049",
    "url": "https://scp-wiki.wikidot.com/scp-049",
    "id": "1eac"
  }, {
    "name": "SCP-500",
    "url": "https://scp-wiki.wikidot.com/scp-500",
    "id": "282e"
  }, {
    "name": "SCP-1344",
    "url": "https://scp-wiki.wikidot.com/scp-1344",
    "id": "aaa9"
  }, {
    "name": "Departments",
    "url": "https://scp-wiki.wikidot.com/departments",
    "id": "29c3"
  }, {
    "name": "List of Foundation's Internal Departments",
    "url": "https://scp-wiki.wikidot.com/list-of-foundation-s-internal-departments#toc0",
    "id": "146a"
  }, {
    "name": "O5 Command Dossier",
    "url": "https://scp-wiki.wikidot.com/o5-command-dossier",
    "id": "d97e"
  }, {
    "name": "Personnel and Character Dossier",
    "url": "https://scp-wiki.wikidot.com/personnel-and-character-dossier",
    "id": "cc0d"
  }, {
    "name": "K-Class Complete List",
    "url": "https://scp-wiki.wikidot.com/k-class-complete-list",
    "id": "4685"
  }, {
    "name": "SCP-173",
    "url": "https://scp-wiki.wikidot.com/scp-173",
    "id": "fac3"
  }, {
    "name": "Species Complete List",
    "url": "https://scp-wiki.wikidot.com/species-complete-list#toc12",
    "id": "b371"
  }, {
    "name": "Task Forces",
    "url": "https://scp-wiki.wikidot.com/task-forces",
    "id": "c335"
  }, {
    "name": "GOC Complete List",
    "url": "https://scp-wiki.wikidot.com/goi-complete-list",
    "id": "224f"
  }, {
    "name": "Lockdown Procedures",
    "url": "https://scp-wiki.wikidot.com/lockdown-procedures",
    "id": "33a2"
  }, {
    "name": "Departments Complete List",
    "url": "https://scp-wiki.wikidot.com/departments-complete-list",
    "id": "fc1b"
  }, {
    "name": "K-Class Complete List (again)",
    "url": "https://scp-wiki.wikidot.com/k-class-complete-list",
    "id": "c68e"
  }, {
    "name": "Task Forces Complete List",
    "url": "https://scp-wiki.wikidot.com/task-forces-complete-list",
    "id": "a6ab"
  }, {
    "name": "Esoteric Classes Complete List",
    "url": "https://scp-wiki.wikidot.com/esoteric-classes-complete-list",
    "id": "dee7"
  }, {
    "name": "Alexandra Tag Page",
    "url": "https://scp-wiki.wikidot.com/system:page-tags/tag/alexandra",
    "id": "0839"
  }, {
    "name": "Nobody Hub",
    "url": "https://scp-wiki.wikidot.com/nobody-hub",
    "id": "5dcb"
  }, {
    "name": "Nobody's Business",
    "url": "https://scp-wiki.wikidot.com/nobody-s-business",
    "id": "ccf7"
  }, {
    "name": "Nobody Dies",
    "url": "https://scp-wiki.wikidot.com/nobody-dies",
    "id": "add8"
  }, {
    "name": "A Poem for Nobody",
    "url": "https://scp-wiki.wikidot.com/a-poem-for-nobody",
    "id": "1d61"
  }, {
    "name": "Audio Adaptations A-B",
    "url": "https://scp-wiki.wikidot.com/audio-adaptations#a-b",
    "id": "777d"
  }, {
    "name": "GOC Hub Page (Page 3)",
    "url": "https://scp-wiki.wikidot.com/goc-hub-page/p/3",
    "id": "501b"
  }, {
    "name": "SCP-4450",
    "url": "https://scp-wiki.wikidot.com/scp-4450",
    "id": "013c"
  }, {
    "name": "SCP-5514",
    "url": "https://scp-wiki.wikidot.com/scp-5514",
    "id": "e8f9"
  }, {
    "name": "Glossary of Terms",
    "url": "https://scp-wiki.wikidot.com/glossary-of-terms",
    "id": "716c"
  }, {
    "name": "SCP-914",
    "url": "https://scp-wiki.wikidot.com/scp-914",
    "id": "69d4"
  }, {
    "name": "Experiment Log 914 Hub",
    "url": "https://scp-wiki.wikidot.com/experiment-log-914-hub",
    "id": "27bb"
  }, {
    "name": "Apollyon Tag Page",
    "url": "https://scp-wiki.wikidot.com/system:page-tags/tag/apollyon#pages",
    "id": "bea5"
  }, {
    "name": "Updated Amnestics Guide",
    "url": "https://scp-wiki.wikidot.com/updated-amnestics-guide",
    "id": "7aa5"
  }, {
    "name": "Archived Security Clearance Levels",
    "url": "https://scp-wiki.wikidot.com/archived:security-clearance-levels",
    "id": "a84d"
  }, {
    "name": "Things New Level-3 Researchers Should Know",
    "url": "https://scp-wiki.wikidot.com/things-new-level-3-researchers-should-know",
    "id": "a2de"
  }, {
    "name": "Hello Muddah",
    "url": "https://scp-wiki.wikidot.com/hellomuddah",
    "id": "b223"
  }, {
    "name": "Security Clearance Levels (Section 5)",
    "url": "https://scp-wiki.wikidot.com/security-clearance-levels#toc5",
    "id": "fbeb"
  }, {
    "name": "GOC Supplemental Strike Teams",
    "url": "https://scp-wiki.wikidot.com/goc-supplemental-strike-teams",
    "id": "0585"
  }, {
    "name": "GOC Hub Page",
    "url": "https://scp-wiki.wikidot.com/goc-hub-page",
    "id": "a593"
  }, {
    "name": "Captain Kirby's Proposal",
    "url": "https://scp-wiki.wikidot.com/captain-kirby-s-proposal",
    "id": "2604"
  }, {
    "name": "SCP-001",
    "url": "https://scp-wiki.wikidot.com/scp-001",
    "id": "cc44"
  }, {
    "name": "Orgy-5 Counsel-9",
    "url": "https://scp-wiki.wikidot.com/orgy-5-counsel-9",
    "id": "53c3"
  }, {
    "name": "Liz the GM's Proposal",
    "url": "https://scp-wiki.wikidot.com/liz-the-gm-s-proposal",
    "id": "3dae"
  }, {
    "name": "Secure Facility Dossier Area-14",
    "url": "https://scp-wiki.wikidot.com/secure-facility-dossier-area-14",
    "id": "8f01"
  }, {
    "name": "SCP-207",
    "url": "https://scp-wiki.wikidot.com/scp-207",
    "id": "13fb"
  }, {
    "name": "Resource Tag Page",
    "url": "https://scp-wiki.wikidot.com/system:page-tags/tag/resource#pages",
    "id": "91d8"
  }, {
    "name": "Essay Resource Hub",
    "url": "https://scp-wiki.wikidot.com/essay-resource-hub",
    "id": "f7e6"
  }, {
    "name": "Memetics and Infohazards Division Orientation",
    "url": "https://scp-wiki.wikidot.com/memetics-and-infohazards-division-orientation",
    "id": "aff5"
  }, {
    "name": "List of Foundation's Internal Departments (Section 8)",
    "url": "https://scp-wiki.wikidot.com/list-of-foundation-s-internal-departments#toc8",
    "id": "ab13"
  }, {
    "name": "And This One Explains Humes",
    "url": "https://scp-wiki.wikidot.com/and-this-one-explains-humes",
    "id": "b100"
  }, {
    "name": "An FAQ Part Two: Your Hume Questions Answered",
    "url": "https://scp-wiki.wikidot.com/an-faq-part-two-or-your-hume-questions-answered",
    "id": "72dd"
  }, {
    "id": "91d9",
    "name": "SCP-3114",
    "url": "https://scp-wiki.wikidot.com/scp-3114"
  }, {
    "id": "6c3b",
    "name": "Nobody likes snake",
    "url": "https://scp-wiki.wikidot.com/nobody-likes-a-sneak"
  }, {
    "id": "99b7",
    "name": "SCP-2521 Villians",
    "url": "https://villains.fandom.com/wiki/SCP-2521"
  }, {
    "id": "28b0",
    "name": "SCP-2521",
    "url": "https://scp-wiki.wikidot.com/scp-2521"
  }, {
    "id": "d077",
    "name": "SCP-3000",
    "url": "https://scp-wiki.wikidot.com/scp-3000"
  }, {
    "id": "8e41",
    "name": "Updated Amnestics Guide",
    "url": "https://scp-wiki.wikidot.com/updated-amnestics-guide"
  }, {
    "id": "dbb5",
    "name": "A Laymen's Guide to Tagging",
    "url": "https://scp-wiki.wikidot.com/a-laymen-s-guide-to-tagging"
  }, {
    "id": "9569",
    "name": "Guide Hub",
    "url": "https://scp-wiki.wikidot.com/guide-hub"
  }, {
    "id": "d7c9",
    "name": "Обновлённая классификация амнезиаков",
    "url": "https://scpfoundation.net/updated-amnestics-guide"
  }, {
    "id": "7ddb",
    "name": "Facilities locations",
    "url": "https://scp-wiki.wikidot.com/secure-facilities-locations"
  }, {
    "id": "cfb9",
    "name": "Sandbox",
    "url": "https://scp-sandbox-3.wikidot.com/"
  }, {
    "id": "aeb3",
    "name": "Kiryu Labs Hub",
    "url": "https://scp-wiki.wikidot.com/kiryu-labs-hub"
  }, {
    "id": "8fea",
    "name": "SCP-CN-2626",
    "url": "https://scp-wiki.wikidot.com/scp-cn-2626"
  }, {
    "id": "fec7",
    "name": "Site-19 Facility 23 Dossier",
    "url": "https://scp-wiki.wikidot.com/experiment-log-914-hub"
  }]
};
},{}],"node_modules/nanoid/url-alphabet/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlAlphabet = void 0;
var urlAlphabet = exports.urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
},{}],"node_modules/nanoid/index.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.nanoid = exports.customRandom = exports.customAlphabet = void 0;
Object.defineProperty(exports, "urlAlphabet", {
  enumerable: true,
  get: function () {
    return _index.urlAlphabet;
  }
});
var _index = require("./url-alphabet/index.js");
/* @ts-self-types="./index.d.ts" */

var random = exports.random = function random(bytes) {
  return crypto.getRandomValues(new Uint8Array(bytes));
};
var customRandom = exports.customRandom = function customRandom(alphabet, defaultSize, getRandom) {
  var mask = (2 << Math.log2(alphabet.length - 1)) - 1;
  var step = -~(1.6 * mask * defaultSize / alphabet.length);
  return function () {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
    var id = '';
    while (true) {
      var bytes = getRandom(step);
      var j = step | 0;
      while (j--) {
        id += alphabet[bytes[j] & mask] || '';
        if (id.length >= size) return id;
      }
    }
  };
};
var customAlphabet = exports.customAlphabet = function customAlphabet(alphabet) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  return customRandom(alphabet, size | 0, random);
};
var nanoid = exports.nanoid = function nanoid() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
  var id = '';
  var bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
  while (size--) {
    id += _index.urlAlphabet[bytes[size] & 63];
  }
  return id;
};
},{"./url-alphabet/index.js":"node_modules/nanoid/url-alphabet/index.js"}],"storage-system/src/storage/index.js":[function(require,module,exports) {
"use strict";

var _nvsdjvdj = _interopRequireDefault(require("../../../nvsdjvdj.json"));
var _nanoid = require("nanoid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _require = require('./storage'),
  load = _require.load,
  save = _require.save;
module.exports = {
  load: load,
  save: save
};
var sigmaDiv = document.querySelector(".gallery");
var sigmaForm = document.getElementById("sigma__form");
var input = document.getElementById("sigma__input");
var inputUrl = document.getElementById("sigma__input--url");
var listSW = document.querySelector("#scpW");
var listOW = document.querySelector("#otherW");
save("scps", _nvsdjvdj.default);
var ssaps = load("scps").skps;
console.log(ssaps);
ssaps.forEach(function (scp) {
  getScps(scp.name, scp.url);
});
function getScps(name, url) {
  var listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  var link = document.createElement("a");
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete__button");
  if (name.includes("SCP")) {
    listSW.appendChild(listItem);
    deleteButton.textContent = "Annihilate";
  } else {
    listItem.classList.add("other__item");
    listOW.appendChild(listItem);
    deleteButton.textContent = "Delete";
  }
  link.href = url;
  link.textContent = name;
  link.target = "_blank";
  link.classList.add("gallery__link");
  listItem.appendChild(link);
  listItem.appendChild(deleteButton);
}
sigmaDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery__item")) {
    var _link = e.target.children[0];
    window.open(_link.href, _link.target);
  }
  var link = item.querySelector(".gallery__link");
  window.open(link.href, link.target);
});
sigmaForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(ssaps);
  setTimeout(function () {
    if (input && inputUrl) {
      addScp(input, inputUrl);
      input.value = "";
      inputUrl.value = "";
    } else {
      alert("Please enter both a name and a URL.");
    }
  }, 1000);
});
function addScp(input, inputUrl) {
  var nameS = input.value.trim();
  var urlS = inputUrl.value.trim();
  if (nameS && urlS) {
    var newScp = {
      name: nameS,
      url: urlS,
      id: (0, _nanoid.nanoid)()
    };
    console.log(ssaps);
    ssaps.push(newScp);
    console.log(ssaps);
    // skps.stringify(ssaps, null, 2);

    input.value = "";
    inputUrl.value = "";
    getScps(newScp.name, newScp.url);
  } else {
    alert("Please enter both a name and a URL.");
  }
}
},{"./storage":"storage-system/src/storage/storage.js","../../../nvsdjvdj.json":"nvsdjvdj.json","nanoid":"node_modules/nanoid/index.browser.js"}],"storage-system/src/index.js":[function(require,module,exports) {
var _require = require('./storage'),
  save = _require.save,
  load = _require.load;
function init() {
  // Initialize any necessary components or configurations here
  console.log("Storage system initialized.");
}

// Example usage of the storage functions
var exampleData = {
  key: 'value'
};
save('exampleKey', exampleData);
var loadedData = load('exampleKey');
console.log('Loaded data:', loadedData);
init();
},{"./storage":"storage-system/src/storage/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50019" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","storage-system/src/index.js"], null)
//# sourceMappingURL=/src.6ec3c50c.js.map