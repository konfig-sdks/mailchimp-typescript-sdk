/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddListMembers } from './add-list-members';

/**
 * Members to subscribe to or unsubscribe from a list.
 * @export
 * @interface ListsBatchSubscribeOrUnsubscribeRequest
 */
export interface ListsBatchSubscribeOrUnsubscribeRequest {
    /**
     * An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call.
     * @type {Array<AddListMembers>}
     * @memberof ListsBatchSubscribeOrUnsubscribeRequest
     */
    'members': Array<AddListMembers>;
    /**
     * Whether this batch operation will replace all existing tags with tags in request.
     * @type {boolean}
     * @memberof ListsBatchSubscribeOrUnsubscribeRequest
     */
    'sync_tags'?: boolean;
    /**
     * Whether this batch operation will change existing members\' subscription status.
     * @type {boolean}
     * @memberof ListsBatchSubscribeOrUnsubscribeRequest
     */
    'update_existing'?: boolean;
}

