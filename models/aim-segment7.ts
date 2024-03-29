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
 * @interface AimSegment7
 */
export interface AimSegment7 {
    /**
     * 
     * @type {string}
     * @memberof AimSegment7
     */
    'condition_type'?: AimSegment7ConditionTypeEnum;
    /**
     * Segment by interaction with a specific campaign.
     * @type {string}
     * @memberof AimSegment7
     */
    'field'?: AimSegment7FieldEnum;
    /**
     * The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn\'t open, didn\'t click, or was not sent.
     * @type {string}
     * @memberof AimSegment7
     */
    'op'?: AimSegment7OpEnum;
    /**
     * Either the web id value for a specific campaign or \'any\' to account for subscribers who have/have not interacted with any campaigns.
     * @type {string}
     * @memberof AimSegment7
     */
    'value'?: string;
}

type AimSegment7ConditionTypeEnum = 'Aim'
type AimSegment7FieldEnum = 'aim'
type AimSegment7OpEnum = 'open' | 'click' | 'sent' | 'noopen' | 'noclick' | 'nosent'


