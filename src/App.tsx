import { Button } from "./components/Button";
import { Header } from "./components/Header";

export function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8 w-[500px] mx-auto">
      <Header />

      <div className="flex items-center gap-8 my-12">
        <img src="" className="w-44 h-60 bg-slate-700" />
        <p className="font-bold text-white text-lg">
          Ops, hoje não é dia de assistir filme. Bora codar! 🚀
        </p>
      </div>

      <Button />

      <p className="text-white font-sm text-center">
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </main>
  );
}
