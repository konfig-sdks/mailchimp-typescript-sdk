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
 * @interface AutomationSegment6
 */
export interface AutomationSegment6 {
    /**
     * 
     * @type {string}
     * @memberof AutomationSegment6
     */
    'condition_type'?: AutomationSegment6ConditionTypeEnum;
    /**
     * Segment by interaction with an Automation workflow.
     * @type {string}
     * @memberof AutomationSegment6
     */
    'field': AutomationSegment6FieldEnum;
    /**
     * The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow.
     * @type {string}
     * @memberof AutomationSegment6
     */
    'op': AutomationSegment6OpEnum;
    /**
     * The web id for the automation workflow to segment against.
     * @type {string}
     * @memberof AutomationSegment6
     */
    'value': string;
}

type AutomationSegment6ConditionTypeEnum = 'Automation'
type AutomationSegment6FieldEnum = 'automation'
type AutomationSegment6OpEnum = 'started' | 'completed' | 'not_started' | 'not_completed'


