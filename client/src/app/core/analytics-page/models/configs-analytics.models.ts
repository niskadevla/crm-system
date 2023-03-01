export interface IChartItemConfig<T> {
  label: string;
  color: string;
  labels: string[];
  data: T;
}

export interface IChartConfig<T> {
  type: string;
  options: object;
  data: T;
}