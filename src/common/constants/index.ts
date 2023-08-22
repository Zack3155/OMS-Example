import { APIEnvironment } from "../models";

//development开发模式  production生产模式 uat测试模式
export const ENVIRONMENT = APIEnvironment.UAT;

export const isAvailable = process.env.NODE_ENV !== "production";

export const ACCESS_TOKEN = "access_token";
export const ID_TOKEN = "preka_id_token_key";
export const REFRESH_TOKEN = "refresh_token";

export const KEEP_LOGIN = "keep_login";

export const USER_NAME = "user_name";
export const PASSWORD = "password";

export const IS_LOGIN = "islogin";

export const DEF_ROUTE = {
	ADMIN: "/",
	READONLY: "/",
};

export const SUB_ROUTE = "sub_route_keys";

export const MOBILE_SIZE = 768;

export const PAD_SIZE = 1366;

export const USER_ROLE = "roles";

export const GOOGLE_ISSUER_ID = "com.google";

export const STANDARD_TERM_EG = `This eGift card is redeemable by the bearer for merchandise or services at issuing merchant participated business locations. It may not be reloaded, cannot be returned or redeemed for cash. Please treat this card like cash. This eGift Card is not replaceable if lost or stolen. Cannot be used without merchant verification and authorization. For eGift card balance, terms and possible expiration date, present the card to issuer for more information.`;

export const STANDARD_TERM_VO = `All products or services redeemed with this voucher are treated as final sale. Voucher can be redeemed only at participating merchant locations and with merchant authentication or verification protocols. Voucher cannot be refunded, re-loaded, returned or redeemed for cash. If lost or stolen, Voucher is not replaceable unless merchant allows. To inquire about Voucher balance, merchant terms, possible expiration date, present the Voucher to the merchant. Please refer to Government of Canada's Financial Consumer Agency of Canada as well as your province or territory for rules and regulations about vouchers.`;

export const STANDARD_TERM_CO = `All products or services redeemed with this coupon are treated as final sale. Coupon can be redeemed only at participating merchant locations and with merchant authentication or verification protocols. Coupon cannot be refunded, re-loaded, returned or redeemed for cash. If lost or stolen, Coupon is not replaceable unless merchant allows. To inquire about coupon balance, merchant terms, possible expiration date, present the coupon to the merchant. Please refer to Government of Canada's Financial Consumer Agency of Canada as well as your province or territory for rules and regulations about coupons.`;

export const STANDARD_TERM_MB = `1. Eligibility: The membership program is open to all customers who are 18 years or older and reside within Canada. 2. Membership Benefits: As a member, you will be entitled to exclusive discounts, early access to new products, free shipping, and other promotional offers. These benefits will expire at the expiration date of the program. After the expiration of the program, you will need to renew your membership to continue receiving these benefits. 3. Membership Fees: Membership to our program is free of charge. 4. Membership Duration: Your membership will remain active until the earlier of your choice to cancel it or the Membership Program ends. 5. Cancellation: You may cancel your membership at any time by contacting us via email or phone found on the enrollment page. 6. Changes to the Membership Program: We reserve the right to modify or terminate the membership program at any time without prior notice. We also reserve the right to change the benefits, terms, and conditions of the membership program at any time without prior notice. 7. Personal Information: By joining the membership program, you agree to provide accurate and up-to-date information about yourself, including your name, email address, and shipping address. To gain additional access, make updates, or request removal of your information, please reach out to us using the contact information provided on the enrollment page. 8. Communication: By joining the membership program, you agree to receive emails and other communications from us regarding the program, including promotional offers, updates, and information about your membership. You may opt out of receiving these communications at any time. 9. Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. 10. Disclaimer of Warranties: We make no representations or warranties of any kind, express or implied, regarding the membership program or the products or services offered through the program. 11. Limitation of Liability: In no event shall we be liable for any damages arising out of or in connection with your participation in the membership program, including but not limited to direct, indirect, incidental, or consequential damages. If you experience any issues with the membership program, please feel free to contact us using the contact information provided on the enrollment page.   `;

export const WEEKDAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
