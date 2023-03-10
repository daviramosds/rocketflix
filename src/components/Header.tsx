import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-2">
      <img src={Logo} className="w-20" />
      <h1 className="text-3xl text-white font-bold">
        Não sabe o que assistir?
      </h1>
    </header>
  );
}
