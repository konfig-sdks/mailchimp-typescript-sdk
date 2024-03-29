/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by predicted gender.
 * @export
 * @interface PredictedGenderSegment39
 */
export interface PredictedGenderSegment39 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment39
     */
    'condition_type'?: PredictedGenderSegment39ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment39
     */
    'field': PredictedGenderSegment39FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment39
     */
    'op': PredictedGenderSegment39OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment39
     */
    'value': PredictedGenderSegment39ValueEnum;
}

type PredictedGenderSegment39ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment39FieldEnum = 'predicted_gender'
type PredictedGenderSegment39OpEnum = 'is' | 'not'
type PredictedGenderSegment39ValueEnum = 'male' | 'female'


