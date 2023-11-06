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
* List of people IDs to be synchronized
*/
export class MemberRo {
    'memberId'?: string;
    'unitId'?: string;
    'teamId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "string",
            "format": ""
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MemberRo.attributeTypeMap;
    }

    public constructor() {
    }
}
