/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BillingAddressProperty5 } from './billing-address-property5';
import { ECommerceCustomerProperty15 } from './ecommerce-customer-property15';
import { ECommerceOrderLineItem2 } from './ecommerce-order-line-item2';
import { OutreachProperty5 } from './outreach-property5';
import { PromosPropertyInner1 } from './promos-property-inner1';
import { ResourceLink } from './resource-link';
import { ShippingAddressProperty5 } from './shipping-address-property5';

/**
 * Information about a specific order.
 * @export
 * @interface ECommerceOrder3
 */
export interface ECommerceOrder3 {
    /**
     * A unique identifier for the order.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty15}
     * @memberof ECommerceOrder3
     */
    'customer'?: ECommerceCustomerProperty15;
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'store_id'?: string;
    /**
     * A string that uniquely identifies the campaign associated with an order.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'campaign_id'?: string;
    /**
     * The URL for the page where the buyer landed when entering the shop.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'landing_site'?: string;
    /**
     * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'financial_status'?: string;
    /**
     * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'fulfillment_status'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'currency_code'?: string;
    /**
     * The order total associated with an order.
     * @type {number}
     * @memberof ECommerceOrder3
     */
    'order_total'?: number;
    /**
     * The URL for the order.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'order_url'?: string;
    /**
     * The total amount of the discounts to be applied to the price of the order.
     * @type {number}
     * @memberof ECommerceOrder3
     */
    'discount_total'?: number;
    /**
     * The tax total associated with an order.
     * @type {number}
     * @memberof ECommerceOrder3
     */
    'tax_total'?: number;
    /**
     * The shipping total for the order.
     * @type {number}
     * @memberof ECommerceOrder3
     */
    'shipping_total'?: number;
    /**
     * The Mailchimp tracking code for the order. Uses the \'mc_tc\' parameter in E-Commerce tracking URLs.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'tracking_code'?: ECommerceOrder3TrackingCodeEnum;
    /**
     * The date and time the order was processed in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'processed_at_foreign'?: string;
    /**
     * The date and time the order was cancelled in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'cancelled_at_foreign'?: string;
    /**
     * The date and time the order was updated in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'updated_at_foreign'?: string;
    /**
     * 
     * @type {ShippingAddressProperty5}
     * @memberof ECommerceOrder3
     */
    'shipping_address'?: ShippingAddressProperty5;
    /**
     * 
     * @type {BillingAddressProperty5}
     * @memberof ECommerceOrder3
     */
    'billing_address'?: BillingAddressProperty5;
    /**
     * The promo codes applied on the order
     * @type {Array<PromosPropertyInner1>}
     * @memberof ECommerceOrder3
     */
    'promos'?: Array<PromosPropertyInner1>;
    /**
     * An array of the order\'s line items.
     * @type {Array<ECommerceOrderLineItem2>}
     * @memberof ECommerceOrder3
     */
    'lines'?: Array<ECommerceOrderLineItem2>;
    /**
     * 
     * @type {OutreachProperty5}
     * @memberof ECommerceOrder3
     */
    'outreach'?: OutreachProperty5;
    /**
     * The tracking number associated with the order.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'tracking_number'?: string;
    /**
     * The tracking carrier associated with the order.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'tracking_carrier'?: string;
    /**
     * The tracking URL associated with the order.
     * @type {string}
     * @memberof ECommerceOrder3
     */
    'tracking_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ECommerceOrder3
     */
    '_links'?: Array<ResourceLink>;
}

type ECommerceOrder3TrackingCodeEnum = 'prec'

