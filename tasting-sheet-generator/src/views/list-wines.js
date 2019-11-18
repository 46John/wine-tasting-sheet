import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    addSelectedProduct,
    removeSelectedProduct,
    reorderSelectedProduct
} from '../actions/selectedProducts';
import {bindActionCreators} from "redux";

class ListWines extends Component {
    render(){
        const {
            allWines,
            selectedProducts,
            addSelectedProduct,
            reorderSelectedProduct,
            removeSelectedProduct,
            show,
        } = this.props;
        return(
            <div className="select-scroll">
                <ul>
                    {show === 'ALL' && allWines.map((product, index) => (
                        <li key={index} className={selectedProducts.indexOf(product) !== -1 ? "disabled" : ""}>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="product-info-wrapper d-flex align-items-center">
                                    <div
                                        className="product-info__image"
                                        style={{
                                            backgroundImage: 'url(' + product.img + ')'
                                        }}
                                    ></div>
                                    <span>{product.name}</span>
                                </div>

                                <button className="add" onClick={() => addSelectedProduct(product)}><i className="fa fa-plus"></i></button>
                            </div>
                        </li>
                    ))}
                    {show === 'SELECTED' && selectedProducts.map((product, index) => (
                        <li key={index} className="selectedProduct">
                            <div className="d-flex flex-row align-items-stretch">
                                <div className="reorder justify-content-center">
                                    <i className="fas fa-caret-up" onClick={() => reorderSelectedProduct(product, "UP")}></i>
                                    <i className="fas fa-caret-down" onClick={() => reorderSelectedProduct(product, "DOWN")}></i>
                                </div>
                                <div className="flex-fill product-info-wrapper align-items-center d-flex" >
                                    <div
                                        className="product-info__image"
                                        style={{
                                            backgroundImage: 'url(' + product.img + ')'
                                        }}
                                    ></div>
                                    <span>{product.name}</span>
                                </div>

                                <i className="fa fa-times selectedProduct__remove" onClick={() => removeSelectedProduct(product.id)}></i>
                            </div>
                        </li>
                    ))}
                    {selectedProducts < 1 && show === 'SELECTED' &&(
                        <div className="selected-instructions d-flex justify-content-center align-items-center h-100">
                            <div className="text text-center">
                                <i className="fa fa-plus-square"></i>
                                <p>Selected wines will appear here.</p>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ allWines, selectedProducts }) => {
    return {
        allWines,
        selectedProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addSelectedProduct,
        removeSelectedProduct,
        reorderSelectedProduct,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListWines);