import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import clsx from "clsx";
import { format, parseISO } from "date-fns";
import { MapPin, Calendar } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import bannerImg from "~/assets/banner-sample.png";
import { schedules } from "~/mocks/schedules";
import { trip } from "~/mocks/trip";
import { formatScheduleTime } from "~/utils/formatScheduleTime";

export default function DayView() {
  const dates = [...new Set(schedules.map((schedule) => schedule.date))].sort();

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedIndex = Math.max(
    dates.indexOf(searchParams.get("date") ?? dates[0]),
    0,
  );

  const handleTabChange = (index: number) => {
    setSearchParams({ date: dates[index] });
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col">
      <div
        className="h-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="text-paper relative top-0 left-0 flex h-30 items-center justify-center bg-black/30 text-2xl font-thin">
          {trip.destination}旅行
        </div>
      </div>

      <div className="bg-paper flex flex-1 flex-col p-5">
        <div className="text-muted mb-5 flex gap-3 text-sm">
          <div className="flex items-center gap-0.5">
            <MapPin size={20} strokeWidth={1} />
            {trip.destination}
          </div>

          <div className="flex items-center gap-1">
            <Calendar size={20} strokeWidth={1} />
            {`${trip.startDate.replaceAll("-", ".")} - ${trip.endDate.replaceAll("-", ".")}`}
          </div>
        </div>

        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="grid grid-cols-3">
            {dates.map((date) => (
              <DayTab key={date}>{format(parseISO(date), "M/dd ccc.")}</DayTab>
            ))}
          </TabList>

          <TabPanels>
            {dates.map((date) => (
              <TabPanel key={date}>
                <div className="mt-5 flex flex-col gap-3">
                  {schedules
                    .filter((schedule) => schedule.date === date)
                    .map((schedule) => (
                      <Link
                        key={schedule.id}
                        className="border-muted/20 rounded-lg border p-3"
                        to={`/schedule/${schedule.id}`}
                      >
                        <p className="text-muted text-sm">
                          {formatScheduleTime(
                            schedule.startTime,
                            schedule.endTime,
                          )}
                        </p>

                        <p className="text-ink mb-0.5 text-lg">
                          {schedule.title}
                        </p>

                        {schedule.description ? (
                          <p className="text-muted text-sm">
                            {schedule.description}
                          </p>
                        ) : schedule.location ? (
                          <p className="text-muted text-sm">
                            {schedule.location}
                          </p>
                        ) : null}
                      </Link>
                    ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </main>
  );
}

export function DayTab({ children }: { children: React.ReactNode }) {
  return (
    <Tab className="relative px-4 py-3 outline-none">
      {({ selected }) => (
        <>
          <span
            className={clsx(
              "transition-colors",
              selected ? "text-ink" : "text-muted",
            )}
          >
            {children}
          </span>

          <span
            className={clsx(
              "absolute inset-x-0 bottom-0 h-px bg-ink transition-opacity",
              selected ? "opacity-100" : "opacity-0",
            )}
          />
        </>
      )}
    </Tab>
  );
}
