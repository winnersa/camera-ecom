import React, {createContext, useEffect, useState} from "react"
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {BASE_URL} from "../data/constants";

export const Message_data = createContext(null);

const Context = ({children}) => {
    const router = useRouter();
    const [sidebar, setsidebar] = useState(false);
    const [subtotal, setsubtotal] = useState(0)
    const [cart, setcart] = useState({})

    useEffect(() => {

        fetchData();

    }, [])

    async function fetchData() {
        try {
            const dataUser = localStorage.getItem('user')

            if (!dataUser){
                throw new Error('Please sign in first. !');
            }

            const response = await fetch(`${BASE_URL}/api/carts?populate=*&filters[user][id][$eq]=${dataUser}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setcart(data.data);
            saveCart(data.data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    }

    const setSidebarFunc = () => {
        setsidebar(!sidebar);
    }

    const saveCart = (myCart) => {
        let subtotal = 0;
        for (let i = 0; i < Object.keys(myCart).length; i++) {
            subtotal += myCart[Object.keys(myCart)[i]].attributes.subtotal;
        }
        setsubtotal(subtotal);
    }
    const clearCart = () => {
        setcart({});
        saveCart({});
    }
    const addToCart = async (id, qty, price, title, imageFile) => {
        try {

            const dataUser = localStorage.getItem('user')

            if (!dataUser){
                throw new Error('Please sign in first. !');
            }

            const imageResponse = await fetch(`${BASE_URL}/api/upload/files/${imageFile}`, {
                method: 'GET'});

            if (!imageResponse.ok) {
                throw new Error('Not found image !');
            }

            const image = await imageResponse.json();

            // Create the cart payload with the uploaded image data
            const cartPayload = {
                data: {
                    quantity: qty,
                    subtotal: String(price * qty),
                    product: {
                        connect: [
                            {
                                id: parseInt(id),
                                position: { end: true }
                            }
                        ]
                    },
                    user: {
                        connect: [
                            {
                                id: parseInt(dataUser),
                                position: { end: true }
                            }
                        ]
                    },
                    image: image
                }
            };

            // Then, add to cart
            const cartResponse = await fetch('http://localhost:3001/api/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartPayload)
            });

            if (!cartResponse.ok) {
                throw new Error('Adding to cart failed!');
            }

            await fetchData();
            toast.success('Product added to cart successfully!');

        } catch (error) {
            toast.error('Error: ' + error.message);
        }
    }

    const updateCart = async (id, qty) => {
        let newCart = {...cart};
        try {

            if (newCart[id]) {
                newCart[id].attributes.quantity = newCart[id].attributes.quantity + qty;

                const cartPayload = {
                    data: {
                        quantity: newCart[id].attributes.quantity,
                        subtotal: newCart[id].attributes.quantity * newCart[id].attributes.product.data.attributes.price
                    }
                };

                const cartResponse = await fetch(`${BASE_URL}/api/carts/${newCart[id].id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cartPayload)
                });

                setcart(newCart);
                saveCart(newCart);

                if (!cartResponse.ok) {
                    throw new Error('Adding to cart failed!');
                }
                await fetchData();
                toast.success('Product added to cart successfully!');

            } else {
                throw new Error(`Item with id ${id} not found in the cart.`);
            }

        }catch (error){
            toast.error('Error: ' + error.message);
        }


    }

    const minusCart = async (id, qty) => {
        let newCart = {...cart};

        try {

            if (newCart[id] && newCart[id]?.attributes?.quantity > 1) {
                newCart[id].attributes.quantity = newCart[id].attributes.quantity - qty;

                const cartPayload = {
                    data: {
                        quantity: newCart[id].attributes.quantity,
                        subtotal: newCart[id].attributes.quantity * newCart[id].attributes.product.data.attributes.price
                    }
                };

                const cartResponse = await fetch(`${BASE_URL}/api/carts/${newCart[id].id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cartPayload)
                });

                setcart(newCart);
                saveCart(newCart);

                if (!cartResponse.ok) {
                    throw new Error('minus to cart failed!');
                }
                await fetchData();
                toast.success('Product minus to cart successfully!');

            } else {
                toast.warning('Cart is limited!');
            }

        }catch (error){
            toast.error('Error: ' + error.message);
        }


    }
    const removeCart = async (id) => {
        try {
            const cartResponse = await fetch(`${BASE_URL}/api/carts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!cartResponse.ok) {
                throw new Error('delete to cart failed!');
            }
            await fetchData();
            toast.success('Cart Deleted Successfully!');

        }catch (error){
            toast.error('Error delete cart');
        }

    }

    const handleSignOut = () => {
        setUser(null);
        localStorage.clear()
        router.push('/signin').then(()=> toast.success('Sign Out Successfully!'));

    };

    let allvalues = {
        sidebar, setsidebar,
        setSidebarFunc, clearCart,
        minusCart, cart,
        updateCart, removeCart,
        subtotal, addToCart,
        handleSignOut
    }


    return (
        <Message_data.Provider value={allvalues}>
            {children}
        </Message_data.Provider>
    )
}

export default Context