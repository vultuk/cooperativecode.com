/* eslint-disable-next-line */
export interface SectionHeadingProps {
  title: string;
  map: string;
  children: React.ReactNode;
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className="bg-gray-800 px-6 py-24 sm:py-24 lg:px-8" id={props.map}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {props.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">{props.children}</p>
      </div>
    </div>
  );
}

export default SectionHeading;
