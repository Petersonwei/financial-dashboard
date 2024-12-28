"use client"

import { LineChart } from '@mui/x-charts';
import { Box } from '@mui/material';

const mockData = [
  { year: 2023, revenue: 100000, expenses: 80000, profit: 20000 },
  { year: 2024, revenue: 120000, expenses: 90000, profit: 30000 },
  { year: 2025, revenue: 150000, expenses: 100000, profit: 50000 },
  { year: 2026, revenue: 200000, expenses: 120000, profit: 80000 },
  { year: 2027, revenue: 250000, expenses: 150000, profit: 100000 },
];

export function FinancialProjections() {
  const years = mockData.map(item => item.year);
  const revenue = mockData.map(item => item.revenue);
  const expenses = mockData.map(item => item.expenses);
  const profit = mockData.map(item => item.profit);

  return (
    <Box sx={{ width: '100%', height: 600, p: 2 }}>
      <LineChart
        width={1000}
        height={500}
        series={[
          {
            data: revenue,
            label: 'Revenue',
            color: '#2196f3',
          },
          {
            data: expenses,
            label: 'Expenses', 
            color: '#f44336',
          },
          {
            data: profit,
            label: 'Profit',
            color: '#4caf50',
          }
        ]}
        xAxis={[{
          scaleType: 'point',
          data: years,
          label: 'Year'
        }]}
        yAxis={[{
          label: 'Amount ($)',
          labelStyle: {
            transform: 'rotate(0deg)',
            textAnchor: 'end'
          }
        }]}
        sx={{
          '.MuiChartsLegend-root': {
            fontSize: 14
          }
        }}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'top', horizontal: 'middle' },
            padding: 30,
            itemGap: 50
          }
        }}
        margin={{ left: 100, right: 70, top: 70, bottom: 70 }} 
        // Increased left margin to prevent y-axis label from being cut off
      />
    </Box>
  );
}
