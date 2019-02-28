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
import Tagging from './Tagging';

/**
 * The ContainerTemplate model module.
 * @module model/ContainerTemplate
 * @version 0.1.0
 */
class ContainerTemplate {
    /**
     * Constructs a new <code>ContainerTemplate</code>.
     * @alias module:model/ContainerTemplate
     */
    constructor() { 
        
        ContainerTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerTemplate} obj Optional instance to populate.
     * @return {module:model/ContainerTemplate} The populated <code>ContainerTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerTemplate();

            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
            if (data.hasOwnProperty('container_project_id')) {
                obj['container_project_id'] = ApiClient.convertToType(data['container_project_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
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
            if (data.hasOwnProperty('resource_version')) {
                obj['resource_version'] = ApiClient.convertToType(data['resource_version'], 'String');
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
            if (data.hasOwnProperty('taggings')) {
                obj['taggings'] = ApiClient.convertToType(data['taggings'], [Tagging]);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} archived_at
 */
ContainerTemplate.prototype['archived_at'] = undefined;

/**
<<<<<<< HEAD
 * ID of the resource
=======
>>>>>>> Update API definition, use v0.1 and resolve ID/IDReadonly problem.
 * @member {String} container_project_id
 */
ContainerTemplate.prototype['container_project_id'] = undefined;

/**
 * @member {Date} created_at
 */
ContainerTemplate.prototype['created_at'] = undefined;

/**
<<<<<<< HEAD
 * ID of the resource
=======
>>>>>>> Update API definition, use v0.1 and resolve ID/IDReadonly problem.
 * @member {String} id
 */
ContainerTemplate.prototype['id'] = undefined;

/**
 * @member {Date} last_seen_at
 */
ContainerTemplate.prototype['last_seen_at'] = undefined;

/**
 * @member {String} name
 */
ContainerTemplate.prototype['name'] = undefined;

/**
 * @member {String} resource_version
 */
ContainerTemplate.prototype['resource_version'] = undefined;

/**
 * @member {Date} source_created_at
 */
ContainerTemplate.prototype['source_created_at'] = undefined;

/**
 * @member {Date} source_deleted_at
 */
ContainerTemplate.prototype['source_deleted_at'] = undefined;

/**
 * ID of the resource
 * @member {String} source_id
 */
ContainerTemplate.prototype['source_id'] = undefined;

/**
 * @member {String} source_ref
 */
ContainerTemplate.prototype['source_ref'] = undefined;

/**
 * @member {Array.<module:model/Tagging>} taggings
 */
ContainerTemplate.prototype['taggings'] = undefined;

/**
 * @member {Date} updated_at
 */
ContainerTemplate.prototype['updated_at'] = undefined;






export default ContainerTemplate;

