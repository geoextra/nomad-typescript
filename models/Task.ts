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

import { Affinity } from '../models/Affinity';
import { Constraint } from '../models/Constraint';
import { DispatchPayloadConfig } from '../models/DispatchPayloadConfig';
import { LogConfig } from '../models/LogConfig';
import { Resources } from '../models/Resources';
import { RestartPolicy } from '../models/RestartPolicy';
import { ScalingPolicy } from '../models/ScalingPolicy';
import { Service } from '../models/Service';
import { TaskArtifact } from '../models/TaskArtifact';
import { TaskCSIPluginConfig } from '../models/TaskCSIPluginConfig';
import { TaskLifecycle } from '../models/TaskLifecycle';
import { Template } from '../models/Template';
import { Vault } from '../models/Vault';
import { VolumeMount } from '../models/VolumeMount';
import { HttpFile } from '../http/http';

export class Task {
    'affinities'?: Array<Affinity>;
    'artifacts'?: Array<TaskArtifact>;
    'cSIPluginConfig'?: TaskCSIPluginConfig;
    'config'?: { [key: string]: any; };
    'constraints'?: Array<Constraint>;
    'dispatchPayload'?: DispatchPayloadConfig;
    'driver'?: string;
    'env'?: { [key: string]: string; };
    'killSignal'?: string;
    'killTimeout'?: number;
    'kind'?: string;
    'leader'?: boolean;
    'lifecycle'?: TaskLifecycle;
    'logConfig'?: LogConfig;
    'meta'?: { [key: string]: string; };
    'name'?: string;
    'resources'?: Resources;
    'restartPolicy'?: RestartPolicy;
    'scalingPolicies'?: Array<ScalingPolicy>;
    'services'?: Array<Service>;
    'shutdownDelay'?: number;
    'templates'?: Array<Template>;
    'user'?: string;
    'vault'?: Vault;
    'volumeMounts'?: Array<VolumeMount>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affinities",
            "baseName": "Affinities",
            "type": "Array<Affinity>",
            "format": ""
        },
        {
            "name": "artifacts",
            "baseName": "Artifacts",
            "type": "Array<TaskArtifact>",
            "format": ""
        },
        {
            "name": "cSIPluginConfig",
            "baseName": "CSIPluginConfig",
            "type": "TaskCSIPluginConfig",
            "format": ""
        },
        {
            "name": "config",
            "baseName": "Config",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "constraints",
            "baseName": "Constraints",
            "type": "Array<Constraint>",
            "format": ""
        },
        {
            "name": "dispatchPayload",
            "baseName": "DispatchPayload",
            "type": "DispatchPayloadConfig",
            "format": ""
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "Env",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "killSignal",
            "baseName": "KillSignal",
            "type": "string",
            "format": ""
        },
        {
            "name": "killTimeout",
            "baseName": "KillTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "kind",
            "baseName": "Kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "leader",
            "baseName": "Leader",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lifecycle",
            "baseName": "Lifecycle",
            "type": "TaskLifecycle",
            "format": ""
        },
        {
            "name": "logConfig",
            "baseName": "LogConfig",
            "type": "LogConfig",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "Meta",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "Resources",
            "type": "Resources",
            "format": ""
        },
        {
            "name": "restartPolicy",
            "baseName": "RestartPolicy",
            "type": "RestartPolicy",
            "format": ""
        },
        {
            "name": "scalingPolicies",
            "baseName": "ScalingPolicies",
            "type": "Array<ScalingPolicy>",
            "format": ""
        },
        {
            "name": "services",
            "baseName": "Services",
            "type": "Array<Service>",
            "format": ""
        },
        {
            "name": "shutdownDelay",
            "baseName": "ShutdownDelay",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "templates",
            "baseName": "Templates",
            "type": "Array<Template>",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string",
            "format": ""
        },
        {
            "name": "vault",
            "baseName": "Vault",
            "type": "Vault",
            "format": ""
        },
        {
            "name": "volumeMounts",
            "baseName": "VolumeMounts",
            "type": "Array<VolumeMount>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Task.attributeTypeMap;
    }

    public constructor() {
    }
}

