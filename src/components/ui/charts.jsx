import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useChartTheme } from '../../hooks/useChartTheme'
import { Card, CardHeader, CardTitle, CardContent } from './card'

// Temperature Trend Chart
export function TemperatureTrendChart() {
  const { cartesianGridStroke, textColor, lineColor } = useChartTheme()

  const data = [
    { time: '08:00', temp: 22, humidity: 65 },
    { time: '10:00', temp: 25, humidity: 60 },
    { time: '12:00', temp: 28, humidity: 55 },
    { time: '14:00', temp: 30, humidity: 50 },
    { time: '16:00', temp: 29, humidity: 52 },
    { time: '18:00', temp: 26, humidity: 58 },
    { time: '20:00', temp: 24, humidity: 62 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tren Temperatur & Kelembaban</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={cartesianGridStroke} />
            <XAxis 
              dataKey="time" 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#f5f5f5'
              }}
            />
            <Legend 
              wrapperStyle={{ color: textColor }}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#ef4444"
              fillOpacity={0.6}
              fill="#ef4444"
              name="Temperatur (°C)"
            />
            <Area
              type="monotone"
              dataKey="humidity"
              stroke="#3b82f6"
              fillOpacity={0.3}
              fill="#3b82f6"
              name="Kelembaban (%)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

// Soil Moisture Trend Chart
export function SoilMoistureTrendChart() {
  const { cartesianGridStroke, textColor, lineColor } = useChartTheme()

  const data = [
    { time: '08:00', moisture: 40 },
    { time: '10:00', moisture: 38 },
    { time: '12:00', moisture: 35 },
    { time: '14:00', moisture: 32 },
    { time: '16:00', moisture: 50 },
    { time: '18:00', moisture: 52 },
    { time: '20:00', moisture: 55 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kelembaban Tanah</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={cartesianGridStroke} />
            <XAxis 
              dataKey="time" 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#f5f5f5'
              }}
              formatter={(value) => `${value}%`}
            />
            <Legend wrapperStyle={{ color: textColor }} />
            <Line
              type="monotone"
              dataKey="moisture"
              stroke={lineColor}
              strokeWidth={3}
              dot={{ fill: lineColor, r: 5 }}
              activeDot={{ r: 7 }}
              name="Kelembaban (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

// Water Usage Chart
export function WaterUsageChart() {
  const { cartesianGridStroke, textColor } = useChartTheme()

  const data = [
    { day: 'Senin', usage: 450 },
    { day: 'Selasa', usage: 380 },
    { day: 'Rabu', usage: 520 },
    { day: 'Kamis', usage: 490 },
    { day: 'Jumat', usage: 610 },
    { day: 'Sabtu', usage: 680 },
    { day: 'Minggu', usage: 450 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Penggunaan Air (Liter)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={cartesianGridStroke} />
            <XAxis 
              dataKey="day" 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#f5f5f5'
              }}
              formatter={(value) => `${value} L`}
            />
            <Legend wrapperStyle={{ color: textColor }} />
            <Bar
              dataKey="usage"
              fill="#10b981"
              radius={[8, 8, 0, 0]}
              name="Penggunaan Air"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

// Light Intensity Chart
export function LightIntensityChart() {
  const { cartesianGridStroke, textColor } = useChartTheme()

  const data = [
    { time: '06:00', intensity: 100 },
    { time: '08:00', intensity: 350 },
    { time: '10:00', intensity: 650 },
    { time: '12:00', intensity: 900 },
    { time: '14:00', intensity: 850 },
    { time: '16:00', intensity: 600 },
    { time: '18:00', intensity: 200 },
    { time: '20:00', intensity: 50 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Intensitas Cahaya (lux)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={cartesianGridStroke} />
            <XAxis 
              dataKey="time" 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke={textColor}
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#f5f5f5'
              }}
              formatter={(value) => `${value} lux`}
            />
            <Area
              type="monotone"
              dataKey="intensity"
              stroke="#f59e0b"
              fillOpacity={0.6}
              fill="url(#colorLight)"
              name="Intensitas Cahaya"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
