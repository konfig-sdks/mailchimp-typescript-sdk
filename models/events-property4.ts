/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The events that can trigger the webhook and whether they are enabled.
 * @export
 * @interface EventsProperty4
 */
export interface EventsProperty4 {
    /**
     * Whether the webhook is triggered when a list subscriber is added.
     * @type {boolean}
     * @memberof EventsProperty4
     */
    'subscribe'?: boolean;
    /**
     * Whether the webhook is triggered when a list member unsubscribes.
     * @type {boolean}
     * @memberof EventsProperty4
     */
    'unsubscribe'?: boolean;
    /**
     * Whether the webhook is triggered when a subscriber\'s profile is updated.
     * @type {boolean}
     * @memberof EventsProperty4
     */
    'profile'?: boolean;
    /**
     * Whether the webhook is triggered when a subscriber\'s email address is cleaned from the list.
     * @type {boolean}
     * @memberof EventsProperty4
     */
    'cleaned'?: boolean;
    /**
     * Whether the webhook is triggered when a subscriber\'s email address is changed.
     * @type {boolean}
     * @memberof EventsProperty4
     */
    'upemail'?: boolean;
    /**
     * Whether the webhook is triggered when a campaign is sent or cancelled.
     * @type {boolean}
     * @memberof EventsProperty4
     */
    'campaign'?: boolean;
}

