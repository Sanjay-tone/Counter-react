import { useState } from "react"


function Component() {

  const [items, setitems] = useState(0)


  const handleincrement = () => {
    setitems(items + 1)
  }

  const handledecrement = () => {
    setitems(items - 1)
  }

  return (
    <>
      <div className="sec">
        <h1 id="items">{items}</h1>
        <button id="btn" onClick={handleincrement}>INCREMENT</button>
        <button id="btn1" onClick={handledecrement}>DECREMENT</button>

      </div>
    </>


  )
}

export default Component