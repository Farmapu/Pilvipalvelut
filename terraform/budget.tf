resource "aws_budgets_budget" "test" {
  name              = "budget"
  budget_type       = "COST"
  limit_amount      = "100.0"
  limit_unit        = "USD"
  time_unit         = "MONTHLY"
  time_period_start = "2026-05-06_00:01"
}