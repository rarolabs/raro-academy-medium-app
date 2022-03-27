import React from "react";
import { ArticleThumbnailProps } from "./ArticleThumbnail.types";

const formataData = (date: Date) => {
  return Intl.DateTimeFormat(
    'pt-BR',
    { month: 'short', day: '2-digit', year: 'numeric' }
  ).format(date);
}

export const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  imagem,
  titulo,
  resumo,
  dataPublicacao,
  tempoLeitura = '7 min',
  autor,
}) => {
  return (
    <div className="w-1/2 flex flex-col mt-5">    
      <header className="flex flex-row gap-3 items-center">
        <img
          src={ autor.avatar }
          className="rounded-full"
          style={{ width: '30px', height: '30px' }}
        />
        <div>{ autor.nome }</div>
        <div className="text-sm text-gray-500">{ formataData(dataPublicacao) }</div>
      </header>
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 flex flex-col">
          <div className="font-bold text-lg pt-3">
            { titulo }
          </div>
          <div className="font-light pt-2 text-base text-gray-600">
            { resumo }
          </div>
        </div>
        <div className="flex items-center" style={{ maxHeight: '100px' }}>
          <img src={ imagem } />
        </div>
      </div>
      <footer className="flex flex-row pt-7 gap-3 items-center">
        <button className="hover:bg-gray-300 delay-100 duration-100 bg-gray-200 rounded-full py-1 px-2 text-xs">
          Política
        </button>
        <div className="text-gray-500 text-xs">
          { tempoLeitura } de leitura
        </div>
      </footer>
      <hr className="mt-5" />
    </div>
  );
}