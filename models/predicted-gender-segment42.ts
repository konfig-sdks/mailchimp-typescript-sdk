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
 * @interface PredictedGenderSegment42
 */
export interface PredictedGenderSegment42 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment42
     */
    'condition_type'?: PredictedGenderSegment42ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment42
     */
    'field': PredictedGenderSegment42FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment42
     */
    'op': PredictedGenderSegment42OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment42
     */
    'value': PredictedGenderSegment42ValueEnum;
}

type PredictedGenderSegment42ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment42FieldEnum = 'predicted_gender'
type PredictedGenderSegment42OpEnum = 'is' | 'not'
type PredictedGenderSegment42ValueEnum = 'male' | 'female'


