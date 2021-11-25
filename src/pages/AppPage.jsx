import { useState, useEffect } from 'react'
import { OrderList } from '../cmps/Order/OrderList'
import { OrderAddEdit } from '../cmps/OrderAddEdit'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder, removeOrder, updateOrder, loadOrders } from '../store/order.actions'

export function AppPage() {

    const [orderToEdit, setOrderToEdit] = useState(null)
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(loadOrders())
    }, []);

    const setEditOrder = (orderId) => {
        const orderToEdit = orders.find(order => order._id === orderId)
        setOrderToEdit(orderToEdit)
    }

    const onAddOrder = async (order) => {
        dispatch(addOrder(order))
    }

    const onRemoveOrder = async (orderId) => {
        dispatch(removeOrder(orderId))
    }

    const onEditOrder = async (order) => {
        dispatch(updateOrder(order))
        setOrderToEdit(null)
    }

    return (
        <main className="app-page">
            <OrderList orderToEdit={orderToEdit} orders={orders} onRemoveOrder={onRemoveOrder} setEditOrder={setEditOrder} />
            <OrderAddEdit order={orderToEdit} onAddOrder={onAddOrder} onEditOrder={onEditOrder} />
        </main>
    )
}

