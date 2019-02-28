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
 * The Volume model module.
 * @module model/Volume
 * @version 0.1.0
 */
class Volume {
    /**
     * Constructs a new <code>Volume</code>.
     * @alias module:model/Volume
     */
    constructor() { 
        
        Volume.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Volume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Volume} obj Optional instance to populate.
     * @return {module:model/Volume} The populated <code>Volume</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Volume();

            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('source_created_at')) {
                obj['source_created_at'] = ApiClient.convertToType(data['source_created_at'], 'Date');
            }
            if (data.hasOwnProperty('source_deleted_at')) {
                obj['source_deleted_at'] = ApiClient.convertToType(data['source_deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('source_ref')) {
                obj['source_ref'] = ApiClient.convertToType(data['source_ref'], 'String');
            }
            if (data.hasOwnProperty('source_region_id')) {
                obj['source_region_id'] = ApiClient.convertToType(data['source_region_id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('volume_type_id')) {
                obj['volume_type_id'] = ApiClient.convertToType(data['volume_type_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} archived_at
 */
Volume.prototype['archived_at'] = undefined;

/**
 * @member {Date} created_at
 */
Volume.prototype['created_at'] = undefined;

/**
 * @member {String} extra
 */
Volume.prototype['extra'] = undefined;

/**
<<<<<<< HEAD
 * ID of the resource
=======
>>>>>>> Update API definition, use v0.1 and resolve ID/IDReadonly problem.
 * @member {String} id
 */
Volume.prototype['id'] = undefined;

/**
 * @member {Date} last_seen_at
 */
Volume.prototype['last_seen_at'] = undefined;

/**
 * @member {String} name
 */
Volume.prototype['name'] = undefined;

/**
 * Size of the volume in bytes
 * @member {Number} size
 */
Volume.prototype['size'] = undefined;

/**
 * @member {Date} source_created_at
 */
Volume.prototype['source_created_at'] = undefined;

/**
 * @member {Date} source_deleted_at
 */
Volume.prototype['source_deleted_at'] = undefined;

/**
<<<<<<< HEAD
 * ID of the resource
=======
>>>>>>> Update API definition, use v0.1 and resolve ID/IDReadonly problem.
 * @member {String} source_id
 */
Volume.prototype['source_id'] = undefined;

/**
 * @member {String} source_ref
 */
Volume.prototype['source_ref'] = undefined;

/**
<<<<<<< HEAD
 * ID of the resource
=======
>>>>>>> Update API definition, use v0.1 and resolve ID/IDReadonly problem.
 * @member {String} source_region_id
 */
Volume.prototype['source_region_id'] = undefined;

/**
 * @member {String} state
 */
Volume.prototype['state'] = undefined;

/**
 * @member {Date} updated_at
 */
Volume.prototype['updated_at'] = undefined;

/**
<<<<<<< HEAD
 * ID of the resource
=======
>>>>>>> Update API definition, use v0.1 and resolve ID/IDReadonly problem.
 * @member {String} volume_type_id
 */
Volume.prototype['volume_type_id'] = undefined;






export default Volume;

