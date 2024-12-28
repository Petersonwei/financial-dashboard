"use client"

import { LineChart } from '@mui/x-charts';
import { Box, useTheme } from '@mui/material';

const mockData = [
  { year: 2023, revenue: 100000, expenses: 80000, profit: 20000 },
  { year: 2024, revenue: 120000, expenses: 90000, profit: 30000 },
  { year: 2025, revenue: 150000, expenses: 100000, profit: 50000 },
  { year: 2026, revenue: 200000, expenses: 120000, profit: 80000 },
  { year: 2027, revenue: 250000, expenses: 150000, profit: 100000 },
];

export function FinancialProjections() {
  const theme = useTheme();

  const years = mockData.map(item => item.year);
  const revenue = mockData.map(item => item.revenue);
  const expenses = mockData.map(item => item.expenses);
  const profit = mockData.map(item => item.profit);

  return (
    <Box sx={{ width: '100%', height: 600, p: 2 }}>
      <LineChart
        xAxis={[{
          data: years,
          label: 'Year',
          tickLabelStyle: {
            fill: theme.palette.text.primary,
            fontSize: 12,
          },
          labelStyle: {
            fill: theme.palette.text.primary,
            fontSize: 14,
          },
          scaleType: 'point',
        }]}
        yAxis={[{
          label: 'Amount ($)',
          tickLabelStyle: {
            fill: theme.palette.text.primary,
            fontSize: 12,
          },
          labelStyle: {
            fill: theme.palette.text.primary,
            fontSize: 14,
          },
          valueFormatter: (value: number) => `$${(value / 1000).toFixed(0)}k`,
          scaleType: 'linear',
          min: 0,
        }]}
        series={[
          {
            data: revenue,
            label: 'Revenue',
            color: theme.palette.primary.main,
            curve: "natural",
            area: true,
          },
          {
            data: expenses,
            label: 'Expenses',
            color: theme.palette.error.main,
            curve: "natural",
            area: true,
          },
          {
            data: profit,
            label: 'Profit',
            color: theme.palette.success.main,
            curve: "natural",
            area: true,
          },
        ]}
        height={550}
        margin={{ left: 80, right: 50, top: 50, bottom: 80 }}
        sx={{
          '.MuiChartsLegend-root': {
            fontSize: 14,
          },
        }}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 30,
            itemGap: 50,
          },
        }}
      />
    </Box>
  );
}
