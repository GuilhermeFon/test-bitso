import {
  FacebookLogo,
  InstagramLogo,
  TelegramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

import Logo from "../../assets/logoBitso.png";

export function Footer() {
  return (
    <div className="flex flex-col w-full h-32 items-center mt-14">
      <div className="flex flex-row w-[45%] justify-between">
        <div className="flex flex-col">
          <div>
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-light">COMPANHIA</div>
          <div className="cursor-pointer text-xs font-extralight mt-5">
            Início
          </div>
          <div className="cursor-pointer text-xs font-extralight">Taxas</div>
          <div className="cursor-pointer text-xs font-extralight">Blog</div>
          <div className="cursor-pointer text-xs font-extralight">
            Junte-se à equipe
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-light">PRODUTOS</div>
          <div className="cursor-pointer text-xs font-extralight mt-5">
            Bitso App
          </div>
          <div className="cursor-pointer text-xs font-extralight">
            Bitso App Pro
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-light">RECURSOS</div>
          <div className="cursor-pointer text-xs font-extralight mt-5">
            Central de Ajuda
          </div>
          <div className="cursor-pointer text-xs font-extralight">
            Documentação API
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-light">IDIOMA</div>
          <div className="cursor-pointer text-xs font-extralight mt-5">
            Português
          </div>
          <div className="flex flex-row mt-3">
            <YoutubeLogo className="cursor-pointer m-1" />
            <FacebookLogo className="cursor-pointer m-1" />
            <TwitterLogo className="cursor-pointer m-1" />
            <InstagramLogo className="cursor-pointer m-1" />
            <TelegramLogo className="cursor-pointer m-1" />
          </div>
        </div>
      </div>
      <div className="flex bg-blue-50 w-full items-center justify-center h-20 mt-10 ">
        <div className="flex flex-row h-16 items-center">
          <p className="mx-20 text-xs font-extralight">Informação Legal</p>
          <p className="mx-20 text-xs font-extralight">
            2014 - 2022 ©Bitso - todos os direitos reservados Bitso®
          </p>
          <p className="mx-20 text-xs font-extralight">
            Todos os sistemas operacionais
          </p>
        </div>
      </div>
    </div>
  );
}
