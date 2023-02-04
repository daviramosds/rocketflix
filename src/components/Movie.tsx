interface MovieInterface {
  title: string;
  description: string;
  preview: string;
}

export function Movie({ title, description, preview }: MovieInterface) {
  return (
    <div className="flex items-center gap-8 my-12">
      <img src={preview} className="w-44 h-60 bg-slate-700 object-cover" />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-white text-lg">{title}</p>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
