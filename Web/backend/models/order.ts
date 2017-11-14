export interface OrderItem {
    quantity: number,
    item: string
}

export interface Order {
    id: string,
    timestamp: string,
    assignee?: string,
    address: string,
    content: OrderItem[],
    image?: string
}
