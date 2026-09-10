import { ArrowLeft, LoaderCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { schedules } from "~/mocks/schedules.ts";
import { formatScheduleTime } from "~/utils/formatScheduleTime.ts";

export default function ScheduleDetail() {
  const id = useParams().id;
  const navigate = useNavigate();

  const schedule = schedules.find((schedule) => schedule.id === id);

  return schedule ? (
    <div className="bg-paper text-ink mx-auto flex min-h-screen max-w-md flex-col">
      <button
        aria-label="戻る"
        className="p-5"
        onClick={() => navigate(-1)}
        type="button"
      >
        <ArrowLeft size={20} />
      </button>

      <main>
        <section className="px-6 pt-12 pb-10">
          <p className="text-muted text-xs tracking-[0.2em]">SCHEDULE</p>

          <h2 className="text-ink mt-3 text-3xl tracking-wide">
            {schedule.title}
          </h2>
        </section>

        <section className="border-border border-t px-6 py-8">
          <p className="text-muted text-xs tracking-[0.15em]">TIME</p>

          <p className="text-ink mt-2 text-xl tracking-wide">
            {formatScheduleTime(schedule.startTime, schedule.endTime)}
          </p>
        </section>

        {schedule.location && (
          <section className="border-border border-t px-6 py-8">
            <h2 className="text-muted text-xs tracking-[0.15em]">LOCATION</h2>

            <p className="text-ink mt-3 text-sm">{schedule.location}</p>

            <div className="mt-4">
              <ScheduleMap location={schedule.location} />
            </div>
          </section>
        )}

        {schedule.description && (
          <section className="border-border border-t px-6 py-8">
            <p className="text-muted text-xs tracking-[0.15em]">DESCRIPTION</p>

            <p className="text-ink mt-2 text-sm leading-7">
              {schedule.description}
            </p>
          </section>
        )}
      </main>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export function ScheduleMap({ location }: { location: string }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(location)}`;

  return (
    <div className="overflow-hidden rounded-lg">
      <iframe
        title={`${location}の地図`}
        src={mapUrl}
        className="aspect-video w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

function LoadingSpinner() {
  return (
    <main className="bg-paper mx-auto flex min-h-screen max-w-md items-center justify-center">
      <LoaderCircle
        aria-label="Loading"
        className="text-ink/50 animate-spin"
        size={40}
        strokeWidth={2}
      />
    </main>
  );
}
