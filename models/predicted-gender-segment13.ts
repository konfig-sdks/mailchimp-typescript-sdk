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
 * @interface PredictedGenderSegment13
 */
export interface PredictedGenderSegment13 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment13
     */
    'condition_type'?: PredictedGenderSegment13ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment13
     */
    'field': PredictedGenderSegment13FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment13
     */
    'op': PredictedGenderSegment13OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment13
     */
    'value': PredictedGenderSegment13ValueEnum;
}

type PredictedGenderSegment13ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment13FieldEnum = 'predicted_gender'
type PredictedGenderSegment13OpEnum = 'is' | 'not'
type PredictedGenderSegment13ValueEnum = 'male' | 'female'


