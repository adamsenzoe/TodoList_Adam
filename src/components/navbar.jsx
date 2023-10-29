import { NavLink } from "react-router-dom";

function Navbar() {
  return (

      <header className="flex flex-col w-full justify-between items-center bg-blue-400 text-white">
        <div className="bg-blue-800 w-full p-[10px] flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Adam Prasetya</h1>
        <h1 className="text-yellow-500">Todo-List-App</h1>
        </div>
        <nav>
          <ul className="flex gap-[100px] p-[10px]">
            <NavLink className="text-blue-800 hover:text-white font-bold" to="/">Home</NavLink>
            <NavLink className="text-blue-800 hover:text-white font-bold" to="/todo">Todo</NavLink>
          </ul>
        </nav>
      </header>

  );
}

export default Navbar;
