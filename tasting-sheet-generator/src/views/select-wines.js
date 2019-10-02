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
            changeView,
            addToList,
            totalNumWines
        } = this.props;
        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h1 className="page-title">Tasting Sheet Creator</h1>
                        <p>Using the list below, select the wines you would like to appear in your tasting sheet. You can rearrange you list of selected wines by dragging and dropping them into your preferred order (desktop only).</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="select-wrapper">
                                <div className="select-header d-flex justify-content-between align-items-center">
                                    <h2>Available Wines</h2>
                                </div>
                                <ListWines wineList={allWines} fireDragStart={onDragStart} addToList={addToList}></ListWines>
                                
                            </div>
                            {selectedWines.length !== totalNumWines && (
                                <div className="controls text-right">
                                    <button className="dark-gray-button d-inline-block" onClick={addAllWines}> Add All</button>
                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="selected-wrapper">
                                <div className="selected-header d-flex justify-content-between align-items-center">
                                    <h2>Selected Wines</h2>
                                </div>
                                <div className="selectedWines" onDragOver={(e) => onDragOver(e)} onDrop={(e)=>{onDrop(e)}}>
                                    {selectedWines.length === 0 &&(
                                        <div className="selected-instructions d-flex justify-content-center align-items-center h-100">
                                            <div className="text text-center">
                                                <i className="fa fa-plus-square"></i>
                                                <p>Selected wines will appear here.</p>
                                            </div>
                                        </div>
                                    )}
                                    <ul>
                                        {selectedWines && selectedWines.map((wine,index)=>(
                                            <li key={index} onDragOver={() => dragReorderOver(index)}>
                                                <div draggable onDragStart={(e) => dragReorder(e, index, wine.id)} className="d-flex flex-row justify-content-start">
                                                    <button className="remove" onClick={() => removeFromList(index, wine.id, wine.category)}>Remove</button>
                                                    <span>{wine.title}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedWines.length > 0 &&(
                                    <div className="controls text-right">
                                        <button className="dark-gray-button d-inline-block" onClick={removeAllWines}>Remove All</button>
                                    </div>
                                )}
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