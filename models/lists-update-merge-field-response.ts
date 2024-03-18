/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MergeFieldOptionsProperty8 } from './merge-field-options-property8';
import { ResourceLink } from './resource-link';

/**
 * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 * @export
 * @interface ListsUpdateMergeFieldResponse
 */
export interface ListsUpdateMergeFieldResponse {
    /**
     * An unchanging id for the merge field.
     * @type {number}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'merge_id'?: number;
    /**
     * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
     * @type {string}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'tag'?: string;
    /**
     * The name of the merge field (audience field).
     * @type {string}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'name'?: string;
    /**
     * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
     * @type {string}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'type'?: ListsUpdateMergeFieldResponseTypeEnum;
    /**
     * The boolean value if the merge field is required.
     * @type {boolean}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'required'?: boolean;
    /**
     * The default value for the merge field if `null`.
     * @type {string}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'default_value'?: string;
    /**
     * Whether the merge field is displayed on the signup form.
     * @type {boolean}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'public'?: boolean;
    /**
     * The order that the merge field displays on the list signup form.
     * @type {number}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'display_order'?: number;
    /**
     * 
     * @type {MergeFieldOptionsProperty8}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'options'?: MergeFieldOptionsProperty8;
    /**
     * Extra text to help the subscriber fill out the form.
     * @type {string}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'help_text'?: string;
    /**
     * The ID that identifies this merge field\'s audience\'.
     * @type {string}
     * @memberof ListsUpdateMergeFieldResponse
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsUpdateMergeFieldResponse
     */
    '_links'?: Array<ResourceLink>;
}

type ListsUpdateMergeFieldResponseTypeEnum = 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip'


