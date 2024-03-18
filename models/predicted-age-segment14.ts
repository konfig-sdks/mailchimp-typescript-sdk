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
 * @interface PredictedAgeSegment14
 */
export interface PredictedAgeSegment14 {
    /**
     * 
     * @type {string}
     * @memberof PredictedAgeSegment14
     */
    'condition_type'?: PredictedAgeSegment14ConditionTypeEnum;
    /**
     * Segment by predicted age.
     * @type {string}
     * @memberof PredictedAgeSegment14
     */
    'field': PredictedAgeSegment14FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedAgeSegment14
     */
    'op': PredictedAgeSegment14OpEnum;
    /**
     * The predicted age to segment.
     * @type {string}
     * @memberof PredictedAgeSegment14
     */
    'value': PredictedAgeSegment14ValueEnum;
}

type PredictedAgeSegment14ConditionTypeEnum = 'PredictedAge'
type PredictedAgeSegment14FieldEnum = 'predicted_age_range'
type PredictedAgeSegment14OpEnum = 'is'
type PredictedAgeSegment14ValueEnum = '18-24' | '25-34' | '35-44' | '45-54' | '55-64' | '65+'


