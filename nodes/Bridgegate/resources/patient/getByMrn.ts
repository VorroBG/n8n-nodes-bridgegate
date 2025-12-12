import type { INodeProperties } from 'n8n-workflow';
import { ehrSegmentExpression } from '../shared';

const showOnlyForPatient = {
	resource: ['patient'],
};

export const patientGetByMrn: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPatient,
		},
		options: [
			{
				name: 'Get Patient By MRN',
				value: 'getPatient',
				action: 'Get patient by MRN',
				description: 'Retrieve a single patient by MRN and practice',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/" + ' + ehrSegmentExpression + ' + "/patient_by_id" }}',
					},
				},
			},
		],
		default: 'getPatient',
	},
	{
		displayName: 'MRN',
		name: 'mrn',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForPatient,
				operation: ['getPatient'],
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
				...showOnlyForPatient,
				operation: ['getPatient'],
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
				...showOnlyForPatient,
				operation: ['getPatient'],
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
