"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _authentication = _interopRequireDefault(require("./authentication.service"));
var _AdminModel = _interopRequireDefault(require("../../models/AdminModel"));
var _ExaminerModel = _interopRequireDefault(require("../../models/ExaminerModel"));
var _UniversityModel = _interopRequireDefault(require("../../models/UniversityModel"));
var _MetaDeta = _interopRequireDefault(require("../../models/MetaDeta"));
var _AssignModel = _interopRequireDefault(require("../../models/AssignModel"));
var _express = _interopRequireDefault(require("express"));
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
    const isPasswordMatch = password === user.password;
    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Incorrect password"
      };
    }
    console.log(user);
    if (user.email === "coe@ppsu.ac.in" || user.email === "developer@ppsu.db") {
      return {
        status: 200,
        message: "Login successful",
        token: _authentication.default.generateToken(user.id, user.role, true)
      };
    } else {
      return {
        status: 200,
        message: "Login successful",
        token: _authentication.default.generateToken(user.id, user.role, false)
      };
    }
  }
  async updateMetaData() {
    const metaData = await _MetaDeta.default.findOne({
      unique: "metaData"
    });
    if (!metaData) {
      return _MetaDeta.default.create({
        unique: "metaData",
        lastUpdated: new Date()
      });
    } else {
      // update
      return _MetaDeta.default.findByIdAndUpdate(metaData._id, {
        lastUpdated: new Date()
      });
    }
  }
  async addExaminer(user) {
    console.log(user);
    if ((user === null || user === void 0 ? void 0 : user.e_id) === "SOE") {
      // let count = await Examiner.countDocuments({ e_id: "SOE" });
      // get the last examiner
      let lastExaminer = await _ExaminerModel.default.findOne({
        e_id: "SOE"
      }).sort({
        _id: -1
      });
      let count = 1;
      if (lastExaminer) {
        count = parseInt(lastExaminer.eid.split("SOE")[1]) + 1;
      }
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
    } else {
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
    }
    return _ExaminerModel.default.create(user);
  }
  async deleteExaminer(id) {
    return _ExaminerModel.default.findByIdAndDelete(id);
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
  }

  // Super Admin
  async addAdmin(user) {
    const email = user.email;
    const user_Exist = await _AdminModel.default.findOne({
      email
    });
    if (user_Exist) {
      return {
        status: 400,
        message: "Admin already exists"
      };
    }
    const admin = await _AdminModel.default.create({
      email: user.email,
      password: user.password,
      role: user.role,
      passwordLength: user.password.length
    });
    return {
      status: 200,
      message: "Admin added successfully"
    };
  }
  async updateAdmin(user) {
    const email = user.email;
    console.log(user);
    const admin = await _AdminModel.default.findOne({
      email
    });
    if (!admin) {
      return {
        status: 400,
        message: "Admin not found"
      };
    }
    const updatedAdmin = await _AdminModel.default.findByIdAndUpdate(admin._id, {
      password: user.password,
      passwordLength: user.password.length,
      role: user.role
    });
    return updatedAdmin;
  }
  async getAdmins() {
    const admins = await _AdminModel.default.find();
    admins.forEach((admin, index) => {
      if (admin.email === "developer@ppsu.db") {
        admins.splice(index, 1);
      }
    });
    return admins;
  }
  async getPassword(email) {
    const admin = await _AdminModel.default.findOne({
      email
    });
    if (!admin) {
      return {
        status: 400,
        message: "Admin not found"
      };
    }
    return admin.password;
  }
  async updateExaminer(user) {
    console.log(user);
    return _ExaminerModel.default.findByIdAndUpdate(user.id, user);
  }
  async addMultipleUsers(users) {
    const response = [];
    users.forEach(async user => {
      const resposne = await this.addExaminer(user);
      response.push(resposne);
    });
    return response;
  }
  async addUniversity(university) {
    return _UniversityModel.default.create(university);
  }
  async getUniversities() {
    return _UniversityModel.default.find();
  }
  async updateUniversity(university) {
    return _UniversityModel.default.findByIdAndUpdate(university._id, university);
  }
  async getDistance(name) {
    return _UniversityModel.default.findOne({
      name
    });
  }
  async getMetaData() {
    return _MetaDeta.default.findOne({
      unique: "metaData"
    });
  }
  async assign(data) {
    return _AssignModel.default.create(data);
  }
  async getAssignments() {
    return _AssignModel.default.find();
  }
  async updateAssignment(data) {
    return _AssignModel.default.findByIdAndUpdate(data.id, data);
  }
  async deleteAssignment(id) {
    return _AssignModel.default.findByIdAndDelete(id);
  }
}
var _default = exports.default = new AdminService();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXV0aGVudGljYXRpb24iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9BZG1pbk1vZGVsIiwiX0V4YW1pbmVyTW9kZWwiLCJfVW5pdmVyc2l0eU1vZGVsIiwiX01ldGFEZXRhIiwiX0Fzc2lnbk1vZGVsIiwiX2V4cHJlc3MiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkFkbWluU2VydmljZSIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwiQWRtaW4iLCJmaW5kT25lIiwic3RhdHVzIiwibWVzc2FnZSIsImlzUGFzc3dvcmRNYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsIkF1dGhlbnRpY2F0aW9uU2VydmljZSIsImdlbmVyYXRlVG9rZW4iLCJpZCIsInJvbGUiLCJ1cGRhdGVNZXRhRGF0YSIsIm1ldGFEYXRhIiwiTWV0YURldGEiLCJ1bmlxdWUiLCJjcmVhdGUiLCJsYXN0VXBkYXRlZCIsIkRhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9pZCIsImFkZEV4YW1pbmVyIiwiZV9pZCIsImxhc3RFeGFtaW5lciIsIkV4YW1pbmVyIiwic29ydCIsImNvdW50IiwicGFyc2VJbnQiLCJlaWQiLCJzcGxpdCIsImNvdW50RG9jdW1lbnRzIiwiZGVsZXRlRXhhbWluZXIiLCJmaW5kQnlJZEFuZERlbGV0ZSIsImdldEV4YW1pbmVycyIsImxpbWl0IiwiZmluZCIsImdldEV4YW1pbmVyc1VzaW5nSWQiLCJmaW5kQnlJZCIsImdldEV4YW1pbmVyc1VzaW5nTmFtZSIsIm5hbWUiLCJnZXRFeGFtaW5lcnNVc2luZ0VtYWlsIiwiZ2V0RXhhbWluZXJzVXNpbmdNb2JpbGUiLCJtb2JpbGUiLCJnZXRBbGxFeGFtaW5lcnMiLCJhZGRBZG1pbiIsInVzZXJfRXhpc3QiLCJhZG1pbiIsInBhc3N3b3JkTGVuZ3RoIiwibGVuZ3RoIiwidXBkYXRlQWRtaW4iLCJ1cGRhdGVkQWRtaW4iLCJnZXRBZG1pbnMiLCJhZG1pbnMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzcGxpY2UiLCJnZXRQYXNzd29yZCIsInVwZGF0ZUV4YW1pbmVyIiwiYWRkTXVsdGlwbGVVc2VycyIsInVzZXJzIiwicmVzcG9uc2UiLCJyZXNwb3NuZSIsInB1c2giLCJhZGRVbml2ZXJzaXR5IiwidW5pdmVyc2l0eSIsIlVuaXZlcnNpdHlNb2RlbCIsImdldFVuaXZlcnNpdGllcyIsInVwZGF0ZVVuaXZlcnNpdHkiLCJnZXREaXN0YW5jZSIsImdldE1ldGFEYXRhIiwiYXNzaWduIiwiZGF0YSIsIkFzc2lnbm1lbnQiLCJnZXRBc3NpZ25tZW50cyIsInVwZGF0ZUFzc2lnbm1lbnQiLCJkZWxldGVBc3NpZ25tZW50IiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9zZXJ2aWNlcy9hZG1pbi5zZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoZW50aWNhdGlvblNlcnZpY2UgZnJvbSBcIi4vYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IEFkbWluIGZyb20gXCIuLi8uLi9tb2RlbHMvQWRtaW5Nb2RlbFwiO1xuaW1wb3J0IEV4YW1pbmVyIGZyb20gXCIuLi8uLi9tb2RlbHMvRXhhbWluZXJNb2RlbFwiO1xuaW1wb3J0IFVuaXZlcnNpdHlNb2RlbCBmcm9tIFwiLi4vLi4vbW9kZWxzL1VuaXZlcnNpdHlNb2RlbFwiO1xuaW1wb3J0IE1ldGFEZXRhIGZyb20gXCIuLi8uLi9tb2RlbHMvTWV0YURldGFcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9tb2RlbHMvQXNzaWduTW9kZWxcIjtcbmltcG9ydCBlIGZyb20gXCJleHByZXNzXCI7XG5jbGFzcyBBZG1pblNlcnZpY2Uge1xuICBhc3luYyBzaWduSW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBtZXNzYWdlOiBcIkFkbWluIG5vdCBmb3VuZFwiLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgaXNQYXNzd29yZE1hdGNoID0gcGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQ7XG5cbiAgICBpZiAoIWlzUGFzc3dvcmRNYXRjaCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgIG1lc3NhZ2U6IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBpZiAodXNlci5lbWFpbCA9PT0gXCJjb2VAcHBzdS5hYy5pblwiIHx8IHVzZXIuZW1haWwgPT09IFwiZGV2ZWxvcGVyQHBwc3UuZGJcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgICB0b2tlbjogQXV0aGVudGljYXRpb25TZXJ2aWNlLmdlbmVyYXRlVG9rZW4odXNlci5pZCwgdXNlci5yb2xlLCB0cnVlKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBtZXNzYWdlOiBcIkxvZ2luIHN1Y2Nlc3NmdWxcIixcbiAgICAgICAgdG9rZW46IEF1dGhlbnRpY2F0aW9uU2VydmljZS5nZW5lcmF0ZVRva2VuKHVzZXIuaWQsIHVzZXIucm9sZSwgZmFsc2UpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgdXBkYXRlTWV0YURhdGEoKSB7XG4gICAgY29uc3QgbWV0YURhdGEgPSBhd2FpdCBNZXRhRGV0YS5maW5kT25lKHsgdW5pcXVlOiBcIm1ldGFEYXRhXCIgfSk7XG4gICAgaWYgKCFtZXRhRGF0YSkge1xuICAgICAgcmV0dXJuIE1ldGFEZXRhLmNyZWF0ZSh7XG4gICAgICAgIHVuaXF1ZTogXCJtZXRhRGF0YVwiLFxuICAgICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGVcbiAgICAgIHJldHVybiBNZXRhRGV0YS5maW5kQnlJZEFuZFVwZGF0ZShtZXRhRGF0YS5faWQsIHtcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgYWRkRXhhbWluZXIodXNlcikge1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIGlmICh1c2VyPy5lX2lkID09PSBcIlNPRVwiKSB7XG4gICAgICAvLyBsZXQgY291bnQgPSBhd2FpdCBFeGFtaW5lci5jb3VudERvY3VtZW50cyh7IGVfaWQ6IFwiU09FXCIgfSk7XG4gICAgICAvLyBnZXQgdGhlIGxhc3QgZXhhbWluZXJcbiAgICAgIGxldCBsYXN0RXhhbWluZXIgPSBhd2FpdCBFeGFtaW5lci5maW5kT25lKHsgZV9pZDogXCJTT0VcIiB9KS5zb3J0KHtcbiAgICAgICAgX2lkOiAtMSxcbiAgICAgIH0pO1xuICAgICAgbGV0IGNvdW50ID0gMTtcbiAgICAgIGlmIChsYXN0RXhhbWluZXIpIHtcbiAgICAgICAgY291bnQgPSBwYXJzZUludChsYXN0RXhhbWluZXIuZWlkLnNwbGl0KFwiU09FXCIpWzFdKSArIDE7XG4gICAgICB9XG4gICAgICBjb3VudCsrO1xuICAgICAgaWYgKGNvdW50IDwgMTApIHtcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT0UwMDAke2NvdW50fWA7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwKSB7XG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09FMDAke2NvdW50fWA7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwMCkge1xuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPRTAke2NvdW50fWA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1c2VyLmVfaWQgPT09IFwiU09QXCIpIHtcbiAgICAgIGxldCBjb3VudCA9IGF3YWl0IEV4YW1pbmVyLmNvdW50RG9jdW1lbnRzKHsgZV9pZDogXCJTT1BcIiB9KTtcbiAgICAgIGNvdW50Kys7XG5cbiAgICAgIGlmIChjb3VudCA8IDEwKSB7XG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09QMDAwJHtjb3VudH1gO1xuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPUDAwJHtjb3VudH1gO1xuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEwMDApIHtcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT1AwJHtjb3VudH1gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodXNlci5lX2lkID09PSBcIlNPTlwiKSB7XG4gICAgICBsZXQgY291bnQgPSBhd2FpdCBFeGFtaW5lci5jb3VudERvY3VtZW50cyh7IGVfaWQ6IFwiU09OXCIgfSk7XG4gICAgICBjb3VudCsrO1xuXG4gICAgICBpZiAoY291bnQgPCAxMCkge1xuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPTjAwMCR7Y291bnR9YDtcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT04wMCR7Y291bnR9YDtcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDAwKSB7XG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09OMCR7Y291bnR9YDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVzZXIuZV9pZCA9PT0gXCJTTE1cIikge1xuICAgICAgbGV0IGNvdW50ID0gYXdhaXQgRXhhbWluZXIuY291bnREb2N1bWVudHMoeyBlX2lkOiBcIlNMTVwiIH0pO1xuICAgICAgY291bnQrKztcblxuICAgICAgaWYgKGNvdW50IDwgMTApIHtcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTTE0wMDAke2NvdW50fWA7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwKSB7XG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU0xNMDAke2NvdW50fWA7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwMCkge1xuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNMTTAke2NvdW50fWA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb3VudCA9IGF3YWl0IEV4YW1pbmVyLmNvdW50RG9jdW1lbnRzKHsgZV9pZDogXCJTT0VcIiB9KTtcbiAgICAgIGNvdW50Kys7XG4gICAgICBpZiAoY291bnQgPCAxMCkge1xuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPRTAwMCR7Y291bnR9YDtcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT0UwMCR7Y291bnR9YDtcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDAwKSB7XG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09FMCR7Y291bnR9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRXhhbWluZXIuY3JlYXRlKHVzZXIpO1xuICB9XG4gIGFzeW5jIGRlbGV0ZUV4YW1pbmVyKGlkKSB7XG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcbiAgfVxuICBhc3luYyBnZXRFeGFtaW5lcnMobGltaXQpIHtcbiAgICByZXR1cm4gRXhhbWluZXIuZmluZCgpLmxpbWl0KGxpbWl0KTtcbiAgfVxuICBhc3luYyBnZXRFeGFtaW5lcnNVc2luZ0lkKGlkKSB7XG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmRCeUlkKGlkKTtcbiAgfVxuICBhc3luYyBnZXRFeGFtaW5lcnNVc2luZ05hbWUobmFtZSkge1xuICAgIC8vIGluZGV4IHNlYXJjaFxuXG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmQoeyBuYW1lIH0pO1xuICB9XG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gRXhhbWluZXIuZmluZCh7IGVtYWlsIH0pO1xuICB9XG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nTW9iaWxlKG1vYmlsZSkge1xuICAgIHJldHVybiBFeGFtaW5lci5maW5kKHsgbW9iaWxlIH0pO1xuICB9XG4gIGFzeW5jIGdldEFsbEV4YW1pbmVycygpIHtcbiAgICByZXR1cm4gRXhhbWluZXIuZmluZCgpO1xuICB9XG5cbiAgLy8gU3VwZXIgQWRtaW5cbiAgYXN5bmMgYWRkQWRtaW4odXNlcikge1xuICAgIGNvbnN0IGVtYWlsID0gdXNlci5lbWFpbDtcbiAgICBjb25zdCB1c2VyX0V4aXN0ID0gYXdhaXQgQWRtaW4uZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgIGlmICh1c2VyX0V4aXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgbWVzc2FnZTogXCJBZG1pbiBhbHJlYWR5IGV4aXN0c1wiLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgYWRtaW4gPSBhd2FpdCBBZG1pbi5jcmVhdGUoe1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgIHBhc3N3b3JkTGVuZ3RoOiB1c2VyLnBhc3N3b3JkLmxlbmd0aCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIG1lc3NhZ2U6IFwiQWRtaW4gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgfTtcbiAgfVxuICBhc3luYyB1cGRhdGVBZG1pbih1c2VyKSB7XG4gICAgY29uc3QgZW1haWwgPSB1c2VyLmVtYWlsO1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgIGlmICghYWRtaW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBtZXNzYWdlOiBcIkFkbWluIG5vdCBmb3VuZFwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkQWRtaW4gPSBhd2FpdCBBZG1pbi5maW5kQnlJZEFuZFVwZGF0ZShhZG1pbi5faWQsIHtcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRMZW5ndGg6IHVzZXIucGFzc3dvcmQubGVuZ3RoLFxuICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgIH0pO1xuICAgIHJldHVybiB1cGRhdGVkQWRtaW47XG4gIH1cbiAgYXN5bmMgZ2V0QWRtaW5zKCkge1xuICAgIGNvbnN0IGFkbWlucyA9IGF3YWl0IEFkbWluLmZpbmQoKTtcblxuICAgIGFkbWlucy5mb3JFYWNoKChhZG1pbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChhZG1pbi5lbWFpbCA9PT0gXCJkZXZlbG9wZXJAcHBzdS5kYlwiKSB7XG4gICAgICAgIGFkbWlucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhZG1pbnM7XG4gIH1cbiAgYXN5bmMgZ2V0UGFzc3dvcmQoZW1haWwpIHtcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICBpZiAoIWFkbWluKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgbWVzc2FnZTogXCJBZG1pbiBub3QgZm91bmRcIixcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhZG1pbi5wYXNzd29yZDtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUV4YW1pbmVyKHVzZXIpIHtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICByZXR1cm4gRXhhbWluZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlci5pZCwgdXNlcik7XG4gIH1cbiAgYXN5bmMgYWRkTXVsdGlwbGVVc2Vycyh1c2Vycykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gW107XG4gICAgdXNlcnMuZm9yRWFjaChhc3luYyAodXNlcikgPT4ge1xuICAgICAgY29uc3QgcmVzcG9zbmUgPSBhd2FpdCB0aGlzLmFkZEV4YW1pbmVyKHVzZXIpO1xuICAgICAgcmVzcG9uc2UucHVzaChyZXNwb3NuZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIGFzeW5jIGFkZFVuaXZlcnNpdHkodW5pdmVyc2l0eSkge1xuICAgIHJldHVybiBVbml2ZXJzaXR5TW9kZWwuY3JlYXRlKHVuaXZlcnNpdHkpO1xuICB9XG4gIGFzeW5jIGdldFVuaXZlcnNpdGllcygpIHtcbiAgICByZXR1cm4gVW5pdmVyc2l0eU1vZGVsLmZpbmQoKTtcbiAgfVxuICBhc3luYyB1cGRhdGVVbml2ZXJzaXR5KHVuaXZlcnNpdHkpIHtcbiAgICByZXR1cm4gVW5pdmVyc2l0eU1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKHVuaXZlcnNpdHkuX2lkLCB1bml2ZXJzaXR5KTtcbiAgfVxuICBhc3luYyBnZXREaXN0YW5jZShuYW1lKSB7XG4gICAgcmV0dXJuIFVuaXZlcnNpdHlNb2RlbC5maW5kT25lKHsgbmFtZSB9KTtcbiAgfVxuICBhc3luYyBnZXRNZXRhRGF0YSgpIHtcbiAgICByZXR1cm4gTWV0YURldGEuZmluZE9uZSh7IHVuaXF1ZTogXCJtZXRhRGF0YVwiIH0pO1xuICB9XG4gIGFzeW5jIGFzc2lnbihkYXRhKSB7XG4gICAgcmV0dXJuIEFzc2lnbm1lbnQuY3JlYXRlKGRhdGEpO1xuICB9XG4gIGFzeW5jIGdldEFzc2lnbm1lbnRzKCkge1xuICAgIHJldHVybiBBc3NpZ25tZW50LmZpbmQoKTtcbiAgfVxuICBhc3luYyB1cGRhdGVBc3NpZ25tZW50KGRhdGEpIHtcbiAgICByZXR1cm4gQXNzaWdubWVudC5maW5kQnlJZEFuZFVwZGF0ZShkYXRhLmlkLCBkYXRhKTtcbiAgfVxuICBhc3luYyBkZWxldGVBc3NpZ25tZW50KGlkKSB7XG4gICAgcmV0dXJuIEFzc2lnbm1lbnQuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZG1pblNlcnZpY2UoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsY0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsZ0JBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLFNBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFLLFlBQUEsR0FBQU4sc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFNLFFBQUEsR0FBQVAsc0JBQUEsQ0FBQUMsT0FBQTtBQUF3QixTQUFBRCx1QkFBQVEsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLEtBQUFFLE9BQUEsRUFBQUYsR0FBQTtBQUN4QixNQUFNRyxZQUFZLENBQUM7RUFDakIsTUFBTUMsTUFBTUEsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDNUIsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLG1CQUFLLENBQUNDLE9BQU8sQ0FBQztNQUFFSjtJQUFNLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUNFLElBQUksRUFBRTtNQUNULE9BQU87UUFDTEcsTUFBTSxFQUFFLEdBQUc7UUFDWEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztJQUNIO0lBQ0EsTUFBTUMsZUFBZSxHQUFHTixRQUFRLEtBQUtDLElBQUksQ0FBQ0QsUUFBUTtJQUVsRCxJQUFJLENBQUNNLGVBQWUsRUFBRTtNQUNwQixPQUFPO1FBQ0xGLE1BQU0sRUFBRSxHQUFHO1FBQ1hDLE9BQU8sRUFBRTtNQUNYLENBQUM7SUFDSDtJQUNBRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDO0lBQ2pCLElBQUlBLElBQUksQ0FBQ0YsS0FBSyxLQUFLLGdC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