import React from 'react'

export default function Footer() {
    return (
        <><h1>Stocks Value</h1><table class="table">
        <thead>
            <tr>
                <th scope="col">S.N</th>
                <th scope="col">Stock Name</th>
                <th scope="col">Total Units</th>
                <th scope="col">Sold Amount</th>
                <th scope="col">Overall Profit</th>
                <th scope="col">Total Investment</th>
                <th scope="col">Current Amount</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Standard Charted Bank</td>
                <td>100</td>
                <td>5000</td>
                <td>87744</td>
                <td>10000</td>
                <td>50000</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Nepal Investment Bank</td>
                <td>100</td>
                <td>5000</td>

                <td>87744</td>
                <td>10000</td>
                <td>50000</td>
            </tr>

            <table class="table table-success table-striped">
            </table>
        </tbody>
    </table></>
    )
}
