/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';

/**
 * A summary of a subscriber removed from an Automation workflow.
 * @export
 * @interface SubscriberRemovedFromAutomationWorkflow
 */
export interface SubscriberRemovedFromAutomationWorkflow {
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof SubscriberRemovedFromAutomationWorkflow
     */
    'id'?: string;
    /**
     * A string that uniquely identifies an Automation workflow.
     * @type {string}
     * @memberof SubscriberRemovedFromAutomationWorkflow
     */
    'workflow_id'?: string;
    /**
     * A string that uniquely identifies a list.
     * @type {string}
     * @memberof SubscriberRemovedFromAutomationWorkflow
     */
    'list_id'?: string;
    /**
     * The list member\'s email address.
     * @type {string}
     * @memberof SubscriberRemovedFromAutomationWorkflow
     */
    'email_address'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof SubscriberRemovedFromAutomationWorkflow
     */
    '_links'?: Array<ResourceLink>;
}

