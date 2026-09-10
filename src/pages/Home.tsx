import { Link } from "react-router-dom";
import heroImg from "~/assets/hero-sample.png";
import { trip } from "~/mocks/trip";

export default function Home() {
  return (
    <main
      className="mx-auto flex min-h-screen max-w-md flex-col bg-cover px-5 py-10 font-thin"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="flex flex-1 flex-col justify-center pb-48">
        <h1 className="text-paper/90 py-2.5 text-6xl">
          {trip.destination}旅行
        </h1>

        <p className="text-surface/80 px-1.5">{`${trip.startDate.replaceAll("-", ".")} - ${trip.endDate.replaceAll("-", ".")}`}</p>
      </div>

      <Link
        className="text-paper bg-ink rounded-full p-4 text-center"
        to="/day-view"
      >
        出発する
      </Link>
    </main>
  );
}
