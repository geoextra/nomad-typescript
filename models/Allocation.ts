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

import { AllocDeploymentStatus } from '../models/AllocDeploymentStatus';
import { AllocatedResources } from '../models/AllocatedResources';
import { AllocationMetric } from '../models/AllocationMetric';
import { DesiredTransition } from '../models/DesiredTransition';
import { Job } from '../models/Job';
import { RescheduleTracker } from '../models/RescheduleTracker';
import { Resources } from '../models/Resources';
import { TaskState } from '../models/TaskState';
import { HttpFile } from '../http/http';

export class Allocation {
    'allocModifyIndex'?: number;
    'allocatedResources'?: AllocatedResources;
    'clientDescription'?: string;
    'clientStatus'?: string;
    'createIndex'?: number;
    'createTime'?: number;
    'deploymentID'?: string;
    'deploymentStatus'?: AllocDeploymentStatus;
    'desiredDescription'?: string;
    'desiredStatus'?: string;
    'desiredTransition'?: DesiredTransition;
    'evalID'?: string;
    'followupEvalID'?: string;
    'ID'?: string;
    'job'?: Job;
    'jobID'?: string;
    'metrics'?: AllocationMetric;
    'modifyIndex'?: number;
    'modifyTime'?: number;
    'name'?: string;
    'namespace'?: string;
    'nextAllocation'?: string;
    'nodeID'?: string;
    'nodeName'?: string;
    'preemptedAllocations'?: Array<string>;
    'preemptedByAllocation'?: string;
    'previousAllocation'?: string;
    'rescheduleTracker'?: RescheduleTracker;
    'resources'?: Resources;
    'services'?: { [key: string]: string; };
    'taskGroup'?: string;
    'taskResources'?: { [key: string]: Resources; };
    'taskStates'?: { [key: string]: TaskState; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allocModifyIndex",
            "baseName": "AllocModifyIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "allocatedResources",
            "baseName": "AllocatedResources",
            "type": "AllocatedResources",
            "format": ""
        },
        {
            "name": "clientDescription",
            "baseName": "ClientDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientStatus",
            "baseName": "ClientStatus",
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
            "type": "number",
            "format": "int64"
        },
        {
            "name": "deploymentID",
            "baseName": "DeploymentID",
            "type": "string",
            "format": ""
        },
        {
            "name": "deploymentStatus",
            "baseName": "DeploymentStatus",
            "type": "AllocDeploymentStatus",
            "format": ""
        },
        {
            "name": "desiredDescription",
            "baseName": "DesiredDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "desiredStatus",
            "baseName": "DesiredStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "desiredTransition",
            "baseName": "DesiredTransition",
            "type": "DesiredTransition",
            "format": ""
        },
        {
            "name": "evalID",
            "baseName": "EvalID",
            "type": "string",
            "format": ""
        },
        {
            "name": "followupEvalID",
            "baseName": "FollowupEvalID",
            "type": "string",
            "format": ""
        },
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string",
            "format": ""
        },
        {
            "name": "job",
            "baseName": "Job",
            "type": "Job",
            "format": ""
        },
        {
            "name": "jobID",
            "baseName": "JobID",
            "type": "string",
            "format": ""
        },
        {
            "name": "metrics",
            "baseName": "Metrics",
            "type": "AllocationMetric",
            "format": ""
        },
        {
            "name": "modifyIndex",
            "baseName": "ModifyIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "modifyTime",
            "baseName": "ModifyTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "Name",
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
            "name": "nextAllocation",
            "baseName": "NextAllocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeID",
            "baseName": "NodeID",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeName",
            "baseName": "NodeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "preemptedAllocations",
            "baseName": "PreemptedAllocations",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "preemptedByAllocation",
            "baseName": "PreemptedByAllocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousAllocation",
            "baseName": "PreviousAllocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "rescheduleTracker",
            "baseName": "RescheduleTracker",
            "type": "RescheduleTracker",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "Resources",
            "type": "Resources",
            "format": ""
        },
        {
            "name": "services",
            "baseName": "Services",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "taskGroup",
            "baseName": "TaskGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskResources",
            "baseName": "TaskResources",
            "type": "{ [key: string]: Resources; }",
            "format": ""
        },
        {
            "name": "taskStates",
            "baseName": "TaskStates",
            "type": "{ [key: string]: TaskState; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Allocation.attributeTypeMap;
    }

    public constructor() {
    }
}
