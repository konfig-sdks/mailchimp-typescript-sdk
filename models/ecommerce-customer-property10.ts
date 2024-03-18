/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty23 } from './address-property23';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific customer.
 * @export
 * @interface ECommerceCustomerProperty10
 */
export interface ECommerceCustomerProperty10 {
    /**
     * A unique identifier for the customer.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'id'?: string;
    /**
     * The customer\'s email address.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'email_address'?: string;
    /**
     * The customer\'s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don\'t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
     * @type {boolean}
     * @memberof ECommerceCustomerProperty10
     */
    'opt_in_status'?: boolean;
    /**
     * The customer\'s company.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'company'?: string;
    /**
     * The customer\'s first name.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'first_name'?: string;
    /**
     * The customer\'s last name.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'last_name'?: string;
    /**
     * The customer\'s total order count.
     * @type {number}
     * @memberof ECommerceCustomerProperty10
     */
    'orders_count'?: number;
    /**
     * The total amount the customer has spent.
     * @type {number}
     * @memberof ECommerceCustomerProperty10
     */
    'total_spent'?: number;
    /**
     * 
     * @type {AddressProperty23}
     * @memberof ECommerceCustomerProperty10
     */
    'address'?: AddressProperty23;
    /**
     * The date and time the customer was created in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'created_at'?: string;
    /**
     * The date and time the customer was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceCustomerProperty10
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ECommerceCustomerProperty10
     */
    '_links'?: Array<ResourceLink>;
}

