import Logo from "../../assets/imageMarcelo.png";
import Cripto from "../../assets/imageCriptoback.png";

export function CardMain() {
  return (
    <div>
      <div className="flex bg-[#172029] w-full h-96 justify-center">
        <img src={Logo} className="" />
        <img src={Cripto} className="" />
      </div>
      <div className="flex bg-[#5DCB84] w-full h-20 items-center justify-center text-2xl font-light">
        <p>Comece a investir na Bitso que você já sai ganhando.</p>
      </div>
    </div>
  );
}
