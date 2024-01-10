import React, { useState } from 'react';

const ProductComparison = ({ products }) => {
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    const handleChange1 = (e) => {
        const newSelectedProduct = products.find(p => p.id === parseInt(e.target.value));
        setSelectedProduct1(newSelectedProduct);
    };

    const handleChange2 = (e) => {
        const newSelectedProduct = products.find(p => p.id === parseInt(e.target.value));
        setSelectedProduct2(newSelectedProduct);
    };
    const renderOptions = (excludeProduct) => {
        return products
            .filter(product => !excludeProduct || product.id !== excludeProduct.id)
            .map(product => (
                <option key={product.id} value={product.id}>
                    {product.attributes.product.data.attributes.title}
                </option>
            ));
    };

    // Exclude these keys from the comparison table
    const excludedKeys = ['product', 'updatedAt', 'createdAt', 'publishedAt'];

    // Function to filter out excluded keys
    const filterKeys = (product) => {
        return Object.keys(product.attributes)
            .filter(key => !excludedKeys.includes(key))
            .reduce((obj, key) => {
                obj[key] = product.attributes[key];
                return obj;
            }, {});
    };

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Select Product 1: </label>
                    <select className="form-select" value={selectedProduct1 ? selectedProduct1.id : ''} onChange={handleChange1}>
                        <option value="">--Select--</option>
                        {renderOptions(selectedProduct2)}
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Select Product 2: </label>
                    <select className="form-select" value={selectedProduct2 ? selectedProduct2.id : ''} onChange={handleChange2}>
                        <option value="">--Select--</option>
                        {renderOptions(selectedProduct1)}
                    </select>
                </div>
            </div>

            {selectedProduct1 && selectedProduct2 && (
                <div className="mt-4">
                    <h3 className="mb-3">Comparison</h3>
                    <table className="table table-bordered table-striped text-black">
                        <thead className="thead-dark text-black">
                        <tr>
                            <th>Feature</th>
                            <th>{selectedProduct1.attributes.product.data.attributes.title}</th>
                            <th>{selectedProduct2.attributes.product.data.attributes.title}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(filterKeys(selectedProduct1)).map(key => (
                            <tr key={key}>
                                <td>{key.replace(/_/g, ' ')}</td>
                                <td>{String(selectedProduct1.attributes[key])}</td>
                                <td>{String(selectedProduct2.attributes[key])}</td>
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


