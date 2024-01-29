import style from "../styles/Home.module.css";
import backgroundImg from "../assets/gta6_bg.jpg";
import gamingSetup from "../assets/gaming_setup.jpg";

export default function Home() {
  return (
    <div className="home">
      <img
        src={backgroundImg}
        className="flex w-full object-cover object-center md:h-[500px]"
      ></img>
      <section className="p-4 flex flex-col items-center justify-center gap-10 md:flex-row md:h-[500px]">
        <p className="lg:w-1/3">
          Welcome to NexusPlay, your exclusive gateway to a boundless universe
          of gaming wonders. As pioneers in the gaming cosmos, NexusPlay is more
          than a platform—it's a celestial nexus where extraordinary games
          converge. Sail through our constellation of genres, each a stellar
          experience waiting to be explored. With a commitment to innovation and
          a passion for immersive gaming, NexusPlay invites you to transcend the
          ordinary. Unleash Your Gameverse with us, where every click opens a
          portal to unparalleled excitement. Navigate uncharted realms, discover
          hidden gems, and redefine your gaming odyssey. Join NexusPlay and
          ascend to a cosmos of gaming brilliance.
        </p>
        <img src={gamingSetup} className="h-60 md:h-60 lg:h-96"></img>
      </section>
    </div>
  );
}
