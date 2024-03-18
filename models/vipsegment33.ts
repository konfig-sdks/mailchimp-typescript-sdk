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
 * @interface VIPSegment33
 */
export interface VIPSegment33 {
    /**
     * 
     * @type {string}
     * @memberof VIPSegment33
     */
    'condition_type'?: VIPSegment33ConditionTypeEnum;
    /**
     * Segment by VIP status.
     * @type {string}
     * @memberof VIPSegment33
     */
    'field': VIPSegment33FieldEnum;
    /**
     * Whether the member is or is not marked as VIP.
     * @type {string}
     * @memberof VIPSegment33
     */
    'op': VIPSegment33OpEnum;
}

type VIPSegment33ConditionTypeEnum = 'VIP'
type VIPSegment33FieldEnum = 'gmonkey'
type VIPSegment33OpEnum = 'member' | 'notmember'


