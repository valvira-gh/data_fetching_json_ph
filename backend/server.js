const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Use Prisma Client to interact with your database
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
}

main()
    .catch(error => {
        throw error
    })
    .finally(async () => {
        await prisma.$disconnect();
    })