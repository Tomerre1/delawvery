import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@mui/material/Button';

export function OrderAddEdit({ onEditOrder, onAddOrder, order }) {

    const [selectedDate, setSelectedDate] = useState(Date.now());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const DatePickerCmp = styled(DatePicker)(({ theme }) => ({
        '.MuiOutlinedInput-root: hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000',
        },
        '& .MuiInputBase-input': {
            cursor: 'pointer',
            borderRadius: 4,
            position: 'relative',
            fontSize: 16,
            width: '200px',
            padding: '10px 12px',
            borderColor: '#ced4da',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
        },
    }));

    useEffect(() => {
        setFirstName(order?.firstName || '')
        setLastName(order?.lastName || '')
        setSelectedDate(order?.date || Date.now())
    }, [order])

    const orderSubmit = (e) => {
        if (!firstName || !lastName || !selectedDate) return
        e.preventDefault();
        (order) ? onEditOrder({ ...order, firstName, lastName, date: selectedDate })
            : onAddOrder({
                firstName, lastName, date: selectedDate, description: 'פרטים', name: 'הזמנה'
            })
        clearState()
    }

    const clearState = () => {
        setFirstName('')
        setLastName('')
        setSelectedDate(Date.now())
    }

    return (
        <div className="order-add" style={{ flex: 1 }}>
            <h1>{(order?._id) ? order.name + ' ' + order._id : 'הזמנה חדשה'}</h1>
            <form className="order-input flex " onSubmit={orderSubmit}>

                <div className="flex column" >
                    <label htmlFor="firstName" className="label" >
                        שם פרטי
                    </label>
                    <InputBase
                        placeholder="הכנס שם פרטי"
                        id="firstName"
                        onChange={(e) => { setFirstName(e.target.value) }}
                        value={firstName}
                        required
                        inputProps={{ className: 'input' }}
                    />
                </div>

                <div className="flex column">
                    <label htmlFor="lastName" className="label" >
                        שם משפחה
                    </label>
                    <InputBase
                        placeholder="הכנס שם משפחה"
                        id="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        disableAutoFocus={true}
                        required
                        inputProps={{ className: 'input' }}

                    />
                </div>

                <div className="flex column">
                    <label htmlFor="date" className="label" >
                        תאריך
                    </label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <DatePickerCmp
                            id="date"
                            inputVariant="outlined"
                            placeholder="הכנס תאריך"
                            format={"dd/MM/yyyy"}
                            value={selectedDate}
                            onChange={setSelectedDate}
                            animateYearScrolling={false}
                            autoOk={false}
                            clearable
                            required
                        />
                    </MuiPickersUtilsProvider>
                </div>


                <Button
                    variant="contained"
                    className="order-submit"
                    type="submit"
                >
                    {order?._id ? 'עדכן הזמנה' : 'הוסף הזמנה'}
                </Button>

            </form>

        </div>
    )
}
