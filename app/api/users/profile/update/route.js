import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Create
export const POST = async (req, res) => {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    let reqData = await req.json();
    let result = await prisma.users.update({
      where: { id: id },
      data: reqData,
    });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    console.error(e);
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
