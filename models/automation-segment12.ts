/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by interaction with an Automation workflow.
 * @export
 * @interface AutomationSegment12
 */
export interface AutomationSegment12 {
    /**
     * 
     * @type {string}
     * @memberof AutomationSegment12
     */
    'condition_type'?: AutomationSegment12ConditionTypeEnum;
    /**
     * Segment by interaction with an Automation workflow.
     * @type {string}
     * @memberof AutomationSegment12
     */
    'field': AutomationSegment12FieldEnum;
    /**
     * The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow.
     * @type {string}
     * @memberof AutomationSegment12
     */
    'op': AutomationSegment12OpEnum;
    /**
     * The web id for the automation workflow to segment against.
     * @type {string}
     * @memberof AutomationSegment12
     */
    'value': string;
}

type AutomationSegment12ConditionTypeEnum = 'Automation'
type AutomationSegment12FieldEnum = 'automation'
type AutomationSegment12OpEnum = 'started' | 'completed' | 'not_started' | 'not_completed'

