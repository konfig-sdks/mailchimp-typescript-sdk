/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about an Ecommerce Store\'s specific Promo Rule.
 * @export
 * @interface EcommerceAddPromoRuleRequest
 */
export interface EcommerceAddPromoRuleRequest {
    /**
     * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'title'?: string;
    /**
     * The description of a promotion restricted to UTF-8 characters with max length 255.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'description': string;
    /**
     * A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'id': string;
    /**
     * The date and time when the promotion is in effect in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'starts_at'?: string;
    /**
     * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'ends_at'?: string;
    /**
     * The amount of the promo code discount. If \'type\' is \'fixed\', the amount is treated as a monetary value. If \'type\' is \'percentage\', amount must be a decimal value between 0.0 and 1.0, inclusive.
     * @type {number}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'amount': number;
    /**
     * Type of discount. For free shipping set type to fixed.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'type': EcommerceAddPromoRuleRequestTypeEnum;
    /**
     * The target that the discount applies to.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'target': EcommerceAddPromoRuleRequestTargetEnum;
    /**
     * Whether the promo rule is currently enabled.
     * @type {boolean}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'enabled'?: boolean;
    /**
     * The date and time the promotion was created in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'created_at_foreign'?: string;
    /**
     * The date and time the promotion was updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddPromoRuleRequest
     */
    'updated_at_foreign'?: string;
}

type EcommerceAddPromoRuleRequestTypeEnum = 'fixed' | 'percentage'
type EcommerceAddPromoRuleRequestTargetEnum = 'per_item' | 'total' | 'shipping'


