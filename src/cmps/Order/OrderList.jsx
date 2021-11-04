import React from 'react'
import { OrderPreview } from './OrderPreview'


export const OrderList = ({ orders, onRemoveOrder, setEditOrder }) => {

    return (
        <div className="order-list flex column align-center">
            <div>
                <h1>רשימת הזמנות</h1>
                <p className="order-count flex space-between">מספר הזמנות: <span>{orders?.length}</span></p>
            </div>
            {orders?.map((order) => <OrderPreview key={order._id} order={order} onRemoveOrder={onRemoveOrder} setEditOrder={setEditOrder} />)}
        </div>
    )
}
