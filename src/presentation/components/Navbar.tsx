
export const Navbar = () => {
  return (
    <header className="w-6xl max-w-9/10 m-auto grid grid-cols-[50px_1fr_50px] grid-rows-[50px] justify-center items-center relative z-10">
      <div className="font-bold">GodGames</div>
      <ul className="p-0 m-0 flex justify-center gap-5">
        <li>Home</li>
        <li>Blog</li>
        <li>Info</li>
      </ul>
      <div className="search">
        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
    </header>
  )
}
