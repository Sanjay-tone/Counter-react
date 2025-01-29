import { useState } from "react"


function Component() {

  const [items, setitems] = useState(0)


  const handleincrement = () => {
    setitems(items + 1)
  }

  const handledecrement = () => {
    setitems(items - 1)
  }

  const handleclick = () => {
    setitems(0)
  }

  return (
    <>
      <div className="sec">
        <h1>COUNTER APP</h1>
        <h1 id="items">{items}</h1>
        <button id="btn" onClick={handleincrement}>INCREMENT</button>
        <button id="btn1" onClick={handledecrement}>DECREMENT</button>
        <button id="btn2" onClick={handleclick}>RESET</button>
      </div>
    </>


  )
}

export default Component