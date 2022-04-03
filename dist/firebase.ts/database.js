"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeUserData = void 0;
const firebaseConfig_1 = __importDefault(require("./firebaseConfig"));
const database_1 = require("firebase/database");
const database = (0, database_1.getDatabase)(firebaseConfig_1.default);
function writeUserData(userId, name) {
    (0, database_1.set)((0, database_1.ref)(database, 'users/' + userId), {
        username: name,
    });
}
exports.writeUserData = writeUserData;
