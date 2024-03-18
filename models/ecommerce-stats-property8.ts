/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Ecommerce stats for the list member if the list is attached to a store.
 * @export
 * @interface EcommerceStatsProperty8
 */
export interface EcommerceStatsProperty8 {
    /**
     * The total revenue the list member has brought in.
     * @type {number}
     * @memberof EcommerceStatsProperty8
     */
    'total_revenue'?: number;
    /**
     * The total number of orders placed by the list member.
     * @type {number}
     * @memberof EcommerceStatsProperty8
     */
    'number_of_orders'?: number;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceStatsProperty8
     */
    'currency_code'?: string;
}
