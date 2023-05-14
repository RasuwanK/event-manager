import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const actions = {
	default: async ({ request }) => {
		const submitData = await request.formData();
		const filter = submitData.get('filter');
		const query = submitData.get('query');
		let result;
		if (query) {
			// When user provides a query and a filter
			switch (filter) {
				case 'bydate':
					try {
						result = await prisma.event.findMany({
							select: {
								name: true,
								participantLimit: true,
								bookings: true,
								venue: true,
								date: true
							},
							where: {
								date: {
									gte: new Date(query as string).toISOString()
								}
							}
						});
						console.log(result);
					} catch (e) {
						console.log(e);
						return fail(500, {
							success: false,
							result: []
						});
					}
					break;
				case 'byname':
					try {
						result = await prisma.event.findMany({
							select: {
								name: true,
								participantLimit: true,
								bookings: true,
								venue: true,
								date: true
							},
							where: {
								name: {
									contains: query as string
								}
							}
						});
					} catch (e) {
						console.log(e);
						return fail(500, {
							success: false,
							result: []
						});
					}
					break;
				case 'bylocation':
					try {
						result = await prisma.event.findMany({
							select: {
								name: true,
								participantLimit: true,
								bookings: true,
								venue: true,
								date: true
							},
							where: {
								venue: {
									contains: query as string
								}
							}
						});
						console.log(result);
					} catch (e) {
						console.log(e);
						return fail(500, {
							success: false,
							result: []
						});
					}
					break;
				default:
					// Provided with wrong or empty filter
					return fail(400, {
						success: fail,
						result: []
					});
			}
			return {
				success: true,
				result
			};
		} else {
			// When user provides no query then all the records are sent
			try {
				result = await prisma.event.findMany({
					select: {
						name: true,
						participantLimit: true,
						bookings: true,
						venue: true,
						date: true
					}
				});

				console.log(result);
			} catch (e) {
				// In case prisma throws an error
				console.log(e);
				return fail(500, {
					success: false,
					result: []
				});
			}
		}

		return result;
	}
} satisfies Actions;
