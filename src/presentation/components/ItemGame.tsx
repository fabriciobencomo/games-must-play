
interface Game{
  name: string;
  backgroundImage: string;
  details: string;
  active: number;
  currentActiveItem: number;
  selectItem: (value: number) => void;
}


export const ItemGame = ({name, backgroundImage, details, active, currentActiveItem}: Game) => {
  
  return (
    <div className={`item ${active == currentActiveItem ? 'active' : ''}`}>
        <img src={backgroundImage} alt="Nier Automata Background Cover" />
        <div className="content text-white ">
          <p className="text-white">Design</p>
          <p>{name}</p>
          <p>{details}</p>
        </div>
    </div>
  )
}
