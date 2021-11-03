import { Close } from '@material-ui/icons'
import EditIcon from '@mui/icons-material/Edit';
import { utilService } from '../../services/util.service'
export function OrderPreview({ order, removeOrder, editOrder }) {

    return (
        <div className="order-preview">
            <div className="order-actions">
                <EditIcon onClick={() => editOrder(order._id)} />
                <Close onClick={() => removeOrder(order._id)} />
            </div>
            <h1>{order.name}</h1>
            <p>{order.description}</p>
            <p>{order.firstName} {order.lastName}</p>
            <p>{utilService.makeDate(order.date)}</p>

        </div>
    )
}