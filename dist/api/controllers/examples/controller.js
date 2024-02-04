"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;
var _examples = _interopRequireDefault(require("../../services/examples.service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Controller {
  all(req, res) {
    _examples.default.all().then(r => res.json(r));
  }
  byId(req, res) {
    _examples.default.byId(req.params.id).then(r => {
      if (r) res.json(r);else res.status(404).end();
    });
  }
  create(req, res) {
    _examples.default.create(req.body.name).then(r => res.status(201).location(`/y/examples/${r.id}`).json(r));
  }
}
exports.Controller = Controller;
var _default = exports.default = new Controller();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhhbXBsZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQ29udHJvbGxlciIsImFsbCIsInJlcSIsInJlcyIsIkV4YW1wbGVzU2VydmljZSIsInRoZW4iLCJyIiwianNvbiIsImJ5SWQiLCJwYXJhbXMiLCJpZCIsInN0YXR1cyIsImVuZCIsImNyZWF0ZSIsImJvZHkiLCJuYW1lIiwibG9jYXRpb24iLCJleHBvcnRzIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zZXJ2ZXIvYXBpL2NvbnRyb2xsZXJzL2V4YW1wbGVzL2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGVzU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leGFtcGxlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICBhbGwocmVxLCByZXMpIHtcbiAgICBFeGFtcGxlc1NlcnZpY2UuYWxsKClcbiAgICAgIC50aGVuKHIgPT4gcmVzLmpzb24ocikpO1xuICB9XG5cbiAgYnlJZChyZXEsIHJlcykge1xuICAgIEV4YW1wbGVzU2VydmljZVxuICAgICAgLmJ5SWQocmVxLnBhcmFtcy5pZClcbiAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICBpZiAocikgcmVzLmpzb24ocik7XG4gICAgICAgIGVsc2UgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGUocmVxLCByZXMpIHtcbiAgICBFeGFtcGxlc1NlcnZpY2VcbiAgICAgIC5jcmVhdGUocmVxLmJvZHkubmFtZSlcbiAgICAgIC50aGVuKHIgPT4gcmVzXG4gICAgICAgIC5zdGF0dXMoMjAxKVxuICAgICAgICAubG9jYXRpb24oYC95L2V4YW1wbGVzLyR7ci5pZH1gKVxuICAgICAgICAuanNvbihyKSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb250cm9sbGVyKCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUE4RCxTQUFBRCx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLEtBQUFFLE9BQUEsRUFBQUYsR0FBQTtBQUV2RCxNQUFNRyxVQUFVLENBQUM7RUFDdEJDLEdBQUdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ1pDLGlCQUFlLENBQUNILEdBQUcsQ0FBQyxDQUFDLENBQ2xCSSxJQUFJLENBQUNDLENBQUMsSUFBSUgsR0FBRyxDQUFDSSxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDO0VBQzNCO0VBRUFFLElBQUlBLENBQUNOLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2JDLGlCQUFlLENBQ1pJLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUNuQkwsSUFBSSxDQUFDQyxDQUFDLElBQUk7TUFDVCxJQUFJQSxDQUFDLEVBQUVILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRCxDQUFDLENBQUMsQ0FBQyxLQUNkSCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ047RUFFQUMsTUFBTUEsQ0FBQ1gsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDZkMsaUJBQWUsQ0FDWlMsTUFBTSxDQUFDWCxHQUFHLENBQUNZLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQ3JCVixJQUFJLENBQUNDLENBQUMsSUFBSUgsR0FBRyxDQUNYUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ1hLLFFBQVEsQ0FBRSxlQUFjVixDQUFDLENBQUNJLEVBQUcsRUFBQyxDQUFDLENBQy9CSCxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDO0VBQ2Y7QUFDRjtBQUFDVyxPQUFBLENBQUFqQixVQUFBLEdBQUFBLFVBQUE7QUFBQSxJQUFBa0IsUUFBQSxHQUFBRCxPQUFBLENBQUFsQixPQUFBLEdBQ2MsSUFBSUMsVUFBVSxDQUFDLENBQUMifQ==