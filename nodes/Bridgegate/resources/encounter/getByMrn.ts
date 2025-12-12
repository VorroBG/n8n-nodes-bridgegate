import type { INodeProperties } from 'n8n-workflow';
import { ehrSegmentExpression } from '../shared';

const showOnlyForEncounter = {
	resource: ['encounter'],
};

export const encounterGetByMrn: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEncounter,
		},
		options: [
			{
				name: 'Get Encounter By MRN',
				value: 'getEncounter',
				action: 'Get encounter by MRN',
				description: 'Retrieve encounter information for a patient by MRN and practice',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/" + ' + ehrSegmentExpression + ' + "/encounter_by_patient_id" }}',
					},
				},
			},
		],
		default: 'getEncounter',
	},
	{
		displayName: 'MRN',
		name: 'mrn',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForEncounter,
				operation: ['getEncounter'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'mrn',
			},
		},
	},
	{
		displayName: 'Practice',
		name: 'practice',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForEncounter,
				operation: ['getEncounter'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'practice',
			},
		},
	},
	{
		displayName: 'EHR',
		name: 'ehr',
		type: 'options',
		displayOptions: {
			show: {
				...showOnlyForEncounter,
				operation: ['getEncounter'],
			},
		},
		options: [
			{ name: 'Athena', value: 'athena' },
			{ name: 'Cerner', value: 'cerner' },
			{ name: 'eClinicalWorks', value: 'eclinicalworks' },
			{ name: 'Epic', value: 'epic' },
			{ name: 'NextGen', value: 'nextgen' },
			{ name: 'PointClickCare', value: 'pointclickcare' },
			{ name: 'Practice Fusion', value: 'practicefusion' },
		],

		default: 'athena',
		routing: {
			send: {
				type: 'query',
				property: 'ehr',
			},
		},
	},
];
