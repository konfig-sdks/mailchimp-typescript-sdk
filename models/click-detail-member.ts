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
 * A subscriber who clicked a specific URL in a specific campaign.
 * @export
 * @interface ClickDetailMember
 */
export interface ClickDetailMember {
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof ClickDetailMember
     */
    'email_id'?: string;
    /**
     * Email address for a subscriber.
     * @type {string}
     * @memberof ClickDetailMember
     */
    'email_address'?: string;
    /**
     * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
     * @type {{ [key: string]: any; }}
     * @memberof ClickDetailMember
     */
    'merge_fields'?: { [key: string]: any; };
    /**
     * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
     * @type {boolean}
     * @memberof ClickDetailMember
     */
    'vip'?: boolean;
    /**
     * The total number of times the subscriber clicked on the link.
     * @type {number}
     * @memberof ClickDetailMember
     */
    'clicks'?: number;
    /**
     * The campaign id.
     * @type {string}
     * @memberof ClickDetailMember
     */
    'campaign_id'?: string;
    /**
     * The id for the tracked URL in the campaign.
     * @type {string}
     * @memberof ClickDetailMember
     */
    'url_id'?: string;
    /**
     * The list id.
     * @type {string}
     * @memberof ClickDetailMember
     */
    'list_id'?: string;
    /**
     * The status of the list used, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof ClickDetailMember
     */
    'list_is_active'?: boolean;
    /**
     * The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation.
     * @type {string}
     * @memberof ClickDetailMember
     */
    'contact_status'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ClickDetailMember
     */
    '_links'?: Array<ResourceLink>;
}

