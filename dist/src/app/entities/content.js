"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
class Content {
    constructor(content) {
        const isContentLengthValid = this.validateContentLenght(content);
        if (!isContentLengthValid) {
            throw new Error('Content length error.');
        }
        this.content = content;
    }
    get value() {
        return this.content;
    }
    validateContentLenght(content) {
        return content.length >= 5 && content.length <= 240;
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map