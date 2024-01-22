"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/login", (req, res) => {
    res.send('<a href="/auth/google">Login with google</a>');
});
app.get("/admin", (req, res) => {
    res.send("Logged in successfully!!");
});
app.listen(5000, () => console.log(`listening on: 5000`));
//# sourceMappingURL=socialLogin.route.js.map