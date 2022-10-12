import {Globe, QrCode} from "phosphor-react";

import Logo from "../../assets/logoBitso.png";

export function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-center items-center h-14 w-full">
        <div>
          <img src={Logo} className="mx-5" />
        </div>
        <ul className="flex justify-between items-center">
          <li to="/" className="cursor-pointer text-xs font-light mx-5">
            Preços
          </li>
          <select to="/" className="cursor-pointer text-xs font-light mx-5 bg-transparent appearance-none bg-">
            <option value="para você">para você</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <li to="/" className="cursor-pointer text-xs font-light mx-5">
            Para empresas
          </li>
          <li to="/" className="cursor-pointer text-xs font-light mx-5">
            Quem somos
          </li>
          <li to="/" className="cursor-pointer text-xs font-light mx-5">
            Ajuda
          </li>
          <li
            to="/"
            className="cursor-pointer text-xs font-bold flex mx-5 items-center"
          >
            <QrCode size={20} className="mr-2" />
            Baixar o app
          </li>
          <li
            to="/"
            className="cursor-pointer text-xs font-bold flex mx-5 items-center"
          >
            <Globe size={20} className="mr-2" />
            PT-BR
          </li>
        </ul>
        <div className="">
          <button
            className=" text-white bg-[#28AC00] rounded-full h-9 w-[9rem] text-sm font-bold hover:bg-green-700"
            to="/"
          >
            Criar uma conta
          </button>
          <button className="mx-5 text-[#28AC00] text-sm font-bold" to="/">
            Iniciar sessão
          </button>
        </div>
      </nav>
    </>
  );
}
