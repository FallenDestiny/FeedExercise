"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_extended_stylesheet_1 = __importDefault(require("react-native-extended-stylesheet"));
var colors_1 = require("../utils/colors");
var fonts_1 = __importDefault(require("../assets/fonts"));
var moment = require('moment');
function UserHeader(_a) {
    var user = _a.user, date = _a.date, style = _a.style, onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.75, style: [styles.header, style], onPress: onPress },
        react_1.default.createElement(react_native_1.Image, { style: styles.userAvatar, source: { uri: user.avatar } }),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: styles.userTitle }, user.name),
            date ?
                react_1.default.createElement(react_native_1.Text, { style: [styles.userTitle, styles.createdStyle] }, moment(date).fromNow())
                : null)));
}
exports.default = UserHeader;
var styles = react_native_extended_stylesheet_1.default.create({
    header: {
        flex: 1,
        maxHeight: '55rem',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        aspectRatio: 1,
        height: '100%',
        borderRadius: '27.5rem',
        resizeMode: 'contain',
    },
    userTitle: {
        color: colors_1.colors.color1,
        fontFamily: fonts_1.default.sf_pro_display_bold,
        fontSize: '13rem',
        marginLeft: '15rem'
    },
    createdStyle: {
        color: colors_1.colors.color2
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21paGFpY29jaXVyY2EvRGVza3RvcC9GZWVkRXhlcmNpc2UvQXBwL2NvbXBvbmVudHMvVXNlckhlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsNkNBQTZFO0FBQzdFLHNHQUEwRDtBQUMxRCwwQ0FBd0M7QUFDeEMsMERBQW1DO0FBRW5DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQVMvQixTQUF3QixVQUFVLENBQUMsRUFBcUM7UUFBbkMsY0FBSSxFQUFFLGNBQUksRUFBRSxnQkFBSyxFQUFFLG9CQUFPO0lBQzNELE9BQU8sQ0FDSCw4QkFBQywrQkFBZ0IsSUFBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU87UUFDakYsOEJBQUMsb0JBQUssSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFJO1FBQ2pFLDhCQUFDLG1CQUFJO1lBQ0QsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFRO1lBRTdDLElBQUksQ0FBQyxDQUFDO2dCQUNGLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFRO2dCQUNyRixDQUFDLENBQUMsSUFBSSxDQUdYLENBQ1EsQ0FDdEIsQ0FBQTtBQUNMLENBQUM7QUFmRCw2QkFlQztBQUVELElBQU0sTUFBTSxHQUFHLDBDQUFXLENBQUMsTUFBTSxDQUFDO0lBQzlCLE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLE9BQU87UUFDbEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7S0FDdkI7SUFDRCxVQUFVLEVBQUU7UUFDUixXQUFXLEVBQUUsQ0FBQztRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7S0FDeEI7SUFDRCxTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsZUFBTSxDQUFDLE1BQU07UUFDcEIsVUFBVSxFQUFFLGVBQUssQ0FBQyxtQkFBbUI7UUFDckMsUUFBUSxFQUFFLE9BQU87UUFDakIsVUFBVSxFQUFFLE9BQU87S0FDdEI7SUFDRCxZQUFZLEVBQUU7UUFDVixLQUFLLEVBQUUsZUFBTSxDQUFDLE1BQU07S0FDdkI7Q0FDSixDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21paGFpY29jaXVyY2EvRGVza3RvcC9GZWVkRXhlcmNpc2UvQXBwL2NvbXBvbmVudHMvVXNlckhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmlldywgSW1hZ2UsIFRleHQsIFZpZXdTdHlsZSwgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcbmltcG9ydCBFU3R5bGVTaGVldCBmcm9tICdyZWFjdC1uYXRpdmUtZXh0ZW5kZWQtc3R5bGVzaGVldCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3V0aWxzL2NvbG9ycydcbmltcG9ydCBmb250cyBmcm9tICcuLi9hc3NldHMvZm9udHMnXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL3JlZHV4L0FwcC9hY3Rpb25zJ1xudmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHVzZXI6IFVzZXJEYXRhLFxuICAgIGRhdGU/OiBEYXRlLFxuICAgIHN0eWxlPzogVmlld1N0eWxlLFxuICAgIG9uUHJlc3M6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckhlYWRlcih7IHVzZXIsIGRhdGUsIHN0eWxlLCBvblByZXNzIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBhY3RpdmVPcGFjaXR5PXswLjc1fSBzdHlsZT17W3N0eWxlcy5oZWFkZXIsc3R5bGVdfSBvblByZXNzPXtvblByZXNzfT5cbiAgICAgICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLnVzZXJBdmF0YXJ9IHNvdXJjZT17eyB1cmk6IHVzZXIuYXZhdGFyIH19IC8+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnVzZXJUaXRsZX0+e3VzZXIubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtbc3R5bGVzLnVzZXJUaXRsZSwgc3R5bGVzLmNyZWF0ZWRTdHlsZV19Pnttb21lbnQoZGF0ZSkuZnJvbU5vdygpfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSBFU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGhlYWRlcjoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBtYXhIZWlnaHQ6ICc1NXJlbScsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHVzZXJBdmF0YXI6IHtcbiAgICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyNy41cmVtJyxcbiAgICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuICAgIH0sXG4gICAgdXNlclRpdGxlOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3IxLFxuICAgICAgICBmb250RmFtaWx5OiBmb250cy5zZl9wcm9fZGlzcGxheV9ib2xkLFxuICAgICAgICBmb250U2l6ZTogJzEzcmVtJyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzE1cmVtJ1xuICAgIH0sXG4gICAgY3JlYXRlZFN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3IyXG4gICAgfSxcbn0pIl0sInZlcnNpb24iOjN9