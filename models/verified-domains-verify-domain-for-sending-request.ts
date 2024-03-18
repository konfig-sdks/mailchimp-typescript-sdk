/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Submit a response to the verification challenge and verify a domain for sending.
 * @export
 * @interface VerifiedDomainsVerifyDomainForSendingRequest
 */
export interface VerifiedDomainsVerifyDomainForSendingRequest {
    /**
     * The code that was sent to the email address provided when adding a new domain to verify.
     * @type {string}
     * @memberof VerifiedDomainsVerifyDomainForSendingRequest
     */
    'code': string;
}

