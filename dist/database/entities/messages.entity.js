"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let Message = class Message extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.default, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'producer_id' }),
    __metadata("design:type", String)
], Message.prototype, "producer_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('text', { unique: false, nullable: false }),
    __metadata("design:type", String)
], Message.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamptz', { unique: false, nullable: false }),
    __metadata("design:type", Date)
], Message.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.default, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'consumer_id' }),
    __metadata("design:type", String)
], Message.prototype, "consumer_id", void 0);
Message = __decorate([
    (0, typeorm_1.Entity)('messages')
], Message);
exports.default = Message;
//# sourceMappingURL=messages.entity.js.map