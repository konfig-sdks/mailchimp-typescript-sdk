/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by interaction with a specific campaign.
 * @export
 * @interface AimSegment21
 */
export interface AimSegment21 {
    /**
     * 
     * @type {string}
     * @memberof AimSegment21
     */
    'condition_type'?: AimSegment21ConditionTypeEnum;
    /**
     * Segment by interaction with a specific campaign.
     * @type {string}
     * @memberof AimSegment21
     */
    'field'?: AimSegment21FieldEnum;
    /**
     * The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn\'t open, didn\'t click, or was not sent.
     * @type {string}
     * @memberof AimSegment21
     */
    'op'?: AimSegment21OpEnum;
    /**
     * Either the web id value for a specific campaign or \'any\' to account for subscribers who have/have not interacted with any campaigns.
     * @type {string}
     * @memberof AimSegment21
     */
    'value'?: string;
}

type AimSegment21ConditionTypeEnum = 'Aim'
type AimSegment21FieldEnum = 'aim'
type AimSegment21OpEnum = 'open' | 'click' | 'sent' | 'noopen' | 'noclick' | 'nosent'


