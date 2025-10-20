// src/data/chartData.js
export const revenueData = [
  { month: "Jan", revenue: 2200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 2300 },
  { month: "Apr", revenue: 2000 },
  { month: "May", revenue: 2800 },
  { month: "Jun", revenue: 3700 },
];

export const invoiceClientData = [
  { month: "Jan", invoices: 5, clients: 12 },
  { month: "Feb", invoices: 8, clients: 14 },
  { month: "Mar", invoices: 6, clients: 15 },
  { month: "Apr", invoices: 9, clients: 17 },
  { month: "May", invoices: 12, clients: 20 },
  { month: "Jun", invoices: 14, clients: 22 },
];

export const kpis = {
  monthlyRevenue: { value: "$8,420", delta: "+12.4%" },
  activeClients: { value: 42, delta: "+5" },
  openInvoices: { value: 7, delta: "-2" },
  tasksToday: { value: 12, delta: "+3" },
};
