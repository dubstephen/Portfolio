'use client';
import { useState } from "react";

interface Props {
  client: ClientCard;
}

const ClientCardComponent = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { client } = props;
  return (
    <li key={'client-card-'+client.id}
        className="flex flex-col md:justify-between card shadow-xl col-span-1 md:h-80 w-full max-w-md bg-blue-Zodiac hover:bg-base-200"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      <div className="relative px-6 py-4">
        { hovered ?
          <h2 className="font-bold text-xl card-title text-bismark">{client.title}</h2>
        :
          <h2 className="font-bold text-xl card-title text-gray-200">{client.title}</h2>
        }
      </div>
      <div className="px-6 pt-4 pb-6 text-start">
          <p className='text-cadet-blue text-base'>{client.description}</p>
      </div>
      { client.link &&
        <a href={client.link} target="_blank" rel="noopener noreferrer" className="text-bismark hover:underline ml-6 w-20">See More</a>
      }
      <div className="px-6 py-4 align-bottom pt-auto mb-0">
        { client.technologies.map((tech, index) => {
          return (
            <span key={'client-'+client.id+'-tech-'+index} className="inline-block bg-black-pearl rounded-full px-3 py-1 text-sm font-semibold text-cadet-blue mr-2 mb-2">#{tech}</span>
          )
        })}
      </div>
    </li>
  );
}

export default ClientCardComponent