"use client"

import { Alert, AlertTitle, Stack } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const mockInsights = [
  "Based on current projections, your revenue is expected to grow by 20% annually.",
  "Consider reducing expenses in the coming years to improve profit margins.",
  "Diversifying your income streams could help stabilize your financial growth.",
]

export function FinancialInsights() {
  return (
    <Stack spacing={2}>
      {mockInsights.map((insight, index) => (
        <Alert 
          key={index} 
          severity="info" 
          icon={<InfoIcon />}
        >
          <AlertTitle>Insight {index + 1}</AlertTitle>
          {insight}
        </Alert>
      ))}
    </Stack>
  )
}

