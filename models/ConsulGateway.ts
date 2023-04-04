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

import { ConsulGatewayProxy } from '../models/ConsulGatewayProxy';
import { ConsulIngressConfigEntry } from '../models/ConsulIngressConfigEntry';
import { ConsulTerminatingConfigEntry } from '../models/ConsulTerminatingConfigEntry';
import { HttpFile } from '../http/http';

export class ConsulGateway {
    'ingress'?: ConsulIngressConfigEntry;
    'mesh'?: any | null;
    'proxy'?: ConsulGatewayProxy;
    'terminating'?: ConsulTerminatingConfigEntry;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ingress",
            "baseName": "Ingress",
            "type": "ConsulIngressConfigEntry",
            "format": ""
        },
        {
            "name": "mesh",
            "baseName": "Mesh",
            "type": "any",
            "format": ""
        },
        {
            "name": "proxy",
            "baseName": "Proxy",
            "type": "ConsulGatewayProxy",
            "format": ""
        },
        {
            "name": "terminating",
            "baseName": "Terminating",
            "type": "ConsulTerminatingConfigEntry",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConsulGateway.attributeTypeMap;
    }

    public constructor() {
    }
}

