import ChartJS from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(zoomPlugin);

export const Chart = ChartJS;

export function createZoomOptions() {
  return {
    pan: {
      enabled: true,
      mode: 'xy',
    },
    zoom: {
      wheel: {
        enabled: true,
      },
      pinch: {
        enabled: true,
      },
      drag: {
        enabled: false,
      },
      mode: 'xy',
    },
  };
}
