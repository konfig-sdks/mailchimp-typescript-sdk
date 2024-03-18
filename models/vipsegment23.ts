/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by VIP status.
 * @export
 * @interface VIPSegment23
 */
export interface VIPSegment23 {
    /**
     * 
     * @type {string}
     * @memberof VIPSegment23
     */
    'condition_type'?: VIPSegment23ConditionTypeEnum;
    /**
     * Segment by VIP status.
     * @type {string}
     * @memberof VIPSegment23
     */
    'field': VIPSegment23FieldEnum;
    /**
     * Whether the member is or is not marked as VIP.
     * @type {string}
     * @memberof VIPSegment23
     */
    'op': VIPSegment23OpEnum;
}

type VIPSegment23ConditionTypeEnum = 'VIP'
type VIPSegment23FieldEnum = 'gmonkey'
type VIPSegment23OpEnum = 'member' | 'notmember'


