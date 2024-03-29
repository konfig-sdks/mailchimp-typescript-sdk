/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';

/**
 * Information about a specific template.
 * @export
 * @interface TemplatesUpdateTemplateByIdResponse
 */
export interface TemplatesUpdateTemplateByIdResponse {
    /**
     * The individual id for the template.
     * @type {number}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'id'?: number;
    /**
     * The type of template (user, base, or gallery).
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'type'?: string;
    /**
     * The name of the template.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'name'?: string;
    /**
     * Whether the template uses the drag and drop editor.
     * @type {boolean}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'drag_and_drop'?: boolean;
    /**
     * Whether the template contains media queries to make it responsive.
     * @type {boolean}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'responsive'?: boolean;
    /**
     * If available, the category the template is listed in.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'category'?: string;
    /**
     * The date and time the template was created in ISO 8601 format.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'date_created'?: string;
    /**
     * The date and time the template was edited in ISO 8601 format.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'date_edited'?: string;
    /**
     * The login name for template\'s creator.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'created_by'?: string;
    /**
     * The login name who last edited the template.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'edited_by'?: string;
    /**
     * User templates are not \'deleted,\' but rather marked as \'inactive.\' Returns whether the template is still active.
     * @type {boolean}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'active'?: boolean;
    /**
     * The id of the folder the template is currently in.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'folder_id'?: string;
    /**
     * If available, the URL for a thumbnail of the template.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'thumbnail'?: string;
    /**
     * The URL used for [template sharing](https://mailchimp.com/help/share-a-template/).
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'share_url'?: string;
    /**
     * How the template\'s content is put together.
     * @type {string}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    'content_type'?: TemplatesUpdateTemplateByIdResponseContentTypeEnum;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof TemplatesUpdateTemplateByIdResponse
     */
    '_links'?: Array<ResourceLink>;
}

type TemplatesUpdateTemplateByIdResponseContentTypeEnum = 'template' | 'multichannel' | 'html'


