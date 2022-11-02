"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authentication = _interopRequireDefault(require("./authentication.service"));

var _AdminModel = _interopRequireDefault(require("../../models/AdminModel"));

var _ExaminerModel = _interopRequireDefault(require("../../models/ExaminerModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AdminService {
  async signIn(email, password) {
    const user = await _AdminModel.default.findOne({
      email
    });

    if (!user) {
      return {
        status: 400,
        message: "Admin not found"
      };
    }

    const isPasswordMatch = await _authentication.default.decryptPassword(password, user.password);

    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Incorrect password"
      };
    }

    return {
      status: 200,
      message: "Login successful",
      token: _authentication.default.generateToken(user._id, user.role)
    };
  }

  async addExaminer(user) {
    if (user.e_id === "SOE") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SOE"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SOE000${count}`;
      } else if (count < 100) {
        user["eid"] = `SOE00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SOE0${count}`;
      }
    } else if (user.e_id === "SOP") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SOP"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SOP000${count}`;
      } else if (count < 100) {
        user["eid"] = `SOP00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SOP0${count}`;
      }
    } else if (user.e_id === "SON") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SON"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SON000${count}`;
      } else if (count < 100) {
        user["eid"] = `SON00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SON0${count}`;
      }
    } else if (user.e_id === "SLM") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SLM"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SLM000${count}`;
      } else if (count < 100) {
        user["eid"] = `SLM00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SLM0${count}`;
      }
    }

    return _ExaminerModel.default.create(user);
  }

  async getExaminers(limit) {
    return _ExaminerModel.default.find().limit(limit);
  }

  async getExaminersUsingId(id) {
    return _ExaminerModel.default.findById(id);
  }

  async getExaminersUsingName(name) {
    // index search
    return _ExaminerModel.default.find({
      name
    });
  }

  async getExaminersUsingEmail(email) {
    return _ExaminerModel.default.find({
      email
    });
  }

  async getExaminersUsingMobile(mobile) {
    return _ExaminerModel.default.find({
      mobile
    });
  }

  async getAllExaminers() {
    return _ExaminerModel.default.find();
  } // Super Admin


  async addAdmin(user) {
    const password = await _authentication.default.encryptPassword(user.password);
    console.log(password);
    return _AdminModel.default.create({
      email: user.email,
      password: password,
      role: user.role
    });
  }

  async updateExaminer(user) {
    return _ExaminerModel.default.findByIdAndUpdate(user.id, user);
  }

}

