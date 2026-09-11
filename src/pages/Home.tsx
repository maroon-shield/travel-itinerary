import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import heroImg from "~/assets/hero-sample.png";
import { trip } from "~/mocks/trip";

export default function Home() {
  const { logout } = useAuth0();

  return (
    <div
      className="mx-auto flex min-h-screen max-w-md flex-col bg-cover px-5 py-10 font-thin"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="flex justify-end px-5">
        <button
          className="text-paper/70 border-border/80 flex-0 cursor-pointer rounded-lg border px-2 py-1"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      </div>

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
    </div>
  );
}
