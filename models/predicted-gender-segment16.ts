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
 * @interface PredictedGenderSegment16
 */
export interface PredictedGenderSegment16 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment16
     */
    'condition_type'?: PredictedGenderSegment16ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment16
     */
    'field': PredictedGenderSegment16FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment16
     */
    'op': PredictedGenderSegment16OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment16
     */
    'value': PredictedGenderSegment16ValueEnum;
}

type PredictedGenderSegment16ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment16FieldEnum = 'predicted_gender'
type PredictedGenderSegment16OpEnum = 'is' | 'not'
type PredictedGenderSegment16ValueEnum = 'male' | 'female'


