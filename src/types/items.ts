
export type Item = {
  tag: string;
  tagColor?: "green" | "blue" | "red";
  title: string;
  subtitle?: string;
  date: string;
  startDate?: Date;
  endDate?: Date;
  linkText?: string;
  linkHref?: string;
  logo?: string;
  description?: string;
};
