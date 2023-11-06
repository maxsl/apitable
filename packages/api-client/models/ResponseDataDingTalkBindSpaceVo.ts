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

import { DingTalkBindSpaceVo } from '../models/DingTalkBindSpaceVo';
import { HttpFile } from '../http/http';

export class ResponseDataDingTalkBindSpaceVo {
    'success'?: boolean;
    'code'?: number;
    'message'?: string;
    'data'?: DingTalkBindSpaceVo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "DingTalkBindSpaceVo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResponseDataDingTalkBindSpaceVo.attributeTypeMap;
    }

    public constructor() {
    }
}
