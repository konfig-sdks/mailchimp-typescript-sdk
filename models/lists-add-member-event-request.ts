/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A new event for a specific list member
 * @export
 * @interface ListsAddMemberEventRequest
 */
export interface ListsAddMemberEventRequest {
    /**
     * The name for this type of event (\'purchased\', \'visited\', etc). Must be 2-30 characters in length
     * @type {string}
     * @memberof ListsAddMemberEventRequest
     */
    'name': string;
    /**
     * An optional list of properties
     * @type {{ [key: string]: string; }}
     * @memberof ListsAddMemberEventRequest
     */
    'properties'?: { [key: string]: string; };
    /**
     * Events created with the is_syncing value set to `true` will not trigger automations.
     * @type {boolean}
     * @memberof ListsAddMemberEventRequest
     */
    'is_syncing'?: boolean;
    /**
     * The date and time the event occurred in ISO 8601 format.
     * @type {string}
     * @memberof ListsAddMemberEventRequest
     */
    'occurred_at'?: string;
}

