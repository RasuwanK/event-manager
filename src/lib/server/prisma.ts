import { PrismaClient } from '@prisma/client';
import { NODE_ENV } from '$env/static/private';

const prisma =
	global.prisma ||
	new PrismaClient({
		log: ['query', 'error', 'info', 'warn']
	});

if (NODE_ENV === 'development') global.prisma = prisma;

export default prisma;
