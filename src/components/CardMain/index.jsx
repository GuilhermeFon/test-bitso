import Logo from "../../assets/imageMarcelo.png";

export function CardMain() {
  return (
    <div>
      <div className="flex bg-[#172029] w-full h-96">
        <img src={Logo} className="mx-auto"/>
      </div>
      <div className="flex bg-[#5DCB84] w-full h-20 items-center justify-center text-2xl font-light">
        <p>Comece a investir na Bitso que você já sai ganhando.</p>
      </div>
    </div>
  );
}
