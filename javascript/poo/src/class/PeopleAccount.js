"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peopleAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class peopleAccount extends DioAccount_1.DioAccount {
    constructor(doc_id, name, accountNumber) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}
exports.peopleAccount = peopleAccount;
