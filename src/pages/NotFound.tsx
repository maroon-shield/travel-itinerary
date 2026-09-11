import { DayViewButton } from "~/components/DayViewButton";

export default function NotFound() {
  return (
    <div className="bg-paper text-ink mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-5 py-10 font-thin">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="mt-4 text-2xl">404</h1>
        <p className="text-muted mt-3 text-sm">Lost your way?</p>
      </div>

      <DayViewButton text="Back to trip" />
    </div>
  );
}
