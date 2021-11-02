import { Close } from '@material-ui/icons'
import EditIcon from '@mui/icons-material/Edit';
export function OrderPreview({ order }) {

    return (
        <div className="order-preview">
            <div className="order-actions">
                <EditIcon />
                <Close />
            </div>
            <h1>{order.name}</h1>
            <p>{order.description}</p>
            <p>{order.firstName} {order.lastName}</p>
            <p>{order.date}</p>

        </div>
    )
}