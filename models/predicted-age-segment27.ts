/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by predicted age.
 * @export
 * @interface PredictedAgeSegment27
 */
export interface PredictedAgeSegment27 {
    /**
     * 
     * @type {string}
     * @memberof PredictedAgeSegment27
     */
    'condition_type'?: PredictedAgeSegment27ConditionTypeEnum;
    /**
     * Segment by predicted age.
     * @type {string}
     * @memberof PredictedAgeSegment27
     */
    'field': PredictedAgeSegment27FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedAgeSegment27
     */
    'op': PredictedAgeSegment27OpEnum;
    /**
     * The predicted age to segment.
     * @type {string}
     * @memberof PredictedAgeSegment27
     */
    'value': PredictedAgeSegment27ValueEnum;
}

type PredictedAgeSegment27ConditionTypeEnum = 'PredictedAge'
type PredictedAgeSegment27FieldEnum = 'predicted_age_range'
type PredictedAgeSegment27OpEnum = 'is'
type PredictedAgeSegment27ValueEnum = '18-24' | '25-34' | '35-44' | '45-54' | '55-64' | '65+'


