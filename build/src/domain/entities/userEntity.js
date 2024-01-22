"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntity = void 0;
class userEntity {
    constructor(firstName, lastName, password, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getPassword() {
        return this.password;
    }
    setId(id) {
        this.id = id;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.userEntity = userEntity;
//# sourceMappingURL=userEntity.js.map