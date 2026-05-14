import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import { metaDescription } from './resources/meta';
import { patientDescription } from './resources/patient';
import { encounterDescription } from './resources/encounter';
import { documentDescription } from './resources/document';

export class Bridgegate implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'BridgeGate',
		name: 'bridgegate',
		icon: { light: 'file:bridgegate.svg', dark: 'file:bridgegate.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Interact with the BridgeGate API',
		defaults: {
			name: 'BridgeGate',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],

		credentials: [
			{
				name: 'bridgegateApi',
				required: true,
			},
		],

		requestDefaults: {
			baseURL: '={{ $env.BRIDGEGATE_BASE_URL || "https://training.bridgegatehealth.com" }}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				// Authorization header is added by credentials
			},
		},

		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Meta', value: 'meta' },
					{ name: 'Patient', value: 'patient' },
					{ name: 'Encounter', value: 'encounter' },
					{ name: 'Document', value: 'document' },
				],
				default: 'meta',
			},

			...metaDescription,
			...patientDescription,
			...encounterDescription,
			...documentDescription,
		],
	};
}
