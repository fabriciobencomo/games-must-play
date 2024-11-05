
interface ArrowButtons {
  onChangeActiveItem: (num: number) => void;
  currentValue: number
}

export const ArrowButtons = ({onChangeActiveItem, currentValue}: ArrowButtons) => {

  const onHandleNewValue = (operation: number) => {
    onChangeActiveItem(currentValue + operation)
  }
 
  return (
    <div className="absolute top-2/12 md:top-1/5 right-12 z-20">
      <button onClick={() => onHandleNewValue(-1)} id="prev" className="bg-gray-400 border-0 w-10 h-10 rounded-md text-2xl text-gray-200 transition-[.5s] hover:bg-white hover:text-black mx-3">{'<'}</button>
      <button onClick={() => onHandleNewValue(1)} id="next" className="bg-gray-400 border-0 w-10 h-10 rounded-md text-2xl text-gray-200 transition-[.5s] hover:bg-white hover:text-black">{'>'}</button>
    </div>
  )
}
