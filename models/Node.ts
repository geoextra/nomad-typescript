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

import { CSIInfo } from '../models/CSIInfo';
import { DrainMetadata } from '../models/DrainMetadata';
import { DrainStrategy } from '../models/DrainStrategy';
import { DriverInfo } from '../models/DriverInfo';
import { HostNetworkInfo } from '../models/HostNetworkInfo';
import { HostVolumeInfo } from '../models/HostVolumeInfo';
import { NodeEvent } from '../models/NodeEvent';
import { NodeReservedResources } from '../models/NodeReservedResources';
import { NodeResources } from '../models/NodeResources';
import { Resources } from '../models/Resources';
import { HttpFile } from '../http/http';

export class Node {
    'attributes'?: { [key: string]: string; };
    'cSIControllerPlugins'?: { [key: string]: CSIInfo; };
    'cSINodePlugins'?: { [key: string]: CSIInfo; };
    'cgroupParent'?: string;
    'createIndex'?: number;
    'datacenter'?: string;
    'drain'?: boolean;
    'drainStrategy'?: DrainStrategy;
    'drivers'?: { [key: string]: DriverInfo; };
    'events'?: Array<NodeEvent>;
    'hTTPAddr'?: string;
    'hostNetworks'?: { [key: string]: HostNetworkInfo; };
    'hostVolumes'?: { [key: string]: HostVolumeInfo; };
    'ID'?: string;
    'lastDrain'?: DrainMetadata;
    'links'?: { [key: string]: string; };
    'meta'?: { [key: string]: string; };
    'modifyIndex'?: number;
    'name'?: string;
    'nodeClass'?: string;
    'nodeResources'?: NodeResources;
    'reserved'?: Resources;
    'reservedResources'?: NodeReservedResources;
    'resources'?: Resources;
    'schedulingEligibility'?: string;
    'status'?: string;
    'statusDescription'?: string;
    'statusUpdatedAt'?: number;
    'tLSEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "Attributes",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "cSIControllerPlugins",
            "baseName": "CSIControllerPlugins",
            "type": "{ [key: string]: CSIInfo; }",
            "format": ""
        },
        {
            "name": "cSINodePlugins",
            "baseName": "CSINodePlugins",
            "type": "{ [key: string]: CSIInfo; }",
            "format": ""
        },
        {
            "name": "cgroupParent",
            "baseName": "CgroupParent",
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
            "name": "datacenter",
            "baseName": "Datacenter",
            "type": "string",
            "format": ""
        },
        {
            "name": "drain",
            "baseName": "Drain",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "drainStrategy",
            "baseName": "DrainStrategy",
            "type": "DrainStrategy",
            "format": ""
        },
        {
            "name": "drivers",
            "baseName": "Drivers",
            "type": "{ [key: string]: DriverInfo; }",
            "format": ""
        },
        {
            "name": "events",
            "baseName": "Events",
            "type": "Array<NodeEvent>",
            "format": ""
        },
        {
            "name": "hTTPAddr",
            "baseName": "HTTPAddr",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostNetworks",
            "baseName": "HostNetworks",
            "type": "{ [key: string]: HostNetworkInfo; }",
            "format": ""
        },
        {
            "name": "hostVolumes",
            "baseName": "HostVolumes",
            "type": "{ [key: string]: HostVolumeInfo; }",
            "format": ""
        },
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastDrain",
            "baseName": "LastDrain",
            "type": "DrainMetadata",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "Links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "Meta",
            "type": "{ [key: string]: string; }",
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
            "name": "nodeClass",
            "baseName": "NodeClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeResources",
            "baseName": "NodeResources",
            "type": "NodeResources",
            "format": ""
        },
        {
            "name": "reserved",
            "baseName": "Reserved",
            "type": "Resources",
            "format": ""
        },
        {
            "name": "reservedResources",
            "baseName": "ReservedResources",
            "type": "NodeReservedResources",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "Resources",
            "type": "Resources",
            "format": ""
        },
        {
            "name": "schedulingEligibility",
            "baseName": "SchedulingEligibility",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusDescription",
            "baseName": "StatusDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusUpdatedAt",
            "baseName": "StatusUpdatedAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "tLSEnabled",
            "baseName": "TLSEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Node.attributeTypeMap;
    }

    public constructor() {
    }
}

