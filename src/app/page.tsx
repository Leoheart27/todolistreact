"use client";
import { useState } from "react";


const Page = () => {
  const [toDoList, setToDoList] = useState<{label: string, done: boolean}[]>([
    {label: "Have a breakfast", done: true}, 
    {label: "Brush my teeth", done: false},
    {label: "Take a shower", done: false}
  ])
  const [toDo, setToDo] = useState<string>("")

  const addToDo = (): void => {
    setToDoList([...toDoList, {label: toDo, done: false}])
    setToDo("")
  }

  const delToDo = (index: number): void => {
    const removeIndex: {label: string, done: boolean}[] = toDoList.filter((toDoContent, i) => i !== index)
    setToDoList(removeIndex)
  }

  const handleCheck = (index: number): void => {
    toDoList[index].done = !toDoList[index].done
    setToDoList([...toDoList])
  }


  return (
    <div className="w-screen h-screen bg-black flex items-center flex-col p-12 gap-4">
      <h1 className="text-2xl">To do list</h1>
      <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
        <input className="text-xl p-2 text-black"
          type="text"
          placeholder="To do"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)} />
        <button className="text-xl bg-gray-500 p-2" onClick={addToDo}>Add to the list</button>
      </form>
      <ul className="text-lg list-disc">
        {toDoList.map((toDoContent, index) =>
          <li key={index}>{toDoContent.label}
            {toDoContent.done ? 
            <span className="cursor-pointer hover:underline text-sm ml-2 text-green-300" onClick={() => handleCheck(index)}>[done ✅]</span> : <span className="cursor-pointer hover:underline text-sm ml-2 text-red-300" onClick={() => handleCheck(index)}>[not done ❌]</span>}
            <span className="cursor-pointer hover:underline text-sm ml-2 text-red-400" onClick={() => delToDo(index)}>[delete]</span>
          </li>)}
      </ul>
    </div>


  )
}

export default Page