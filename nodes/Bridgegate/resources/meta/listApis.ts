import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMeta = {
	resource: ['meta'],
};

export const listApisOperation: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMeta,
		},
		options: [
			{
				name: 'List APIs',
				value: 'listApis',
				action: 'List apis',
				description: 'Return the list of available APIs from the server',
				routing: {
					request: {
						method: 'GET',
						url: '/fhir/endpoint',
					},
				},
			},
		],
		default: 'listApis',
	},
	{
		displayName: 'EHR',
		name: 'ehr',
		type: 'options',
		displayOptions: {
			show: {
				...showOnlyForMeta,
				operation: ['listApis'],
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
	{
		displayName: 'Practice',
		name: 'practice',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForMeta,
				operation: ['listApis'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'practice',
			},
		},
	},
];
