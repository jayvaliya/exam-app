// app/Providers.tsx
// "use client";
import { SessionProvider } from 'next-auth/react';


// import {
//     RecoilRoot
// } from 'recoil';

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* <RecoilRoot> */}
            {children}
            {/* </RecoilRoot> */}
        </div>
    )
}

export default Providers;