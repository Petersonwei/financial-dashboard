"use client"

import { LineChart } from '@mui/x-charts';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const mockData = [
  { year: 2023, revenue: 100000, expenses: 80000, profit: 20000 },
  { year: 2024, revenue: 120000, expenses: 90000, profit: 30000 },
  { year: 2025, revenue: 150000, expenses: 100000, profit: 50000 },
  { year: 2026, revenue: 200000, expenses: 120000, profit: 80000 },
  { year: 2027, revenue: 250000, expenses: 150000, profit: 100000 },
];

export function FinancialProjections() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const years = mockData.map(item => item.year);
  const revenue = mockData.map(item => item.revenue);
  const expenses = mockData.map(item => item.expenses);
  const profit = mockData.map(item => item.profit);

  const chartWidth = isMobile ? 300 : isTablet ? 600 : 1000;
  const chartHeight = isMobile ? 300 : isTablet ? 400 : 500;
  const margin = isMobile 
    ? { left: 50, right: 30, top: 80, bottom: 50 }  // Increased top margin for mobile
    : { left: 100, right: 70, top: 70, bottom: 70 };

  const chartColors = {
    revenue: theme.palette.primary.main,
    expenses: theme.palette.error.main,
    profit: theme.palette.success.main
  };

  return (
    <Box sx={{ 
      width: '100%', 
      height: 'auto', 
      p: isMobile ? 1 : 2,
      display: 'flex',
      justifyContent: 'center' 
    }}>
      <LineChart
        width={chartWidth}
        height={chartHeight}
        series={[
          {
            data: revenue,
            label: 'Revenue',
            color: chartColors.revenue,
          },
          {
            data: expenses,
            label: 'Expenses', 
            color: chartColors.expenses,
          },
          {
            data: profit,
            label: 'Profit',
            color: chartColors.profit,
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
            fontSize: isMobile ? 12 : 14,
            marginTop: isMobile ? theme.spacing(2) : 0  // Add spacing for mobile legend
          }
        }}
        slotProps={{
          legend: {
            direction: isMobile ? 'column' : 'row',
            position: { 
              vertical: isMobile ? 'top' : 'top',  // Keep legend at top but adjust margins
              horizontal: 'middle' 
            },
            padding: isMobile ? 5 : 30,  // Reduced padding for mobile
            itemGap: isMobile ? 10 : 50  // Reduced gap for mobile
          }
        }}
        margin={margin}
      />
    </Box>
  );
}
