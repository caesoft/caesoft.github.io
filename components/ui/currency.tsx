import React from "react"

type CurrencyProps = {
  value: number
  locale?: string
  currency?: string
}

export function Currency({ value, locale = "pt-BR", currency = "BRL" }: CurrencyProps) {
  let formatted = `R$ ${value.toFixed(2)}`
  try {
    formatted = new Intl.NumberFormat(locale, { style: "currency", currency }).format(value)
  } catch {
  }
  return <>{formatted}</>
}