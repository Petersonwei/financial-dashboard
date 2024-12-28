"use client"

import { useState } from 'react'
import { TextField, Button, Typography, Stack } from '@mui/material'

export function FinancialCalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(time)
    const amount = p * Math.pow((1 + r), t)
    setResult(parseFloat(amount.toFixed(2)))
  }

  return (
    <Stack spacing={3} maxWidth="sm">
      <TextField
        label="Principal Amount"
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
        fullWidth
      />
      <TextField
        label="Annual Interest Rate (%)"
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter annual interest rate"
        fullWidth
      />
      <TextField
        label="Time (years)"
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time in years"
        fullWidth
      />
      <Button variant="contained" onClick={calculateCompoundInterest}>
        Calculate
      </Button>
      {result !== null && (
        <Typography variant="h6">
          Final Amount: ${result}
        </Typography>
      )}
    </Stack>
  )
}

