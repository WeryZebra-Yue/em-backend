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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJjb25uZWN0aW9uIiwibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiZGIiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL2NvbW1vbi9tb25nby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdGlvbi5jb25uZWN0aW9uLmRiO1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnQyxTQUFBRCx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLEtBQUFFLE9BQUEsRUFBQUYsR0FBQTtBQUFBLElBQUFHLFFBQUEsR0FFakIsTUFBQUEsQ0FBQSxLQUFZO0VBQ3pCLE1BQU1DLFVBQVUsR0FBRyxNQUFNQyxpQkFBUSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDakVDLGVBQWUsRUFBRSxJQUFJO0lBQ3JCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsZ0JBQWdCLEVBQUU7RUFDcEIsQ0FBQyxDQUFDO0VBRUYsT0FBT1QsVUFBVSxDQUFDQSxVQUFVLENBQUNVLEVBQUU7QUFDakMsQ0FBQztBQUFBQyxPQUFBLENBQUFiLE9BQUEsR0FBQUMsUUFBQSJ9