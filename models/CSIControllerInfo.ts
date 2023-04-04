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

import { HttpFile } from '../http/http';

export class CSIControllerInfo {
    'supportsAttachDetach'?: boolean;
    'supportsClone'?: boolean;
    'supportsCondition'?: boolean;
    'supportsCreateDelete'?: boolean;
    'supportsCreateDeleteSnapshot'?: boolean;
    'supportsExpand'?: boolean;
    'supportsGet'?: boolean;
    'supportsGetCapacity'?: boolean;
    'supportsListSnapshots'?: boolean;
    'supportsListVolumes'?: boolean;
    'supportsListVolumesAttachedNodes'?: boolean;
    'supportsReadOnlyAttach'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "supportsAttachDetach",
            "baseName": "SupportsAttachDetach",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsClone",
            "baseName": "SupportsClone",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsCondition",
            "baseName": "SupportsCondition",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsCreateDelete",
            "baseName": "SupportsCreateDelete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsCreateDeleteSnapshot",
            "baseName": "SupportsCreateDeleteSnapshot",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsExpand",
            "baseName": "SupportsExpand",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsGet",
            "baseName": "SupportsGet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsGetCapacity",
            "baseName": "SupportsGetCapacity",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsListSnapshots",
            "baseName": "SupportsListSnapshots",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsListVolumes",
            "baseName": "SupportsListVolumes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsListVolumesAttachedNodes",
            "baseName": "SupportsListVolumesAttachedNodes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsReadOnlyAttach",
            "baseName": "SupportsReadOnlyAttach",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CSIControllerInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
