"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
function Divider(_a) {
    var style = _a.style;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.divider, style] }));
}
exports.default = Divider;
var styles = react_native_1.StyleSheet.create({
    divider: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#E4E4E499',
        height: 1
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21paGFpY29jaXVyY2EvRGVza3RvcC9GZWVkRXhlcmNpc2UvQXBwL2NvbXBvbmVudHMvRGl2aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsNkNBQTBEO0FBTTFELFNBQXdCLE9BQU8sQ0FBQyxFQUFjO1FBQWIsZ0JBQUs7SUFDbEMsT0FBTyxDQUNILDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsR0FBRyxDQUN6QyxDQUFBO0FBQ0wsQ0FBQztBQUpELDBCQUlDO0FBRUQsSUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDN0IsT0FBTyxFQUFDO1FBQ0osS0FBSyxFQUFDLEtBQUs7UUFDWCxTQUFTLEVBQUMsUUFBUTtRQUNsQixlQUFlLEVBQUMsV0FBVztRQUMzQixNQUFNLEVBQUMsQ0FBQztLQUNYO0NBQ0osQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWhhaWNvY2l1cmNhL0Rlc2t0b3AvRmVlZEV4ZXJjaXNlL0FwcC9jb21wb25lbnRzL0RpdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZpZXcsIFZpZXdTdHlsZSwgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBzdHlsZT86IFZpZXdTdHlsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXZpZGVyKHtzdHlsZX06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5kaXZpZGVyLHN0eWxlXX0vPlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGRpdmlkZXI6e1xuICAgICAgICB3aWR0aDonODAlJyxcbiAgICAgICAgYWxpZ25TZWxmOidjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNFNEU0RTQ5OScsXG4gICAgICAgIGhlaWdodDoxXG4gICAgfVxufSlcbiJdLCJ2ZXJzaW9uIjozfQ==