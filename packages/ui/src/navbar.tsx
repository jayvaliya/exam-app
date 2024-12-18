import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="block w-full max-w-screen-lg px-4 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] rounded-lg">
      <div className="container md:flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link href="/dashboard"
          className="mr-4 block cursor-pointer text-2xl text-zinc-800 font-semibold font-mono">
          Noter
        </Link>
        <div>
          <ul className="flex gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
            <li className="flex items-center p-1 hover:font-bold text-sm gap-x-2 text-slate-600">
              <Link href="/editor" className="flex items-center">Editor</Link>
            </li>
            <li className="flex items-center p-1 hover:font-bold text-sm gap-x-2 text-slate-600">
              <Link href="#" className="flex items-center">Search</Link>
            </li>
            <li className="flex items-center p-1 hover:font-bold text-sm gap-x-2 text-slate-600">
              <Link href="publish" className="flex items-center">publish</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
