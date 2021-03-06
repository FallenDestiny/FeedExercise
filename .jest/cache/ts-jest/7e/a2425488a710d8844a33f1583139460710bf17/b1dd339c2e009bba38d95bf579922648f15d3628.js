"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var react_navigation_stack_1 = require("react-navigation-stack");
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_2 = require("redux-persist/es/integration/react");
var store_1 = require("../redux/store");
var react_native_extended_stylesheet_1 = __importDefault(require("react-native-extended-stylesheet"));
var react_native_1 = require("react-native");
var react_native_device_info_1 = require("react-native-device-info");
var Feed_1 = __importDefault(require("../screens/Feed"));
var UserAccount_1 = __importDefault(require("../screens/UserAccount"));
var PostReview_1 = __importDefault(require("../screens/PostReview"));
var BackButton_1 = __importDefault(require("../components/navigation/BackButton"));
var MainStack = react_navigation_stack_1.createStackNavigator({
    Feed: { screen: Feed_1.default },
    UserAccount: { screen: UserAccount_1.default },
    PostReview: { screen: PostReview_1.default }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            borderBottomWidth: 0
        },
        headerBackImage: BackButton_1.default,
        headerBackTitleVisible: false
    },
});
var Nav = react_navigation_1.createAppContainer(MainStack);
var Navigator = /** @class */ (function (_super) {
    __extends(Navigator, _super);
    function Navigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigator.prototype.render = function () {
        return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
            react_1.default.createElement(react_2.PersistGate, { loading: null, persistor: store_1.persistor },
                react_1.default.createElement(Nav, null))));
    };
    return Navigator;
}(react_1.Component));
exports.default = Navigator;
var width = react_native_1.Dimensions.get('screen').width;
react_native_extended_stylesheet_1.default.build({
    $rem: react_native_device_info_1.isTablet() ? width / 750 : width / 375
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21paGFpY29jaXVyY2EvRGVza3RvcC9GZWVkRXhlcmNpc2UvQXBwL25hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsNkNBQXVDO0FBQ3ZDLDJDQUF1QztBQUN2Qyw0REFBZ0U7QUFDaEUsd0NBQWtEO0FBQ2xELHNHQUEyRDtBQUMzRCw2Q0FBMEM7QUFDMUMscUVBQW9EO0FBQ3BELHlEQUFtQztBQUNuQyx1RUFBaUQ7QUFDakQscUVBQStDO0FBQy9DLG1GQUE2RDtBQUc3RCxJQUFNLFNBQVMsR0FBRyw2Q0FBb0IsQ0FBQztJQUNuQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBSSxFQUFDO0lBQ3JCLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxxQkFBVyxFQUFDO0lBQ25DLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxvQkFBVSxFQUFDO0NBQ25DLEVBQUM7SUFDRSx3QkFBd0IsRUFBQztRQUNyQixXQUFXLEVBQUM7WUFDUixpQkFBaUIsRUFBQyxDQUFDO1NBQ3RCO1FBQ0QsZUFBZSxFQUFFLG9CQUFVO1FBQzNCLHNCQUFzQixFQUFFLEtBQUs7S0FDaEM7Q0FFSixDQUFDLENBQUM7QUFHSCxJQUFJLEdBQUcsR0FBRyxxQ0FBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV4QztJQUF1Qyw2QkFBUztJQUFoRDs7SUFlQSxDQUFDO0lBYkcsMEJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCw4QkFBQyxzQkFBUSxJQUFDLEtBQUssRUFBRSxhQUFLO1lBQ2xCLDhCQUFDLG1CQUFXLElBQ1IsT0FBTyxFQUFFLElBQUksRUFDYixTQUFTLEVBQUUsaUJBQVM7Z0JBRXJCLDhCQUFDLEdBQUcsT0FBRSxDQUNLLENBRVAsQ0FDZCxDQUFBO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXVDLGlCQUFTLEdBZS9DOztBQUVELElBQU0sS0FBSyxHQUFHLHlCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM3QywwQ0FBVyxDQUFDLEtBQUssQ0FBQztJQUNkLElBQUksRUFBRSxtQ0FBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHO0NBQy9DLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvbWloYWljb2NpdXJjYS9EZXNrdG9wL0ZlZWRFeGVyY2lzZS9BcHAvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHBDb250YWluZXIgfSBmcm9tICdyZWFjdC1uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGNyZWF0ZVN0YWNrTmF2aWdhdG9yIH0gZnJvbSAncmVhY3QtbmF2aWdhdGlvbi1zdGFjayc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2VzL2ludGVncmF0aW9uL3JlYWN0J1xuaW1wb3J0IHsgc3RvcmUsIHBlcnNpc3RvciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBFU3R5bGVTaGVldCBmcm9tICdyZWFjdC1uYXRpdmUtZXh0ZW5kZWQtc3R5bGVzaGVldCc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IGlzVGFibGV0IH0gZnJvbSAncmVhY3QtbmF0aXZlLWRldmljZS1pbmZvJztcbmltcG9ydCBGZWVkIGZyb20gJy4uL3NjcmVlbnMvRmVlZCc7XG5pbXBvcnQgVXNlckFjY291bnQgZnJvbSAnLi4vc2NyZWVucy9Vc2VyQWNjb3VudCc7XG5pbXBvcnQgUG9zdFJldmlldyBmcm9tICcuLi9zY3JlZW5zL1Bvc3RSZXZpZXcnO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0JhY2tCdXR0b24nO1xuXG5cbmNvbnN0IE1haW5TdGFjayA9IGNyZWF0ZVN0YWNrTmF2aWdhdG9yKHtcbiAgICBGZWVkOiB7IHNjcmVlbjogRmVlZH0sXG4gICAgVXNlckFjY291bnQ6IHsgc2NyZWVuOiBVc2VyQWNjb3VudH0sXG4gICAgUG9zdFJldmlldzoge3NjcmVlbjogUG9zdFJldmlld31cbn0se1xuICAgIGRlZmF1bHROYXZpZ2F0aW9uT3B0aW9uczp7XG4gICAgICAgIGhlYWRlclN0eWxlOntcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOjBcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQmFja0ltYWdlOiBCYWNrQnV0dG9uLFxuICAgICAgICBoZWFkZXJCYWNrVGl0bGVWaXNpYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgXG59KTtcblxuXG5sZXQgTmF2ID0gY3JlYXRlQXBwQ29udGFpbmVyKE1haW5TdGFjayk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8UGVyc2lzdEdhdGVcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdG9yPXtwZXJzaXN0b3J9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgIDxOYXYvPlxuICAgICAgICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XG5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IHdpZHRoID0gRGltZW5zaW9ucy5nZXQoJ3NjcmVlbicpLndpZHRoO1xuRVN0eWxlU2hlZXQuYnVpbGQoe1xuICAgICRyZW06IGlzVGFibGV0KCkgPyB3aWR0aCAvIDc1MCA6IHdpZHRoIC8gMzc1XG59KTsiXSwidmVyc2lvbiI6M30=