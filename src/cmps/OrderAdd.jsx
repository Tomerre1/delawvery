import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@mui/material/Button';



export function OrderAdd({ addOrder }) {

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
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            fontSize: 16,
            width: '200px',
            padding: '10px 12px',
            borderColor: '#ced4da',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),

        },
    }));

    useEffect(() => {
        setFirstName('')
        setLastName('')
    }, [])

    const orderSubmit = (e) => {
        // if (!firstName || !lastName || !selectedDate) return
        e.preventDefault();
        addOrder({
            firstName,
            lastName,
            date: selectedDate,
            description: 'פרטים',
            name: 'הזמנה'
        });
        clearState()
    }

    const clearState = () => {
        setFirstName('')
        setLastName('')
    }

    return (
        <div className="order-add" style={{ flex: 1 }}>
            <h1>הזמנה חדשה</h1>
            <form className="order-input flex " onSubmit={orderSubmit}>
                <div className="flex column" >
                    <label htmlFor="firstName" className="label" >
                        שם פרטי
                    </label>
                    <InputBase
                        placeholder="הכנס שם פרטי"
                        id="firstName"
                        onChange={(e) => { setFirstName(e.target.value) }}
                        defaultValue={firstName}
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
                        defaultValue={lastName}
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
                    הוספה
                </Button>
            </form>

        </div>
    )
}
