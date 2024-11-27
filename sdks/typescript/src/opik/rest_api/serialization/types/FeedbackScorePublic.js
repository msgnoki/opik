"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackScorePublic = void 0;
const core = __importStar(require("../../core"));
const FeedbackScorePublicSource_1 = require("./FeedbackScorePublicSource");
exports.FeedbackScorePublic = core.serialization.object({
    name: core.serialization.string(),
    categoryName: core.serialization.property("category_name", core.serialization.string().optional()),
    value: core.serialization.number(),
    reason: core.serialization.string().optional(),
    source: FeedbackScorePublicSource_1.FeedbackScorePublicSource,
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    lastUpdatedAt: core.serialization.property("last_updated_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    lastUpdatedBy: core.serialization.property("last_updated_by", core.serialization.string().optional()),
});