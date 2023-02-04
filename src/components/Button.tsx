import Logo from "../assets/logo.png";

interface ButtonInterface {
  onClick: Function | any
}

export function Button({ onClick }: ButtonInterface) {
  return (
    <button className="bg-slate-100 flex items-center p-4 gap-4 rounded" onClick={onClick}>
      <img src={Logo} className="w-8" />
      <p className="text-sm font-bold">Encontrar filme</p>
    </button>
  );
}
