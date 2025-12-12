import type { INodeProperties } from 'n8n-workflow';
import { ehrSegmentExpression } from '../shared';

const showOnlyForDocument = {
	resource: ['document'],
};

export const documentGetByMrn: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForDocument,
		},
		options: [
			{
				name: 'Get Document By MRN',
				value: 'getDocument',
				action: 'Get document by MRN',
				description: 'Retrieve document information for a patient by MRN and practice',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/" + ' + ehrSegmentExpression + ' + "/document_by_patient_id" }}',
					},
				},
			},
		],
		default: 'getDocument',
	},
	{
		displayName: 'MRN',
		name: 'mrn',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForDocument,
				operation: ['getDocument'],
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
				...showOnlyForDocument,
				operation: ['getDocument'],
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
				...showOnlyForDocument,
				operation: ['getDocument'],
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
