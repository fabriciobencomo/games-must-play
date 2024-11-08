// import React from 'react'
import { ArrowButtons } from './ArrowButtons';
import { Thumbnail } from './Thumbnail';
import { games } from '../games/games';
import { useEffect, useState } from 'react';
import { ItemGame } from './ItemGame';

export const Slider = () => {

  const [listGames, setListGames] = useState(games)
  const [activeItem, setActiveItem] = useState(0)

  const onChangeActive = (value: number) => {
    console.log(value)
    if(value < 0){
      setActiveItem(listGames.length - 1)
    } else if(value >= listGames.length){
      setActiveItem(0)
    }else{
      setActiveItem(value)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      onChangeActive(activeItem + 1);
    }, 30000); // Update state every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [activeItem]);
  

  return (
    <>
      <div className="h-screen -mt-[50px] relative">
        <div className="mx-2 flex justify-center">
          {
            listGames.map((game, index) => (
              <ItemGame key={game.id} name={game.name} details={game.details} backgroundImage={game.backgroundImage} active={index} currentActiveItem={activeItem} spotifyUrl={game.spotifyUrl}/>
            ))
          }
        </div>
        <ArrowButtons onChangeActiveItem={onChangeActive} currentValue={activeItem}/>
        <div className="absolute bottom-4 z-20 flex gap-2.5 w-full h-72 box-border py-0 px-12 overflow-auto no-scrollbar justify-start md:justify-center">          
          {
            listGames.map((game, index) => (
              <Thumbnail key={game.id + 'Thumbnail'} coverImage={game.coverImage} title={game.name} active={index} currentActiveItem={activeItem} selectItem={onChangeActive}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
