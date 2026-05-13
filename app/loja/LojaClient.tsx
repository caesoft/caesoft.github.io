"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingCart, Tag } from "lucide-react"
import { Currency } from "@/components/ui/currency"

type MerchItem = {
  id: string
  title: string
  description?: string
  image: string
  priceBRL: number
  model?: string
  sizeOptions?: string[]
}

type MerchCategory = {
  id: string
  name: string
  items: MerchItem[]
}

const FORMS_URL = "https://forms.gle/fjTL4suyZZDPYeYD6"

const PROMOS: MerchItem[] = []

const CATEGORIES: MerchCategory[] = [
  {
    id: "vestuario",
    name: "Vestuário",
    items: [
      {
        id: "polo-minimalista-preta",
        title: "Polo Minimalista (Preta)",
        description: "Camisa polo refinada que combina elegância e conforto.",
        image: "/loja/polo-minimalista-preta.png",
        priceBRL: 60,
        model: "Polo Minimalista",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
      {
        id: "polo-minimalista-branca",
        title: "Polo Minimalista (Branca)",
        description: "Camisa polo refinada que combina elegância e conforto.",
        image: "/loja/polo-minimalista-branca.png",
        priceBRL: 60,
        model: "Polo Minimalista",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
      {
        id: "casual-minimalista-preta",
        title: "Casual Minimalista (Preta)",
        description: "Camisa casual de estilo minimalista sofisticado.",
        image: "/loja/casual-minimalista-preta.png",
        priceBRL: 40,
        model: "Casual Minimalista",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
      {
        id: "casual-minimalista-branca",
        title: "Casual Minimalista (Branca)",
        description: "Camisa casual de estilo minimalista sofisticado.",
        image: "/loja/casual-minimalista-branca.png",
        priceBRL: 40,
        model: "Casual Minimalista",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
      {
        id: "casual-detalhista-preta",
        title: "Casual Detalhista (Preta)",
        description: "Camisa casual versátil, perfeita para qualquer ocasião.",
        image: "/loja/casual-detalhista-preta.png",
        priceBRL: 40,
        model: "Casual Detalhista",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
      {
        id: "casual-detalhista-branca",
        title: "Casual Detalhista (Branca)",
        description: "Camisa casual versátil, perfeita para qualquer ocasião.",
        image: "/loja/casual-detalhista-branca.png",
        priceBRL: 40,
        model: "Casual Detalhista",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
      {
        id: "especial-stranger-things",
        title: "🎃 Stranger Things",
        description: "Camisa casual de edição limitada inspirada no universo de Stranger Things.",
        image: "/loja/stranger-things-especial.png",
        priceBRL: 40,
        model: "Edição Especial Stranger Things",
        sizeOptions: ["PP", "P", "M", "G", "GG", "XG"],
      },
    ],
  },
  {
    id: "acessorios",
    name: "Acessórios",
    items: [
      {
        id: "botton-girl-codes",
        title: "Botton Girls Who Code",
        description: "Botton de alta qualidade para personalizar mochilas e roupas. Ideal para garotas que amam programar.",
        image: "/loja/bottons/1.png",
        priceBRL: 4,
        model: "Botton Girls Who Code",
      },
      {
        id: "botton-caesoft",
        title: "Botton CAESoft",
        description: "Botton de alta qualidade para personalizar mochilas e roupas. Para os amantes de tecnologia.",
        image: "/loja/bottons/2.png",
        priceBRL: 4,
        model: "Botton CAESoft",
      },
      {
        id: "botton-010101",
        title: "Botton 010101",
        description: "Botton de alta qualidade para personalizar mochilas e roupas. Para os hackers de plantão.",
        image: "/loja/bottons/3.png",
        priceBRL: 4,
        model: "Botton 010101",
      },
      {
        id: "botton-cafe",
        title: "Botton Café",
        description: "Botton de alta qualidade para personalizar mochilas e roupas. Para os viciados em café.",
        image: "/loja/bottons/4.png",
        priceBRL: 4,
        model: "Botton Café",
      },
      {
        id: "botton-trust-no-one",
        title: "Botton Trust No One",
        description: "Botton de alta qualidade para personalizar mochilas e roupas. Para os que usam Linux Tails.",
        image: "/loja/bottons/5.png",
        priceBRL: 4,
        model: "Botton Trust No One",
      },
      {
        id: "botton-404",
        title: "Botton 404",
        description: "Botton de alta qualidade para personalizar mochilas e roupas. Para os hackers tão bons que não deixam rastros.",
        image: "/loja/bottons/6.png",
        priceBRL: 4,
        model: "Botton 404",
      }
    ],
  },
  // {
  //   id: "promocoes",
  //   name: "Promoções",
  //   items: [
  //     {
  //       id: "kit-10-adesivos",
  //       title: "Kit de 10 Adesivos",
  //       description: "Kit com 10 adesivos duráveis para notebooks e cadernos.",
  //       image: "/loja/adesivos-pack-10.jpg",
  //       priceBRL: 5,
  //       model: "Adesivos",
  //     }
  //   ],
  // }
]

const CATEGORY_ORDER: Array<MerchCategory["id"]> = ["promocoes", "vestuario", "acessorios"]

export default function LojaClient() {
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({})
  const [selectedSizeByItem, setSelectedSizeByItem] = useState<Record<string, string>>({})
  const [clipboardError, setClipboardError] = useState<string | null>(null)

  const itemMap = useMemo(() => {
    const map = new Map<string, { item: MerchItem; categoryId: string; categoryName: string }>()
    for (const promo of PROMOS) {
      map.set(promo.id, { item: promo, categoryId: "promocoes", categoryName: "Promoções" })
    }
    for (const cat of CATEGORIES) {
      for (const item of cat.items) {
        map.set(item.id, { item, categoryId: cat.id, categoryName: cat.name })
      }
    }
    return map
  }, [])

  const getKey = (itemId: string, size?: string) => `${itemId}__${size ?? ""}`

  const selectedEntries = useMemo(() => {
    const entries: Array<{
      key: string
      itemId: string
      size?: string
      quantity: number
      item: MerchItem
      categoryId: string
      categoryName: string
    }> = []
    for (const [key, quantity] of Object.entries(selectedQuantities)) {
      if (quantity > 0) {
        const [itemId, size] = key.split("__")
        const found = itemMap.get(itemId)
        if (found) {
          entries.push({ key, itemId, size: size || undefined, quantity, ...found })
        }
      }
    }
    return entries
  }, [selectedQuantities, itemMap])

  const totalQuantity = useMemo(() => selectedEntries.reduce((s, e) => s + e.quantity, 0), [selectedEntries])
  const totalBRL = useMemo(
    () => selectedEntries.reduce((s, e) => s + e.quantity * e.item.priceBRL, 0),
    [selectedEntries]
  )

  const inc = (item: MerchItem, size?: string) => {
    const key = getKey(item.id, size)
    setSelectedQuantities((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }))
  }
  const dec = (item: MerchItem, size?: string) => {
    const key = getKey(item.id, size)
    setSelectedQuantities((prev) => {
      const next = { ...prev }
      const current = next[key] ?? 0
      const value = Math.max(0, current - 1)
      if (value === 0) {
        delete next[key]
      } else {
        next[key] = value
      }
      return next
    })
  }

  const handleGenerateOrder = async () => {
    if (!selectedEntries.length) return
    const payload = {
      createdAt: new Date().toISOString(),
      totalBRL: Number(totalBRL.toFixed(2)),
      itens: selectedEntries.map((e) => ({
        categoria: e.categoryName,
        escolha: e.item.title,
        tamanho: e.item.sizeOptions ? e.size : undefined,
        modelo: e.item.model ?? e.item.title,
        quantidade: e.quantity,
      })),
    }

    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2))
    } catch (e) {
      setClipboardError("Não foi possível copiar o pedido para a área de transferência. Copie manualmente abaixo.")
    }

    try {
      window.open(FORMS_URL, "_blank", "noopener,noreferrer")
    } catch {
    }
  }

  return (
    <>
      <section className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-caesoft-light title-quanta mb-2">Loja</h1>
          <p className="text-light-muted max-w-3xl text-justify">
            Selecione seus itens e gere o pedido através do botão ao lado. O processo é simples: 
            após gerar seu pedido, ele será automaticamente copiado para você colar em nosso formulário oficial. 
            Assim que recebermos, você será notificado por e-mail quando as produções forem iniciadas juntamente com o link de pagamento. 
            Após o pagamento, basta acompanhar o status de entrega através das atualizações que enviaremos.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-light-muted flex items-center gap-3">
            <span className="mr-0">Qtd: {totalQuantity}</span>
            <span>Total: <Currency value={totalBRL} /></span>
          </div>
          <Button
            onClick={handleGenerateOrder}
            disabled={!selectedEntries.length}
            className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-500/90 hover:to-amber-600/90 text-white"
          >
            <ShoppingCart className="mr-2" size={16} />
            Gerar pedido
          </Button>
        </div>
      </section>

      {/* Promoções */}
      {PROMOS.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Tag size={18} className="text-amber-500" />
            <h2 className="text-2xl font-semibold text-light">Promoções</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMOS.map((item) => {
              const size = item.sizeOptions ? (selectedSizeByItem[item.id] ?? item.sizeOptions[0]) : undefined
              const key = getKey(item.id, size)
              const qty = selectedQuantities[key] ?? 0
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-amber-500/50 bg-card-dark p-5 hover:shadow-lg hover:shadow-amber-500/15 transition-all h-full flex flex-col"
                >
                  <div className="w-full h-44 relative mb-4">
                    <Image src={item.image} alt={item.title} fill className="object-cover rounded-lg" />
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-light">{item.title}</h3>
                    <span className="text-sm text-amber-400"><Currency value={item.priceBRL} /></span>
                  </div>
                  {item.description ? (
                    <p className="text-light-subtle text-sm mb-3">{item.description}</p>
                  ) : (
                    <div className="mb-3" />
                  )}

                  <div className="mt-auto flex items-center justify-between gap-3">
                    {item.sizeOptions ? (
                      <select
                        className="bg-transparent border border-purple-soft rounded-md px-2 py-1 text-sm text-light"
                        value={size}
                        onChange={(e) =>
                          setSelectedSizeByItem((prev) => ({ ...prev, [item.id]: e.target.value }))
                        }
                      >
                        {item.sizeOptions.map((s) => (
                          <option key={s} value={s} className="bg-caesoft-ultra-dark">
                            {s}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-xs text-light-muted"></span>
                    )}

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        className="h-9 w-9 rounded-full border border-purple-soft text-light"
                        onClick={() => dec(item, size)}
                        disabled={qty === 0}
                        aria-label="Diminuir"
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-6 text-center text-light">{qty}</span>
                      <Button
                        variant="ghost"
                        className="h-9 w-9 rounded-full border border-purple-soft text-light"
                        onClick={() => inc(item, size)}
                        aria-label="Aumentar"
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {CATEGORY_ORDER.map((catId) => {
        const category = CATEGORIES.find((c) => c.id === catId)
        if (!category) return null
        const isPromoCategory = category.id === "promocoes" || category.name.toLowerCase().includes("promo")
        return (
          <section key={category.id} className="mb-10">
            {isPromoCategory ? (
              <div className="flex items-center gap-2 mb-4">
                <Tag size={18} className="text-amber-500" />
                <h2 className="text-2xl font-semibold text-light">{category.name}</h2>
              </div>
            ) : (
              <h2 className="text-2xl font-semibold text-light mb-4">{category.name}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => {
                const size = item.sizeOptions ? (selectedSizeByItem[item.id] ?? item.sizeOptions[0]) : undefined
                const key = getKey(item.id, size)
                const qty = selectedQuantities[key] ?? 0
                return (
                  <div
                    key={item.id}
                    className={
                      isPromoCategory
                        ? "rounded-xl border border-amber-500/50 bg-card-dark p-5 hover:shadow-lg hover:shadow-amber-500/15 transition-all h-full flex flex-col"
                        : "rounded-xl border border-purple-soft bg-card-dark p-5 hover-glow transition-all h-full flex flex-col"
                    }
                  >
                    <div className="w-full h-44 relative mb-4">
                      <Image src={item.image} alt={item.title} fill className="object-cover rounded-lg" />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-light">{item.title}</h3>
                      <span className={isPromoCategory ? "text-sm text-amber-400" : "text-sm text-light-muted"}>
                        <Currency value={item.priceBRL} />
                      </span>
                    </div>
                    {item.description ? (
                      <p className="text-light-subtle text-sm mb-3">{item.description}</p>
                    ) : (
                      <div className="mb-3" />
                    )}

                    <div className="mt-auto flex items-center justify-between gap-3">
                      {item.sizeOptions ? (
                        <select
                          className="bg-transparent border border-purple-soft rounded-md px-2 py-1 text-sm text-light"
                          value={size}
                          onChange={(e) =>
                            setSelectedSizeByItem((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                        >
                          {item.sizeOptions.map((s) => (
                            <option key={s} value={s} className="bg-caesoft-ultra-dark">
                              {s}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className="text-xs text-light-muted"></span>
                      )}

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          className="h-9 w-9 rounded-full border border-purple-soft text-light"
                          onClick={() => dec(item, size)}
                          disabled={qty === 0}
                          aria-label="Diminuir"
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="w-6 text-center text-light">{qty}</span>
                        <Button
                          variant="ghost"
                          className="h-9 w-9 rounded-full border border-purple-soft text-light"
                          onClick={() => inc(item, size)}
                          aria-label="Aumentar"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      <section className="mt-12 text-xs text-light-muted">
        <p>
          Ao clicar em "Gerar pedido", um JSON com sua seleção será copiado e você será
          redirecionado para o formulário para concluir a solicitação.
        </p>
        <p>
          Precisa de um item personalizado? Fale conosco pelo Instagram{" "}
          <Link href="https://www.instagram.com/caesoft.uepa" target="_blank" className="text-caesoft-green underline">
            @caesoft.uepa
          </Link>
          .
        </p>
      </section>

      {clipboardError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setClipboardError(null)} />
          <div className="relative z-10 w-full max-w-2xl rounded-xl border border-purple-soft bg-caesoft-ultra-dark p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-light mb-2">Cópia falhou</h3>
            <p className="text-light-subtle text-sm mb-4">{clipboardError}</p>
            <textarea
              className="w-full h-56 p-3 rounded-lg bg-card-dark border border-purple-soft text-light text-xs"
              readOnly
              value={JSON.stringify({
                createdAt: new Date().toISOString(),
                totalBRL: Number(totalBRL.toFixed(2)),
                itens: selectedEntries.map((e) => ({
                  categoria: e.categoryName,
                  escolha: e.item.title,
                  tamanho: e.item.sizeOptions ? e.size : undefined,
                  modelo: e.item.model ?? e.item.title,
                  quantidade: e.quantity,
                })),
              }, null, 2)}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="ghost"
                className="border border-purple-soft text-light"
                onClick={() => setClipboardError(null)}
              >
                Fechar
              </Button>
              <Button
                className="bg-gradient-to-r from-caesoft-purple to-caesoft-green text-white"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(
                      JSON.stringify({
                        createdAt: new Date().toISOString(),
                        totalBRL: Number(totalBRL.toFixed(2)),
                        itens: selectedEntries.map((e) => ({
                          categoria: e.categoryName,
                          escolha: e.item.title,
                          tamanho: e.item.sizeOptions ? e.size : undefined,
                          modelo: e.item.model ?? e.item.title,
                          quantidade: e.quantity,
                        })),
                      }, null, 2)
                    )
                    setClipboardError(null)
                  } catch {
                  }
                }}
              >
                Copiar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}