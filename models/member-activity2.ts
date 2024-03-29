/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A summary of the interaction with the campaign.
 * @export
 * @interface MemberActivity2
 */
export interface MemberActivity2 {
    /**
     * One of the following actions: \'open\', \'click\', or \'bounce\'
     * @type {string}
     * @memberof MemberActivity2
     */
    'action'?: string;
    /**
     * If the action is a \'bounce\', the type of bounce received: \'hard\', \'soft\'.
     * @type {string}
     * @memberof MemberActivity2
     */
    'type'?: string;
    /**
     * The date and time recorded for the action in ISO 8601 format.
     * @type {string}
     * @memberof MemberActivity2
     */
    'timestamp'?: string;
    /**
     * If the action is a \'click\', the URL on which the member clicked.
     * @type {string}
     * @memberof MemberActivity2
     */
    'url'?: string;
    /**
     * The IP address recorded for the action.
     * @type {string}
     * @memberof MemberActivity2
     */
    'ip'?: string;
}

