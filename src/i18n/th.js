export default {
  app: { title: 'ชุดเครื่องมือการลงทุน' },
  nav: {
    portfolio: 'พอร์ต',
    quotes: 'ราคาหุ้น',
    technicals: 'เทคนิคอล',
    backtest: 'ทดสอบย้อนหลัง',
    dca: 'DCA',
    alerts: 'แจ้งเตือน',
    settings: 'ตั้งค่า',
  },
  header: {
    controls: {
      language: 'ภาษา',
      currency: 'สกุลเงิน',
      apiStatus: 'สถานะ API',
    },
  },
  placeholders: {
    symbol: 'เช่น AAPL',
    apiKey: 'กรอก API key',
  },
  portfolio: {
    heading: 'ตัวติดตามพอร์ต',
    form: {
      symbol: 'สัญลักษณ์',
      shares: 'จำนวนหุ้น',
      price: 'ราคาซื้อ',
      submit: 'เพิ่มสถานะ',
      importCsv: 'นำเข้า CSV',
      importJson: 'นำเข้า JSON',
      exportCsv: 'ส่งออก CSV',
      exportJson: 'ส่งออก JSON',
      invalid: 'กรุณากรอกสัญลักษณ์ จำนวนหุ้น และราคาให้ถูกต้อง',
    },
    table: {
      symbol: 'สัญลักษณ์',
      shares: 'จำนวนหุ้น',
      avgCost: 'ต้นทุนเฉลี่ย',
      lastPrice: 'ราคาล่าสุด',
      value: 'มูลค่า',
      pl: 'กำไร/ขาดทุน',
    },
    empty: 'ยังไม่มีการถือครอง เพิ่มรายการเพื่อเริ่มต้น',
    summary: {
      value: 'มูลค่าพอร์ต',
      cost: 'เงินลงทุนรวม',
      pl: 'กำไร/ขาดทุนที่ยังไม่รับรู้',
    },
  },
  quotes: {
    heading: 'ราคาและวอทช์ลิสต์',
    form: {
      symbol: 'สัญลักษณ์',
      submit: 'เพิ่มเข้าวอทช์ลิสต์',
    },
    search: {
      placeholder: 'ค้นหาสัญลักษณ์...',
    },
    hint: 'ใช้ข้อมูล Alpha Vantage เมื่อบันทึก API key หากไม่มีก็จะใช้ข้อมูลจำลอง',
    empty: 'ยังไม่มีวอทช์ลิสต์ เพิ่มสัญลักษณ์เพื่อเริ่มติดตาม',
    card: {
      last: 'ราคาล่าสุด',
      change: 'การเปลี่ยนแปลง',
    },
    chart: {
      close: 'ราคาปิด {symbol}',
      sma20: 'SMA 20',
      sma50: 'SMA 50',
    },
  },
  technicals: {
    heading: 'วิเคราะห์เชิงเทคนิค',
    form: {
      symbol: 'สัญลักษณ์',
      interval: 'ช่วงเวลา',
      daily: 'รายวัน',
      weekly: 'รายสัปดาห์',
      submit: 'คำนวณ',
    },
    toggles: {
      heading: 'ตัวชี้วัด',
      price: 'ราคา',
      sma20: 'SMA 20',
      sma50: 'SMA 50',
      ema12: 'EMA 12',
      ema26: 'EMA 26',
      rsi: 'RSI',
      macd: 'MACD',
    },
    zoom: {
      reset: 'รีเซ็ตการซูม',
    },
    summary: {
      price: 'ราคาล่าสุด',
      rsi: 'RSI (14)',
      macd: 'MACD',
      bias: 'มุมมอง',
    },
    bias: {
      neutral: 'เป็นกลาง',
      bullish: 'แนวโน้มขาขึ้น (สัญญาณ {bars} แท่งก่อน)',
      bearish: 'แนวโน้มขาลง (สัญญาณ {bars} แท่งก่อน)',
    },
    signals: {
      title: 'สัญญาณล่าสุด',
      empty: 'ยังไม่มีสัญญาณตัดกันของเส้นค่าเฉลี่ย',
    },
    chart: {
      close: 'ราคาปิด {symbol}',
      sma20: 'SMA 20',
      sma50: 'SMA 50',
    },
  },
  backtest: {
    heading: 'ทดสอบย้อนหลัง',
    form: {
      symbol: 'สัญลักษณ์',
      short: 'เส้นสั้น',
      long: 'เส้นยาว',
      submit: 'รันทดสอบ',
      invalid: 'กรุณากรอกสัญลักษณ์ และให้เส้นสั้น < เส้นยาว',
    },
    summary: {
      strategyReturn: 'ผลตอบแทนกลยุทธ์',
      strategyCagr: 'CAGR กลยุทธ์',
      buyHoldReturn: 'ผลตอบแทนซื้อถือ',
      buyHoldCagr: 'CAGR ซื้อถือ',
      completedTrades: 'จำนวนเทรด',
      tradeStats: '{count} ({winRate})',
      maxDrawdown: 'ดรอว์ดาวน์สูงสุด',
    },
    chart: {
      strategy: 'มูลค่ากลยุทธ์',
      buyHold: 'ซื้อถือ',
    },
    export: {
      csv: 'ส่งออกข้อมูล CSV',
    },
  },
  dca: {
    heading: 'ตัวจำลอง DCA',
    form: {
      symbol: 'สัญลักษณ์',
      amount: 'เงินต่อเดือน',
      months: 'จำนวนเดือน',
      submit: 'จำลอง',
      invalid: 'กรุณากรอกสัญลักษณ์ จำนวนเงินต่อเดือน และจำนวนเดือนให้ถูกต้อง',
    },
    empty: 'ข้อมูลไม่เพียงพอสำหรับการจำลอง DCA',
    summary: {
      invested: 'เงินลงทุนรวม',
      shares: 'จำนวนหน่วยสะสม',
      value: 'มูลค่าปัจจุบัน',
      gain: 'กำไร/ขาดทุนสุทธิ',
    },
    chart: {
      invested: 'เงินลงทุน',
      value: 'มูลค่า',
    },
    export: {
      csv: 'ส่งออก CSV',
    },
  },
  alerts: {
    heading: 'แจ้งเตือน',
    form: {
      symbol: 'สัญลักษณ์',
      rsiLow: 'RSI ต่ำ',
      rsiHigh: 'RSI สูง',
      submit: 'บันทึกแจ้งเตือน',
      invalid: 'กรุณากรอกสัญลักษณ์ และค่าช่วง RSI ให้ถูกต้อง',
    },
    empty: 'ยังไม่มีการตั้งแจ้งเตือน เพิ่มเพื่อเฝ้าดู RSI',
    status: {
      neutral: 'ปกติ',
      oversold: 'ขายมาก',
      overbought: 'ซื้อมาก',
    },
    card: {
      rsi: 'RSI: {value}',
      thresholds: 'ต่ำ: {low} / สูง: {high}',
      status: 'สถานะ: {status}',
    },
  },
  settings: {
    heading: 'ตั้งค่า',
    form: {
      apiKey: 'Alpha Vantage API Key',
      defaultSymbol: 'สัญลักษณ์เริ่มต้น',
      useNetlify: 'ใช้ Netlify proxy (เก็บ API key บนเซิร์ฟเวอร์)',
      submit: 'บันทึกการตั้งค่า',
      reset: 'รีเซ็ตแอป',
    },
    saveSuccess: 'บันทึกการตั้งค่าแล้ว',
    resetConfirm: 'ต้องการรีเซ็ตข้อมูลทั้งหมดหรือไม่?',
    resetDone: 'รีเซ็ตแอปแล้ว',
  },
  footer: {
    disclaimer: 'เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน',
  },
  status: {
    api: {
      live: 'API: ใช้งานได้',
      mock: 'API: ข้อมูลจำลอง',
      error: 'API: ขัดข้อง',
      unknown: 'API: ไม่ทราบ',
    },
  },
  common: {
    remove: 'ลบ',
    price: 'ราคา',
    download: 'ดาวน์โหลด',
    restore: 'กู้คืน',
    browse: 'เลือกไฟล์…',
    cancel: 'ยกเลิก',
    signal: {
      buy: 'ซื้อ',
      sell: 'ขาย',
    },
  },
};
