import image from "../assets/people-celebrating-online-.png";

export default function Thanks() {
  return (
    <div className="h-[730px] flex flex-col items-center gap-4  justify-center pt-20 pl-5 pr-5 md:flex-row ">
      <img
        src={image}
        className="flex w-full object-cover object-center md:h-[300px] md:w-[600px]"
      ></img>
      <p className="md:w-[600px]">
        NexusPlay is a simulated game store where you can explore real games
        with fictional prices. Thank you for testing. If you've encountered any
        bugs, please contact me at{" "}
        <a
          className="text-blue-700 font-bold"
          href="https://github.com/beMimg"
          target="a_blank"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
