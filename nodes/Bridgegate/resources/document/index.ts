import type { INodeProperties } from 'n8n-workflow';
import { documentGetByMrn } from './getByMrn';

export const documentDescription: INodeProperties[] = [
	...documentGetByMrn,
];
