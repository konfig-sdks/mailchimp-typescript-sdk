/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A single question and the response to that question.
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * The unique ID for this question.
     * @type {string}
     * @memberof Response
     */
    'question_id'?: string;
    /**
     * The type of question this is.
     * @type {string}
     * @memberof Response
     */
    'question_type'?: ResponseQuestionTypeEnum;
    /**
     * The survey question.
     * @type {string}
     * @memberof Response
     */
    'query'?: string;
    /**
     * The answer to this survey question.
     * @type {string}
     * @memberof Response
     */
    'answer'?: string;
}

type ResponseQuestionTypeEnum = 'pickOne' | 'pickMany' | 'range' | 'text' | 'email'


