import { PrismaClient } from "../node_modules/@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// Debugging: Log the prisma object to ensure it's not undefined
console.log("Prisma client instance:", prisma);

export default prisma;
