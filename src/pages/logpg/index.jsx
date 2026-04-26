/* eslint-disable react-refresh/only-export-components */
import { Download } from "lucide-react";
import { Button } from "../../components/ui/button";
import { DataTable } from "../../components/ui/data-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const DUMMY_LOGS = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  tanggal: `2026-04-${(i + 1).toString().padStart(2, "0")}`,
  deviceName: `Device A`,
  startTime: `08:00`,
  endTime: `10:00`,
  duration: 120,
  totalKwh: (Math.random() * 10).toFixed(2),
  totalWater: (Math.random() * 100).toFixed(2),
}));

const handleDownload = (id) => {
  const log = DUMMY_LOGS.find((l) => l.id === id);
  if (!log) return;

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Log Report", 14, 22);

  doc.setFontSize(11);
  doc.text(`Log ID: ${log.id}`, 14, 30);
  doc.text(`Device Name: ${log.deviceName}`, 14, 36);
  doc.text(`Date: ${log.tanggal}`, 14, 42);

  autoTable(doc, {
    startY: 50,
    head: [["Attribute", "Value"]],
    body: [
      ["Start Time", log.startTime],
      ["End Time", log.endTime],
      ["Duration (Menit)", log.duration.toString()],
      ["Total kWh", log.totalKwh.toString()],
      ["Total Water (Liter)", log.totalWater.toString()],
    ],
  });

  doc.save(`log-report-${log.id}.pdf`);
};

export const columns = [
  {
    accessorKey: "tanggal",
    header: "Tanggal",
  },
  {
    accessorKey: "deviceName",
    header: "Device Name",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "duration",
    header: "Duration (Menit)",
  },
  {
    accessorKey: "totalKwh",
    header: "Total kWh",
  },
  {
    accessorKey: "totalWater",
    header: "Total Water (Liter)",
  },
  {
    id: "actions",
    header: "Aksi",
    meta: {
      className: "text-center w-[100px]",
    },
    cell: ({ row }) => {
      const log = row.original;

      return (
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDownload(log.id)}
            title="Download Report PDF"
          >
            <Download className="w-4 h-4 text-blue-500" />
          </Button>
        </div>
      );
    },
  },
];

export default function LogsPage() {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Logs</h2>
      </div>

      <DataTable
        columns={columns}
        data={DUMMY_LOGS}
        searchPlaceholder="Cari log..."
      />
    </div>
  );
}
