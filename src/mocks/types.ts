export type Trip = {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
};

export type Schedule = {
  id: string;
  date: string;
  startTime: string;
  endTime?: string;
  title: string;
  location?: string;
  description?: string;
};
