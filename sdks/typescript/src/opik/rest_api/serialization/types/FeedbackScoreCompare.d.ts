/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { FeedbackScoreCompareSource } from "./FeedbackScoreCompareSource";
export declare const FeedbackScoreCompare: core.serialization.ObjectSchema<serializers.FeedbackScoreCompare.Raw, OpikApi.FeedbackScoreCompare>;
export declare namespace FeedbackScoreCompare {
    interface Raw {
        name: string;
        category_name?: string | null;
        value: number;
        reason?: string | null;
        source: FeedbackScoreCompareSource.Raw;
        created_at?: string | null;
        last_updated_at?: string | null;
        created_by?: string | null;
        last_updated_by?: string | null;
    }
}