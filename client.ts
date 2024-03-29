/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  SurveysApi,
  AccountExportApi,
  AccountExportsApi,
  ActivityFeedApi,
  AuthorizedAppsApi,
  AutomationsApi,
  BatchWebhooksApi,
  BatchesApi,
  CampaignFoldersApi,
  CampaignsApi,
  ConnectedSitesApi,
  ConversationsApi,
  CustomerJourneysApi,
  EcommerceApi,
  FacebookAdsApi,
  FileManagerApi,
  LandingPagesApi,
  ListsApi,
  PingApi,
  ReportingApi,
  ReportsApi,
  RootApi,
  SearchCampaignsApi,
  SearchMembersApi,
  TemplateFoldersApi,
  TemplatesApi,
  VerifiedDomainsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { MailchimpCustom } from "./client-custom";

export class Mailchimp extends MailchimpCustom {
  readonly surveys: SurveysApi;
  readonly accountExport: AccountExportApi;
  readonly accountExports: AccountExportsApi;
  readonly activityFeed: ActivityFeedApi;
  readonly authorizedApps: AuthorizedAppsApi;
  readonly automations: AutomationsApi;
  readonly batchWebhooks: BatchWebhooksApi;
  readonly batches: BatchesApi;
  readonly campaignFolders: CampaignFoldersApi;
  readonly campaigns: CampaignsApi;
  readonly connectedSites: ConnectedSitesApi;
  readonly conversations: ConversationsApi;
  readonly customerJourneys: CustomerJourneysApi;
  readonly ecommerce: EcommerceApi;
  readonly facebookAds: FacebookAdsApi;
  readonly fileManager: FileManagerApi;
  readonly landingPages: LandingPagesApi;
  readonly lists: ListsApi;
  readonly ping: PingApi;
  readonly reporting: ReportingApi;
  readonly reports: ReportsApi;
  readonly root: RootApi;
  readonly searchCampaigns: SearchCampaignsApi;
  readonly searchMembers: SearchMembersApi;
  readonly templateFolders: TemplateFoldersApi;
  readonly templates: TemplatesApi;
  readonly verifiedDomains: VerifiedDomainsApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.surveys = new SurveysApi(configuration);
    this.accountExport = new AccountExportApi(configuration);
    this.accountExports = new AccountExportsApi(configuration);
    this.activityFeed = new ActivityFeedApi(configuration);
    this.authorizedApps = new AuthorizedAppsApi(configuration);
    this.automations = new AutomationsApi(configuration);
    this.batchWebhooks = new BatchWebhooksApi(configuration);
    this.batches = new BatchesApi(configuration);
    this.campaignFolders = new CampaignFoldersApi(configuration);
    this.campaigns = new CampaignsApi(configuration);
    this.connectedSites = new ConnectedSitesApi(configuration);
    this.conversations = new ConversationsApi(configuration);
    this.customerJourneys = new CustomerJourneysApi(configuration);
    this.ecommerce = new EcommerceApi(configuration);
    this.facebookAds = new FacebookAdsApi(configuration);
    this.fileManager = new FileManagerApi(configuration);
    this.landingPages = new LandingPagesApi(configuration);
    this.lists = new ListsApi(configuration);
    this.ping = new PingApi(configuration);
    this.reporting = new ReportingApi(configuration);
    this.reports = new ReportsApi(configuration);
    this.root = new RootApi(configuration);
    this.searchCampaigns = new SearchCampaignsApi(configuration);
    this.searchMembers = new SearchMembersApi(configuration);
    this.templateFolders = new TemplateFoldersApi(configuration);
    this.templates = new TemplatesApi(configuration);
    this.verifiedDomains = new VerifiedDomainsApi(configuration);
  }

}
