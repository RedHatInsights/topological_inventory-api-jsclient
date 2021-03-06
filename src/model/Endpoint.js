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

/**
 * The Endpoint model module.
 * @module model/Endpoint
 * @version 0.1.0
 */
class Endpoint {
    /**
     * Constructs a new <code>Endpoint</code>.
     * @alias module:model/Endpoint
     */
    constructor() { 
        
        Endpoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Endpoint} obj Optional instance to populate.
     * @return {module:model/Endpoint} The populated <code>Endpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Endpoint();

            if (data.hasOwnProperty('certificate_authority')) {
                obj['certificate_authority'] = ApiClient.convertToType(data['certificate_authority'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('verify_ssl')) {
                obj['verify_ssl'] = ApiClient.convertToType(data['verify_ssl'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Optional X.509 Certificate Authority
 * @member {String} certificate_authority
 */
Endpoint.prototype['certificate_authority'] = undefined;

/**
 * @member {Date} created_at
 */
Endpoint.prototype['created_at'] = undefined;

/**
 * @member {Boolean} default
 */
Endpoint.prototype['default'] = undefined;

/**
 * URI host component
 * @member {String} host
 */
Endpoint.prototype['host'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
Endpoint.prototype['id'] = undefined;

/**
 * URI path component
 * @member {String} path
 */
Endpoint.prototype['path'] = undefined;

/**
 * URI port component
 * @member {Number} port
 */
Endpoint.prototype['port'] = undefined;

/**
 * @member {String} role
 */
Endpoint.prototype['role'] = undefined;

/**
 * URI scheme component
 * @member {String} scheme
 */
Endpoint.prototype['scheme'] = undefined;

/**
 * ID of the resource
 * @member {String} source_id
 */
Endpoint.prototype['source_id'] = undefined;

/**
 * ID of the resource
 * @member {String} tenant_id
 */
Endpoint.prototype['tenant_id'] = undefined;

/**
 * @member {Date} updated_at
 */
Endpoint.prototype['updated_at'] = undefined;

/**
 * Should SSL be verified
 * @member {Boolean} verify_ssl
 */
Endpoint.prototype['verify_ssl'] = undefined;






export default Endpoint;

