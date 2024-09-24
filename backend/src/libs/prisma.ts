import { PrismaClient } from "@prisma/client";
import { pagination } from "prisma-extension-pagination";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function (): string {
  return this.toString();
};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma.$extends(pagination());

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