var _default = new AdminService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZG1pblNlcnZpY2UiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsIkFkbWluIiwiZmluZE9uZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJpc1Bhc3N3b3JkTWF0Y2giLCJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCJkZWNyeXB0UGFzc3dvcmQiLCJ0b2tlbiIsImdlbmVyYXRlVG9rZW4iLCJfaWQiLCJyb2xlIiwiYWRkRXhhbWluZXIiLCJlX2lkIiwiY291bnQiLCJFeGFtaW5lciIsImNvdW50RG9jdW1lbnRzIiwiY3JlYXRlIiwiZ2V0RXhhbWluZXJzIiwibGltaXQiLCJmaW5kIiwiZ2V0RXhhbWluZXJzVXNpbmdJZCIsImlkIiwiZmluZEJ5SWQiLCJnZXRFeGFtaW5lcnNVc2luZ05hbWUiLCJuYW1lIiwiZ2V0RXhhbWluZXJzVXNpbmdFbWFpbCIsImdldEV4YW1pbmVyc1VzaW5nTW9iaWxlIiwibW9iaWxlIiwiZ2V0QWxsRXhhbWluZXJzIiwiYWRkQWRtaW4iLCJlbmNyeXB0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlRXhhbWluZXIiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvYWRtaW4uc2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aGVudGljYXRpb25TZXJ2aWNlIGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCIuLi8uLi9tb2RlbHMvQWRtaW5Nb2RlbFwiO1xyXG5pbXBvcnQgRXhhbWluZXIgZnJvbSBcIi4uLy4uL21vZGVscy9FeGFtaW5lck1vZGVsXCI7XHJcbmNsYXNzIEFkbWluU2VydmljZSB7XHJcbiAgYXN5bmMgc2lnbkluKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQWRtaW4gbm90IGZvdW5kXCIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2ggPSBhd2FpdCBBdXRoZW50aWNhdGlvblNlcnZpY2UuZGVjcnlwdFBhc3N3b3JkKFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgKTtcclxuICAgIGlmICghaXNQYXNzd29yZE1hdGNoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICAgICAgbWVzc2FnZTogXCJJbmNvcnJlY3QgcGFzc3dvcmRcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcIkxvZ2luIHN1Y2Nlc3NmdWxcIixcclxuICAgICAgdG9rZW46IEF1dGhlbnRpY2F0aW9uU2VydmljZS5nZW5lcmF0ZVRva2VuKHVzZXIuX2lkLCB1c2VyLnJvbGUpLFxyXG4gICAgfTtcclxuICB9XHJcbiAgYXN5bmMgYWRkRXhhbWluZXIodXNlcikge1xyXG4gICAgaWYgKHVzZXIuZV9pZCA9PT0gXCJTT0VcIikge1xyXG4gICAgICBsZXQgY291bnQgPSBhd2FpdCBFeGFtaW5lci5jb3VudERvY3VtZW50cyh7IGVfaWQ6IFwiU09FXCIgfSk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICAgIGlmIChjb3VudCA8IDEwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT0UwMDAke2NvdW50fWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPRTAwJHtjb3VudH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09FMCR7Y291bnR9YDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh1c2VyLmVfaWQgPT09IFwiU09QXCIpIHtcclxuICAgICAgbGV0IGNvdW50ID0gYXdhaXQgRXhhbWluZXIuY291bnREb2N1bWVudHMoeyBlX2lkOiBcIlNPUFwiIH0pO1xyXG4gICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgaWYgKGNvdW50IDwgMTApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPUDAwMCR7Y291bnR9YDtcclxuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEwMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09QMDAke2NvdW50fWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDAwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT1AwJHtjb3VudH1gO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHVzZXIuZV9pZCA9PT0gXCJTT05cIikge1xyXG4gICAgICBsZXQgY291bnQgPSBhd2FpdCBFeGFtaW5lci5jb3VudERvY3VtZW50cyh7IGVfaWQ6IFwiU09OXCIgfSk7XHJcbiAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICBpZiAoY291bnQgPCAxMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09OMDAwJHtjb3VudH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT04wMCR7Y291bnR9YDtcclxuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEwMDApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPTjAke2NvdW50fWA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodXNlci5lX2lkID09PSBcIlNMTVwiKSB7XHJcbiAgICAgIGxldCBjb3VudCA9IGF3YWl0IEV4YW1pbmVyLmNvdW50RG9jdW1lbnRzKHsgZV9pZDogXCJTTE1cIiB9KTtcclxuICAgICAgY291bnQrKztcclxuXHJcbiAgICAgIGlmIChjb3VudCA8IDEwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTTE0wMDAke2NvdW50fWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNMTTAwJHtjb3VudH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU0xNMCR7Y291bnR9YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBFeGFtaW5lci5jcmVhdGUodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVycyhsaW1pdCkge1xyXG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmQoKS5saW1pdChsaW1pdCk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nSWQoaWQpIHtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kQnlJZChpZCk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nTmFtZShuYW1lKSB7XHJcbiAgICAvLyBpbmRleCBzZWFyY2hcclxuXHJcbiAgICByZXR1cm4gRXhhbWluZXIuZmluZCh7IG5hbWUgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nRW1haWwoZW1haWwpIHtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kKHsgZW1haWwgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nTW9iaWxlKG1vYmlsZSkge1xyXG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmQoeyBtb2JpbGUgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEFsbEV4YW1pbmVycygpIHtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTdXBlciBBZG1pblxyXG4gIGFzeW5jIGFkZEFkbWluKHVzZXIpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgQXV0aGVudGljYXRpb25TZXJ2aWNlLmVuY3J5cHRQYXNzd29yZCh1c2VyLnBhc3N3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKTtcclxuICAgIHJldHVybiBBZG1pbi5jcmVhdGUoe1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlRXhhbWluZXIodXNlcikge1xyXG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXIuaWQsIHVzZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkbWluU2VydmljZSgpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBLE1BQU1BLFlBQU4sQ0FBbUI7RUFDTCxNQUFOQyxNQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQjtJQUM1QixNQUFNQyxJQUFJLEdBQUcsTUFBTUMsbUJBQUEsQ0FBTUMsT0FBTixDQUFjO01BQUVKO0lBQUYsQ0FBZCxDQUFuQjs7SUFDQSxJQUFJLENBQUNFLElBQUwsRUFBVztNQUNULE9BQU87UUFDTEcsTUFBTSxFQUFFLEdBREg7UUFFTEMsT0FBTyxFQUFFO01BRkosQ0FBUDtJQUlEOztJQUNELE1BQU1DLGVBQWUsR0FBRyxNQUFNQyx1QkFBQSxDQUFzQkMsZUFBdEIsQ0FDNUJSLFFBRDRCLEVBRTVCQyxJQUFJLENBQUNELFFBRnVCLENBQTlCOztJQUlBLElBQUksQ0FBQ00sZUFBTCxFQUFzQjtNQUNwQixPQUFPO1FBQ0xGLE1BQU0sRUFBRSxHQURIO1FBRUxDLE9BQU8sRUFBRTtNQUZKLENBQVA7SUFJRDs7SUFDRCxPQUFPO01BQ0xELE1BQU0sRUFBRSxHQURIO01BRUxD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