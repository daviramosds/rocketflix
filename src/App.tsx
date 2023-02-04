import { useState } from "react";
import { Button } from "./components/Button";
import { Code } from "./components/Code";
import { Header } from "./components/Header";
import { Movie } from "./components/Movie";
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

    } catch (error) {
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
        <Movie title={title} description={description} preview={preview} />
      )}

      {error && <Code />}

      <Button onClick={getMovie} />

      <p className="text-white font-sm text-center">
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </main>
  );
}
