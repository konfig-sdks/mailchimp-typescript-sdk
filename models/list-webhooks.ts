/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EventsProperty1 } from './events-property1';
import { ResourceLink } from './resource-link';
import { SourcesProperty1 } from './sources-property1';

/**
 * Webhook configured for the given list.
 * @export
 * @interface ListWebhooks
 */
export interface ListWebhooks {
    /**
     * An string that uniquely identifies this webhook.
     * @type {string}
     * @memberof ListWebhooks
     */
    'id'?: string;
    /**
     * A valid URL for the Webhook.
     * @type {string}
     * @memberof ListWebhooks
     */
    'url'?: string;
    /**
     * 
     * @type {EventsProperty1}
     * @memberof ListWebhooks
     */
    'events'?: EventsProperty1;
    /**
     * 
     * @type {SourcesProperty1}
     * @memberof ListWebhooks
     */
    'sources'?: SourcesProperty1;
    /**
     * The unique id for the list.
     * @type {string}
     * @memberof ListWebhooks
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListWebhooks
     */
    '_links'?: Array<ResourceLink>;
}

