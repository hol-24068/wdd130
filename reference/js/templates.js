var OneTrustStub = (t => {
    var e, a, o, r, i, l = new function() {
        this.optanonCookieName = "OptanonConsent",
        this.optanonHtmlGroupData = [],
        this.optanonHostData = [],
        this.genVendorsData = [],
        this.vendorsServiceData = [],
        this.IABCookieValue = "",
        this.oneTrustIABCookieName = "eupubconsent",
        this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal",
        this.isStubReady = !0,
        this.geolocationCookiesParam = "geolocation",
        this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"],
        this.stubFileName = "otSDKStub",
        this.DATAFILEATTRIBUTE = "data-domain-script",
        this.bannerScriptName = "otBannerSdk.js",
        this.domPurifyScriptName = "otDomPurify.js",
        this.mobileOnlineURL = [],
        this.isMigratedURL = !1,
        this.migratedCCTID = "[[OldCCTID]]",
        this.migratedDomainId = "[[NewDomainId]]",
        this.userLocation = {
            country: "",
            state: "",
            stateName: ""
        }
    }
    , s = ((A = e = e || {})[A.Days = 1] = "Days",
    A[A.Weeks = 7] = "Weeks",
    A[A.Months = 30] = "Months",
    A[A.Years = 365] = "Years",
    (A = i = i || {}).GDPR = "GDPR",
    A.CCPA = "CCPA",
    A.IAB2 = "IAB2",
    A.IAB2V2 = "IAB2V2",
    A.GENERIC = "GENERIC",
    A.LGPD = "LGPD",
    A.GENERIC_PROMPT = "GENERIC_PROMPT",
    A.CPRA = "CPRA",
    A.CDPA = "CDPA",
    A.DELAWARE = "DELAWARE",
    A.IOWA = "IOWA",
    A.NEBRASKA = "NEBRASKA",
    A.USNATIONAL = "USNATIONAL",
    A.CUSTOM = "CUSTOM",
    A.FLORIDA = "FLORIDA",
    A.COLORADO = "COLORADO",
    A.CONNECTICUT = "CTDPA",
    A.MONTANA = "MONTANA",
    A.TEXAS = "TEXAS",
    A.OREGON = "OREGON",
    A.TENNESSEE = "TENNESSEE",
    A.NEWJERSEY = "NEWJERSEY",
    A.NEWHAMPSHIRE = "NEWHAMPSHIRE",
    A.UCPA = "UCPA",
    A.VIRGINIA = "VIRGINIA",
    i.CPRA,
    i.CDPA,
    i.COLORADO,
    i.OREGON,
    i.CONNECTICUT,
    i.FLORIDA,
    i.MONTANA,
    i.TEXAS,
    i.DELAWARE,
    i.IOWA,
    i.NEBRASKA,
    i.TENNESSEE,
    i.NEWJERSEY,
    i.NEWHAMPSHIRE,
    i.UCPA,
    (A = E = E || {}).Name = "OTGPPConsent",
    A[A.ChunkSize = 4e3] = "ChunkSize",
    A.ChunkCountParam = "GPPCookiesCount",
    (i = a = a || {}).CPRA = "usca",
    i.CCPA = "usca",
    i.CDPA = "usva",
    i.OREGON = "usor",
    i.USNATIONAL = "usnat",
    i.COLORADO = "usco",
    i.FLORIDA = "usfl",
    i.CTDPA = "usct",
    i.MONTANA = "usmt",
    i.TEXAS = "ustx",
    i.DELAWARE = "usde",
    i.IOWA = "usia",
    i.NEBRASKA = "usne",
    i.TENNESSEE = "ustn",
    i.NEWJERSEY = "usnj",
    i.NEWHAMPSHIRE = "usnh",
    i.UCPA = "usut",
    i.VIRGINIA = "usva",
    i.IAB2V2 = "tcfeuv2",
    (A = o = o || {})[A.CPRA = 8] = "CPRA",
    A[A.CCPA = 8] = "CCPA",
    A[A.CDPA = 9] = "CDPA",
    A[A.OREGON = 15] = "OREGON",
    A[A.USNATIONAL = 7] = "USNATIONAL",
    A[A.COLORADO = 10] = "COLORADO",
    A[A.FLORIDA = 13] = "FLORIDA",
    A[A.MONTANA = 14] = "MONTANA",
    A[A.TEXAS = 16] = "TEXAS",
    A[A.DELAWARE = 17] = "DELAWARE",
    A[A.IOWA = 18] = "IOWA",
    A[A.NEBRASKA = 19] = "NEBRASKA",
    A[A.NEWHAMPSHIRE = 20] = "NEWHAMPSHIRE",
    A[A.NEWJERSEY = 21] = "NEWJERSEY",
    A[A.TENNESSEE = 22] = "TENNESSEE",
    A[A.UCPA = 11] = "UCPA",
    A[A.VIRGINIA = 9] = "VIRGINIA",
    A[A.CTDPA = 12] = "CTDPA",
    A[A.IAB2V2 = 2] = "IAB2V2",
    "geo"), u = "otpreview", p = (E.Name,
    "PRODUCTION"), n = (0,
    e.Days,
    e.Weeks,
    e.Months,
    e.Years,
    c.prototype.camelize = function(t) {
        return (t = t.replace("--", "")).split("-").map(function(t, e) {
            var i = t ? t[0].toUpperCase() + t.slice(1) : "";
            return 0 === e ? t : i
        }).join("")
    }
    ,
    c.prototype.strToObj = function(t) {
        for (var e = {}, i = t.split(";").map(function(t) {
            return t.trim()
        }), n = 0, a = void 0; n < i.length; ++n)
            if (/:/.test(i[n])) {
                if (!(a = i[n].split(/:(.+)/))[1])
                    return null;
                e[this.camelize(a[0])] = a[1].trim()
            }
        return e
    }
    ,
    c);
    function c() {
        var t = this;
        this.implementThePolyfill = function() {
            var a = t
              , o = Element.prototype.setAttribute;
            return Element.prototype.setAttribute = function(t, e) {
                if ("style" !== t.toLowerCase() && o.apply(this, [t, e]),
                "style" !== t.toLowerCase() || e || this.removeAttribute("style"),
                "style" === t.toLowerCase() && e) {
                    this.removeAttribute("style");
                    var i, n = a.strToObj(e);
                    for (i in n)
                        this.style[i] = n[i]
                }
            }
            ,
            !0
        }
    }
    function d(t, e, i) {
        void 0 === i && (i = !1);
        function n(t) {
            return t ? (";" !== (t = t.trim()).charAt(t.length - 1) && (t += ";"),
            t.trim()) : null
        }
        var o = n(t.getAttribute("style"))
          , s = n(e)
          , e = ""
          , e = i && o ? ( () => {
            for (var t = o.split(";").concat(s.split(";")).filter(function(t) {
                return 0 !== t.length
            }), e = "", i = "", n = t.length - 1; 0 <= n; n--) {
                var a = t[n].substring(0, t[n].indexOf(":") + 1).trim();
                e.indexOf(a) < 0 && (e += a,
                i += t[n] + ";")
            }
            return i
        }
        )() : s;
        t.setAttribute("style", e)
    }
    (i = r = r || {}).ping = "ping",
    i.addEventListener = "addEventListener",
    i.removeEventListener = "removeEventListener",
    i.hasSection = "hasSection",
    i.getSection = "getSection",
    i.getField = "getField",
    i.getGPPData = "getGPPData";
    var m = new function() {
        var s = this;
        this.LOCATOR_NAME = "__gppLocator",
        this.win = window,
        this.customInit = "CUSTOMINIT",
        this.init = function() {
            s.win.__gpp && "function" == typeof s.win.__gpp || (s.win.__gpp = s.executeGppApi,
            window.addEventListener("message", s.messageHandler, !1),
            s.addFrame(s.LOCATOR_NAME))
        }
        ,
        this.removeGppApi = function() {
            delete s.win.__gpp;
            var t = document.querySelectorAll("iframe[name=" + s.LOCATOR_NAME + "]")[0];
            t && t.parentElement.removeChild(t)
        }
        ,
        this.executeGppApi = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            var i = null == (i = s.win) ? void 0 : i.__gpp;
            if (i.queue = i.queue || [],
            i.events = i.events || [],
            !t.length || 1 === t.length && "queue" === t[0])
                return i.queue;
            if (1 === t.length && "events" === t[0])
                return i.events;
            var n = t[0]
              , a = 1 < t.length ? t[1] : null
              , o = 2 < t.length ? t[2] : null;
            switch (n) {
            case r.ping:
                return s.getPingRequest(a);
            case r.addEventListener:
                return s.addEventListener(a, o);
            case r.removeEventListener:
                return s.removeEventListener(o);
            default:
                return void s.addToQueue(n, a, o)
            }
        }
        ,
        this.getPingRequest = function(t) {
            var i, n, e = {
                gppVersion: 1.1,
                cmpStatus: "stub",
                cmpDisplayStatus: "hidden",
                signalStatus: "not ready",
                supportedAPIs: (i = [],
                n = {},
                Object.keys(o).forEach(function(t) {
                    var e = {}
                      , t = (e[t] = o[t],
                    Object.assign(e, n));
                    n = t
                }),
                Object.keys(a).map(function(t) {
                    return {
                        name: t,
                        value: a[t]
                    }
                }).forEach(function(t) {
                    t = n[t.name] + ":" + t.value;
                    i.push(t)
                }),
                i.filter(function(t, e) {
                    return i.indexOf(t) === e
                })),
                currentAPI: "",
                cmpId: Number.parseInt("28"),
                sectionList: [],
                applicableSections: [0],
                gppString: "",
                parsedSections: {}
            };
            return t && t(e, !0),
            e
        }
        ,
        this.addFrame = function(t) {
            var e, i = s.win.document, n = Boolean(s.win.frames[t]);
            return n || (i.body ? ((e = i.createElement("iframe")).style.cssText = "display:none",
            e.name = t,
            e.setAttribute("title", "GPP Locator"),
            i.body.appendChild(e)) : setTimeout(function() {
                s.addFrame(t)
            }, 5)),
            !n
        }
        ,
        this.addEventListener = function(t, e) {
            var i, n = s.win.__gpp;
            return n.events = n.events || [],
            null != (i = n) && i.lastId || (n.lastId = 0),
            n.lastId++,
            n.events.push({
                id: n.lastId,
                callback: t,
                parameter: e
            }),
            {
                eventName: "listenerRegistered",
                listenerId: n.lastId,
                data: !0,
                pingData: s.getPingRequest()
            }
        }
        ,
        this.removeEventListener = function(e) {
            var i = !1
              , t = s.win.__gpp;
            return t.events = t.events || [],
            t.events = t.events.filter(function(t) {
                return t.id.toString() !== e.toString() || !(i = !0)
            }),
            {
                eventName: "listenerRemoved",
                listenerId: e,
                data: i,
                pingData: s.getPingRequest()
            }
        }
        ,
        this.addToQueue = function(t, e, i) {
            var n = s.win.__gpp;
            n.queue = n.queue || [],
            n.queue.push([t, e, i])
        }
        ,
        this.messageHandler = function(i) {
            var e, n, a = "string" == typeof i.data;
            try {
                e = a ? JSON.parse(i.data) : i.data
            } catch (t) {
                e = null
            }
            e && e.__gppCall && (n = e.__gppCall,
            (0,
            s.win.__gpp)(n.command, function(t, e) {
                t = {
                    __gppReturn: {
                        returnValue: t,
                        success: e,
                        callId: n.callId
                    }
                };
                i && i.source && i.source.postMessage && i.source.postMessage(a ? JSON.stringify(t) : t, i.origin || "*")
            }, n.parameter))
        }
        ,
        this.customInit || this.init()
    }
      , h = (g.initCSPTrustedType = function(t) {
        var n = new URL(t);
        window.DOMPurify && window.trustedTypes && window.trustedTypes.createPolicy && (window.OtTrustedType.TrustedTypePolicy = window.trustedTypes.createPolicy("ot-trusted-type-policy", {
            createHTML: function(t) {
                return window.DOMPurify.sanitize(t)
            },
            createScript: function(t) {
                return window.DOMPurify.sanitize(t)
            },
            createScriptURL: function(t) {
                var e, i = [document.location.hostname, n.hostname];
                try {
                    e = new URL(t,location.origin)
                } catch (t) {
                    return "about:blank#error"
                }
                return e.hostname && !i.includes(e.hostname) ? "about:blank#blocked" : e.href
            }
        }))
    }
    ,
    g.isCspTrustedType = function() {
        var t;
        return (null == (t = window.OtTrustedType) ? void 0 : t.isCspTrustedTypeEnabled) && (null == (t = window.OtTrustedType) ? void 0 : t.TrustedTypePolicy)
    }
    ,
    g.createScriptURL = function(t) {
        return g.isCspTrustedType() ? window.OtTrustedType.TrustedTypePolicy.createScriptURL(t) : t
    }
    ,
    g.checkAndAssignCspTrustedTypeEnabled = function(t) {
        t = null == (t = t.TenantFeatures) ? void 0 : t.CookieV2CSPTrustedType;
        return window.OtTrustedType = {
            isCspTrustedTypeEnabled: t
        },
        t
    }
    ,
    g);
    function g() {}
    f.prototype.initConsentSDK = function() {
        this.initCustomEventPolyfill(),
        this.ensureHtmlGroupDataInitialised(),
        this.setStubScriptElement(),
        this.setOTDataLayer(),
        this.getParam(),
        this.fetchBannerSDKDependency(),
        this.captureNonce()
    }
    ,
    f.prototype.captureNonce = function() {
        this.nonce = l.stubScriptElement.nonce || l.stubScriptElement.getAttribute("nonce") || null
    }
    ,
    f.prototype.fetchBannerSDKDependency = function() {
        this.setDomainDataFileURL(),
        this.crossOrigin = l.stubScriptElement.getAttribute("crossorigin") || null,
        this.previewMode = "true" === l.stubScriptElement.getAttribute("data-preview-mode"),
        this.otFetch(l.bannerDataParentURL, this.getLocation.bind(this))
    }
    ,
    f.prototype.setDomainIfBulkDomainEnabled = function(t) {
        var e = t && t.TenantFeatures
          , i = window.location.hostname
          , n = t.Domain
          , a = t.BulkDomainCheckUrl;
        e && e.CookieV2BulkDomainManagement && i !== n && t.ScriptType === p && ((e = window.sessionStorage) && e.getItem("bulkDomainMgmtEnabled") ? this.handleBulkDomainMgmt({
            isValid: "true" === window.sessionStorage.getItem("bulkDomainMgmtEnabled")
        }, t) : (n = {
            location: l.storageBaseURL.replace(/^https?:\/\//, ""),
            domainId: this.domainId,
            url: i
        },
        this.otFetch(a, this.handleBulkDomainMgmt, !1, n, t)))
    }
    ,
    f.prototype.getLocation = function(t) {
        if (this.setDomainIfBulkDomainEnabled(t),
        this.updateVersion(t),
        (t.TenantFeatures && t.TenantFeatures.CookieV2CSP || t.CookieV2CSPEnabled) && this.nonce && (this.setAttributePolyfillIsActive = !0,
        (new n).implementThePolyfill()),
        h.checkAndAssignCspTrustedTypeEnabled(t) && h.initCSPTrustedType(l.storageBaseURL),
        !t.RuleSet[0].Type)
            return this.iabTypeAdded = !1,
            window.__tcfapi = this.executeTcfApi,
            this.intializeIabStub(),
            this.addBannerSDKScript(t);
        var e, i = window;
        i.OneTrust && i.OneTrust.geolocationResponse ? (i = i.OneTrust.geolocationResponse,
        this.setGeoLocation(i.countryCode, i.stateCode, i.stateName),
        this.addBannerSDKScript(t)) : (i = this.readCookieParam(l.optanonCookieName, l.geolocationCookiesParam)) || t.SkipGeolocation ? (e = i.split(";")[0],
        i = i.split(";")[1],
        this.setGeoLocation(e, i),
        this.addBannerSDKScript(t)) : this.getGeoLocation(t)
    }
    ,
    f.prototype.handleBulkDomainMgmt = function(t, e) {
        window.sessionStorage && window.sessionStorage.setItem("bulkDomainMgmtEnabled", JSON.stringify(t.isValid)),
        t.isValid && (e.Domain = window.location.hostname)
    }
    ,
    f.prototype.getGeolocationURL = function(t) {
        t.TenantFeatures;
        var e = "" + l.stubScriptElement.getAttribute("src").split(l.stubFileName)[0] + t.Version;
        return new RegExp("^file://","i").test(e) && t.MobileSDK ? (e = "/" + t.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js",
        l.storageBaseURL + e) : t.GeolocationUrl
    }
    ,
    f.prototype.geoLocationJsonCallback = function(t, e) {
        e && this.setGeoLocation(e.country, e.state, e.stateName),
        this.addBannerSDKScript(t)
    }
    ,
    f.prototype.getGeoLocation = function(t) {
        var e = this.getGeolocationURL(t);
        this.otFetch(e, this.geoLocationJsonCallback.bind(this, t), !0)
    }
    ,
    f.prototype.setOTDataLayer = function() {
        var t = "data-dLayer-ignore"
          , e = l.stubScriptElement.hasAttribute(t)
          , t = l.stubScriptElement.getAttribute(t);
        this.otDataLayer = {
            ignore: e && "true" === t || e && "" === t,
            name: l.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer"
        }
    }
    ,
    f.prototype.setGeoLocation = function(t, e, i) {
        l.userLocation = {
            country: t,
            state: e = void 0 === e ? "" : e,
            stateName: i = void 0 === i ? "" : i
        }
    }
    ,
    f.prototype.otFetch = function(t, i, e, n, a) {
        void 0 === e && (e = !1),
        void 0 === n && (n = null);
        var o = window.sessionStorage && window.sessionStorage.getItem("otPreviewData");
        if (new RegExp("^file://","i").test(t))
            this.otFetchOfflineFile(t, i);
        else if (0 <= t.indexOf("/consent/") && this.previewMode && o) {
            o = JSON.parse(o).domainJson;
            i(o)
        } else {
            l.mobileOnlineURL.push(t);
            var s = new XMLHttpRequest;
            if (s.onload = function(t) {
                var e;
                this && this.responseText ? e = this.responseText : t && t.target && (e = t.target.responseText),
                a ? i(JSON.parse(e), a) : i(JSON.parse(e))
            }
            ,
            s.onerror = function() {
                i()
            }
            ,
            s.open("GET", t),
            s.withCredentials = !1,
            e && s.setRequestHeader("accept", "application/json"),
            n)
                for (var r in n)
                    s.setRequestHeader(r, n[r]);
            s.send()
        }
    }
    ,
    f.prototype.otFetchOfflineFile = function(t, e) {
        var i = (t = t.replace(".json", ".js")).split("/")
          , n = i[i.length - 1].split(".js")[0];
        this.jsonp(t, function() {
            e(window[n])
        })
    }
    ,
    f.prototype.jsonp = function(t, e) {
        var i = document.createElement("script")
          , n = h.createScriptURL(t);
        i.setAttribute("src", n),
        this.nonce && i.setAttribute("nonce", this.nonce),
        i.async = !0,
        i.type = "text/javascript",
        this.crossOrigin && i.setAttribute("crossorigin", this.crossOrigin),
        document.getElementsByTagName("head")[0].appendChild(i),
        new RegExp("^file://","i").test(t) || l.mobileOnlineURL.push(t),
        e && (i.onload = i.onerror = function() {
            e()
        }
        )
    }
    ,
    f.prototype.getRegionSet = function(t) {
        var e, i, n, a = l.userLocation, o = t.RuleSet.filter(function(t) {
            return !0 === t.Default
        });
        if (!a.country && !a.state)
            return o && 0 < o.length ? o[0] : null;
        for (var s = a.state.toLowerCase(), r = a.country.toLowerCase(), u = 0; u < t.RuleSet.length; u++)
            if (!0 === t.RuleSet[u].Global)
                n = t.RuleSet[u];
            else {
                var p = t.RuleSet[u].States;
                if (p[r] && 0 <= p[r].indexOf(s)) {
                    i = t.RuleSet[u];
                    break
                }
                0 <= t.RuleSet[u].Countries.indexOf(r) && (e = t.RuleSet[u])
            }
        return i || e || n
    }
    ,
    f.prototype.ensureHtmlGroupDataInitialised = function() {
        this.initializeIABData(),
        this.initializeGroupData(),
        this.initializeHostData(),
        this.initializeGenVenData()
    }
    ,
    f.prototype.initializeGroupData = function() {
        var t = this.readCookieParam(l.optanonCookieName, "groups");
        t && (l.optanonHtmlGroupData = this.deserialiseStringToArray(t))
    }
    ,
    f.prototype.initializeHostData = function() {
        var t = this.readCookieParam(l.optanonCookieName, "hosts");
        t && (l.optanonHostData = this.deserialiseStringToArray(t))
    }
    ,
    f.prototype.initializeGenVenData = function() {
        var t = this.readCookieParam(l.optanonCookieName, "genVendors");
        t && (l.genVendorsData = this.deserialiseStringToArray(t))
    }
    ,
    f.prototype.initializeIABData = function() {
        this.validateIABGDPRApplied(),
        this.validateIABGlobalScope()
    }
    ,
    f.prototype.validateIABGlobalScope = function() {
        var t = this.readCookieParam(l.optanonCookieName, l.oneTrustIsIABCrossConsentEnableParam);
        t ? "true" === t ? (l.hasIABGlobalScope = !0,
        l.isStubReady = !1) : (l.hasIABGlobalScope = !1,
        l.IABCookieValue = this.getCookie(l.oneTrustIABCookieName)) : l.isStubReady = !1
    }
    ,
    f.prototype.validateIABGDPRApplied = function() {
        var t = this.readCookieParam(l.optanonCookieName, l.geolocationCookiesParam).split(";")[0];
        t ? this.isBoolean(t) ? l.oneTrustIABgdprAppliesGlobally = "true" === t : l.oneTrustIABgdprAppliesGlobally = 0 <= l.EUCOUNTRIES.indexOf(t) : l.isStubReady = !1
    }
    ,
    f.prototype.isBoolean = function(t) {
        return "true" === t || "false" === t
    }
    ,
    f.prototype.readCookieParam = function(t, e) {
        var i, n, a, o, t = this.getCookie(t);
        if (t) {
            for (n = {},
            a = t.split("&"),
            i = 0; i < a.length; i += 1)
                o = a[i].split("="),
                n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]).replace(/\+/g, " ");
            return e && n[e] ? n[e] : e && !n[e] ? "" : n
        }
        return ""
    }
    ,
    f.prototype.getCookie = function(t) {
        if (this.isAmp) {
            var e = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
            if (e)
                return e[t] || null
        }
        for (var i, n = t + "=", a = document.cookie.split(";"), o = 0; o < a.length; o += 1) {
            for (i = a[o]; " " == i.charAt(0); )
                i = i.substring(1, i.length);
            if (0 == i.indexOf(n))
                return i.substring(n.length, i.length)
        }
        return null
    }
    ,
    f.prototype.updateGtmMacros = function() {
        for (var t = [], e = l.optanonHtmlGroupData.length, i = 0; i < e; i++)
            this.endsWith(l.optanonHtmlGroupData[i], ":1") && t.push(l.optanonHtmlGroupData[i].replace(":1", ""));
        for (e = l.optanonHostData.length,
        i = 0; i < e; i++)
            this.endsWith(l.optanonHostData[i], ":1") && t.push(l.optanonHostData[i].replace(":1", ""));
        for (e = l.genVendorsData.length,
        i = 0; i < e; i++)
            this.endsWith(l.genVendorsData[i], ":1") && t.push(l.genVendorsData[i].replace(":1", ""));
        for (e = l.vendorsServiceData.length,
        i = 0; i < e; i++)
            this.endsWith(l.vendorsServiceData[i], ":1") && t.push(l.vendorsServiceData[i].replace(":1", ""));
        var n, a = "," + this.serialiseArrayToString(t) + ",", o = (window.OnetrustActiveGroups = a,
        window.OptanonActiveGroups = a,
        window), s = (this.otDataLayer.ignore || void 0 === o[this.otDataLayer.name] ? this.otDataLayer.ignore || (o[this.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: a
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: a
        }]) : o[this.otDataLayer.name].constructor === Array && (o[this.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: a
        }),
        o[this.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: a
        })),
        new CustomEvent("consent.onetrust",{
            detail: t
        }));
        !this.otDataLayer.ignore && t.length && (o[this.otDataLayer.name].constructor === Array && o[this.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: a
        }),
        n = new CustomEvent("OneTrustGroupsUpdated",{
            detail: t
        })),
        setTimeout(function() {
            t.length && window.dispatchEvent(s),
            n && window.dispatchEvent(n)
        })
    }
    ,
    f.prototype.deserialiseStringToArray = function(t) {
        return t ? t.split(",") : []
    }
    ,
    f.prototype.endsWith = function(t, e) {
        return -1 !== t.indexOf(e, t.length - e.length)
    }
    ,
    f.prototype.serialiseArrayToString = function(t) {
        return t.toString()
    }
    ,
    f.prototype.getStubQueryParam = function(t, e) {
        return !t || (t = t.split("?")).length < 2 ? null : new URLSearchParams(t[1]).get(e)
    }
    ,
    f.prototype.setStubScriptElement = function() {
        l.stubScriptElement = document.querySelector("script[src*='" + l.stubFileName + "']");
        var t = l.stubScriptElement && l.stubScriptElement.getAttribute("src")
          , t = t && this.getStubQueryParam(t, "did");
        l.stubScriptElement && l.stubScriptElement.hasAttribute(l.DATAFILEATTRIBUTE) ? this.domainId = l.stubScriptElement.getAttribute(l.DATAFILEATTRIBUTE).trim() : t ? this.domainId = t : l.stubScriptElement || (l.stubScriptElement = document.querySelector("script[src*='" + l.migratedCCTID + "']"),
        l.stubScriptElement && (l.isMigratedURL = !0,
        this.domainId = l.migratedDomainId.trim()))
    }
    ,
    f.prototype.setDomainDataFileURL = function() {
        var t = l.stubScriptElement.getAttribute("src")
          , e = -1 < t.indexOf("/consent");
        t && (l.isMigratedURL ? l.storageBaseURL = t.split("/consent/" + l.migratedCCTID)[0] : l.storageBaseURL = (e ? t.split("/consent") : t.split("/scripttemplates/" + l.stubFileName))[0]),
        this.storageBaseURL = l.storageBaseURL,
        this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1,
        l.bannerBaseDataURL = l.storageBaseURL && l.storageBaseURL + "/consent/" + this.domainId,
        l.bannerDataParentURL = l.bannerBaseDataURL + "/" + this.domainId + ".json"
    }
    ,
    f.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        function t(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
            i
        }
        t.prototype = window.Event.prototype,
        window.CustomEvent = t
    }
    ,
    f.prototype.removeTcf = function() {
        delete window.__tcfapi;
        var t = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
        t && t.parentElement.removeChild(t)
    }
    ,
    f.prototype.getParamForIE = function() {
        return {
            get: function(t) {
                t = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.search);
                return null === t ? null : decodeURI(t[1]) || ""
            }
        }
    }
    ,
    f.prototype.getParam = function() {
        window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
        var t = "true" === this.urlParams.get("otreset")
          , e = "true" === this.urlParams.get("otpreview")
          , i = (this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase(),
        this.readCookieParam(u, "expiry"))
          , n = this.readCookieParam(u, s);
        this.isReset = t || i && new Date(i) < new Date,
        this.isPreview = !this.isReset && (e || i && new Date(i) > new Date),
        this.setGeoParam(this.geoFromUrl || n)
    }
    ,
    f.prototype.setGeoParam = function(t) {
        var e;
        t && ((e = window).OneTrust || (e.OneTrust = {}),
        t = t.split(","),
        e.OneTrust.geolocationResponse = {
            countryCode: t[0],
            stateCode: t[1]
        })
    }
    ,
    f.prototype.updateVersion = function(t) {
        "debug" !== this.buildType && "cybuild" !== this.buildType || (t.Version = "202505.1.0")
    }
    ;
    var A = f;
    function f() {
        var s = this;
        this.iabType = null,
        this.iabTypeAdded = !0,
        this.crossOrigin = null,
        this.isAmp = !1,
        this.domainId = "",
        this.isReset = !1,
        this.isPreview = !1,
        this.geoFromUrl = "",
        this.nonce = "",
        this.setAttributePolyfillIsActive = !1,
        this.storageBaseURL = "",
        this.charset = null,
        this.buildType = "undefined",
        this.addBannerSDKScript = function(t) {
            var e = s.getRegionSet(t)
              , i = (e.GCEnable || (s.updateGtmMacros(),
            s.gtmUpdated = !0),
            s.iabTypeAdded && ("IAB2" !== e.Type && "IAB2V2" !== e.Type || (s.iabType = e.Type,
            s.intializeIabStub()),
            "IAB2" !== e.Type) && "IAB2V2" !== e.Type && s.removeTcf(),
            e.IsGPPEnabled ? m.init() : m.removeGppApi(),
            l.stubScriptElement.cloneNode(!0))
              , n = ""
              , n = t.UseSDKRefactor ? (l.isMigratedURL && (i.src = l.storageBaseURL + "/scripttemplates/new/scripttemplates/" + l.stubFileName + ".js"),
            l.storageBaseURL + "/scripttemplates/new/scripttemplates/" + t.Version + "/" + l.bannerScriptName) : "5.11.0" === t.Version ? (l.isMigratedURL && (i.src = l.storageBaseURL + "/scripttemplates/old/scripttemplates/" + l.stubFileName + ".js"),
            l.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + l.bannerScriptName) : (l.isMigratedURL && (i.src = l.storageBaseURL + "/scripttemplates/" + l.stubFileName + ".js"),
            l.storageBaseURL + "/scripttemplates/" + t.Version + "/" + l.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin", "data-ignore-ga"].forEach(function(t) {
                l.stubScriptElement.getAttribute(t) && i.setAttribute(t, l.stubScriptElement.getAttribute(t))
            }),
            s.charset = l.stubScriptElement.getAttribute("charset"),
            s.isAmp = !!l.stubScriptElement.getAttribute("amp"),
            window.otStubData = {
                bannerBaseDataURL: l.bannerBaseDataURL,
                crossOrigin: s.crossOrigin,
                domainData: t,
                domainId: s.domainId,
                geoFromUrl: s.geoFromUrl,
                isAmp: s.isAmp,
                isPreview: s.isPreview,
                isReset: s.isReset,
                mobileOnlineURL: l.mobileOnlineURL,
                nonce: s.nonce,
                otDataLayer: s.otDataLayer,
                regionRule: e,
                setAttributePolyfillIsActive: s.setAttributePolyfillIsActive,
                storageBaseURL: s.storageBaseURL,
                stubElement: i,
                urlParams: s.urlParams,
                userLocation: l.userLocation,
                gtmUpdated: s.gtmUpdated,
                previewMode: s.previewMode,
                charset: s.charset,
                stubUrl: l.stubScriptElement.getAttribute("src")
            },
            s.jsonp(n, null)
        }
        ,
        this.intializeIabStub = function() {
            var t = window;
            s.iabTypeAdded ? (void 0 === t.__tcfapi && (window.__tcfapi = s.executeTcfApi),
            s.addIabFrame()) : s.addBackwardIabFrame(),
            t.receiveOTMessage = s.receiveIabMessage,
            (t.attachEvent || window.addEventListener)("message", t.receiveOTMessage, !1)
        }
        ,
        this.addIabFrame = function() {
            var t = window
              , e = "__tcfapiLocator";
            !t.frames[e] && (t.document.body ? s.addLocator(e, "CMP") : setTimeout(s.addIabFrame, 5))
        }
        ,
        this.addBackwardIabFrame = function() {
            var t = window
              , e = "__tcfapiLocator";
            !t.frames[e] && (t.document.body ? s.addLocator(e, "TCF") : setTimeout(s.addIabFrame, 5))
        }
        ,
        this.addLocator = function(t, e) {
            var i = window
              , n = i.document.createElement("iframe");
            d(n, "display: none;", !0),
            n.name = t,
            n.setAttribute("title", e + " Locator"),
            i.document.body.appendChild(n)
        }
        ,
        this.receiveIabMessage = function(i) {
            var n, a, t, o = "string" == typeof i.data, e = {};
            try {
                e = o ? JSON.parse(i.data) : i.data
            } catch (t) {}
            e.__cmpCall && "IAB2" === s.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1"),
            e.__tcfapiCall && "IAB2" === s.iabType && (n = e.__tcfapiCall.callId,
            a = e.__tcfapiCall.command,
            t = e.__tcfapiCall.parameter,
            e = e.__tcfapiCall.version,
            s.executeTcfApi(a, t, function(t, e) {
                t = {
                    __tcfapiReturn: {
                        returnValue: t,
                        success: e,
                        callId: n,
                        command: a
                    }
                };
                i && i.source && i.source.postMessage && i.source.postMessage(o ? JSON.stringify(t) : t, "*")
            }, e))
        }
        ,
        this.executeTcfApi = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            if (s.iabType = "IAB2",
            !t.length)
                return window.__tcfapi.a || [];
            var i = t[0]
              , n = t[1]
              , a = t[2]
              , o = t[3];
            "function" == typeof a && i && ("ping" === i ? s.getPingRequest(a) : s.addToQueue(i, n, a, o))
        }
        ,
        this.addToQueue = function(t, e, i, n) {
            var a = window
              , o = "__tcfapi";
            a[o].a = a[o].a || [],
            a[o].a.push([t, e, i, n])
        }
        ,
        this.getPingRequest = function(t, e) {
            var i, n;
            t && (n = !(i = {}),
            "IAB2" !== s.iabType && "IAB2V2" !== s.iabType || (i = {
                gdprApplies: l.oneTrustIABgdprAppliesGlobally,
                cmpLoaded: !1,
                cmpStatus: "stub",
                displayStatus: "stub",
                apiVersion: "2.0",
                cmpVersion: void 0,
                cmpId: void 0,
                gvlVersion: void 0,
                tcfPolicyVersion: void 0
            },
            n = !0),
            t(i, n))
        }
        ,
        this.getConsentDataRequest = function(t) {
            t && l.IABCookieValue && t({
                gdprApplies: l.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: l.hasIABGlobalScope,
                consentData: l.IABCookieValue
            }, !0)
        }
        ,
        this.initConsentSDK()
    }
    var E = new A;
    return t.OtSDKStub = A,
    t.otSdkStub = E,
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t
}
)({});