'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trash = _react2.default.createClass({
  displayName: 'Trash',
  propTypes: {
    /** Set the height of the icon, ex. '16px' */
    height: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      height: null,
      size: 'tiny',
      predefinedClassName: 'data-ex-icons-trash'
    };
  },
  render: function render() {
    return _react2.default.createElement(
      _base2.default,
      this.props,
      _react2.default.createElement('path', { d: 'M51.4,13.9v1.6c0,0.9-0.7,1.6-1.6,1.6H13.6c-0.9,0-1.6-0.7-1.6-1.6v-1.6c0-0.9,0.7-1.6,1.6-1.6h9 c0.9,0,1.6-0.7,1.6-1.6C24.3,9.7,25.1,9,26,9h11.5c0.9,0,1.6,0.7,1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h9C50.7,12.3,51.4,13,51.4,13.9z' }),
      _react2.default.createElement('path', { d: 'M40.8,50.1l0.8-25.4h-3.3l-0.8,25.4H40.8z M30.1,50.1h3.3V24.7h-3.3V50.1z M26,50.1l-0.8-25.4h-3.3l0.8,25.4H26 z M44.9,55H18.5c-0.9,0-1.6-0.7-1.6-1.6l-1.5-31.2c0-0.9,0.7-1.7,1.6-1.7h29.4c0.9,0,1.7,0.8,1.6,1.7l-1.5,31.2 C46.5,54.3,45.8,55,44.9,55z' })
    );
  }
});

exports.default = Trash;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy90cmFzaC5qcyJdLCJuYW1lcyI6WyJUcmFzaCIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJoZWlnaHQiLCJzdHJpbmciLCJnZXREZWZhdWx0UHJvcHMiLCJzaXplIiwicHJlZGVmaW5lZENsYXNzTmFtZSIsInJlbmRlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFDOUJDLGVBQWEsT0FEaUI7QUFFOUJDLGFBQVc7QUFDVDtBQUNBQyxZQUFRLG9CQUFVQztBQUZULEdBRm1CO0FBTTlCQyxpQkFOOEIsNkJBTVo7QUFDaEIsV0FBTztBQUNMRixjQUFRLElBREg7QUFFTEcsWUFBTSxNQUZEO0FBR0xDLDJCQUFxQjtBQUhoQixLQUFQO0FBS0QsR0FaNkI7QUFhOUJDLFFBYjhCLG9CQWFyQjtBQUNQLFdBQ0U7QUFBQTtBQUFVLFdBQUtDLEtBQWY7QUFDRSw4Q0FBTSxHQUFFLDJOQUFSLEdBREY7QUFHRSw4Q0FBTSxHQUFFLHFQQUFSO0FBSEYsS0FERjtBQVNEO0FBdkI2QixDQUFsQixDQUFkOztrQkEwQmVWLEsiLCJmaWxlIjoidHJhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuY29uc3QgVHJhc2ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhc2gnLFxuICBwcm9wVHlwZXM6IHtcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBzaXplOiAndGlueScsXG4gICAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy10cmFzaCdcbiAgICB9O1xuICB9LFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPHBhdGggZD1cIk01MS40LDEzLjl2MS42YzAsMC45LTAuNywxLjYtMS42LDEuNkgxMy42Yy0wLjksMC0xLjYtMC43LTEuNi0xLjZ2LTEuNmMwLTAuOSwwLjctMS42LDEuNi0xLjZoOVxuXHRjMC45LDAsMS42LTAuNywxLjYtMS42QzI0LjMsOS43LDI1LjEsOSwyNiw5aDExLjVjMC45LDAsMS42LDAuNywxLjYsMS42YzAsMC45LDAuNywxLjYsMS42LDEuNmg5QzUwLjcsMTIuMyw1MS40LDEzLDUxLjQsMTMuOXpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNDAuOCw1MC4xbDAuOC0yNS40aC0zLjNsLTAuOCwyNS40SDQwLjh6IE0zMC4xLDUwLjFoMy4zVjI0LjdoLTMuM1Y1MC4xeiBNMjYsNTAuMWwtMC44LTI1LjRoLTMuM2wwLjgsMjUuNEgyNlxuXHR6IE00NC45LDU1SDE4LjVjLTAuOSwwLTEuNi0wLjctMS42LTEuNmwtMS41LTMxLjJjMC0wLjksMC43LTEuNywxLjYtMS43aDI5LjRjMC45LDAsMS43LDAuOCwxLjYsMS43bC0xLjUsMzEuMlxuXHRDNDYuNSw1NC4zLDQ1LjgsNTUsNDQuOSw1NXpcIi8+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXNoO1xuIl19