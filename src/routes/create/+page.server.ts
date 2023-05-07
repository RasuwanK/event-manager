import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

type ReturnData = Record<string, { value?: string; missing: boolean } | boolean>;

export const actions = {
	default: async ({ request }) => {
		const submitData = await request.formData();

		// Data sent via the form
		const name = submitData.get('name');
		const organizer = submitData.get('organizer');
		const date = submitData.get('date');
		const contactEmail = submitData.get('contactEmail');
		const description = submitData.get('description');
		const participantLimit = submitData.get('participantLimit');

		if (!name || !organizer || !date || !contactEmail || !description || !participantLimit) {
			const returnData: ReturnData = {
				isSuccess: false
			};

			for (let [key, value] of submitData.entries()) {
				let field = key.toString();
				if (!value) {
					returnData[field] = {
						missing: true
					};
				}
			}
			console.log(returnData);
			return fail(400, returnData);
		}

		return {
			success: true
		};
	}
} satisfies Actions;
