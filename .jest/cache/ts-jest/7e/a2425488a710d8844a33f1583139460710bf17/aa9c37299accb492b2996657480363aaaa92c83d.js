"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Navigation_1 = __importDefault(require("./App/navigation/Navigation"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(Navigation_1.default, null));
    };
    return App;
}(react_1.default.Component));
;
exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21paGFpY29jaXVyY2EvRGVza3RvcC9GZWVkRXhlcmNpc2UvQXBwLnRzeCIsIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxnREFBMEI7QUFDMUIsMkVBQW9EO0FBRXBEO0lBQWtCLHVCQUFlO0lBQWpDOztJQVFBLENBQUM7SUFOQyxvQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUNMLDhCQUFDLG9CQUFTLE9BQUUsQ0FDWCxDQUFBO0lBQ0wsQ0FBQztJQUVILFVBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBa0IsZUFBSyxDQUFDLFNBQVMsR0FRaEM7QUFBQSxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWhhaWNvY2l1cmNhL0Rlc2t0b3AvRmVlZEV4ZXJjaXNlL0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTYW1wbGUgUmVhY3QgTmF0aXZlIEFwcFxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZVxuICpcbiAqIEBmb3JtYXRcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSAnLi9BcHAvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdmlnYXRvci8+XG4gICAgICApXG4gIH1cbiAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwidmVyc2lvbiI6M30=