import React from "react";

export function Signup() {
  return (
    <div className="flex flex-col w-full h-96 items-center mt-14">
      <div className="flex flex-col w-[43rem] h-72 items-center border-2 rounded-3xl border-gray-400">
        <div className="text-green-500 mt-6 text-lg font-bold">
          <p className="">ABRA SUA CONTA NA BITSO E REGISTRE-SE NA PROMOÇÃO.</p>
        </div>
        <div className="flex mt-10 w-4/5 justify-end text-xs font-light">
          <p className="">*CAMPOS OBRIGATÓRIOS</p>
        </div>
        <div className="flex flex-col w-full items-center text-xs mt-1">
          <form action="" className="flex flex-col w-full items-center">
            <input
              type="text"
              placeholder="NOME COMPLETO*"
              id="name"
              autoComplete="off"
              className="w-4/5 border-2 rounded-full px-5 py-1 border-gray-600"
            />
            <input
              type="email"
              placeholder="E-MAIL (digite o mesmo e-mail da conta Bitso)*"
              id="email"
              autoComplete="off"
              className="w-4/5 border-2 rounded-full mt-3 px-5 py-1 border-gray-600"
            />
            <button
              type="submit"
              className="border rounded-full bg-slate-400 w-48 h-8 m-9 py-1 text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="mt-11 text-sm font-light">
        <p>
          <a href="/" className="cursor-pointer underline decoration-1">
            Clique aqui
          </a>{" "}
          e leia o regulamento da promoção.
        </p>
      </div>
    </div>
  );
}
