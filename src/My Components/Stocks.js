import React from 'react'

export default function Stocks () {
    return (
             <><h1>Available Stocks</h1><table class="table">
            <thead>
                <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">Stock Name</th>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Transaction Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Standard Charted Bank</td>
                    <td>BUY</td>
                    <td>100</td>
                    <td>500</td>
                    <td>01/01/2021</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Nepal Investment Bank</td>
                    <td>SELL</td>
                    <td>200</td>

                    <td>1000</td>
                    <td>01/02/2021</td>
                </tr>

                <table class="table table-success table-striped">
                </table>
            </tbody>
        </table></>
                        
        
    )   
}
