"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
const core_1 = require("@actions/core");
const tool_cache_1 = require("@actions/tool-cache");
function downloadFile(version) {
    return __awaiter(this, void 0, void 0, function* () {
        const arch = "Linux-x86_64";
        let binaryUrl = `https://github.com/iggy-rs/iggy/releases/download/server-${version}/${arch}.zip`;
        if (version === "latest") {
            binaryUrl = `https://github.com/iggy-rs/iggy/releases/latest/download/${arch}.zip`;
        }
        (0, core_1.info)(`Binary downloaded from ${binaryUrl}`);
        const pathToTarball = yield (0, tool_cache_1.downloadTool)(binaryUrl);
        const pathToCLI = yield (0, tool_cache_1.extractZip)(pathToTarball);
        return pathToCLI + `/all_artifacts/${arch}`;
    });
}
//# sourceMappingURL=download-binary.js.map