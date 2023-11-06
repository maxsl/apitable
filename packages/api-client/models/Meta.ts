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

import { Field } from '../models/Field';
import { HttpFile } from '../http/http';

export class Meta {
    'count'?: number;
    'fields'?: { [key: string]: Field; };
    'revision'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: Field; }",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Meta.attributeTypeMap;
    }

    public constructor() {
    }
}
