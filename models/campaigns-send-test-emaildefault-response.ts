/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An error generated by the Mailchimp API. Conforms to IETF draft \'draft-nottingham-http-problem-06\'.
 * @export
 * @interface CampaignsSendTestEmaildefaultResponse
 */
export interface CampaignsSendTestEmaildefaultResponse {
    /**
     * A short, human-readable summary of the problem type. It shouldn\'t change based on the occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof CampaignsSendTestEmaildefaultResponse
     */
    'title': string;
    /**
     * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
     * @type {string}
     * @memberof CampaignsSendTestEmaildefaultResponse
     */
    'type': string;
    /**
     * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
     * @type {number}
     * @memberof CampaignsSendTestEmaildefaultResponse
     */
    'status': number;
    /**
     * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](https://mailchimp.com/developer/).
     * @type {string}
     * @memberof CampaignsSendTestEmaildefaultResponse
     */
    'detail': string;
    /**
     * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
     * @type {string}
     * @memberof CampaignsSendTestEmaildefaultResponse
     */
    'instance': string;
}

