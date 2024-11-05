// import React from 'react'
import { ArrowButtons } from './ArrowButtons';
import { Thumbnail } from './Thumbnail';
import { games } from '../games/games';
import { useState } from 'react';
import { ItemGame } from './ItemGame';

export const Slider = () => {

  const [listGames, setListGames] = useState(games)

  return (
    <>
      <div className="h-screen -mt-[50px] relative">
        <div className="">
          {
            listGames.map(game => (
              <ItemGame key={game.id} name={game.name} details={game.details} backgroundImage={game.backgroundImage}/>
            ))
          }
        </div>
        <ArrowButtons/>
        <div className="absolute bottom-4 z-20 flex gap-2.5 w-full h-72 box-border py-0 px-12 overflow-auto no-scrollbar justify-start md:justify-center">          
          {
            listGames.map(game => (
              <Thumbnail key={game.id + 'Thumbnail'} coverImage={game.coverImage} title={game.name}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

{/* <div className="item active">
  <img src="../../assets/images/nierAutomata.webp" alt="Nier Automata Background Cover" />
  <div className="content text-white ">
    <p className="text-white">Design</p>
    <p>Slider 01</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium blanditiis doloribus sit voluptas cum! Accusamus fugiat tenetur quaerat fugit quae nesciunt iste! Ipsa possimus doloremque, reprehenderit nobis modi ab molestias!</p>
  </div>
</div>
<div className="item">
  <img src="../../assets/images/nierAutomata.webp" alt="Nier Automata Background Cover" />
  <div className="content text-white">
    <p className="text-white">Design</p>
    <p>Slider 01</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium blanditiis doloribus sit voluptas cum! Accusamus fugiat tenetur quaerat fugit quae nesciunt iste! Ipsa possimus doloremque, reprehenderit nobis modi ab molestias!</p>
  </div>
</div>
<div className="item">
  <img src="../../assets/images/nierAutomata.webp" alt="Nier Automata Background Cover" />
  <div className="content text-white">
    <p className="text-white">Design</p>
    <p>Slider 01</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium blanditiis doloribus sit voluptas cum! Accusamus fugiat tenetur quaerat fugit quae nesciunt iste! Ipsa possimus doloremque, reprehenderit nobis modi ab molestias!</p>
  </div>
</div>
<div className="item">
  <img src="../../assets/images/nierAutomata.webp" alt="Nier Automata Background Cover" />
  <div className="content text-white">
    <p className="text-white">Design</p>
    <p>Slider 01</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium blanditiis doloribus sit voluptas cum! Accusamus fugiat tenetur quaerat fugit quae nesciunt iste! Ipsa possimus doloremque, reprehenderit nobis modi ab molestias!</p>
  </div>
</div>
<div className="item">
  <img src="../../assets/images/nierAutomata.webp" alt="Nier Automata Background Cover" />
  <div className="content text-white">
    <p className="text-white">Design</p>
    <p>Slider 01</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium blanditiis doloribus sit voluptas cum! Accusamus fugiat tenetur quaerat fugit quae nesciunt iste! Ipsa possimus doloremque, reprehenderit nobis modi ab molestias!</p>
  </div>
</div> */}