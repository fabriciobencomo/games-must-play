
interface Thumbnail {
  title: string;
  coverImage: string
}

export const Thumbnail = ({title, coverImage}: Thumbnail) => {
  return (
    <div>
      <div className="w-40 h-64 transition-[.5s] brightness-50 shrink-0 active-thumbnail">
        <img src={coverImage} alt="Nier Automata Cover" className="w-full h-full object-cover rounded-xl"/>
        <div className="content-thumbnail">
          {title}
        </div>
      </div>
    </div>
  )
}
