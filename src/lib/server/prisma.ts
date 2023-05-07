import { PrismaClient } from '@prisma/client';

// This is an instantiation of the prisma client
const prisma = new PrismaClient({
	log: ['query', 'error']
});

export default prisma;
