"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryNotificationsRepository = void 0;
class InMemoryNotificationsRepository {
    constructor() {
        this.notifications = [];
    }
    async create(notification) {
        this.notifications.push(notification);
    }
}
exports.InMemoryNotificationsRepository = InMemoryNotificationsRepository;
//# sourceMappingURL=in-memory-notifications-repository.js.map