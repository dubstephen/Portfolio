'use client';
import Image from "next/image";

interface Props {
  tech: Technology;
}

const TechRow = (props: Props) => {
  const { tech } = props;
  return (
    <div className='pb-16'>
      <a href={tech.link} target="_blank" rel="noopener noreferrer">
        <Image className='inline ' src={tech.imageSRC} width={40} height={40} alt="logo" />
      </a>
      <span className='text-cadet-blue pl-4 hidden md:inline'>{tech.title}</span>
    </div>
  );
}

export default TechRow