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
 * The Task model module.
 * @module model/Task
 * @version 0.1.0
 */
class Task {
    /**
     * Constructs a new <code>Task</code>.
     * @alias module:model/Task
     */
    constructor() { 
        
        Task.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Task} obj Optional instance to populate.
     * @return {module:model/Task} The populated <code>Task</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} completed_at
 */
Task.prototype['completed_at'] = undefined;

/**
 * @member {String} context
 */
Task.prototype['context'] = undefined;

/**
 * @member {Date} created_at
 */
Task.prototype['created_at'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
Task.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Task.prototype['name'] = undefined;

/**
 * @member {String} state
 */
Task.prototype['state'] = undefined;

/**
 * @member {String} status
 */
Task.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
Task.prototype['updated_at'] = undefined;






export default Task;

