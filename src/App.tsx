import { useState } from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { api } from "./lib/axios";

export const API_KEY = import.meta.env.VITE_API_KEY;

export function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");

  const [error, setError] = useState(false);
  const [aplicationStarted, setAplicationStarted] = useState(false);

  async function getMovie() {
    try {
      const { data: latest } = await api.get(
        `latest?api_key=${API_KEY}&language=pt-BR`
      );
      let id = await Math.trunc(Math.random() * latest.id);
      id = 2

      const { data: movie } = await api.get(
        `${id}?api_key=${API_KEY}&language=pt-BR`
      );

      if (!movie.backdrop_path || !movie.overview) {
        throw new Error("Not enough items");
      }

      setTitle(movie.title);
      setDescription(movie.overview);
      setPreview(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`);

      setError(false);

      setAplicationStarted(true);

      console.log(movie.backdrop_path);
    } catch (error) {
      console.log("erro");
      setTitle("");
      setDescription("");
      setPreview("");
      setError(true);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8 w-[800px] mx-auto">
      <Header />

      {aplicationStarted && !error && (
        <div className="flex items-center gap-8 my-12">
          <img src={preview} className="w-44 h-60 bg-slate-700 object-cover" />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white text-lg">{title}</p>
            <p className="text-white text-sm">{description}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-8 my-12">
          <img
            src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-44 h-60 bg-slate-700 object-cover"
          />
          <p className="font-bold text-white text-lg">
            Ops, hoje não é dia de assistir filme. Bora codar! 🚀
          </p>
        </div>
      )}

      <Button onClick={getMovie} />

      <p className="text-white font-sm text-center">
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </main>
  );
}
