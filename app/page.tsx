import { Layout } from '@/components/Layout'
import { FinancialProjections } from '@/components/FinancialProjections'
import { FinancialInsights } from '@/components/FinancialInsights'
import { FinancialCalculator } from '@/components/FinancialCalculator'
import { Card, CardContent, Typography } from "@mui/material"
import { Stack } from "@mui/material"

export default function DashboardPage() {
  return (
    <Layout>
      <Stack spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Financial Projections
            </Typography>
            <FinancialProjections />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              AI-Generated Insights
            </Typography>
            <FinancialInsights />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Compound Interest Calculator
            </Typography>
            <FinancialCalculator />
          </CardContent>
        </Card>
      </Stack>
    </Layout>
  )
}

