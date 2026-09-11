import { Link } from "react-router-dom";

export function DayViewButton({ text }: { text: string }) {
  return (
    <Link
      className="text-paper bg-ink w-full rounded-full p-4 text-center"
      to="/day-view"
    >
      {text}
    </Link>
  );
}
