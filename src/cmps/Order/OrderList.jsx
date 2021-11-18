import { useState, useEffect } from 'react'
import { OrderPreview } from './OrderPreview'
import TextField from '@material-ui/core/TextField'

export const OrderList = ({ orderToEdit, orders, onRemoveOrder, setEditOrder }) => {
    const [filterByName, setFilterByName] = useState('')

    return (
        <div className="order-list flex column align-center">
            <div>
                <h1>רשימת הזמנות</h1>
                <p className="order-count flex space-between">מספר הזמנות: <span>{orders?.length}</span></p>
            </div>
            <TextField
                variant="outlined"
                placeholder=" הכנס שם משפחה לחיפוש"
                inputProps={{ className: 'input', type: 'search' }}
                FormHelperTextProps={{ style: { textAlign: 'right' } }}
                value={filterByName}
                onChange={(e) => setFilterByName(e.target.value)}
            />
            {orders?.filter(order => order.lastName.includes(filterByName)).map(order => <OrderPreview key={order._id} orderToEdit={orderToEdit} order={order} onRemoveOrder={onRemoveOrder} setEditOrder={setEditOrder} />)}
        </div>
    )
}
