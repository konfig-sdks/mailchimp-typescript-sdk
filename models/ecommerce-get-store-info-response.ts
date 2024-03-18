/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty15 } from './address-property15';
import { AutomationsProperty4 } from './automations-property4';
import { ConnectedSiteProperty4 } from './connected-site-property4';
import { ResourceLink } from './resource-link';

/**
 * An individual store in an account.
 * @export
 * @interface EcommerceGetStoreInfoResponse
 */
export interface EcommerceGetStoreInfoResponse {
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'id'?: string;
    /**
     * The unique identifier for the list that\'s associated with the store. The `list_id` for a specific store can\'t change.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'list_id'?: string;
    /**
     * The name of the store.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'name'?: string;
    /**
     * The e-commerce platform of the store.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'platform'?: string;
    /**
     * The store domain.  The store domain must be unique within a user account.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'domain'?: string;
    /**
     * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
     * @type {boolean}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'is_syncing'?: boolean;
    /**
     * The email address for the store.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'email_address'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'currency_code'?: string;
    /**
     * The currency format for the store. For example: `$`, `£`, etc.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'money_format'?: string;
    /**
     * The primary locale for the store. For example: `en`, `de`, etc.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'primary_locale'?: string;
    /**
     * The timezone for the store.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'timezone'?: string;
    /**
     * The store phone number.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'phone'?: string;
    /**
     * 
     * @type {AddressProperty15}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'address'?: AddressProperty15;
    /**
     * 
     * @type {ConnectedSiteProperty4}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'connected_site'?: ConnectedSiteProperty4;
    /**
     * 
     * @type {AutomationsProperty4}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'automations'?: AutomationsProperty4;
    /**
     * The status of the list connected to the store, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'list_is_active'?: boolean;
    /**
     * The date and time the store was created in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'created_at'?: string;
    /**
     * The date and time the store was last updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreInfoResponse
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetStoreInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}
