import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListWines from './list-wines';
import { bindActionCreators } from 'redux';
import {
    removeSelectedProduct,
    removeAllProducts,
    reorderSelectedProduct,
    addAllProducts,
} from '../actions/selectedProducts';

class SelectWines extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        console.log(this.props);
        const {
            selectedProducts,
            changeView,
            totalNumWines
        } = this.props;
        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h1 className="page-title">Tasting Sheet Creator</h1>
                        <p>Using the list below, select the wines you would like to appear in your tasting sheet.</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row product-select-row">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="select-wrapper">
                                <div className="select-header d-flex justify-content-between align-items-center">
                                    <h2>Available Wines</h2>
                                </div>
                                <ListWines show="ALL" />
                                <div className="select-controls text-right">
                                    <button className="dark-gray-button d-inline-block" onClick={() => this.props.addAllProducts(this.props.allWines)}> Add All <i className="fa fa-plus"></i></button>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="select-wrapper">
                                <div className="select-header d-flex justify-content-between align-items-center">
                                    <h2>Selected Wines</h2>
                                </div>
                                <ListWines show="SELECTED"/>
                                <div className="select-controls text-right">
                                    <button className="dark-gray-button d-inline-block" onClick={() => this.props.removeAllProducts()}>
                                        <i className="fa fa-times"></i> Remove All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controls text-right col-12">
                    {selectedProducts.length > 0 && (
                            <div className="row">
                                <div className="col-6 text-left">

                                </div>
                                <div className="col-6 text-right">
                                    <button className="button-large next-button d-inline-block" onClick={() => changeView('sheet-preferences')}>Next</button>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({allWines, selectedProducts}) => {
    return {
        allWines,
        selectedProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeSelectedProduct,
        removeAllProducts,
        reorderSelectedProduct,
        addAllProducts,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectWines);