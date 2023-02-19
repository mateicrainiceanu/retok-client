import React from 'react';

const VoucherCode = (props) => {
    return (
        <div className='over'>
            <link rel="stylesheet" href="/css/sign-in.css"></link>

            <main className="form-signin w-100 m-auto">
                <h1 className="h3 mb-3 fw-normal">
                    Codul dvs. de reducere este: <b>{props.voucherCode}</b>
                </h1>
            </main>
        </div>
    );
};

export default VoucherCode;