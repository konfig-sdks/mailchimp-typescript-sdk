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
 * Information about subscribers in an Automation email queue.
 * @export
 * @interface AutomationsClassicAutomationSubscriberInfo200Response
 */
export interface AutomationsClassicAutomationSubscriberInfo200Response {
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'id'?: string;
    /**
     * A string that uniquely identifies an Automation workflow.
     * @type {string}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'workflow_id'?: string;
    /**
     * A string that uniquely identifies an email in an Automation workflow.
     * @type {string}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'email_id'?: string;
    /**
     * A string that uniquely identifies a list.
     * @type {string}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'list_id'?: string;
    /**
     * The status of the list used, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'list_is_active'?: boolean;
    /**
     * The list member\'s email address.
     * @type {string}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'email_address'?: string;
    /**
     * The date and time of the next send for the workflow email in ISO 8601 format.
     * @type {string}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    'next_send'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof AutomationsClassicAutomationSubscriberInfo200Response
     */
    '_links'?: Array<ResourceLink>;
}

