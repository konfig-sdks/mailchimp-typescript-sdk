/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContactActivityEvent } from './contact-activity-event';
import { ECommerceOrderLineItem2 } from './ecommerce-order-line-item2';
import { EcommerceOrder } from './ecommerce-order';
import { EcommerceSignup } from './ecommerce-signup';
import { EmailBounced } from './email-bounced';
import { EmailClicks } from './email-clicks';
import { EmailConversation } from './email-conversation';
import { EmailOpens } from './email-opens';
import { EmailSent } from './email-sent';
import { GenericSignup } from './generic-signup';
import { InboxThread } from './inbox-thread';
import { LandingPageSignup } from './landing-page-signup';
import { ListUnsubscribed } from './list-unsubscribed';
import { MarketingPermission2 } from './marketing-permission2';
import { Note } from './note';
import { PostcardSent } from './postcard-sent';
import { SMSBulkSent } from './smsbulk-sent';
import { SquatterSignup } from './squatter-signup';
import { SurveyResponse } from './survey-response';
import { WebsiteSignup } from './website-signup';

/**
 * @type ActivityPropertyInner
 * @export
 */
export type ActivityPropertyInner = ContactActivityEvent | EcommerceOrder | EcommerceSignup | EmailBounced | EmailClicks | EmailConversation | EmailOpens | EmailSent | GenericSignup | InboxThread | LandingPageSignup | ListUnsubscribed | MarketingPermission2 | Note | PostcardSent | SMSBulkSent | SquatterSignup | SurveyResponse | WebsiteSignup;


