'use client';

interface Props {
  client: ClientCard;
}

const ClientCardComponent = (props: Props) => {
  const { client } = props;
  return (
    <li
        // key={props.trip.id}
        className="card shadow-xl col-span-1 h-full w-full max-w-md bg-blue-Zodiac hover:bg-base-200"
    >
        <div className="relative px-6 py-4">
            <h2 className="font-bold text-xl card-title text-gray-200">{client.title}</h2>
        </div>
        <div className="px-6 pt-4 pb-12 text-start">
            <p className='text-cadet-blue text-base'>{client.description}</p>
        </div>
        <div className="px-6 py-4 text-start">
          { client.technologies.map((tech) => {
            return (
              <span className="inline-block bg-black-pearl rounded-full px-3 py-1 text-sm font-semibold text-cadet-blue mr-2 mb-2">#{tech}</span>
            )
          })}
          </div>
    </li>
  );
}

export default ClientCardComponent