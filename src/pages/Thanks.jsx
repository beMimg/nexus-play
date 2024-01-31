import image from "../assets/people-celebrating-online-.png";

export default function Thanks() {
  return (
    <div className="flex h-[730px] flex-col items-center justify-center  gap-4 pl-5 pr-5 pt-20 md:flex-row ">
      <img
        src={image}
        className="flex w-full object-cover object-center md:h-[300px] md:w-[600px]"
      ></img>
      <p className="md:w-[600px]">
        NexusPlay is a simulated game store where you can explore real games
        with fictional prices. Thank you for testing. If you've encountered any
        bugs, please contact me at{" "}
        <a
          className="font-bold text-blue-700"
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
