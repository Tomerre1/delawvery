import { useState, useEffect } from 'react'
import { OrderList } from '../cmps/Order/OrderList'
import { OrderAdd } from '../cmps/OrderAdd'
export function AppPage() {
    return (
        <main className="flex">
            <OrderList />
            <OrderAdd />
        </main>
    )
}

