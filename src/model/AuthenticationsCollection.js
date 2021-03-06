/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.1.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Authentication from './Authentication';
import CollectionLinks from './CollectionLinks';
import CollectionMetadata from './CollectionMetadata';

/**
 * The AuthenticationsCollection model module.
 * @module model/AuthenticationsCollection
 * @version 0.1.0
 */
class AuthenticationsCollection {
    /**
     * Constructs a new <code>AuthenticationsCollection</code>.
     * @alias module:model/AuthenticationsCollection
     */
    constructor() { 
        
        AuthenticationsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenticationsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticationsCollection} obj Optional instance to populate.
     * @return {module:model/AuthenticationsCollection} The populated <code>AuthenticationsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticationsCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Authentication]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
AuthenticationsCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
AuthenticationsCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/Authentication>} data
 */
AuthenticationsCollection.prototype['data'] = undefined;






export default AuthenticationsCollection;

