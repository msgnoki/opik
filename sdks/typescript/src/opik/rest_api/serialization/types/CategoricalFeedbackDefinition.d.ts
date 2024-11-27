/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { CategoricalFeedbackDetail } from "./CategoricalFeedbackDetail";
export declare const CategoricalFeedbackDefinition: core.serialization.ObjectSchema<serializers.CategoricalFeedbackDefinition.Raw, OpikApi.CategoricalFeedbackDefinition>;
export declare namespace CategoricalFeedbackDefinition {
    interface Raw {
        details?: CategoricalFeedbackDetail.Raw | null;
        created_at?: string | null;
        created_by?: string | null;
        last_updated_at?: string | null;
        last_updated_by?: string | null;
    }
}