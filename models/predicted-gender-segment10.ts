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
 * @interface PredictedGenderSegment10
 */
export interface PredictedGenderSegment10 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment10
     */
    'condition_type'?: PredictedGenderSegment10ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment10
     */
    'field': PredictedGenderSegment10FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment10
     */
    'op': PredictedGenderSegment10OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment10
     */
    'value': PredictedGenderSegment10ValueEnum;
}

type PredictedGenderSegment10ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment10FieldEnum = 'predicted_gender'
type PredictedGenderSegment10OpEnum = 'is' | 'not'
type PredictedGenderSegment10ValueEnum = 'male' | 'female'

