'use client';
import Image from "next/image";
import { useState } from "react";

interface Props {
  tech: Technology;
}

const TechRow = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { tech } = props;
  return (
      <a href={tech.link} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <Image className='inline ' src={tech.imageSRC} width={40} height={40} alt="logo" />
        { hovered ? 
          <span className={'text-bismark underline pl-4 hidden md:inline'}>{tech.title}</span>
        :  
          <span className={'text-other-blue underline pl-4 hidden md:inline'}>{tech.title}</span>
        }
      </a>
  );
}

export default TechRow