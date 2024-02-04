"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pino = _interopRequireDefault(require("pino"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const l = (0, _pino.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});
var _default = exports.default = l;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGlubyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJsIiwicGlubyIsIm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiQVBQX0lEIiwibGV2ZWwiLCJMT0dfTEVWRUwiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL2xvZ2dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGlubyBmcm9tICdwaW5vJztcblxuY29uc3QgbCA9IHBpbm8oe1xuICBuYW1lOiBwcm9jZXNzLmVudi5BUFBfSUQsXG4gIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsS0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXdCLFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsS0FBQUUsT0FBQSxFQUFBRixHQUFBO0FBRXhCLE1BQU1HLENBQUMsR0FBRyxJQUFBQyxhQUFJLEVBQUM7RUFDYkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtFQUN4QkMsS0FBSyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0c7QUFDckIsQ0FBQyxDQUFDO0FBQUMsSUFBQUMsUUFBQSxHQUFBQyxPQUFBLENBQUFWLE9BQUEsR0FFWUMsQ0FBQyJ9