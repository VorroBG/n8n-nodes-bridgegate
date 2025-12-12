import type { INodeProperties } from 'n8n-workflow';
import { patientGetByMrn } from './getByMrn';

export const patientDescription: INodeProperties[] = [
	...patientGetByMrn,
];
