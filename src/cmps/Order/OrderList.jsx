import React from 'react'
import { OrderPreview } from './OrderPreview'


export function OrderList({ orders, removeOrder, editOrder }) {

    return (
        <div className="order-list flex column align-center">
            <div>
                <h1>רשימת הזמנות</h1>
                <p className="order-count flex space-between">מספר הזמנות: <span>{orders?.length}</span></p>
            </div>
            {orders?.map((order) => <OrderPreview key={order._id} order={order} removeOrder={removeOrder} editOrder={editOrder} />)}
        </div>
    )
}
