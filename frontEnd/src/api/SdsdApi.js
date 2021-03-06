/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Sdsd from '../model/Sdsd';

/**
* Sdsd service.
* @module api/SdsdApi
* @version 1.0.0
*/
export default class SdsdApi {

    /**
    * Constructs a new SdsdApi. 
    * @alias module:api/SdsdApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createsdsd operation.
     * @callback module:api/SdsdApi~createsdsdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sdsd} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Sdsd} sdsd data to be created
     * @param {module:api/SdsdApi~createsdsdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sdsd}
     */
    createsdsd(sdsd, callback) {
      let postBody = sdsd;
      // verify the required parameter 'sdsd' is set
      if (sdsd === undefined || sdsd === null) {
        throw new Error("Missing the required parameter 'sdsd' when calling createsdsd");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Sdsd;
      return this.apiClient.callApi(
        '/sdsd', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletesdsd operation.
     * @callback module:api/SdsdApi~deletesdsdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} sdsdId the Id parameter
     * @param {module:api/SdsdApi~deletesdsdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletesdsd(sdsdId, callback) {
      let postBody = null;
      // verify the required parameter 'sdsdId' is set
      if (sdsdId === undefined || sdsdId === null) {
        throw new Error("Missing the required parameter 'sdsdId' when calling deletesdsd");
      }

      let pathParams = {
        'sdsdId': sdsdId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/sdsd/{sdsdId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllsdsd operation.
     * @callback module:api/SdsdApi~getAllsdsdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Sdsd>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/SdsdApi~getAllsdsdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Sdsd>}
     */
    getAllsdsd(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Sdsd];
      return this.apiClient.callApi(
        '/sdsd/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getsdsd operation.
     * @callback module:api/SdsdApi~getsdsdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sdsd} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} sdsdId the Id parameter
     * @param {module:api/SdsdApi~getsdsdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sdsd}
     */
    getsdsd(sdsdId, callback) {
      let postBody = null;
      // verify the required parameter 'sdsdId' is set
      if (sdsdId === undefined || sdsdId === null) {
        throw new Error("Missing the required parameter 'sdsdId' when calling getsdsd");
      }

      let pathParams = {
        'sdsdId': sdsdId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Sdsd;
      return this.apiClient.callApi(
        '/sdsd/{sdsdId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatesdsd operation.
     * @callback module:api/SdsdApi~updatesdsdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sdsd} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} sdsdId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Sdsd} opts.sdsd data to be updated
     * @param {module:api/SdsdApi~updatesdsdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sdsd}
     */
    updatesdsd(sdsdId, opts, callback) {
      opts = opts || {};
      let postBody = opts['sdsd'];
      // verify the required parameter 'sdsdId' is set
      if (sdsdId === undefined || sdsdId === null) {
        throw new Error("Missing the required parameter 'sdsdId' when calling updatesdsd");
      }

      let pathParams = {
        'sdsdId': sdsdId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Sdsd;
      return this.apiClient.callApi(
        '/sdsd/{sdsdId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
