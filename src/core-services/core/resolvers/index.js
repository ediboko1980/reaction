import getConnectionTypeResolvers from "@reactioncommerce/api-utils/graphql/getConnectionTypeResolvers.js";
import Address from "./Address.js";
import Currency from "./Currency.js";
import Money from "./Money.js";
import Query from "./Query/index.js";
import Tag from "./Tag/index.js";

export default {
  Address,
  Currency,
  Money,
  Query,
  Tag,
  ...getConnectionTypeResolvers("Address"),
  ...getConnectionTypeResolvers("Tag")
};

/**
 * Arguments passed by the client for a query
 * @memberof GraphQL
 * @typedef {Object} ConnectionArgs - an object of all arguments that were sent by the client
 * @property {String} args.after - Connection argument
 * @property {String} args.before - Connection argument
 * @property {Number} args.first - Connection argument
 * @property {Number} args.last - Connection argument
 * @property {Number} args.sortBy - Connection argument. Check schema for allowed values.
 * @property {Number} args.sortOrder - Connection argument
 */

/**
 * Arguments passed by the client a groups query
 * @memberof GraphQL
 * @typedef {Object} AddressInput - Address
 * @property {String} address1 - Address line 1
 * @property {String} [address2] - Address line 2
 * @property {String} city - City
 * @property {String} [company] - Company name
 * @property {String} country - Country
 * @property {Boolean} [failedValidation] - Mark address as failed validation by address validation service
 * @property {String} fullName - Full name
 * @property {String} [firstName] - First name
 * @property {String} [lastName] - Last name
 * @property {Boolean} isBillingDefault - Mark address as default for billing
 * @property {Boolean} isCommercial - Mask address as commercial
 * @property {Boolean} isShippingDefault -  Mark address as default for shipping
 * @property {Array<MetafieldInput>} metafields - Array of metafields
 * @property {String} phone - Phone number
 * @property {String} postal - Postal code
 * @property {String} region - Region of country
 */

/**
 * Metafield input
 * @memberof GraphQL
 * @typedef {Object} MetafieldInput - Metafield
 * @property {String} key - Key
 * @property {String} [value] - Value
 * @property {String} [namespace] - Namespace
 * @property {String} [scope] - Scope
 * @property {String} [description] - Description
 * @property {String} [valueType] - Value type
 */