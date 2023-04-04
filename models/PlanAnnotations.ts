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

import { AllocationListStub } from '../models/AllocationListStub';
import { DesiredUpdates } from '../models/DesiredUpdates';
import { HttpFile } from '../http/http';

export class PlanAnnotations {
    'desiredTGUpdates'?: { [key: string]: DesiredUpdates; };
    'preemptedAllocs'?: Array<AllocationListStub>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "desiredTGUpdates",
            "baseName": "DesiredTGUpdates",
            "type": "{ [key: string]: DesiredUpdates; }",
            "format": ""
        },
        {
            "name": "preemptedAllocs",
            "baseName": "PreemptedAllocs",
            "type": "Array<AllocationListStub>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlanAnnotations.attributeTypeMap;
    }

    public constructor() {
    }
}

