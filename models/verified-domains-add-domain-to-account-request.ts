/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The verified domains currently on the account.
 * @export
 * @interface VerifiedDomainsAddDomainToAccountRequest
 */
export interface VerifiedDomainsAddDomainToAccountRequest {
    /**
     * The e-mail address at the domain you want to verify. This will receive a two-factor challenge to be used in the verify action.
     * @type {string}
     * @memberof VerifiedDomainsAddDomainToAccountRequest
     */
    'verification_email': string;
}

