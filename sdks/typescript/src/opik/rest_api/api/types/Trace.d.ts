/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as OpikApi from "../index";
export interface Trace {
    id?: string;
    /** If null, the default project is used */
    projectName?: string;
    projectId?: string;
    name: string;
    startTime: Date;
    endTime?: Date;
    input?: OpikApi.JsonNode;
    output?: OpikApi.JsonNode;
    metadata?: OpikApi.JsonNode;
    tags?: string[];
    usage?: Record<string, number>;
    createdAt?: Date;
    lastUpdatedAt?: Date;
    createdBy?: string;
    lastUpdatedBy?: string;
    feedbackScores?: OpikApi.FeedbackScore[];
    totalEstimatedCost?: number;
}
