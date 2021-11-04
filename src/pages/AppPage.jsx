import { useState, useEffect } from 'react'
import { OrderList } from '../cmps/Order/OrderList'
import { OrderAdd } from '../cmps/OrderAdd'
import { orderService } from '../services/order.service'
export function AppPage() {
    const [orders, setOrders] = useState([])
    const [orderToEdit, setOrderToEdit] = useState(null)

    useEffect(() => {
        loadOrders()
    }, []);

    const loadOrders = async () => {
        const storageOrders = await orderService.query()
        setOrders(storageOrders)
    }

    const setEditOrder = async (orderId) => {
        const orderToEdit = orders.find(order => order._id === orderId)
        setOrderToEdit(orderToEdit)
    }

    const onAddOrder = async (order) => {
        // Working with optimistic method first ui update and then server update
        setOrders([...orders, order])
        await orderService.save(order)
    }

    const onRemoveOrder = async (orderId) => {
        // Working with optimistic method first ui update and then server update
        setOrders(orders.filter(order => order._id !== orderId))
        await orderService.remove(orderId)
    }

    const onEditOrder = async (order) => {
        // Working with optimistic method first ui update and then server update
        setOrderToEdit(null)
        const updatedOrders = orders.map(currOrder => (currOrder._id === order._id) ? order : currOrder)
        setOrders(updatedOrders)
        await orderService.save(order)
    }

    return (
        <main className="flex">
            <OrderList orders={orders} onRemoveOrder={onRemoveOrder} setEditOrder={setEditOrder} />
            <OrderAdd order={orderToEdit} onAddOrder={onAddOrder} onEditOrder={onEditOrder} />
        </main>
    )
}

