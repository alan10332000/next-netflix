import { PrismaClient } from '@prisma/client'

const client = global.prismaDB || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismaDB = client

export default client
