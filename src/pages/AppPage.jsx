import { useState, useEffect } from 'react'
// localStorage.setItem(key, value);
// localStorage.getItem(key)
// localStorage.removeItem(key);
// localStorage.clear();
// import logo from '../assets/img/DeLawVeryLogo.svg'
import styled from 'styled-components';

const size = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1024px',
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};

export function AppHeader() {
    const MyHeader = styled.header`
    background: #4e71ff;
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
     &:hover {
        background: green;
        @media ${device.desktop} { 
            background:yellow;
          }
    }

    @media ${device.desktop} { 
        width: 20px;
      }
    `
    const headerStyle = {
        width: '100%',
        background: '#4e71ff',
        boxShadow: '0 2px 7px 0px #0000001a',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'

    }
    return <>
        {/* <header style={headerStyle} /> */}
        <MyHeader >
            Test
        </MyHeader>
    </>


}

export function AppPage() {
    const [array, setArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const api = 'https://jsonplaceholder.typicode.com/todos'
    const styleLayout = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    useEffect(() => {
        async function fetchDataFromApi() {
            setIsLoading(true)
            const response = await fetch(api)
            const data = await response.json()
            setArray(data)
            setIsLoading(false)
            console.log('data: ', data);
        }
        fetchDataFromApi()
    }, []);

    const onRemove = (id) => {
        const updatedArrayAfterRemove = array.filter(item => item.id !== id)
        setArray(updatedArrayAfterRemove)
    }

    const onUpdate = (updatedItem) => {
        const updatedArrayAfterUpdate = array.map(item => item.id === updatedItem.id ? updatedItem : item)
        setArray(updatedArrayAfterUpdate)
    }

    const onAdd = (item) => {
        setArray([...array, item])
    }

    return (
        <main style={styleLayout}>
            <AppHeader />
            <h1>App Page</h1>
            {!isLoading && <ListComponent array={array} />}
            {isLoading && <h1>Hi Im Loading From Api Data</h1>}
        </main>
    )
}

export function ListComponent({ array }) {
    const styleList = {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px'
    }

    const myList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    `

    return (<ul style={styleList}>
        {array?.length > 0 && array.map(item => <ItemPreview item={item} />)}
    </ul>
    )
    // return (<myList style={styleList}>
    //     {array?.length > 0 && array.map(item => <ItemPreview item={item} />)}
    // </myList>
    // )
}

export function ItemPreview({ item }) {
    const itemPreviewStyle = {
        color: '#2f2f2f',
        padding: '5px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(46 58 229 / 0.4)',
        overflow: 'hidden',
        position: 'relative',
        width: '16rem',
        height: '16rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const StyledItem = styled.li`
    color: #2f2f2f;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(46 58 229 / 0.4);
    overflow: hidden;
    width: 16rem;
    height: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 60%);
    }
    `

    // return (
    //     <li key={item.id} style={itemPreviewStyle}>
    //         <p>{item.title}</p>
    //         <p>{item.completed + ''}</p>
    //     </li>
    // )
    return (
        <StyledItem key={item.id}>
            <p>{item.title}</p>
            <p>{item.completed + ''}</p>
        </StyledItem>
    )
}


