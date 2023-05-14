import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const actions = {
  default: async ({ request }) => {
    const submitData = await request.formData();
    const filter = submitData.get('filter');
    const query = submitData.get('query');
    let result: unknown;
    console.log(query);
    if (query) {
      // When user provides a query and a filter
      try {
        switch (filter) {
          case 'bydate':
            result =
              await prisma.$queryRaw`SELECT name, participant_limit, bookings, venue, date FROM Event WHERE date = '${query}';`;
            break;
          case 'byname':
            console.log('By name');
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
                    contains: query
                  }
                }
              });
              console.log(result);
            } catch (e) {
              console.log(e);
            }
            break;
          case 'bylocation':
            result =
              await prisma.$queryResult`SELECT name, participant_limit, bookings, venue, date FROM Event WHERE location LIKE '%${query}%';`;
          default:
            // Provided with wrong or empty filter
            return fail(400, {
              success: fail,
              result: []
            });
        }
      } catch (e) {
        // Error with prisma client
        result = [];
        return fail(500, {
          success: false,
          result
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
