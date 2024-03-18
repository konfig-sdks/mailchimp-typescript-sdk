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
 * @interface VerifiedDomainsVerifyDomainForSending200Response
 */
export interface VerifiedDomainsVerifyDomainForSending200Response {
    /**
     * The name of this domain.
     * @type {string}
     * @memberof VerifiedDomainsVerifyDomainForSending200Response
     */
    'domain'?: string;
    /**
     * Whether the domain has been verified for sending.
     * @type {boolean}
     * @memberof VerifiedDomainsVerifyDomainForSending200Response
     */
    'verified'?: boolean;
    /**
     * Whether domain authentication is enabled for this domain.
     * @type {boolean}
     * @memberof VerifiedDomainsVerifyDomainForSending200Response
     */
    'authenticated'?: boolean;
    /**
     * The e-mail address receiving the two-factor challenge for this domain.
     * @type {string}
     * @memberof VerifiedDomainsVerifyDomainForSending200Response
     */
    'verification_email'?: string;
    /**
     * The date/time that the two-factor challenge was sent to the verification email.
     * @type {string}
     * @memberof VerifiedDomainsVerifyDomainForSending200Response
     */
    'verification_sent'?: string;
}
