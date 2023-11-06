/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Content security - report information ro
*/
export class ContentCensorReportRo {
    /**
    * Reported vika
    */
    'nodeId': string;
    /**
    * Reasons for reporting
    */
    'reportReason': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportReason",
            "baseName": "reportReason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContentCensorReportRo.attributeTypeMap;
    }

    public constructor() {
    }
}
