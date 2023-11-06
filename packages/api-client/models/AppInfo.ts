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
* Application Information View
*/
export class AppInfo {
    /**
    * Application ID
    */
    'appId'?: string;
    /**
    * Apply name
    */
    'name'?: string;
    /**
    * Type(LARK、WECOM、DINGTALK)
    */
    'type'?: string;
    /**
    * Application Type(See the catalog for details)
    */
    'appType'?: string;
    /**
    * Application status
    */
    'status'?: string;
    /**
    * Application Introduction
    */
    'intro'?: string;
    /**
    * Help Document Path
    */
    'helpUrl'?: string;
    /**
    * Application Description
    */
    'description'?: string;
    /**
    * Display the picture list in order
    */
    'displayImages'?: Array<string>;
    /**
    * Notes
    */
    'notice'?: string;
    /**
    * Application LOGO address
    */
    'logoUrl'?: string;
    /**
    * Whether configuration is required
    */
    'needConfigured'?: boolean;
    /**
    * Configure Jump Path
    */
    'configureUrl'?: string;
    /**
    * Disable the adjustment link. If there is no adjustment link, there is no need to jump
    */
    'stopActionUrl'?: string;
    /**
    * Whether authorization enabling operation is required
    */
    'needAuthorize'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "appType",
            "baseName": "appType",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "intro",
            "baseName": "intro",
            "type": "string",
            "format": ""
        },
        {
            "name": "helpUrl",
            "baseName": "helpUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayImages",
            "baseName": "displayImages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "notice",
            "baseName": "notice",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "needConfigured",
            "baseName": "needConfigured",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "configureUrl",
            "baseName": "configureUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "stopActionUrl",
            "baseName": "stopActionUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "needAuthorize",
            "baseName": "needAuthorize",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
