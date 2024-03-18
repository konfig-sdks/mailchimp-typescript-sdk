/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The delay settings for an Automation email.
 * @export
 * @interface AutomationDelayProperty6
 */
export interface AutomationDelayProperty6 {
    /**
     * The delay amount for an Automation email.
     * @type {number}
     * @memberof AutomationDelayProperty6
     */
    'amount'?: number;
    /**
     * The type of delay for an Automation email.
     * @type {string}
     * @memberof AutomationDelayProperty6
     */
    'type'?: AutomationDelayProperty6TypeEnum;
    /**
     * Whether the delay settings describe before or after the delay action of an Automation email.
     * @type {string}
     * @memberof AutomationDelayProperty6
     */
    'direction'?: AutomationDelayProperty6DirectionEnum;
    /**
     * The action that triggers the delay of an Automation email.
     * @type {string}
     * @memberof AutomationDelayProperty6
     */
    'action'?: AutomationDelayProperty6ActionEnum;
    /**
     * The user-friendly description of the action that triggers an Automation email.
     * @type {string}
     * @memberof AutomationDelayProperty6
     */
    'action_description'?: string;
    /**
     * The user-friendly description of the delay and trigger action settings for an Automation email.
     * @type {string}
     * @memberof AutomationDelayProperty6
     */
    'full_description'?: string;
}

type AutomationDelayProperty6TypeEnum = 'now' | 'day' | 'hour' | 'week'
type AutomationDelayProperty6DirectionEnum = 'before' | 'after'
type AutomationDelayProperty6ActionEnum = 'previous_campaign_sent' | 'previous_campaign_opened' | 'previous_campaign_not_opened' | 'previous_campaign_clicked_any' | 'previous_campaign_not_clicked_any' | 'previous_campaign_specific_clicked' | 'ecomm_bought_any' | 'ecomm_bought_product' | 'ecomm_bought_category' | 'ecomm_not_bought_any' | 'ecomm_abandoned_cart' | 'campaign_sent' | 'opened_email' | 'not_opened_email' | 'clicked_email' | 'not_clicked_email' | 'campaign_specific_clicked' | 'manual' | 'signup' | 'merge_changed' | 'group_add' | 'group_remove' | 'mandrill_sent' | 'mandrill_opened' | 'mandrill_clicked' | 'mandrill_any' | 'api' | 'goal' | 'annual' | 'birthday' | 'date' | 'date_added' | 'tag_add'


