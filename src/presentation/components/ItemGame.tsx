import { useState } from "react";

interface Game{
  name: string;
  backgroundImage: string;
  details: string;
  active: number;
  currentActiveItem: number;
}


export const ItemGame = ({name, backgroundImage, details, active, currentActiveItem}: Game) => {
  
  const [showSpotifyEmbed, setshowSpotifyEmbed] = useState(false)

  const onChangeSpotify = () => {
    setshowSpotifyEmbed(!showSpotifyEmbed)
  }

  return (
    <div className={`item ${active == currentActiveItem ? 'active' : ''}`}>
        <img src={backgroundImage} alt="" />
        <div className={`content text-white`}>
          <div onClick={onChangeSpotify}>
            {
              !showSpotifyEmbed ?
                (
                  <p className="text-white flex items-center gap-2">Listen OST<svg className="bg-gray-400 border-0 w-8 h-8 rounded-md text-2xl text-gray-200 transition-[.5s] hover:bg-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16.5c0 1.3807-1.1193 2.5-2.5 2.5C8.11929 19 7 17.8807 7 16.5S8.11929 14 9.5 14c1.3807 0 2.5 1.1193 2.5 2.5Zm0 0V5c2.5 0 6 2.5 4.5 7"/>
                    </svg>
                  </p>
                )
              : (
                  <p className="text-white flex items-center gap-2"> Read Description <svg className="bg-gray-400 border-0 w-8 h-8 rounded-md text-2xl text-gray-200 transition-[.5s] hover:bg-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
                    </svg>
                  </p>
                )
            }  
          </div>
          <p>{name}</p>
          <p className={`transition-[1s] ${showSpotifyEmbed ? 'hidden' : ''}`}>{details}</p>
          <iframe className={`${showSpotifyEmbed ? '' : 'hidden'} opacity-80 spotify-playlist`} src="https://open.spotify.com/embed/album/6Nws2NAPuxaHzB7MfD1lhg?utm_source=generator" width="80%" height="350" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
  )
}
