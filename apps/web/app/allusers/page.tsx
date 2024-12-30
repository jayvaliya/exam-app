// app/page.tsx
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import nextAuthOptions from '../../../../packages/utils/nextAuthOptions';


const prisma = new PrismaClient();

export default async function Home() {
    const session = await getServerSession(nextAuthOptions);
    if (session?.user?.email !== "valiyajay555@gmail.com") {
        return (
            <div>
                <h1>Access Denied</h1>
            </div>
        )
    }

    // Fetch all students from the database
    const students = await prisma.user.findMany();

    return (
        <div>
            <h1>Users List</h1>
            {students.length > 0 ? (
                <ul>
                    {students.map((user) => (
                        <li key={user.id}>
                            {JSON.stringify(user)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No students found</p>
            )}
        </div>
    );
}