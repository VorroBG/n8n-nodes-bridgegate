import type { INodeProperties } from 'n8n-workflow';
import { listApisOperation } from './listApis';

export const metaDescription: INodeProperties[] = [
	...listApisOperation,
];
