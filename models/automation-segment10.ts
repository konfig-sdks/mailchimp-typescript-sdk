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
 * @interface AutomationSegment10
 */
export interface AutomationSegment10 {
    /**
     * 
     * @type {string}
     * @memberof AutomationSegment10
     */
    'condition_type'?: AutomationSegment10ConditionTypeEnum;
    /**
     * Segment by interaction with an Automation workflow.
     * @type {string}
     * @memberof AutomationSegment10
     */
    'field': AutomationSegment10FieldEnum;
    /**
     * The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow.
     * @type {string}
     * @memberof AutomationSegment10
     */
    'op': AutomationSegment10OpEnum;
    /**
     * The web id for the automation workflow to segment against.
     * @type {string}
     * @memberof AutomationSegment10
     */
    'value': string;
}

type AutomationSegment10ConditionTypeEnum = 'Automation'
type AutomationSegment10FieldEnum = 'automation'
type AutomationSegment10OpEnum = 'started' | 'completed' | 'not_started' | 'not_completed'


