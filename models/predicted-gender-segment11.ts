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
 * @interface PredictedGenderSegment11
 */
export interface PredictedGenderSegment11 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment11
     */
    'condition_type'?: PredictedGenderSegment11ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment11
     */
    'field': PredictedGenderSegment11FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment11
     */
    'op': PredictedGenderSegment11OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment11
     */
    'value': PredictedGenderSegment11ValueEnum;
}

type PredictedGenderSegment11ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment11FieldEnum = 'predicted_gender'
type PredictedGenderSegment11OpEnum = 'is' | 'not'
type PredictedGenderSegment11ValueEnum = 'male' | 'female'


