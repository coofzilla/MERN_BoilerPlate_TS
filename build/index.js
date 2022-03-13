"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dev_1 = require("./config/dev");
const app = (0, express_1.default)();
(async () => {
    try {
        await mongoose_1.default.connect(dev_1.mongoURI);
        console.log("CONNECTED TO MONGODB");
    }
    catch (err) {
        console.log("ERROR CONNECTING", err);
    }
})();
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.listen(4000, () => {
    console.log("LISTENING ON 4000");
});
