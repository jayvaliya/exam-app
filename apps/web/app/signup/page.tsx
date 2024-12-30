"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false); // For loading state
    const router = useRouter();

    const handleUserSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true); // Show loading spinner while uploading

        if (!email || !password || !firstName || !lastName) {
            toast.error('All fields are required');
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            setIsLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            if (profilePicture) {
                formData.append("profilePicture", profilePicture);
            }

            // Signup user with FormData
            const res = await axios.post("/api/auth/signup", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (res.status === 201) {
                toast.success("Signup successful!");
                router.push("/login");
            } else {
                toast.error(res.data.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error uploading profile picture or signing up");
        } finally {
            setIsLoading(false); // Hide loading spinner after process completes
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-transparent shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleUserSignup} className="space-y-6">

                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="John"
                        className="mt-1 block w-full px-3 py-2 border bg-zinc-50  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Doe"
                        className="mt-1 block w-full px-3 py-2 border bg-zinc-50  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="email@example.com"
                        className="mt-1 block w-full px-3 py-2  bg-zinc-50  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="mt-1 block w-full px-3 py-2 border bg-zinc-50  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border bg-zinc-50  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="••••••••"
                    />
                </div>

                <div>
                    <label htmlFor="profilePicture" className="block text-sm font-medium">
                        Profile Picture (optional)
                    </label>
                    <input
                        type="file"
                        id="profilePicture"
                        accept="image/*"
                        onChange={(e) => setProfilePicture(e.target.files?.[0] ?? null)}
                        className="mt-1 block w-full px-3 py-2 border bg-zinc-50  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>



                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    {isLoading ? "Signing Up..." : "Signup"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
