/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AccountContactProperty } from './account-contact-property';
import { IndustryStatsProperty } from './industry-stats-property';
import { ResourceLink } from './resource-link';

/**
 * The API root resource links to all other resources available in the API.
 * @export
 * @interface RootListResources200Response
 */
export interface RootListResources200Response {
    /**
     * The Mailchimp account ID.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'account_id'?: string;
    /**
     * The ID associated with the user who owns this API key. If you can login to multiple accounts, this ID will be the same for each account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'login_id'?: string;
    /**
     * The name of the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'account_name'?: string;
    /**
     * The account email address.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'email'?: string;
    /**
     * The first name tied to the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'first_name'?: string;
    /**
     * The last name tied to the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'last_name'?: string;
    /**
     * The username tied to the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'username'?: string;
    /**
     * URL of the avatar for the user.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'avatar_url'?: string;
    /**
     * The [user role](https://mailchimp.com/help/manage-user-levels-in-your-account/) for the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'role'?: string;
    /**
     * The date and time that the account was created in ISO 8601 format.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'member_since'?: string;
    /**
     * The type of pricing plan the account is on.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'pricing_plan_type'?: RootListResources200ResponsePricingPlanTypeEnum;
    /**
     * Date of first payment for monthly plans.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'first_payment'?: string;
    /**
     * The timezone currently set for the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'account_timezone'?: string;
    /**
     * The user-specified industry associated with the account.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'account_industry'?: string;
    /**
     * 
     * @type {AccountContactProperty}
     * @memberof RootListResources200Response
     */
    'contact'?: AccountContactProperty;
    /**
     * Legacy - whether the account includes [Mailchimp Pro](https://mailchimp.com/help/about-mailchimp-pro/).
     * @type {boolean}
     * @memberof RootListResources200Response
     */
    'pro_enabled'?: boolean;
    /**
     * The date and time of the last login for this account in ISO 8601 format.
     * @type {string}
     * @memberof RootListResources200Response
     */
    'last_login'?: string;
    /**
     * The total number of subscribers across all lists in the account.
     * @type {number}
     * @memberof RootListResources200Response
     */
    'total_subscribers'?: number;
    /**
     * 
     * @type {IndustryStatsProperty}
     * @memberof RootListResources200Response
     */
    'industry_stats'?: IndustryStatsProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof RootListResources200Response
     */
    '_links'?: Array<ResourceLink>;
}

type RootListResources200ResponsePricingPlanTypeEnum = 'monthly' | 'pay_as_you_go' | 'forever_free'


