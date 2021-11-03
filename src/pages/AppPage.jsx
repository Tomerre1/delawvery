import { useState, useEffect } from 'react'
import { OrderList } from '../cmps/Order/OrderList'
import { OrderAdd } from '../cmps/OrderAdd'
import { orderService } from '../services/order.service'
export function AppPage() {
    const [orders, setOrders] = useState([])
    const [isAddMode, setIsAddMode] = useState(true)
    const [orderToEdit, setOrderToEdit] = useState(null)

    useEffect(() => {
        loadOrders()
    }, []);

    const loadOrders = async () => {
        const storageOrders = await orderService.query()
        setOrders(storageOrders)
    }

    const addOrder = async (order) => {
        const newOrder = await orderService.save(order)
        setOrders([...orders, newOrder])
        setIsAddMode(true)
    }

    const removeOrder = async (orderId) => {
        await orderService.remove(orderId)
        setOrders(orders.filter(order => order._id !== orderId))
    }

    const editOrder = async (orderId) => {
        const orderToEdit = orders.find(order => order._id === orderId)
        setOrderToEdit(orderToEdit)
        setIsAddMode(true)
    }

    return (
        <main className="flex">
            <OrderList orders={orders} removeOrder={removeOrder} editOrder={editOrder} />
            <OrderAdd addOrder={addOrder} />
        </main>
    )
}

