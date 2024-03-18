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
 * @interface EcommerceCategorySegment11
 */
export interface EcommerceCategorySegment11 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceCategorySegment11
     */
    'condition_type'?: EcommerceCategorySegment11ConditionTypeEnum;
    /**
     * Segment by purchases in specific items or categories.
     * @type {string}
     * @memberof EcommerceCategorySegment11
     */
    'field'?: EcommerceCategorySegment11FieldEnum;
    /**
     * A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn\'t contain a specific phrase or string, or a category/item name that starts/ends with a string.
     * @type {string}
     * @memberof EcommerceCategorySegment11
     */
    'op'?: EcommerceCategorySegment11OpEnum;
    /**
     * The ecommerce category/item information.
     * @type {string}
     * @memberof EcommerceCategorySegment11
     */
    'value'?: string;
}

type EcommerceCategorySegment11ConditionTypeEnum = 'EcommCategory'
type EcommerceCategorySegment11FieldEnum = 'ecomm_cat' | 'ecomm_prod'
type EcommerceCategorySegment11OpEnum = 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends'


