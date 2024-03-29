/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty11 } from './address-property11';
import { AutomationsProperty } from './automations-property';
import { ConnectedSiteProperty } from './connected-site-property';
import { ResourceLink } from './resource-link';

/**
 * An individual store in an account.
 * @export
 * @interface ECommerceStore
 */
export interface ECommerceStore {
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof ECommerceStore
     */
    'id'?: string;
    /**
     * The unique identifier for the list that\'s associated with the store. The `list_id` for a specific store can\'t change.
     * @type {string}
     * @memberof ECommerceStore
     */
    'list_id'?: string;
    /**
     * The name of the store.
     * @type {string}
     * @memberof ECommerceStore
     */
    'name'?: string;
    /**
     * The e-commerce platform of the store.
     * @type {string}
     * @memberof ECommerceStore
     */
    'platform'?: string;
    /**
     * The store domain.  The store domain must be unique within a user account.
     * @type {string}
     * @memberof ECommerceStore
     */
    'domain'?: string;
    /**
     * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
     * @type {boolean}
     * @memberof ECommerceStore
     */
    'is_syncing'?: boolean;
    /**
     * The email address for the store.
     * @type {string}
     * @memberof ECommerceStore
     */
    'email_address'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof ECommerceStore
     */
    'currency_code'?: string;
    /**
     * The currency format for the store. For example: `$`, `£`, etc.
     * @type {string}
     * @memberof ECommerceStore
     */
    'money_format'?: string;
    /**
     * The primary locale for the store. For example: `en`, `de`, etc.
     * @type {string}
     * @memberof ECommerceStore
     */
    'primary_locale'?: string;
    /**
     * The timezone for the store.
     * @type {string}
     * @memberof ECommerceStore
     */
    'timezone'?: string;
    /**
     * The store phone number.
     * @type {string}
     * @memberof ECommerceStore
     */
    'phone'?: string;
    /**
     * 
     * @type {AddressProperty11}
     * @memberof ECommerceStore
     */
    'address'?: AddressProperty11;
    /**
     * 
     * @type {ConnectedSiteProperty}
     * @memberof ECommerceStore
     */
    'connected_site'?: ConnectedSiteProperty;
    /**
     * 
     * @type {AutomationsProperty}
     * @memberof ECommerceStore
     */
    'automations'?: AutomationsProperty;
    /**
     * The status of the list connected to the store, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof ECommerceStore
     */
    'list_is_active'?: boolean;
    /**
     * The date and time the store was created in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceStore
     */
    'created_at'?: string;
    /**
     * The date and time the store was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceStore
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ECommerceStore
     */
    '_links'?: Array<ResourceLink>;
}

