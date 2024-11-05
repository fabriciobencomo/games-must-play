
interface Game{
  name: string;
  backgroundImage: string;
  details: string;
}


export const ItemGame = ({name, backgroundImage, details}: Game) => {
  console.log()
  return (
    <div className="item active">
        <img src={backgroundImage} alt="Nier Automata Background Cover" />
        <div className="content text-white ">
          <p className="text-white">Design</p>
          <p>{name}</p>
          <p>{details}</p>
        </div>
    </div>
  )
}
