/**
 * Nomad
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.1.4
 * Contact: support@hashicorp.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ACLTokenRoleLink } from '../models/ACLTokenRoleLink';
import { HttpFile } from '../http/http';

export class ACLToken {
    'accessorID'?: string;
    'createIndex'?: number;
    'createTime'?: Date;
    'expirationTTL'?: number;
    'expirationTime'?: Date;
    'global'?: boolean;
    'modifyIndex'?: number;
    'name'?: string;
    'policies'?: Array<string>;
    'roles'?: Array<ACLTokenRoleLink>;
    'secretID'?: string;
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessorID",
            "baseName": "AccessorID",
            "type": "string",
            "format": ""
        },
        {
            "name": "createIndex",
            "baseName": "CreateIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "CreateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expirationTTL",
            "baseName": "ExpirationTTL",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "expirationTime",
            "baseName": "ExpirationTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "global",
            "baseName": "Global",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "modifyIndex",
            "baseName": "ModifyIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "policies",
            "baseName": "Policies",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "Roles",
            "type": "Array<ACLTokenRoleLink>",
            "format": ""
        },
        {
            "name": "secretID",
            "baseName": "SecretID",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ACLToken.attributeTypeMap;
    }

    public constructor() {
    }
}
