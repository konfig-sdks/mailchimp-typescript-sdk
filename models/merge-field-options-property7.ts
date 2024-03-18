/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Extra options for some merge field types.
 * @export
 * @interface MergeFieldOptionsProperty7
 */
export interface MergeFieldOptionsProperty7 {
    /**
     * In an address field, the default country code if none supplied.
     * @type {number}
     * @memberof MergeFieldOptionsProperty7
     */
    'default_country'?: number;
    /**
     * In a phone field, the phone number type: US or International.
     * @type {string}
     * @memberof MergeFieldOptionsProperty7
     */
    'phone_format'?: string;
    /**
     * In a date or birthday field, the format of the date.
     * @type {string}
     * @memberof MergeFieldOptionsProperty7
     */
    'date_format'?: string;
    /**
     * In a radio or dropdown non-group field, the available options for contacts to pick from.
     * @type {Array<string>}
     * @memberof MergeFieldOptionsProperty7
     */
    'choices'?: Array<string>;
    /**
     * In a text field, the default length of the text field.
     * @type {number}
     * @memberof MergeFieldOptionsProperty7
     */
    'size'?: number;
}

