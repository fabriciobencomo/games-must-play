
export const ArrowButtons = () => {
  return (
    <div className="absolute top-1/5 right-12 z-20">
      <button id="prev" className="bg-gray-400 border-0 w-10 h-10 rounded-md text-2xl text-gray-200 transition-[.5s] hover:bg-white hover:text-black">{'<'}</button>
      <button id="next" className="bg-gray-400 border-0 w-10 h-10 rounded-md text-2xl text-gray-200 transition-[.5s] hover:bg-white hover:text-black">{'>'}</button>
    </div>
  )
}
