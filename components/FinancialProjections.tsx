"use client"

import { LineChart } from '@mui/x-charts'
import { Box, useTheme } from '@mui/material'

const mockData = [
  { year: 2023, revenue: 100000, expenses: 80000, profit: 20000 },
  { year: 2024, revenue: 120000, expenses: 90000, profit: 30000 },
  { year: 2025, revenue: 150000, expenses: 100000, profit: 50000 },
  { year: 2026, revenue: 200000, expenses: 120000, profit: 80000 },
  { year: 2027, revenue: 250000, expenses: 150000, profit: 100000 },
]

export function FinancialProjections() {
  const theme = useTheme()

  const years = mockData.map(item => item.year)
  const revenue = mockData.map(item => item.revenue)
  const expenses = mockData.map(item => item.expenses)
  const profit = mockData.map(item => item.profit)

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
            fontSize: 14,
            fill: theme.palette.text.primary,
            fontWeight: 500,
          },
          tickSize: 0,
          position: 'bottom',
          scaleType: 'point',
        }]}
        yAxis={[{
          label: 'Amount ($)',
          tickLabelStyle: {
            fill: theme.palette.text.primary,
            fontSize: 12,
            dx: '-10px',
          },
          labelStyle: {
            fontSize: 14,
            fill: theme.palette.text.primary,
            fontWeight: 500,
            transform: 'translateX(-35px)',
          },
          tickSize: 0,
          position: 'left',
          valueFormatter: (value) => `$${(value/1000).toFixed(0)}k`,
          scaleType: 'linear',
          min: 0,
        }]}
        series={[
          {
            data: revenue,
            label: 'Revenue',
            color: theme.palette.primary.main,
            curve: "natural",
            showMark: true,
            area: true,
            areaOpacity: 0.1,
            lineStyle: { strokeWidth: 2.5 },
          },
          {
            data: expenses,
            label: 'Expenses',
            color: theme.palette.error.main,
            curve: "natural",
            showMark: true,
            area: true,
            areaOpacity: 0.1,
            lineStyle: { strokeWidth: 2.5 },
          },
          {
            data: profit,
            label: 'Profit',
            color: theme.palette.success.main,
            curve: "natural",
            showMark: true,
            area: true,
            areaOpacity: 0.1,
            lineStyle: { strokeWidth: 2.5 },
          },
        ]}
        height={550}
        margin={{ left: 130, right: 40, top: 50, bottom: 120 }}
        sx={{
          '.MuiChartsLegend-root': {
            fontSize: 14,
            transform: 'translateY(60px)',
          },
          '.MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
            transform: 'translateX(-15px)',
          },
          '.MuiChartsAxis-bottom .MuiChartsAxis-line': {
            strokeWidth: 1,
            stroke: theme.palette.divider,
          },
          '.MuiChartsAxis-left .MuiChartsAxis-line': {
            strokeWidth: 1,
            stroke: theme.palette.divider,
          },
        }}
        tooltip={{ 
          trigger: 'axis',
          valueFormatter: (value) => `$${value.toLocaleString()}`,
        }}
        grid={{
          vertical: { strokeDasharray: '3 3' },
          horizontal: { strokeDasharray: '3 3' },
          strokeOpacity: 0.2,
        }}
        disableAxisListener={false}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 40,
            itemGap: 72,
            hidden: false,
            markSize: 8,
          },
        }}
      />
    </Box>
  )
}