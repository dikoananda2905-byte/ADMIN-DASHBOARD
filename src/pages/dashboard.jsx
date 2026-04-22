import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Cloud, Thermometer, Sun, Droplets, Power, Zap, Info } from "lucide-react"

export default function DashboardPage() {
  const dummyData = {
    weather: "Cerah Berawan",
    temperature: "28°C",
    lightIntensity: "850 lux",
    soilMoisture: "45%",
    pumpStatus: "ON",
    electricityUsage: "1.2 kWh",
    pumpDurationMinutes: 45,
    automationReason: "Pompa menyala karena ramalan cuaca kemarau dan sensor tanah mendeteksi kekeringan kritis.",
  }

  const waterUsage = dummyData.pumpDurationMinutes * 100 // 100 liter per minute

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* SECTION 1: Weather and Sensors */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cuaca (Weather API)</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyData.weather}</div>
            <p className="text-xs text-muted-foreground">
              Update terakhir: 10 menit lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperatur (Sensor)</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyData.temperature}</div>
            <p className="text-xs text-muted-foreground">
              Suhu normal
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Intensitas Cahaya</CardTitle>
            <Sun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyData.lightIntensity}</div>
            <p className="text-xs text-muted-foreground">
              Sinar matahari cukup
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kelembaban Tanah</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyData.soilMoisture}</div>
            <p className="text-xs text-muted-foreground">
              Kondisi tanah ideal
            </p>
          </CardContent>
        </Card>
      </div>

      {/* SECTION 2: Pump Automation & Analytics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status Pompa</CardTitle>
            <Power className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${dummyData.pumpStatus === 'ON' ? 'text-green-600' : 'text-red-600'}`}>{dummyData.pumpStatus}</div>
            <p className="text-xs text-muted-foreground">Aktif selama {dummyData.pumpDurationMinutes} menit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Penggunaan Listrik</CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyData.electricityUsage}</div>
            <p className="text-xs text-muted-foreground">Total pemakaian</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Penggunaan Air</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{waterUsage.toLocaleString()} L</div>
            <p className="text-xs text-muted-foreground">{dummyData.pumpDurationMinutes} mnt x 100L/mnt</p>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1 border-primary/50 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Otomatisasi Pompa</CardTitle>
            <Info className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium leading-snug">{dummyData.automationReason}</p>
          </CardContent>
        </Card>
      </div>

      {/* SECTION 3: Grafana Charts */}
      <div className="pt-4">
        <Card>
          <CardHeader>
            <CardTitle>Trend Lingkungan Lahan</CardTitle>
            <CardDescription>Grafik live data suhu, kelembaban, dan intensitas cahaya terintegrasi dari Grafana</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full rounded-xl border bg-muted flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '400px' }}>
              <iframe
                src="https://play.grafana.org/d-solo/000000012/grafana-play-home?orgId=1&panelId=2"
                title="Grafana Dashboard"
                className="w-full h-full border-0 pointer-events-none"
                style={{ minHeight: '400px' }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
