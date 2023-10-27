"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async () => {
  const connection = await _mongoose.default.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  return connection.connection.db;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiZGIiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL21vbmdvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0aW9uLmNvbm5lY3Rpb24uZGI7XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBRWUsWUFBWTtFQUN6QixNQUFNQSxVQUFVLEdBQUcsTUFBTUMsaUJBQUEsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0lBQ2pFQyxlQUFlLEVBQUUsSUFEZ0Q7SUFFakVDLGNBQWMsRUFBRSxJQUZpRDtJQUdqRUMsa0JBQWtCLEVBQUUsSUFINkM7SUFJakVDLGdCQUFnQixFQUFFO0VBSitDLENBQTFDLENBQXpCO0VBT0EsT0FBT1QsVUFBVSxDQUFDQSxVQUFYLENBQXNCVSxFQUE3QjtBQUNELEMifQ==