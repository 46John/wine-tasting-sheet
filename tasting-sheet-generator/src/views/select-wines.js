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
                <div className="col-6">
                    <h2 className="text-center">Available Wines <span></span></h2>
                    <div className="controls top text-right">
                        <button className="gray-button d-inline-block" onClick={addAllWines}>Add All ></button>
                    </div>
                    <ListWines wineList={allWines} fireDragStart={onDragStart}></ListWines>
                </div>
                <div className="col-6">
                    <h2 className="text-center">Selected Wines</h2>
                    <div className="controls top text-right">
                        <button className="gray-button d-inline-block" onClick={removeAllWines}>Remove All</button>
                    </div>
                    <div className="selectedWines" onDragOver={(e) => onDragOver(e)} onDrop={(e)=>{onDrop(e)}}>
                        {selectedWines.length === 0 &&(
                            <p> drag items from the left here</p>
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
                    <div className="controls text-right row">
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
            </div>
        )
    }
}
export default SelectWines;