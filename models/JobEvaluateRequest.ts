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

import { EvalOptions } from '../models/EvalOptions';
import { HttpFile } from '../http/http';

export class JobEvaluateRequest {
    'evalOptions'?: EvalOptions;
    'jobID'?: string;
    'namespace'?: string;
    'region'?: string;
    'secretID'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "evalOptions",
            "baseName": "EvalOptions",
            "type": "EvalOptions",
            "format": ""
        },
        {
            "name": "jobID",
            "baseName": "JobID",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "Namespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "Region",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretID",
            "baseName": "SecretID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JobEvaluateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

