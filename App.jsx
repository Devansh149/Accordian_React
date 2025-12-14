import data from "./data";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
const App = () => {
  const [activeId, setactiveId] = useState(null);
  const handleClick = (id) => {
    (activeId === id) ? setactiveId(null) : setactiveId(id);
  }
  return <div className="bg-gray-900 text-white h-screen w-full p-3 flex flex-col gap-7 items-center justify-center">
    <h1 className="text-5xl font-bold">Accordian</h1>
    <div className="flex gap-5 flex-col items-center">
      {data.map(({ id, heading, description }) => {
        return <div key={id}
          onClick={() => { handleClick(id) }}
          className="bg-amber-50 text-black border w-3xl p-3 rounded">
          <div className="flex justify-between">
            <h2>{heading}</h2>
            {activeId == id ? <ArrowUp /> : <ArrowDown />}
          </div>
          {activeId == id && <p>{description}</p>}
        </div>
      })}
    </div>
  </div>
};

export default App
