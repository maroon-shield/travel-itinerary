export function formatScheduleTime(startTime: string, endTime?: string) {
  return endTime ? `${startTime} - ${endTime}` : startTime;
}
