import React, { useState } from 'react';

const ProductComparison = ({ products }) => {
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    const handleChange1 = (e) => {
        setSelectedProduct1(products.find(p => p.id === parseInt(e.target.value)));
    };

    const handleChange2 = (e) => {
        setSelectedProduct2(products.find(p => p.id === parseInt(e.target.value)));
    };

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Select Product 1: </label>
                    <select className="form-select" onChange={handleChange1}>
                        <option value="">--Select--</option>
                        {products.map(product => (
                            <option key={product.id} value={product.id}>{product.attributes.title}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Select Product 2: </label>
                    <select className="form-select" onChange={handleChange2}>
                        <option value="">--Select--</option>
                        {products.map(product => (
                            <option key={product.id} value={product.id}>{product.attributes.title}</option>
                        ))}
                    </select>
                </div>
            </div>

            {selectedProduct1 && selectedProduct2 && (
                <div className="mt-4">
                    <h3 className="mb-3">Comparison</h3>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                        <tr>
                            <th>Feature</th>
                            <th>{selectedProduct1.attributes.title}</th>
                            <th>{selectedProduct2.attributes.title}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(selectedProduct1.attributes.features).map(key => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{String(selectedProduct1.attributes.features[key])}</td>
                                <td>{String(selectedProduct2.attributes.features[key])}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ProductComparison;
