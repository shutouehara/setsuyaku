export type ShoppingListType = {
  id: number
  product: string
  memo?: string
  done: boolean
  date: string
}

export type SaiyasuList = {
  id: string
  itemName: string
  price: number
  shop: string
  createdAt: Date
  effectiveUntil: Date
  category: string
}

export type SaiyasItemType = {
  id: string
  itemName: string
  price: number
  shop: string | null
  place: string
  readonly effectiveUntil?: Date
  category: string | null
  registeredBy: string | 'Nobody'
  createdAt: Date
  like: number
  more: number
  bad: number
  others: string | null
  about: string[]
}