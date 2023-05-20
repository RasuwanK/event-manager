import prisma from '$lib/server/prisma';
import type {PageServerLoad} from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({params}) => {
    let result;
    try {
        result = await prisma.event.findUnique({
            where: {
                id: params.eventid
            }
        })
    } catch(e) {
        throw error(500, {
            message: "Internal failiure"
        });
    } 
    if(!result) {
        throw error(404, {
            message: "Not found"
        });
    }
    return result;
} ) satisfies PageServerLoad;