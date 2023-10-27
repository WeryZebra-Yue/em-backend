"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = express.Router().post("/auth", _controller.default.signIn).post("/addExaminer", _controller.default.addExaminer).get("/getExaminers", _controller.default.getExaminers).get("/getExaminers/:id", _controller.default.getExaminersUsingId).get("/getAllExaminers", _controller.default.getAllExaminers).post("/addAdmin", _controller.default.addAdmin).post("/deleteExaminer", _controller.default.deleteExaminer).post("/updateExaminer", _controller.default.updateExaminer).post("/updateAdmin", _controller.default.updateAdmin).get("/getAdmins", _controller.default.getAdmins).post("/getPassword", _controller.default.getPassword).post("/verifyToken", _controller.default.verifyToken).post("/addMultipleUsers", _controller.default.addMultipleUsers).get("/getUniversities", _controller.default.getUniversities).post("/addUniversity", _controller.default.addUniversity).post("/updateUniversity", _controller.default.updateUniversity).get("/getMetaData", _controller.default.getMetaData);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImNvbnRyb2xsZXIiLCJzaWduSW4iLCJhZGRFeGFtaW5lciIsImdldCIsImdldEV4YW1pbmVycyIsImdldEV4YW1pbmVyc1VzaW5nSWQiLCJnZXRBbGxFeGFtaW5lcnMiLCJhZGRBZG1pbiIsImRlbGV0ZUV4YW1pbmVyIiwidXBkYXRlRXhhbWluZXIiLCJ1cGRhdGVBZG1pbiIsImdldEFkbWlucyIsImdldFBhc3N3b3JkIiwidmVyaWZ5VG9rZW4iLCJhZGRNdWx0aXBsZVVzZXJzIiwiZ2V0VW5pdmVyc2l0aWVzIiwiYWRkVW5pdmVyc2l0eSIsInVwZGF0ZVVuaXZlcnNpdHkiLCJnZXRNZXRhRGF0YSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvYWRtaW4vcm91dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xuICAuUm91dGVyKClcbiAgLnBvc3QoXCIvYXV0aFwiLCBjb250cm9sbGVyLnNpZ25JbilcbiAgLnBvc3QoXCIvYWRkRXhhbWluZXJcIiwgY29udHJvbGxlci5hZGRFeGFtaW5lcilcbiAgLmdldChcIi9nZXRFeGFtaW5lcnNcIiwgY29udHJvbGxlci5nZXRFeGFtaW5lcnMpXG4gIC5nZXQoXCIvZ2V0RXhhbWluZXJzLzppZFwiLCBjb250cm9sbGVyLmdldEV4YW1pbmVyc1VzaW5nSWQpXG4gIC5nZXQoXCIvZ2V0QWxsRXhhbWluZXJzXCIsIGNvbnRyb2xsZXIuZ2V0QWxsRXhhbWluZXJzKVxuICAucG9zdChcIi9hZGRBZG1pblwiLCBjb250cm9sbGVyLmFkZEFkbWluKVxuICAucG9zdChcIi9kZWxldGVFeGFtaW5lclwiLCBjb250cm9sbGVyLmRlbGV0ZUV4YW1pbmVyKVxuICAucG9zdChcIi91cGRhdGVFeGFtaW5lclwiLCBjb250cm9sbGVyLnVwZGF0ZUV4YW1pbmVyKVxuICAucG9zdChcIi91cGRhdGVBZG1pblwiLCBjb250cm9sbGVyLnVwZGF0ZUFkbWluKVxuICAuZ2V0KFwiL2dldEFkbWluc1wiLCBjb250cm9sbGVyLmdldEFkbWlucylcbiAgLnBvc3QoXCIvZ2V0UGFzc3dvcmRcIiwgY29udHJvbGxlci5nZXRQYXNzd29yZClcbiAgLnBvc3QoXCIvdmVyaWZ5VG9rZW5cIiwgY29udHJvbGxlci52ZXJpZnlUb2tlbilcbiAgLnBvc3QoXCIvYWRkTXVsdGlwbGVVc2Vyc1wiLCBjb250cm9sbGVyLmFkZE11bHRpcGxlVXNlcnMpXG4gIC5nZXQoXCIvZ2V0VW5pdmVyc2l0aWVzXCIsIGNvbnRyb2xsZXIuZ2V0VW5pdmVyc2l0aWVzKVxuICAucG9zdChcIi9hZGRVbml2ZXJzaXR5XCIsIGNvbnRyb2xsZXIuYWRkVW5pdmVyc2l0eSlcbiAgLnBvc3QoXCIvdXBkYXRlVW5pdmVyc2l0eVwiLCBjb250cm9sbGVyLnVwZGF0ZVVuaXZlcnNpdHkpXG4gIC5nZXQoXCIvZ2V0TWV0YURhdGFcIiwgY29udHJvbGxlci5nZXRNZXRhRGF0YSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZUEsT0FBTyxDQUNuQkMsTUFEWSxHQUVaQyxJQUZZLENBRVAsT0FGTyxFQUVFQyxtQkFBQSxDQUFXQyxNQUZiLEVBR1pGLElBSFksQ0FHUCxjQUhPLEVBR1NDLG1CQUFBLENBQVdFLFdBSHBCLEVBSVpDLEdBSlksQ0FJUixlQUpRLEVBSVNILG1CQUFBLENBQVdJLFlBSnBCLEVBS1pELEdBTFksQ0FLUixtQkFMUSxFQUthSCxtQkFBQSxDQUFXSyxtQkFMeEIsRUFNWkYsR0FOWSxDQU1SLGtCQU5RLEVBTVlILG1CQUFBLENBQVdNLGVBTnZCLEVBT1pQLElBUFksQ0FPUCxXQVBPLEVBT01DLG1CQUFBLENBQVdPLFFBUGpCLEVBUVpSLElBUlksQ0FRUCxpQkFSTyxFQVFZQyxtQkFBQSxDQUFXUSxjQVJ2QixFQVNaVCxJQVRZLENBU1AsaUJBVE8sRUFTWUMsbUJBQUEsQ0FBV1MsY0FUdkIsRUFVWlYsSUFWWSxDQVVQLGNBVk8sRUFVU0MsbUJBQUEsQ0FBV1UsV0FWcEIsRUFXWlAsR0FYWSxDQVdSLFlBWFEsRUFXTUgsbUJBQUEsQ0FBV1csU0FYakIsRUFZWlosSUFaWSxDQVlQLGNBWk8sRUFZU0MsbUJBQUEsQ0FBV1ksV0FacEIsRUFhWmIsSUFiWSxDQWFQLGNBYk8sRUFhU0MsbUJBQUEsQ0FBV2EsV0FicEIsRUFjWmQsSUFkWSxDQWNQLG1CQWRPLEVBY2NDLG1CQUFBLENBQVdjLGdCQWR6QixFQWVaWCxHQWZZLENBZVIsa0JBZlEsRUFlWUgsbUJBQUEsQ0FBV2UsZUFmdkIsRUFnQlpoQixJQWhCWSxDQWdCUCxnQkFoQk8sRUFnQldDLG1CQUFBLENBQVdnQixhQWhCdEIsRUFpQlpqQixJQWpCWSxDQWlCUCxtQkFqQk8sRUFpQmNDLG1CQUFBLENBQVdpQixnQkFqQnpCLEVBa0JaZCxHQWxCWSxDQWtCUixjQWxCUSxFQWtCUUgsbUJBQUEsQ0FBV2tCLFdBbEJuQixDIn0=