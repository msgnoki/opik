/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { FeedbackScorePublicSource } from "./FeedbackScorePublicSource";
export declare const FeedbackScorePublic: core.serialization.ObjectSchema<serializers.FeedbackScorePublic.Raw, OpikApi.FeedbackScorePublic>;
export declare namespace FeedbackScorePublic {
    interface Raw {
        name: string;
        category_name?: string | null;
        value: number;
        reason?: string | null;
        source: FeedbackScorePublicSource.Raw;
        created_at?: string | null;
        last_updated_at?: string | null;
        created_by?: string | null;
        last_updated_by?: string | null;
    }
}