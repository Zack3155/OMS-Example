/**
 ** Interface for Merchant Status (商家进件状态)
 */
export interface MerchantStatusProps {
	businessInfoStatus: boolean;
	bankAccountStatus: boolean;
	ottpayAccountStatus: boolean;
}

export interface MerchantInfoProps {
	merchant_name: string;
	industry_id: string;
	brand_name: string;
	logo: string;
	phone_number: string;
	address: object;
}

/**
 ** Interface for Routes in Router
 */
export enum APIEnvironment {
	DEV = "development",
	UAT = "uat",
	PRO = "pro",
}

/**
 ** Interface for Error Code
 */
export enum ErrCodes {
	LoadingError = "LoadingError",
	PayloadError = "PayloadError",
	TokenError = "TokenError",
}

/**
 ** Interface for Routes in Router
 */
export enum RouteTypes {
	PUBLIC = 0,
	ADMIN,
	READONLY,
	HIDDEN,
}

export interface RouteProps {
	path: string; // Route Pathname
	key: string; // Route Relative Path
	clickable: boolean; // Clickable as a Breadcrumb
	index: boolean; // Is a Index Route
	label?: string; // Route Title Label
	nestable?: boolean; // Route Can COntain Parametrized Route
	icon?: JSX.Element; // Icon when Converted to Menu
	element?: JSX.Element; // Rendering Element
	children?: RouteProps[]; // Route Children
	type: RouteTypes; // Route Type
}

/**
 ** Options for dateType
 */
export type dateTypeOptions =
	| ""
	| "past1"
	| "past3"
	| "Week"
	| "Month"
	| "Year";

/**
 ** Interface for possible filter parameters
 */
export interface FilterParamProps {
	[dataIndex: string]: string | number;
}

export enum FilterParamTypes {
	Remove = "Remove",
	Refresh = "Refresh",
	Refetch = "Refetch",
	Extra = "Extra",
	Other = "Other",
}

/**
 ** Interface for <Tables/> Component rendering
 */
export interface TableColumnProps {
	title?: string | JSX.Element;
	dataIndex?: string;
	filters?: object[];
	filterSearch?: boolean;
	filteredValue?: string[];
	sorter?: boolean;
	sortOrder?: boolean | string;
	filterDropdown?: (itm: any) => JSX.Element;
	render?: (itm?: any, record?: any) => JSX.Element;
}

export type FetchDataProps = {
	data_total: number;
	table_data: object[];
};

/**
 ** Interface for <Design/> Component rendering
 */
export interface TagsDataProps {
	tag_name: string;
	tag_name_show: {
		cn: string;
		en: string;
		fr: string;
	};
	id: number;
}

export interface TagsRenderingProps {
	[tagName: string]: {
		cn: string;
		en: string;
		selected: boolean;
	};
}

export interface ImgTableItemProps {
	key: string;
	id: string;
	image: string;
	image_show: string;
	tags: string[];
	source: string;
	checked: boolean;
}

/**
 ** Interface for Issue eGift Cards MODULE rendering
 */
export enum CardTypes {
	VOUCHER = "VOUCHER",
	GIFTCARD = "GIFTCARD",
	COUPON = "COUPON",
	TICKET = "TICKET",
	MEMBERSHIP = "MEMBERSHIP",
}

export enum IssueModeTypes {
	Default = "default",
	Edit = "edit",
	Copy = "copy",
}

export enum ConfigureActionTypes {
	SaveDraft = 0,
	Update,
	Publish,
	NoDefaultNavigate,
}

export enum DisplayTypes {
	Phone,
	Desktop,
	Printer,
	Card,
}

/**
 ** Interface for <Promotion/> Component rendering
 */
export interface TemplateProps {
	pic_template_id: string;
	pic_url: string;
	pic_url_show: string;
}

/**
 ** Interface for UserSetting MODULE rendering
 */
export enum UserRoleType {
	ADMIN = "ADMIN",
	REDEEM = "REDEEM",
	READONLY = "READONLY",
}

/**
 ** Interface for Card Product MODULE rendering
 */
export enum ProductModeTypes {
	Demo = "demo",
	Live = "live",
}

export enum MembershipModeTypes {
	Demo = "demo",
	Live = "live",
}

/**
 ** Interface for Orders MODULE rendering
 */
export enum PaymentResultTypes {
	Processing,
	Success,
	Fail,
}

export enum NotificationType {
	ALL = "ALL",
	LISTING = "LISTING",
	ORDER = "ORDER",
	REDEMPTION = "REDEMPTION",
	ACCOUNT = "ACCOUNT",
}

export enum MembershipOptTypes {
	Percentage = "Rate",
	Price = "Flat",
	TierPercentage = "TierRate",
	TierPrice = "TierFlat",
	Giveaways = "Giveaways",
}

export enum ServiceTypes {
	PACKAGE = "PACKAGE",
	SERVICE = "SERVICE",
	MEMBERSHIP = "MEMBERSHIP",
}
