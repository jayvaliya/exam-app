import { getServerSession } from "next-auth";
import nextAuthOptions from "../../../../../packages/utils/nextAuthOptions";
import { PrismaClient } from "@repo/db";

export async function POST(req, res) {
    const session = await getServerSession(nextAuthOptions)
    const { folderName } = req.body;
    const prisma = new PrismaClient();

    try {
        await prisma.folder.create({
            data: {
                name: folderName,
                // @ts-expect-error userId is not defined in the type
                userId: session.user.id,
                parentId: null
            }
        })
        res.status(200).json({ success: true });
    }
    catch (error) {
        // @ts-expect-error error is not defined in the type 
        res.status(500).json({ error: error.message });
    }
    finally {
        await prisma.$disconnect();
    }
}
