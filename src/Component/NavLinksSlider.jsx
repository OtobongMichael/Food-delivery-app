import React, { useState } from 'react'
import Button from './reusables/Button'
import Delivery from './Delivery';





export default function NavLinksSlider() {
    const [activeButton, setActiveButton] = useState("Delivery");

    const handleButtonClick = (content) => {
        setActiveButton(prevActiveButton => prevActiveButton === content ? "" : content);
    };

  return (
    <div>
        <div className='flex justify-between px-2 mt-4'>
        <Button content="Dine In" isActive={activeButton === "Dine In"} onClick={() => handleButtonClick("Dine In")} />
            <Button content="Delivery" isActive={activeButton === "Delivery"} onClick={() => handleButtonClick("Delivery")} />
            <Button content="Pick Up" isActive={activeButton === "Pick Up"} onClick={() => handleButtonClick("Pick Up")} />
        </div>
          <div className='px-4'>
          <Delivery />
          </div>
    </div>
  )
}
