import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

type EventQueryResult = {
	id: string,
	name: string;
	participantLimit: number;
	bookings: number | null;
	venue: string;
	addedDate: Date;
	date: Date;
}[];

// Get all the events required
async function getEvents(where?: Prisma.EventWhereInput) {
	let result;
	try {
		result = await prisma.event.findMany({
			select: {
				id: true,
				name: true,
				addedDate: true,
				participantLimit: true,
				bookings: true,
				venue: true,
				date: true
			},
			where
		});
	} catch (e) {
		console.log(e);
		throw fail(500, {
			success: false,
			message: 'Server error',
		});
	}

	return result;
}

// This function fully prepares the response
function respond(
	result: EventQueryResult,
	today: Date,
	formData: { query?: string; filter?: string }
) {
	return {
		success: true,
		data: result.map(({ name, participantLimit, bookings, venue, addedDate, date }) => {
			const recent =
				addedDate.getFullYear() === today.getFullYear() &&
				addedDate.getMonth() === today.getMonth() &&
				today.getDay() - addedDate.getDay() <= 3;
			return {
				bookedPrecentage: bookings ? Math.ceil(bookings / participantLimit) * 100 : 0,
				date,
				venue,
				name,
				recent
			};
		}),
		message: 'Success',
		formData
	};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('query') as string;
		const filter = data.get('filter') as string;
		const today = data.get('today') as string;
		let result;

		if (!today) {
			return fail(400, {
				success: false,
				message: 'Please provide a date',
				formData: {
					query,
					filter
				}
			});
		}

		// In case there are no filters
		if (!filter) {
			return fail(400, {
				success: false,
				message: 'Please provide a filter',
				formData: {
					query,
					filter
				}
			});
		}
		if (!query) {
			// When user provides no query then all the records are sent
			return respond(await getEvents(), new Date(today), {
				query,
				filter
			});
		}

		// When user provides a query and a filter
		switch (filter) {
			case 'bydate':
				result = await getEvents({
					date: {
						gte: new Date(query)
					}
				});
				break;
			case 'byname':
				result = await getEvents({
					name: {
						contains: query
					}
				});
				break;
			case 'bylocation':
				result = await getEvents({
					venue: {
						contains: query
					}
				});
				break;
			default:
				result = await getEvents();
				break;
		}

		return respond(result, new Date(today), {
			query,
			filter
		});
	}
} satisfies Actions;
