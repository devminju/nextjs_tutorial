(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/6e860_next_dist_client_c6e87a._.js", {

"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Before starting the Next.js runtime and requiring any module, we need to make
 * sure the following scripts are executed in the correct order:
 * - Polyfills
 * - next/script with `beforeInteractive` strategy
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "appBootstrap", {
    enumerable: true,
    get: function() {
        return appBootstrap;
    }
});
const version = "15.2.0-canary.45";
window.next = {
    version,
    appDir: true
};
function loadScriptsInSequence(scripts, hydrate) {
    if (!scripts || !scripts.length) {
        return hydrate();
    }
    return scripts.reduce((promise, param)=>{
        let [src, props] = param;
        return promise.then(()=>{
            return new Promise((resolve, reject)=>{
                const el = document.createElement('script');
                if (props) {
                    for(const key in props){
                        if (key !== 'children') {
                            el.setAttribute(key, props[key]);
                        }
                    }
                }
                if (src) {
                    el.src = src;
                    el.onload = ()=>resolve();
                    el.onerror = reject;
                } else if (props) {
                    el.innerHTML = props.children;
                    setTimeout(resolve);
                }
                document.head.appendChild(el);
            });
        });
    }, Promise.resolve()).catch((err)=>{
        console.error(err);
    // Still try to hydrate even if there's an error.
    }).then(()=>{
        hydrate();
    });
}
function appBootstrap(callback) {
    loadScriptsInSequence(self.__next_s, ()=>{
        callback();
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-bootstrap.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "formatConsoleArgs", {
    enumerable: true,
    get: function() {
        return formatConsoleArgs;
    }
});
function formatObject(arg, depth) {
    switch(typeof arg){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                let result = '[';
                if (depth < 1) {
                    for(let i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (arg instanceof Error) {
                return arg + '';
            } else {
                const keys = Object.keys(arg);
                let result = '{';
                if (depth < 1) {
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        const desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            const jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result += jsonKey + ': ';
                            } else {
                                result += key + ': ';
                            }
                            result += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result += keys.length > 0 ? '...' : '';
                }
                result += '}';
                return result;
            }
        case 'string':
            return JSON.stringify(arg);
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    let message;
    let idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    let result = '';
    let startQuote = false;
    for(let i = 0; i < message.length; ++i){
        const char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        const code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? "" + result + "]" : "[" + result;
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/lib/is-error-thrown-while-rendering-rsc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "shouldRenderRootLevelErrorOverlay", {
    enumerable: true,
    get: function() {
        return shouldRenderRootLevelErrorOverlay;
    }
});
const shouldRenderRootLevelErrorOverlay = ()=>{
    var _window___next_root_layout_missing_tags;
    return !!((_window___next_root_layout_missing_tags = window.__next_root_layout_missing_tags) == null ? void 0 : _window___next_root_layout_missing_tags.length);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-error-thrown-while-rendering-rsc.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reportGlobalError", {
    enumerable: true,
    get: function() {
        return reportGlobalError;
    }
});
const reportGlobalError = typeof reportError === 'function' ? reportError : (error)=>{
    window.console.error(error);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-global-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// This module can be shared between both pages router and app router
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onRecoverableError", {
    enumerable: true,
    get: function() {
        return onRecoverableError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _reportglobalerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)");
const _stitchederror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/errors/stitched-error.js [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
const onRecoverableError = (error, errorInfo)=>{
    // x-ref: https://github.com/facebook/react/pull/28736
    const cause = (0, _iserror.default)(error) && 'cause' in error ? error.cause : error;
    const stitchedError = (0, _stitchederror.getReactStitchedError)(cause);
    // In development mode, pass along the component stack to the error
    if (("TURBOPACK compile-time value", "development") === 'development' && errorInfo.componentStack) {
        ;
        stitchedError._componentStack = errorInfo.componentStack;
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(cause)) return;
    (0, _reportglobalerror.reportGlobalError)(stitchedError);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// This file is only used in app router due to the specific error state handling.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    onCaughtError: null,
    onUncaughtError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    onCaughtError: function() {
        return onCaughtError;
    },
    onUncaughtError: function() {
        return onUncaughtError;
    }
});
const _stitchederror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/errors/stitched-error.js [app-client] (ecmascript)");
const _useerrorhandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/errors/use-error-handler.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _reportglobalerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)");
const _interceptconsoleerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/globals/intercept-console-error.js [app-client] (ecmascript)");
const onCaughtError = (err, errorInfo)=>{
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(err) || (0, _isnextroutererror.isNextRouterError)(err)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        var _errorInfo_errorBoundary, _errorInfo_componentStack;
        const errorBoundaryComponent = errorInfo == null ? void 0 : (_errorInfo_errorBoundary = errorInfo.errorBoundary) == null ? void 0 : _errorInfo_errorBoundary.constructor;
        const errorBoundaryName = (errorBoundaryComponent == null ? void 0 : errorBoundaryComponent.displayName) || (errorBoundaryComponent == null ? void 0 : errorBoundaryComponent.name) || 'Unknown';
        const componentThatErroredFrame = errorInfo == null ? void 0 : (_errorInfo_componentStack = errorInfo.componentStack) == null ? void 0 : _errorInfo_componentStack.split('\n')[1];
        var // example 1: at Page (http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1)
        // example 2: Page@http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1
        _componentThatErroredFrame_match;
        // Match chrome or safari stack trace
        const matches = (_componentThatErroredFrame_match = componentThatErroredFrame == null ? void 0 : componentThatErroredFrame.match(/\s+at (\w+)\s+|(\w+)@/)) != null ? _componentThatErroredFrame_match : [];
        const componentThatErroredName = matches[1] || matches[2] || 'Unknown';
        // Create error location with errored component and error boundary, to match the behavior of default React onCaughtError handler.
        const errorBoundaryMessage = "It was handled by the <" + errorBoundaryName + "> error boundary.";
        const componentErrorMessage = ("TURBOPACK compile-time truthy", 1) ? "The above error occurred in the <" + componentThatErroredName + "> component." : ("TURBOPACK unreachable", undefined);
        const errorLocation = componentErrorMessage + " " + errorBoundaryMessage;
        const stitchedError = (0, _stitchederror.getReactStitchedError)(err);
        // TODO: change to passing down errorInfo later
        // In development mode, pass along the component stack to the error
        if (errorInfo.componentStack) {
            ;
            stitchedError._componentStack = errorInfo.componentStack;
        }
        // Log and report the error with location but without modifying the error stack
        (0, _interceptconsoleerror.originConsoleError)('%o\n\n%s', err, errorLocation);
        (0, _useerrorhandler.handleClientError)(stitchedError, []);
    } else {
        "TURBOPACK unreachable";
    }
};
const onUncaughtError = (err, errorInfo)=>{
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(err) || (0, _isnextroutererror.isNextRouterError)(err)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        var _errorInfo_componentStack;
        const componentThatErroredFrame = errorInfo == null ? void 0 : (_errorInfo_componentStack = errorInfo.componentStack) == null ? void 0 : _errorInfo_componentStack.split('\n')[1];
        var _componentThatErroredFrame_match;
        // Match chrome or safari stack trace
        const matches = (_componentThatErroredFrame_match = componentThatErroredFrame == null ? void 0 : componentThatErroredFrame.match(/\s+at (\w+)\s+|(\w+)@/)) != null ? _componentThatErroredFrame_match : [];
        const componentThatErroredName = matches[1] || matches[2] || 'Unknown';
        // Create error location with errored component and error boundary, to match the behavior of default React onCaughtError handler.
        const errorLocation = ("TURBOPACK compile-time truthy", 1) ? "The above error occurred in the <" + componentThatErroredName + "> component." : ("TURBOPACK unreachable", undefined);
        const stitchedError = (0, _stitchederror.getReactStitchedError)(err);
        // TODO: change to passing down errorInfo later
        // In development mode, pass along the component stack to the error
        if (errorInfo.componentStack) {
            ;
            stitchedError._componentStack = errorInfo.componentStack;
        }
        // Log and report the error with location but without modifying the error stack
        (0, _interceptconsoleerror.originConsoleError)('%o\n\n%s', err, errorLocation);
        (0, _reportglobalerror.reportGlobalError)(stitchedError);
    } else {
        "TURBOPACK unreachable";
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary-callbacks.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    useServerActionDispatcher: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return callServer;
    },
    useServerActionDispatcher: function() {
        return useServerActionDispatcher;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
let globalServerActionDispatcher = null;
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
async function callServer(actionId, actionArgs) {
    const actionDispatcher = globalServerActionDispatcher;
    if (!actionDispatcher) {
        throw Object.defineProperty(new Error('Invariant: missing action dispatcher.'), "__NEXT_ERROR_CODE", {
            value: "E507",
            enumerable: false
        });
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = "" + basePath + "/__nextjs_source-map";
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return "" + filename + ".map";
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : ("TURBOPACK unreachable", undefined);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    }
});
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    var _segmentPath_;
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: (_segmentPath_ = segmentPath[segmentPath.length - 1]) != null ? _segmentPath_ : '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map(getFlightDataPartsFromPath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)");
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/" + path;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "devBuildIndicator", {
    enumerable: true,
    get: function() {
        return devBuildIndicator;
    }
});
const NOOP = ()=>{};
const devBuildIndicator = {
    /** Shows build indicator when Next.js is compiling. Requires initialize() first. */ show: NOOP,
    /** Hides build indicator when Next.js finishes compiling. Requires initialize() first. */ hide: NOOP,
    /** Sets up the build indicator UI component. Call this before using show/hide. */ initialize: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize-for-old-overlay.js [app-client] (ecmascript)").initializeForOldOverlay
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-build-indicator.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize-for-old-overlay.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/*
 * Initializes the build indicator for the old overlay
 * This is a singleton store to track whether the app is currently being built
 * Used by the dev tools indicator of the old overlay to show build status
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initializeForOldOverlay", {
    enumerable: true,
    get: function() {
        return initializeForOldOverlay;
    }
});
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-client] (ecmascript)");
function initializeForOldOverlay(position) {
    if (position === void 0) position = 'bottom-right';
    const shadowHost = document.createElement('div');
    const [verticalProperty, horizontalProperty] = position.split('-', 2);
    shadowHost.id = '__next-build-indicator';
    // Make sure container is fixed and on a high zIndex so it shows
    shadowHost.style.position = 'fixed';
    // Ensure container's position to be top or bottom (default)
    shadowHost.style[verticalProperty] = '10px';
    // Ensure container's position to be left or right (default)
    shadowHost.style[horizontalProperty] = '20px';
    shadowHost.style.width = '0';
    shadowHost.style.height = '0';
    shadowHost.style.zIndex = '99999';
    document.body.appendChild(shadowHost);
    let shadowRoot;
    let prefix = '';
    if (shadowHost.attachShadow) {
        shadowRoot = shadowHost.attachShadow({
            mode: 'open'
        });
    } else {
        // If attachShadow is undefined then the browser does not support
        // the Shadow DOM, we need to prefix all the names so there
        // will be no conflicts
        shadowRoot = shadowHost;
        prefix = '__next-build-indicator-';
    }
    // Container
    const container = createContainer(prefix);
    shadowRoot.appendChild(container);
    // CSS
    const css = createCss(prefix, {
        horizontalProperty,
        verticalProperty
    });
    shadowRoot.appendChild(css);
    // State
    let isVisible = false;
    let isBuilding = false;
    let timeoutId = null;
    _devbuildindicator.devBuildIndicator.show = ()=>{
        timeoutId && clearTimeout(timeoutId);
        isVisible = true;
        isBuilding = true;
        updateContainer();
    };
    _devbuildindicator.devBuildIndicator.hide = ()=>{
        isBuilding = false;
        // Wait for the fade out transition to complete
        timeoutId = setTimeout(()=>{
            isVisible = false;
            updateContainer();
        }, 100);
        updateContainer();
    };
    function updateContainer() {
        if (isBuilding) {
            container.classList.add("" + prefix + "building");
        } else {
            container.classList.remove("" + prefix + "building");
        }
        if (isVisible) {
            container.classList.add("" + prefix + "visible");
        } else {
            container.classList.remove("" + prefix + "visible");
        }
    }
}
function createContainer(prefix) {
    const container = document.createElement('div');
    container.id = "" + prefix + "container";
    container.innerHTML = '\n    <div id="' + prefix + 'icon-wrapper">\n      <svg viewBox="0 0 226 200">\n        <defs>\n          <linearGradient\n            x1="114.720775%"\n            y1="181.283245%"\n            x2="39.5399306%"\n            y2="100%"\n            id="' + prefix + 'linear-gradient"\n          >\n            <stop stop-color="#000000" offset="0%" />\n            <stop stop-color="#FFFFFF" offset="100%" />\n          </linearGradient>\n        </defs>\n        <g id="' + prefix + 'icon-group" fill="none" stroke="url(#' + prefix + 'linear-gradient)" stroke-width="18">\n          <path d="M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z" />\n        </g>\n      </svg>\n    </div>\n  ';
    return container;
}
function createCss(prefix, param) {
    let { horizontalProperty, verticalProperty } = param;
    const css = document.createElement('style');
    css.textContent = "\n    #" + prefix + "container {\n      position: absolute;\n      " + verticalProperty + ": 10px;\n      " + horizontalProperty + ": 30px;\n\n      border-radius: 3px;\n      background: #000;\n      color: #fff;\n      font: initial;\n      cursor: initial;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n\n      padding: 7px 10px 8px 10px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: none;\n      opacity: 0;\n      transition: opacity 0.1s ease, " + verticalProperty + " 0.1s ease;\n      animation: " + prefix + "fade-in 0.1s ease-in-out;\n    }\n\n    #" + prefix + "container." + prefix + "visible {\n      display: flex;\n    }\n\n    #" + prefix + "container." + prefix + "building {\n      " + verticalProperty + ": 20px;\n      opacity: 1;\n    }\n\n    #" + prefix + "icon-wrapper {\n      width: 16px;\n      height: 16px;\n    }\n\n    #" + prefix + "icon-wrapper > svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    #" + prefix + "icon-group {\n      animation: " + prefix + "strokedash 1s ease-in-out both infinite;\n    }\n\n    @keyframes " + prefix + "fade-in {\n      from {\n        " + verticalProperty + ": 10px;\n        opacity: 0;\n      }\n      to {\n        " + verticalProperty + ": 20px;\n        opacity: 1;\n      }\n    }\n\n    @keyframes " + prefix + "strokedash {\n      0% {\n        stroke-dasharray: 0 226;\n      }\n      80%,\n      100% {\n        stroke-dasharray: 659 226;\n      }\n    }\n  ";
    return css;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=initialize-for-old-overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize-for-new-overlay.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/*
 * Singleton store to track whether the app is currently being built
 * Used by the dev tools indicator of the new overlay to show build status
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    initializeForNewOverlay: null,
    useIsDevBuilding: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    initializeForNewOverlay: function() {
        return initializeForNewOverlay;
    },
    useIsDevBuilding: function() {
        return useIsDevBuilding;
    }
});
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
let isVisible = false;
let listeners = [];
const subscribe = (listener)=>{
    listeners.push(listener);
    return ()=>{
        listeners = listeners.filter((l)=>l !== listener);
    };
};
const getSnapshot = ()=>isVisible;
function useIsDevBuilding() {
    return (0, _react.useSyncExternalStore)(subscribe, getSnapshot);
}
function initializeForNewOverlay() {
    _devbuildindicator.devBuildIndicator.show = ()=>{
        isVisible = true;
        listeners.forEach((listener)=>listener());
    };
    _devbuildindicator.devBuildIndicator.hide = ()=>{
        isVisible = false;
        listeners.forEach((listener)=>listener());
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=initialize-for-new-overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/handle-dev-build-indicator-hmr-events.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleDevBuildIndicatorHmrEvents", {
    enumerable: true,
    get: function() {
        return handleDevBuildIndicatorHmrEvents;
    }
});
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-client] (ecmascript)");
const handleDevBuildIndicatorHmrEvents = (obj)=>{
    try {
        if (!('action' in obj)) {
            return;
        }
        // eslint-disable-next-line default-case
        switch(obj.action){
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
                _devbuildindicator.devBuildIndicator.show();
                break;
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
                _devbuildindicator.devBuildIndicator.hide();
                break;
        }
    } catch (e) {}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-dev-build-indicator-hmr-events.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/initialize-for-app-router.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initializeDevBuildIndicatorForAppRouter", {
    enumerable: true,
    get: function() {
        return initializeDevBuildIndicatorForAppRouter;
    }
});
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-client] (ecmascript)");
const initializeDevBuildIndicatorForAppRouter = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    _devbuildindicator.devBuildIndicator.initialize(("TURBOPACK compile-time value", "bottom-right"));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=initialize-for-app-router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignLocation", {
    enumerable: true,
    get: function() {
        return assignLocation;
    }
});
const _addbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
function assignLocation(location, url) {
    if (location.startsWith('.')) {
        const urlBase = url.origin + url.pathname;
        return new URL(// new URL('./relative', 'https://example.com/subdir').href -> 'https://example.com/relative'
        // new URL('./relative', 'https://example.com/subdir/').href -> 'https://example.com/subdir/relative'
        (urlBase.endsWith('/') ? urlBase : urlBase + '/') + location);
    }
    return new URL((0, _addbasepath.addBasePath)(location), url.href);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=assign-location.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "linkGc", {
    enumerable: true,
    get: function() {
        return linkGc;
    }
});
function linkGc() {
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const callback = (mutationList)=>{
            for (const mutation of mutationList){
                if (mutation.type === 'childList') {
                    for (const node of mutation.addedNodes){
                        if ('tagName' in node && node.tagName === 'LINK') {
                            var _link_dataset_precedence;
                            const link = node;
                            if ((_link_dataset_precedence = link.dataset.precedence) == null ? void 0 : _link_dataset_precedence.startsWith('next')) {
                                const href = link.getAttribute('href');
                                if (href) {
                                    const [resource, version] = href.split('?v=', 2);
                                    if (version) {
                                        const currentOrigin = window.location.origin;
                                        const allLinks = [
                                            ...document.querySelectorAll('link[href^="' + resource + '"]'),
                                            // It's possible that the resource is a full URL or only pathname,
                                            // so we need to remove the alternative href as well.
                                            ...document.querySelectorAll('link[href^="' + (resource.startsWith(currentOrigin) ? resource.slice(currentOrigin.length) : currentOrigin + resource) + '"]')
                                        ];
                                        for (const otherLink of allLinks){
                                            var _otherLink_dataset_precedence;
                                            if ((_otherLink_dataset_precedence = otherLink.dataset.precedence) == null ? void 0 : _otherLink_dataset_precedence.startsWith('next')) {
                                                const otherHref = otherLink.getAttribute('href');
                                                if (otherHref) {
                                                    const [, otherVersion] = otherHref.split('?v=', 2);
                                                    if (!otherVersion || +otherVersion < +version) {
                                                        // Delay the removal of the stylesheet to avoid FOUC
                                                        // caused by `@font-face` rules, as they seem to be
                                                        // a couple of ticks delayed between the old and new
                                                        // styles being swapped even if the font is cached.
                                                        setTimeout(()=>{
                                                            otherLink.remove();
                                                        }, 5);
                                                        const preloadLink = document.querySelector('link[rel="preload"][as="style"][href="' + otherHref + '"]');
                                                        if (preloadLink) {
                                                            preloadLink.remove();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        observer.observe(document.head, {
            childList: true
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-link-gc.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// imports polyfill from `@next/polyfill-module` after build.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hydrate", {
    enumerable: true,
    get: function() {
        return hydrate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/compiled/react-experimental/jsx-runtime.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/polyfill-module.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/globals/patch-console.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/globals/handle-global-errors.js [app-client] (ecmascript)");
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/compiled/react-dom-experimental/client.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _client1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/compiled/react-server-dom-turbopack-experimental/client.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _onrecoverableerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
const _errorboundarycallbacks = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _actionqueue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/router/action-queue.js [app-client] (ecmascript)");
const _approuter = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)"));
const _createinitialrouterstate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _iserrorthrownwhilerenderingrsc = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/lib/is-error-thrown-while-rendering-rsc.js [app-client] (ecmascript)");
const _useerrorhandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/errors/use-error-handler.js [app-client] (ecmascript)");
/// <reference types="react-dom/experimental" />
const appElement = document;
const encoder = new TextEncoder();
let initialServerDataBuffer = undefined;
let initialServerDataWriter = undefined;
let initialServerDataLoaded = false;
let initialServerDataFlushed = false;
let initialFormStateData = null;
function nextServerDataCallback(seg) {
    if (seg[0] === 0) {
        initialServerDataBuffer = [];
    } else if (seg[0] === 1) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false
        });
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(encoder.encode(seg[1]));
        } else {
            initialServerDataBuffer.push(seg[1]);
        }
    } else if (seg[0] === 2) {
        initialFormStateData = seg[1];
    } else if (seg[0] === 3) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false
        });
        // Decode the base64 string back to binary data.
        const binaryString = atob(seg[1]);
        const decodedChunk = new Uint8Array(binaryString.length);
        for(var i = 0; i < binaryString.length; i++){
            decodedChunk[i] = binaryString.charCodeAt(i);
        }
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(decodedChunk);
        } else {
            initialServerDataBuffer.push(decodedChunk);
        }
    }
}
function isStreamErrorOrUnfinished(ctr) {
    // If `desiredSize` is null, it means the stream is closed or errored. If it is lower than 0, the stream is still unfinished.
    return ctr.desiredSize === null || ctr.desiredSize < 0;
}
// There might be race conditions between `nextServerDataRegisterWriter` and
// `DOMContentLoaded`. The former will be called when React starts to hydrate
// the root, the latter will be called when the DOM is fully loaded.
// For streaming, the former is called first due to partial hydration.
// For non-streaming, the latter can be called first.
// Hence, we use two variables `initialServerDataLoaded` and
// `initialServerDataFlushed` to make sure the writer will be closed and
// `initialServerDataBuffer` will be cleared in the right time.
function nextServerDataRegisterWriter(ctr) {
    if (initialServerDataBuffer) {
        initialServerDataBuffer.forEach((val)=>{
            ctr.enqueue(typeof val === 'string' ? encoder.encode(val) : val);
        });
        if (initialServerDataLoaded && !initialServerDataFlushed) {
            if (isStreamErrorOrUnfinished(ctr)) {
                ctr.error(Object.defineProperty(new Error('The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.'), "__NEXT_ERROR_CODE", {
                    value: "E117",
                    enumerable: false
                }));
            } else {
                ctr.close();
            }
            initialServerDataFlushed = true;
            initialServerDataBuffer = undefined;
        }
    }
    initialServerDataWriter = ctr;
}
// When `DOMContentLoaded`, we can close all pending writers to finish hydration.
const DOMContentLoaded = function() {
    if (initialServerDataWriter && !initialServerDataFlushed) {
        initialServerDataWriter.close();
        initialServerDataFlushed = true;
        initialServerDataBuffer = undefined;
    }
    initialServerDataLoaded = true;
};
// It's possible that the DOM is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
} else {
    // Delayed in marco task to ensure it's executed later than hydration
    setTimeout(DOMContentLoaded);
}
const nextServerDataLoadingGlobal = self.__next_f = self.__next_f || [];
nextServerDataLoadingGlobal.forEach(nextServerDataCallback);
nextServerDataLoadingGlobal.push = nextServerDataCallback;
const readable = new ReadableStream({
    start (controller) {
        nextServerDataRegisterWriter(controller);
    }
});
const initialServerResponse = (0, _client1.createFromReadableStream)(readable, {
    callServer: _appcallserver.callServer,
    findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
});
// React overrides `.then` and doesn't return a new promise chain,
// so we wrap the action queue in a promise to ensure that its value
// is defined when the promise resolves.
// https://github.com/facebook/react/blob/163365a07872337e04826c4f501565d43dbd2fd4/packages/react-client/src/ReactFlightClient.js#L189-L190
const pendingActionQueue = new Promise((resolve, reject)=>{
    initialServerResponse.then((initialRSCPayload)=>{
        // setAppBuildId should be called only once, during JS initialization
        // and before any components have hydrated.
        (0, _appbuildid.setAppBuildId)(initialRSCPayload.b);
        resolve((0, _actionqueue.createMutableActionQueue)((0, _createinitialrouterstate.createInitialRouterState)({
            initialFlightData: initialRSCPayload.f,
            initialCanonicalUrlParts: initialRSCPayload.c,
            initialParallelRoutes: new Map(),
            location: window.location,
            couldBeIntercepted: initialRSCPayload.i,
            postponed: initialRSCPayload.s,
            prerendered: initialRSCPayload.S
        })));
    }, (err)=>reject(err));
});
function ServerRoot() {
    const initialRSCPayload = (0, _react.use)(initialServerResponse);
    const actionQueue = (0, _react.use)(pendingActionQueue);
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuter.default, {
        actionQueue: actionQueue,
        globalErrorComponentAndStyles: initialRSCPayload.G,
        assetPrefix: initialRSCPayload.p
    });
    if (("TURBOPACK compile-time value", "development") === 'development' && initialRSCPayload.m) {
        // We provide missing slot information in a context provider only during development
        // as we log some additional information about the missing slots in the console.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.MissingSlotContext, {
            value: initialRSCPayload.m,
            children: router
        });
    }
    return router;
}
const StrictModeIfEnabled = ("TURBOPACK compile-time truthy", 1) ? _react.default.StrictMode : ("TURBOPACK unreachable", undefined);
function Root(param) {
    let { children } = param;
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const ssrError = devQueueSsrError();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        _react.default.useEffect({
            "Root.useEffect": ()=>{
                if (ssrError) {
                    (0, _useerrorhandler.handleClientError)(ssrError, []);
                }
            }
        }["Root.useEffect"], [
            ssrError
        ]);
    }
    return children;
}
const reactRootOptions = {
    onRecoverableError: _onrecoverableerror.onRecoverableError,
    onCaughtError: _errorboundarycallbacks.onCaughtError,
    onUncaughtError: _errorboundarycallbacks.onUncaughtError
};
function hydrate() {
    var _window___next_root_layout_missing_tags;
    const reactEl = /*#__PURE__*/ (0, _jsxruntime.jsx)(StrictModeIfEnabled, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
            value: {
                appDir: true
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ServerRoot, {})
            })
        })
    });
    if (document.documentElement.id === '__next_error__' || !!((_window___next_root_layout_missing_tags = window.__next_root_layout_missing_tags) == null ? void 0 : _window___next_root_layout_missing_tags.length)) {
        let element = reactEl;
        // Server rendering failed, fall back to client-side rendering
        if (("TURBOPACK compile-time value", "development") !== 'production' && (0, _iserrorthrownwhilerenderingrsc.shouldRenderRootLevelErrorOverlay)()) {
            const { createRootLevelDevOverlayElement } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/components/react-dev-overlay/app/client-entry.js [app-client] (ecmascript)");
            // Note this won't cause hydration mismatch because we are doing CSR w/o hydration
            element = createRootLevelDevOverlayElement(element);
        }
        _client.default.createRoot(appElement, reactRootOptions).render(element);
    } else {
        _react.default.startTransition(()=>{
            _client.default.hydrateRoot(appElement, reactEl, {
                ...reactRootOptions,
                formState: initialFormStateData
            });
        });
    }
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const { linkGc } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)");
        linkGc();
    }
}
function devQueueSsrError() {
    const ssrErrorTemplateTag = document.querySelector('template[data-next-error-message]');
    if (ssrErrorTemplateTag) {
        const message = ssrErrorTemplateTag.getAttribute('data-next-error-message');
        const stack = ssrErrorTemplateTag.getAttribute('data-next-error-stack');
        const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false
        });
        error.stack = stack || '';
        return error;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// TODO-APP: hydration warning
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$45_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_sgn4ceyzu6j7qf5dsvcbdndy5q$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _appbootstrap = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)");
window.next.version += '-turbo';
self.__webpack_hash__ = '';
(0, _appbootstrap.appBootstrap)(()=>{
    const { hydrate } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)");
    hydrate();
    if ("TURBOPACK compile-time truthy", 1) {
        const { initializeDevBuildIndicatorForAppRouter } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.0-canary.45_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013_sgn4ceyzu6j7qf5dsvcbdndy5q/node_modules/next/dist/client/dev/dev-build-indicator/initialize-for-app-router.js [app-client] (ecmascript)");
        initializeDevBuildIndicatorForAppRouter();
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-next-turbopack.js.map
}}),
}]);

//# sourceMappingURL=6e860_next_dist_client_c6e87a._.js.map