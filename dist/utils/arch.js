"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArch = getArch;
const os_1 = __importDefault(require("os"));
function getArch() {
    const arch = os_1.default.arch();
    switch (arch) {
        case "arm":
            return "arm";
        case "arm64":
            return "arm64";
        case "x32":
            return "386";
        case "x64":
            return "amd64";
        default:
            throw new Error(`Unsupported operating system architecture: ${arch}`);
    }
}
//# sourceMappingURL=arch.js.map