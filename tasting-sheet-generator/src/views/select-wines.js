import React, {Component} from 'react';
import ListWines from '../list-wines';

class SelectWines extends Component{

    render(){
        const {
            allWines,
            selectedWines,
            onDragStart,
            addAllWines,
            removeAllWines,
            onDragOver,
            onDrop,
            dragReorderOver,
            dragReorder,
            removeFromList,
            changeView
        } = this.props;
        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h1 className="page-title">Tasting Sheet Creator</h1>
                        <p>Using the list below, drag and drop the wines you would like to appear in your tasting sheet. You can rearrange you list of selected wines by dragging and dropping them into your preferred order.</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="select-wrapper">
                                <div className="select-header d-flex justify-content-between">
                                    <h2>Available Wines</h2>
                                    <div className="controls top text-right">
                                        <button className="dark-gray-button d-inline-block" onClick={addAllWines}>Add All</button>
                                    </div>
                                </div>
                                <ListWines wineList={allWines} fireDragStart={onDragStart}></ListWines>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="selected-wrapper">
                                <div className="selected-header d-flex justify-content-between">
                                    <h2>Selected Wines</h2>
                                    <div className="controls top text-right">
                                        <button className="dark-gray-button d-inline-block" onClick={removeAllWines}>Remove All</button>
                                    </div>
                                </div>
                                <div className="selectedWines" onDragOver={(e) => onDragOver(e)} onDrop={(e)=>{onDrop(e)}}>
                                    {selectedWines.length === 0 &&(
                                        <div className="selected-instructions d-flex justify-content-center align-items-center h-100">
                                            <div className="text text-center">
                                                <i className="fa fa-plus-square"></i>
                                                <p>Drag items from the left here</p>
                                            </div>
                                        </div>
                                    )}
                                    <ul>
                                        {selectedWines && selectedWines.map((wine,index)=>(
                                            <li key={index} onDragOver={() => dragReorderOver(index)}>
                                                <div draggable onDragStart={(e) => dragReorder(e, index, wine.id)}>
                                                    <button className="remove" onClick={() => removeFromList(index, wine.id, wine.category)}>Remove</button>
                                                    <span>{wine.title}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controls text-right col-12">
                    {selectedWines.length > 0 && (
                        <div className="container">
                            <div className="row">
                                <div className="col-6 text-left">

                                </div>
                                <div className="col-6 text-right">
                                    <button className="button-large next-button d-inline-block" onClick={() => changeView('sheet-preferences')}>Next</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default SelectWines;