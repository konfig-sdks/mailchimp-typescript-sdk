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
 * @interface PredictedGenderSegment3
 */
export interface PredictedGenderSegment3 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment3
     */
    'condition_type'?: PredictedGenderSegment3ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment3
     */
    'field': PredictedGenderSegment3FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment3
     */
    'op': PredictedGenderSegment3OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment3
     */
    'value': PredictedGenderSegment3ValueEnum;
}

type PredictedGenderSegment3ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment3FieldEnum = 'predicted_gender'
type PredictedGenderSegment3OpEnum = 'is' | 'not'
type PredictedGenderSegment3ValueEnum = 'male' | 'female'


