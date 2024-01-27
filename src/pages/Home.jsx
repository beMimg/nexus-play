import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="home">
      <div className={style.bg}></div>
      <section className={style.introSection}>
        <p>
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
        <div className={style.gamingImg}></div>
      </section>
    </div>
  );
}
