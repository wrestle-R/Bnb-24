export function formatInr(value) {
  const amount = Number(value) || 0
  return `INR ${amount.toLocaleString('en-IN')}`
}

export function cn(...values) {
  return values.filter(Boolean).join(' ')
}
