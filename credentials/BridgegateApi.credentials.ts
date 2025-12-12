// import type {
// 	IAuthenticateGeneric,
// 	ICredentialType,
// 	INodeProperties,
// 	Icon,
// } from 'n8n-workflow';

import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';
export class BridgegateApi implements ICredentialType {
	name = 'bridgegateApi';

	displayName = 'Bridgegate API';
	
	icon: Icon = 'file:bridgegate.svg';


	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-bridgegate?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://training.bridgegatehealth.com',
			url: '/fhir/validate',
		},
	};
}
