export async function sendOrderData(orderData) {
    const response = await fetch('http://192.168.55.45:3000/orders',
        {
            method: 'POST',
            body: JSON.stringify({ orderData }),
            headers: {
                'Content-Type': 'application/json'
            }

        });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to send order')
    }

    return resData.message;

}


