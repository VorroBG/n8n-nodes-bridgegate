import type { INodeProperties } from 'n8n-workflow';
import { encounterGetByMrn } from './getByMrn';

export const encounterDescription: INodeProperties[] = [
	...encounterGetByMrn,
];
