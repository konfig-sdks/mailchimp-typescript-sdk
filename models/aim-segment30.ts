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
 * @interface AimSegment30
 */
export interface AimSegment30 {
    /**
     * 
     * @type {string}
     * @memberof AimSegment30
     */
    'condition_type'?: AimSegment30ConditionTypeEnum;
    /**
     * Segment by interaction with a specific campaign.
     * @type {string}
     * @memberof AimSegment30
     */
    'field'?: AimSegment30FieldEnum;
    /**
     * The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn\'t open, didn\'t click, or was not sent.
     * @type {string}
     * @memberof AimSegment30
     */
    'op'?: AimSegment30OpEnum;
    /**
     * Either the web id value for a specific campaign or \'any\' to account for subscribers who have/have not interacted with any campaigns.
     * @type {string}
     * @memberof AimSegment30
     */
    'value'?: string;
}

type AimSegment30ConditionTypeEnum = 'Aim'
type AimSegment30FieldEnum = 'aim'
type AimSegment30OpEnum = 'open' | 'click' | 'sent' | 'noopen' | 'noclick' | 'nosent'


