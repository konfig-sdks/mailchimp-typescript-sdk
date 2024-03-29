/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CampaignDefaultsProperty } from './campaign-defaults-property';
import { ListContactProperty } from './list-contact-property';

/**
 * Information about a specific list.
 * @export
 * @interface ListsCreateNewListRequest
 */
export interface ListsCreateNewListRequest {
    /**
     * The name of the list.
     * @type {string}
     * @memberof ListsCreateNewListRequest
     */
    'name': string;
    /**
     * 
     * @type {ListContactProperty}
     * @memberof ListsCreateNewListRequest
     */
    'contact': ListContactProperty;
    /**
     * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
     * @type {string}
     * @memberof ListsCreateNewListRequest
     */
    'permission_reminder': string;
    /**
     * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
     * @type {boolean}
     * @memberof ListsCreateNewListRequest
     */
    'use_archive_bar'?: boolean;
    /**
     * 
     * @type {CampaignDefaultsProperty}
     * @memberof ListsCreateNewListRequest
     */
    'campaign_defaults': CampaignDefaultsProperty;
    /**
     * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
     * @type {string}
     * @memberof ListsCreateNewListRequest
     */
    'notify_on_subscribe'?: string;
    /**
     * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
     * @type {string}
     * @memberof ListsCreateNewListRequest
     */
    'notify_on_unsubscribe'?: string;
    /**
     * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
     * @type {boolean}
     * @memberof ListsCreateNewListRequest
     */
    'email_type_option': boolean;
    /**
     * Whether or not to require the subscriber to confirm subscription via email.
     * @type {boolean}
     * @memberof ListsCreateNewListRequest
     */
    'double_optin'?: boolean;
    /**
     * Whether or not the list has marketing permissions (eg. GDPR) enabled.
     * @type {boolean}
     * @memberof ListsCreateNewListRequest
     */
    'marketing_permissions'?: boolean;
}

