'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Email;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// inspired by http://htmlemailboilerplate.com
function Email(props) {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return _react2.default.createElement(
    'html',
    { xmlns: 'http://www.w3.org/1999/xhtml' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement(
        'title',
        null,
        props.title
      )
    ),
    _react2.default.createElement(
      'body',
      { style: Object.assign({
          width: '100%',
          margin: '0',
          padding: '0',
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%'
        }, props.bodyStyle) },
      _react2.default.createElement(
        _Box2.default,
        { width: '100%', height: '100%', bgcolor: props.bgcolor },
        _react2.default.createElement(
          _Item2.default,
          { align: 'center', valign: 'top' },
          _react2.default.createElement(
            _Box2.default,
            { width: '600', align: 'center', cellPadding: props.cellPadding, cellSpacing: props.cellSpacing, style: props.style },
            props.children
          )
        )
      )
    )
  );
}

Email.propTypes = {
  title: _react.PropTypes.string.isRequired,
  bgcolor: _react.PropTypes.string,
  cellPadding: _react.PropTypes.number,
  cellSpacing: _react.PropTypes.number,
  style: _PropTypes2.default.style,
  bodyStyle: _PropTypes2.default.style,
  children: _react.PropTypes.node
};