import React, {useEffect, useState} from 'react';
import VoucherCard from './VoucherCard';

const Shop = () => {

    const [vouchers, setVouchers] = useState([])


    useEffect( () => {
        fetch("/api/vouchers").then(response => response.json()).then(data => {
            if (!data.err){
                setVouchers(data.vouchers)
            } else {
                alert("There was an error" + data.err)
            }
        })
    }, []);

    return (
        <div>
            {(vouchers.length > 0 ? (
                        vouchers.map((voucher, i) =>

                            <VoucherCard key={i} voucher={voucher}/>

                        )
                    ) : <p>no vouchers yet</p> )}
        </div>
    );
};

export default Shop;