import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const actions = {
	default: async ({ request }) => {
		const submitData = await request.formData();

		// Data sent via the form
		const name = submitData.get('name')?.toString();
		const organizer = submitData.get('organizer')?.toString();
		const date = submitData.get('date')?.toString();
		const contactEmail = submitData.get('contactEmail')?.toString();
		const description = submitData.get('description')?.toString();
		const participantLimit = submitData.get('participantLimit')?.toString();
		const venue = submitData.get('venue')?.toString();
		const agree = submitData.get('agree')?.toString();

		// All the pattern matchers used in validation
		const dateMatcher = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
		const lettersMatcher = /^[a-zA-Z\s]+$/;
		const numbersMatcher = /^[0-9]+$/;
		const emailMatcher = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		const lettersAndNumbersMatcher = /^[a-zA-Z0-9\s]+$/;

		let validationErrors = {
			name: {
				value: name ? name : '',
				invalid: name ? !lettersAndNumbersMatcher.test(name) : true
			},
			organizer: {
				value: organizer ? organizer : '',
				invalid: organizer ? !lettersMatcher.test(organizer) : true
			},
			date: {
				value: date ? date : '',
				invalid: date ? !dateMatcher.test(date) : true
			},
			contactEmail: {
				value: contactEmail ? contactEmail : '',
				invalid: contactEmail ? !emailMatcher.test(contactEmail) : true
			},
			description: {
				value: description ? description : '',
				invalid: description ? false : true
			},
			participantLimit: {
				value: participantLimit ? participantLimit : '',
				invalid: participantLimit ? !numbersMatcher.test(participantLimit) : true
			},
			venue: {
				value: venue ? venue : '',
				invalid: venue ? !lettersAndNumbersMatcher.test(venue) : true
			},
			agree: {
				value: agree ? agree : '',
				invalid: agree !== 'on' ? true : false
			}
		};

		if (
			validationErrors.name.invalid ||
			validationErrors.organizer.invalid ||
			validationErrors.date.invalid ||
			validationErrors.contactEmail.invalid ||
			validationErrors.description.invalid ||
			validationErrors.participantLimit.invalid ||
			validationErrors.venue.invalid ||
			validationErrors.agree.invalid
		) {
			return fail(400, {
				success: false,
				validationErrors
			});
		} else {
			try {
				await prisma.event.create({
					data: {
						name: name!,
						participantLimit: parseInt(participantLimit!),
						venue: venue!,
						date: `${date!}T00:00:00.000Z`,
						contactEmail: contactEmail!,
						organizer: organizer!,
						description: description!
					}
				});
			} catch (e) {
        console.log(e);
				return fail(500, {
					success: false,
					validationErrors
				});
			}
		}
		return {
			success: true,
			validationErrors
		};
	}
} satisfies Actions;
