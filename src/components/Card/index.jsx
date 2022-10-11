import Dolar from "../../assets/imageDolar.png";

export function Body() {
  return (
    <div className="flex w-full h-80 justify-center items-center">
      <div className="mr-14">
        <p className="flex w-80 text-xl mt-14">
          Compre R$500 em USD Stablecoins, ative o Bitso+ para receber
          rendimentos toda semana e ganhe cripto back de 10 dólares digitais na
          sua conta da bitso.
        </p>
        <p className=" w-80 mt-10">
          É muito mais fácil do que tentar acertar os resultados na rodada, né?
          <strong> Então participe!</strong>
        </p>
      </div>
      <img src={Dolar} className="mt-14" />
    </div>
  );
}
