import React from 'react'
import { OrderPreview } from './OrderPreview'


export function OrderList(props) {
    const orders = [
        {
            _id: 1,
            name: 'הזמנה 1',
            date: '2020-01-01',
            firstName: 'תומר',
            lastName: 'רווח',
            description: 'פרטים'
        },
        {
            _id: 2,
            name: 'הזמנה 2',
            date: '2020-01-01',
            firstName: 'מור',
            lastName: 'דיין',
            description: 'פרטים'

        },
    ]

    return (
        <div className="order-list flex column align-center">
            <div>
                <h1>רשימת הזמנות</h1>
                <p className="order-count flex space-between">מספר הזמנות: <span>{orders.length}</span></p>
            </div>
            {orders.map((order) => <OrderPreview key={order._id} order={order} />)}
        </div>
    )
}
