/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by purchases in specific items or categories.
 * @export
 * @interface EcommerceCategorySegment14
 */
export interface EcommerceCategorySegment14 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceCategorySegment14
     */
    'condition_type'?: EcommerceCategorySegment14ConditionTypeEnum;
    /**
     * Segment by purchases in specific items or categories.
     * @type {string}
     * @memberof EcommerceCategorySegment14
     */
    'field'?: EcommerceCategorySegment14FieldEnum;
    /**
     * A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn\'t contain a specific phrase or string, or a category/item name that starts/ends with a string.
     * @type {string}
     * @memberof EcommerceCategorySegment14
     */
    'op'?: EcommerceCategorySegment14OpEnum;
    /**
     * The ecommerce category/item information.
     * @type {string}
     * @memberof EcommerceCategorySegment14
     */
    'value'?: string;
}

type EcommerceCategorySegment14ConditionTypeEnum = 'EcommCategory'
type EcommerceCategorySegment14FieldEnum = 'ecomm_cat' | 'ecomm_prod'
type EcommerceCategorySegment14OpEnum = 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends'

