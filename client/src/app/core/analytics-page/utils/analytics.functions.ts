import { IChartConfig, IChartItemConfig } from '../models/configs-analytics.models';

export const createChartConfig = ({labels, data, label, color}: IChartItemConfig<number[]>): IChartConfig<any> => {
  return {
    type: 'line',
    options: {
      responsive: true
    },
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          borderColor: color,
          steppedLine: false,
          fill: false,
        }
      ]
    }
  }
};
