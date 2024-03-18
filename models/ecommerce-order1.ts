/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BillingAddressProperty3 } from './billing-address-property3';
import { ECommerceCustomerProperty5 } from './ecommerce-customer-property5';
import { ECommerceOrderLineItem2 } from './ecommerce-order-line-item2';
import { OutreachProperty3 } from './outreach-property3';
import { PromosPropertyInner1 } from './promos-property-inner1';
import { ResourceLink } from './resource-link';
import { ShippingAddressProperty3 } from './shipping-address-property3';

/**
 * Information about a specific order.
 * @export
 * @interface ECommerceOrder1
 */
export interface ECommerceOrder1 {
    /**
     * A unique identifier for the order.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty5}
     * @memberof ECommerceOrder1
     */
    'customer'?: ECommerceCustomerProperty5;
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'store_id'?: string;
    /**
     * A string that uniquely identifies the campaign associated with an order.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'campaign_id'?: string;
    /**
     * The URL for the page where the buyer landed when entering the shop.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'landing_site'?: string;
    /**
     * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'financial_status'?: string;
    /**
     * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'fulfillment_status'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'currency_code'?: string;
    /**
     * The order total associated with an order.
     * @type {number}
     * @memberof ECommerceOrder1
     */
    'order_total'?: number;
    /**
     * The URL for the order.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'order_url'?: string;
    /**
     * The total amount of the discounts to be applied to the price of the order.
     * @type {number}
     * @memberof ECommerceOrder1
     */
    'discount_total'?: number;
    /**
     * The tax total associated with an order.
     * @type {number}
     * @memberof ECommerceOrder1
     */
    'tax_total'?: number;
    /**
     * The shipping total for the order.
     * @type {number}
     * @memberof ECommerceOrder1
     */
    'shipping_total'?: number;
    /**
     * The Mailchimp tracking code for the order. Uses the \'mc_tc\' parameter in E-Commerce tracking URLs.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'tracking_code'?: ECommerceOrder1TrackingCodeEnum;
    /**
     * The date and time the order was processed in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'processed_at_foreign'?: string;
    /**
     * The date and time the order was cancelled in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'cancelled_at_foreign'?: string;
    /**
     * The date and time the order was updated in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'updated_at_foreign'?: string;
    /**
     * 
     * @type {ShippingAddressProperty3}
     * @memberof ECommerceOrder1
     */
    'shipping_address'?: ShippingAddressProperty3;
    /**
     * 
     * @type {BillingAddressProperty3}
     * @memberof ECommerceOrder1
     */
    'billing_address'?: BillingAddressProperty3;
    /**
     * The promo codes applied on the order
     * @type {Array<PromosPropertyInner1>}
     * @memberof ECommerceOrder1
     */
    'promos'?: Array<PromosPropertyInner1>;
    /**
     * An array of the order\'s line items.
     * @type {Array<ECommerceOrderLineItem2>}
     * @memberof ECommerceOrder1
     */
    'lines'?: Array<ECommerceOrderLineItem2>;
    /**
     * 
     * @type {OutreachProperty3}
     * @memberof ECommerceOrder1
     */
    'outreach'?: OutreachProperty3;
    /**
     * The tracking number associated with the order.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'tracking_number'?: string;
    /**
     * The tracking carrier associated with the order.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'tracking_carrier'?: string;
    /**
     * The tracking URL associated with the order.
     * @type {string}
     * @memberof ECommerceOrder1
     */
    'tracking_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ECommerceOrder1
     */
    '_links'?: Array<ResourceLink>;
}

type ECommerceOrder1TrackingCodeEnum = 'prec'


