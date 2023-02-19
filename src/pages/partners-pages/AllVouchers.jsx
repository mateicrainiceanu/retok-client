import React, {useState, useEffect} from 'react';

const AllVouchers = () => {

    //declare STATES
    const [vouchers, setVouchers] = useState([])

    //implement loading Vouches with useEffect

    useEffect(() => {fetchVouchers()})

    //implement getting vouches from db - FUNCTION

    function fetchVouchers () {
        fetch("/api/vouchers").then(response => response.json()).then(data => {
            if (!data.err){
                setVouchers(data.vouchers)
            } else {
                alert("There was an error" + data.err)
            }
        })
    }


    //button Handler

    function handleButtonClick(e) {
        fetch("/api/voucher/delete?voucherid=" + e.target.name).then(() => {fetchVouchers()})

    }

    return (
        <div>
            <div style={{padding: 10 + "px", width: "100%"}}></div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="row">VoucherId</th>
                        <th scope="row">ShopName</th>
                        <th scope="row">Value</th>
                        <th scope="row">Our Points</th>
                        <th scope="row">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {(vouchers.length > 0 ? (
                        vouchers.map((voucher, i) =>
                            <tr key={i}>
                                <td>{voucher._id}</td>
                                <td>{voucher.shop}</td>
                                <td>{voucher.value}</td>
                                <td>{voucher.points}</td>
                                <td><button className="btn btn-dark" name={voucher._id} onClick={handleButtonClick}>Delete</button></td>
                            </tr>
                        )
                    ) : <tr><td>No data yet!</td></tr> )}
                </tbody>
            </table>
        </div>
    );
};

export default AllVouchers;