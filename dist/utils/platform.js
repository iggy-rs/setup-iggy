"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatform = getPlatform;
const os_1 = __importDefault(require("os"));
function getPlatform() {
    const platform = os_1.default.platform();
    switch (platform) {
        case "darwin":
            return "darwin";
        case "freebsd":
            return "freebsd";
        case "linux":
            return "linux";
        case "openbsd":
            return "openbsd";
        case "win32":
            return "windows";
        default:
            throw new Error(`Unsupported operating system platform: ${platform}`);
    }
}
//# sourceMappingURL=platform.js.map