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
 * @interface PredictedGenderSegment24
 */
export interface PredictedGenderSegment24 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment24
     */
    'condition_type'?: PredictedGenderSegment24ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment24
     */
    'field': PredictedGenderSegment24FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment24
     */
    'op': PredictedGenderSegment24OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment24
     */
    'value': PredictedGenderSegment24ValueEnum;
}

type PredictedGenderSegment24ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment24FieldEnum = 'predicted_gender'
type PredictedGenderSegment24OpEnum = 'is' | 'not'
type PredictedGenderSegment24ValueEnum = 'male' | 'female'


