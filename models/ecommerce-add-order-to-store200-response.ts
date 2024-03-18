/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BillingAddressProperty7 } from './billing-address-property7';
import { ECommerceCustomerProperty17 } from './ecommerce-customer-property17';
import { ECommerceOrderLineItem2 } from './ecommerce-order-line-item2';
import { OutreachProperty7 } from './outreach-property7';
import { PromosPropertyInner1 } from './promos-property-inner1';
import { ResourceLink } from './resource-link';
import { ShippingAddressProperty7 } from './shipping-address-property7';

/**
 * Information about a specific order.
 * @export
 * @interface EcommerceAddOrderToStore200Response
 */
export interface EcommerceAddOrderToStore200Response {
    /**
     * A unique identifier for the order.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty17}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'customer'?: ECommerceCustomerProperty17;
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'store_id'?: string;
    /**
     * A string that uniquely identifies the campaign associated with an order.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'campaign_id'?: string;
    /**
     * The URL for the page where the buyer landed when entering the shop.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'landing_site'?: string;
    /**
     * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'financial_status'?: string;
    /**
     * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'fulfillment_status'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'currency_code'?: string;
    /**
     * The order total associated with an order.
     * @type {number}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'order_total'?: number;
    /**
     * The URL for the order.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'order_url'?: string;
    /**
     * The total amount of the discounts to be applied to the price of the order.
     * @type {number}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'discount_total'?: number;
    /**
     * The tax total associated with an order.
     * @type {number}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'tax_total'?: number;
    /**
     * The shipping total for the order.
     * @type {number}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'shipping_total'?: number;
    /**
     * The Mailchimp tracking code for the order. Uses the \'mc_tc\' parameter in E-Commerce tracking URLs.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'tracking_code'?: EcommerceAddOrderToStore200ResponseTrackingCodeEnum;
    /**
     * The date and time the order was processed in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'processed_at_foreign'?: string;
    /**
     * The date and time the order was cancelled in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'cancelled_at_foreign'?: string;
    /**
     * The date and time the order was updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'updated_at_foreign'?: string;
    /**
     * 
     * @type {ShippingAddressProperty7}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'shipping_address'?: ShippingAddressProperty7;
    /**
     * 
     * @type {BillingAddressProperty7}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'billing_address'?: BillingAddressProperty7;
    /**
     * The promo codes applied on the order
     * @type {Array<PromosPropertyInner1>}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'promos'?: Array<PromosPropertyInner1>;
    /**
     * An array of the order\'s line items.
     * @type {Array<ECommerceOrderLineItem2>}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'lines'?: Array<ECommerceOrderLineItem2>;
    /**
     * 
     * @type {OutreachProperty7}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'outreach'?: OutreachProperty7;
    /**
     * The tracking number associated with the order.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'tracking_number'?: string;
    /**
     * The tracking carrier associated with the order.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'tracking_carrier'?: string;
    /**
     * The tracking URL associated with the order.
     * @type {string}
     * @memberof EcommerceAddOrderToStore200Response
     */
    'tracking_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceAddOrderToStore200Response
     */
    '_links'?: Array<ResourceLink>;
}

type EcommerceAddOrderToStore200ResponseTrackingCodeEnum = 'prec'


