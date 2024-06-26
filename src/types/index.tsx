export interface CardType {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export interface TradeType {
  id: string;
  userId: string;
  createdAt: string;
  user: {
    name: string;
  };
  tradeCards: TradeCardType[];
}

export interface TradeCardType {
  id: string;
  cardId: string;
  tradeId: string;
  type: 'OFFERING' | 'RECEIVING';
  card: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
  };
}

export interface OptionType {
  label: string;
  value: string;
}
