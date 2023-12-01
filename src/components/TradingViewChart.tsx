import { useEffect } from 'react'
import { ResolutionString } from '../../public/tradingview/charting_library/charting_library'

import datafeed from '@/utils/datafeed'

const chartingLibraryPath = '/tradingview/charting_library/'

function TradingViewChart() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.TradingView) {
      const widget = new window.TradingView.widget({
        container: 'tv_chart_container',
        locale: 'en',
        library_path: chartingLibraryPath,
        datafeed: datafeed,
        symbol: 'BTCUSD',
        interval: '1W' as ResolutionString,
        fullscreen: true,
        debug: true,
        enabled_features: ['show_exchange_logos'],
        theme: 'dark',
        overrides: {
          'paneProperties.background': '#110F23',
        },
      })
      widget.onChartReady(() => {
        const chart = widget.chart()
        chart.getSeries().setChartStyleProperties(1, {
          upColor: '#E6DAFE',
          downColor: '#7142CF',
          borderUpColor: '#E6DAFE',
          borderDownColor: '#7142CF',
          wickUpColor: '#E4DADB',
          wickDownColor: '#E4DADB',
        })
      })
    }
  }, [])

  return <div id="tv_chart_container" />
}

export default TradingViewChart
