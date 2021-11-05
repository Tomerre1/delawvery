import { useState, useEffect } from 'react'
import { OrderList } from '../cmps/Order/OrderList'
import { OrderAddEdit } from '../cmps/OrderAddEdit'
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
        const newOrder = await orderService.save(order)
        setOrders([...orders, newOrder])
    }

    const onRemoveOrder = async (orderId) => {
        await orderService.remove(orderId)
        setOrders(orders.filter(order => order._id !== orderId))
    }

    const onEditOrder = async (order) => {
        setOrderToEdit(null)
        const updatedOrders = orders.map(currOrder => (currOrder._id === order._id) ? order : currOrder)
        setOrders(updatedOrders)
        await orderService.save(order)
    }

    return (
        <main className="app-page">
            <OrderList orderToEdit={orderToEdit} orders={orders} onRemoveOrder={onRemoveOrder} setEditOrder={setEditOrder} />
            <OrderAddEdit order={orderToEdit} onAddOrder={onAddOrder} onEditOrder={onEditOrder} />
        </main>
    )
}

