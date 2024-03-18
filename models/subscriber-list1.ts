/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CampaignDefaultsProperty1 } from './campaign-defaults-property1';
import { ListContactProperty2 } from './list-contact-property2';
import { ResourceLink } from './resource-link';
import { StatisticsProperty } from './statistics-property';

/**
 * Information about a specific list.
 * @export
 * @interface SubscriberList1
 */
export interface SubscriberList1 {
    /**
     * A string that uniquely identifies this list.
     * @type {string}
     * @memberof SubscriberList1
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
     * @type {number}
     * @memberof SubscriberList1
     */
    'web_id'?: number;
    /**
     * The name of the list.
     * @type {string}
     * @memberof SubscriberList1
     */
    'name'?: string;
    /**
     * 
     * @type {ListContactProperty2}
     * @memberof SubscriberList1
     */
    'contact'?: ListContactProperty2;
    /**
     * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
     * @type {string}
     * @memberof SubscriberList1
     */
    'permission_reminder'?: string;
    /**
     * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
     * @type {boolean}
     * @memberof SubscriberList1
     */
    'use_archive_bar'?: boolean;
    /**
     * 
     * @type {CampaignDefaultsProperty1}
     * @memberof SubscriberList1
     */
    'campaign_defaults'?: CampaignDefaultsProperty1;
    /**
     * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
     * @type {string}
     * @memberof SubscriberList1
     */
    'notify_on_subscribe'?: string;
    /**
     * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
     * @type {string}
     * @memberof SubscriberList1
     */
    'notify_on_unsubscribe'?: string;
    /**
     * The date and time that this list was created in ISO 8601 format.
     * @type {string}
     * @memberof SubscriberList1
     */
    'date_created'?: string;
    /**
     * An auto-generated activity score for the list (0-5).
     * @type {number}
     * @memberof SubscriberList1
     */
    'list_rating'?: number;
    /**
     * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
     * @type {boolean}
     * @memberof SubscriberList1
     */
    'email_type_option'?: boolean;
    /**
     * Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list\'s subscribe form.
     * @type {string}
     * @memberof SubscriberList1
     */
    'subscribe_url_short'?: string;
    /**
     * The full version of this list\'s subscribe form (host will vary).
     * @type {string}
     * @memberof SubscriberList1
     */
    'subscribe_url_long'?: string;
    /**
     * The list\'s [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address.
     * @type {string}
     * @memberof SubscriberList1
     */
    'beamer_address'?: string;
    /**
     * Legacy - visibility settings are no longer used
     * @type {string}
     * @memberof SubscriberList1
     */
    'visibility'?: SubscriberList1VisibilityEnum;
    /**
     * Whether or not to require the subscriber to confirm subscription via email.
     * @type {boolean}
     * @memberof SubscriberList1
     */
    'double_optin'?: boolean;
    /**
     * Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup.
     * @type {boolean}
     * @memberof SubscriberList1
     */
    'has_welcome'?: boolean;
    /**
     * Whether or not the list has marketing permissions (eg. GDPR) enabled.
     * @type {boolean}
     * @memberof SubscriberList1
     */
    'marketing_permissions'?: boolean;
    /**
     * Any list-specific modules installed for this list.
     * @type {Array<string>}
     * @memberof SubscriberList1
     */
    'modules'?: Array<string>;
    /**
     * 
     * @type {StatisticsProperty}
     * @memberof SubscriberList1
     */
    'stats'?: StatisticsProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof SubscriberList1
     */
    '_links'?: Array<ResourceLink>;
}

type SubscriberList1VisibilityEnum = 'pub' | 'prv'

