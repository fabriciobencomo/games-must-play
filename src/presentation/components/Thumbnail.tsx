
interface Thumbnail {
  title: string;
  coverImage: string,
  active: number,
  currentActiveItem: number,
  selectItem: (value: number) => void;
}

export const Thumbnail = ({title, coverImage, active, currentActiveItem, selectItem}: Thumbnail) => {
  return (
    <div onClick={() => selectItem(active)}>
      <div className={`thumbnail w-40 h-64 brightness-50 shrink-0 ${active == currentActiveItem ? 'active-thumbnail': ''}`}>
        <img src={coverImage} alt="Nier Automata Cover" className="w-full h-full object-cover rounded-xl"/>
        <div className="content-thumbnail">
          {title}
        </div>
      </div>
    </div>
  )
}
