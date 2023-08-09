import { useEffect } from 'react'
import { ResolutionString } from '../../public/tradingview/charting_library/charting_library'

import datafeed from '@/utils/datafeed'

const chartingLibraryPath = '/tradingview/charting_library/'

function TradingViewChart() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.TradingView) {
      new window.TradingView.widget({
        container: 'tv_chart_container',
        locale: 'en',
        library_path: chartingLibraryPath,
        datafeed: datafeed,
        symbol: 'BTCUSD',
        interval: '1W' as ResolutionString,
        fullscreen: true,
        debug: true,
      })
    }
  }, [])

  return <div id="tv_chart_container" />
}

export default TradingViewChart
