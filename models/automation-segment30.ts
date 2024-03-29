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
 * @interface AutomationSegment30
 */
export interface AutomationSegment30 {
    /**
     * 
     * @type {string}
     * @memberof AutomationSegment30
     */
    'condition_type'?: AutomationSegment30ConditionTypeEnum;
    /**
     * Segment by interaction with an Automation workflow.
     * @type {string}
     * @memberof AutomationSegment30
     */
    'field': AutomationSegment30FieldEnum;
    /**
     * The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow.
     * @type {string}
     * @memberof AutomationSegment30
     */
    'op': AutomationSegment30OpEnum;
    /**
     * The web id for the automation workflow to segment against.
     * @type {string}
     * @memberof AutomationSegment30
     */
    'value': string;
}

type AutomationSegment30ConditionTypeEnum = 'Automation'
type AutomationSegment30FieldEnum = 'automation'
type AutomationSegment30OpEnum = 'started' | 'completed' | 'not_started' | 'not_completed'


