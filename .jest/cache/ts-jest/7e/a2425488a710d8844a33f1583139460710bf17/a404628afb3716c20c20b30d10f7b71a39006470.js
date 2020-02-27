"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var fonts_1 = __importDefault(require("../assets/fonts"));
function InfoView(_a) {
    var icon = _a.icon, text = _a.text, style = _a.style, textStyle = _a.textStyle;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.holder, style] },
        react_1.default.createElement(react_native_1.Image, { style: styles.image, source: icon }),
        react_1.default.createElement(react_native_1.Text, { style: [styles.txt, textStyle] }, text)));
}
exports.default = InfoView;
var styles = react_native_1.StyleSheet.create({
    holder: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
        width: undefined
    },
    txt: {
        fontFamily: fonts_1.default.sf_pro_display_regular,
        fontSize: 15,
        color: '#999999',
        marginLeft: 5
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21paGFpY29jaXVyY2EvRGVza3RvcC9GZWVkRXhlcmNpc2UvQXBwL2NvbXBvbmVudHMvSW5mb1ZpZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLDZDQUF1RztBQUN2RywwREFBbUM7QUFTbkMsU0FBd0IsUUFBUSxDQUFDLEVBQXVDO1FBQXJDLGNBQUksRUFBRSxjQUFJLEVBQUUsZ0JBQUssRUFBRSx3QkFBUztJQUMzRCxPQUFPLENBQ0gsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUMvQiw4QkFBQyxvQkFBSyxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUk7UUFDNUMsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFHLElBQUksQ0FBUSxDQUNoRCxDQUNWLENBQUE7QUFDTCxDQUFDO0FBUEQsMkJBT0M7QUFFRCxJQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM3QixNQUFNLEVBQUU7UUFDSixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUMsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLENBQUM7UUFDZCxVQUFVLEVBQUUsU0FBUztRQUNyQixLQUFLLEVBQUUsU0FBUztLQUNuQjtJQUNELEdBQUcsRUFBRTtRQUNELFVBQVUsRUFBRSxlQUFLLENBQUMsc0JBQXNCO1FBQ3hDLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLFNBQVM7UUFDaEIsVUFBVSxFQUFDLENBQUM7S0FDZjtDQUNKLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvbWloYWljb2NpdXJjYS9EZXNrdG9wL0ZlZWRFeGVyY2lzZS9BcHAvY29tcG9uZW50cy9JbmZvVmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2VQcm9wVHlwZSwgVmlldywgU3R5bGVTaGVldCwgSW1hZ2UsIFZpZXdTdHlsZSwgVGV4dCwgVGV4dFN0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJ1xuaW1wb3J0IGZvbnRzIGZyb20gJy4uL2Fzc2V0cy9mb250cydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBpY29uOiBJbWFnZVNvdXJjZVByb3BUeXBlLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICB0ZXh0U3R5bGU/OiBUZXh0U3R5bGUsXG4gICAgc3R5bGU6IFZpZXdTdHlsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvVmlldyh7IGljb24sIHRleHQsIHN0eWxlLCB0ZXh0U3R5bGUgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmhvbGRlciwgc3R5bGVdfT5cbiAgICAgICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLmltYWdlfSBzb3VyY2U9e2ljb259IC8+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17W3N0eWxlcy50eHQsIHRleHRTdHlsZV19Pnt0ZXh0fTwvVGV4dD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGhvbGRlcjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJ1xuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGFzcGVjdFJhdGlvOiAxLFxuICAgICAgICByZXNpemVNb2RlOiAnY29udGFpbicsXG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHR4dDoge1xuICAgICAgICBmb250RmFtaWx5OiBmb250cy5zZl9wcm9fZGlzcGxheV9yZWd1bGFyLFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAnIzk5OTk5OScsXG4gICAgICAgIG1hcmdpbkxlZnQ6NVxuICAgIH1cbn0pIl0sInZlcnNpb24iOjN9