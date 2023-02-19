import React, {useState} from 'react';
import VoucherCode from './VoucherCode';

const VoucherCard = ({voucher}) => {

    const [voucherCode, setVoucherCode] = useState({show: false, code: ""})

    function handleBuy(e) {
        fetch("/api/voucher/buy?voucherId=" + e.target.name).then(response => response.json()).then(data => {
            if (data.err){
                alert("There was an error with your request. Try logging back in.")
            } else {
                setVoucherCode({show: true, code: data.voucherCode})
            }
        })
            
    }

    return (

        <div className='card'>

            {voucherCode.show && <VoucherCode voucherCode={voucherCode.code}/>}

            <div className='card-body'>
                <div className='card-title'>
                    <h3>{voucher.shop}</h3>
                </div>
                <div className='card-body'>
                    <ul>
                        <li>Valoare: {voucher.value}</li>
                        <li>Cost: {voucher.points} puncte ale utilizatorului</li>
                    </ul>

                    <button className='btn btn-theme' onClick={handleBuy} name={voucher._id}>Cumpără</button>
                </div>
            </div>
            
        </div>
    );
};

export default VoucherCard;