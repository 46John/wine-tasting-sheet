import React, {Component} from 'react';

class ListWines extends Component {
    render(){
        const {wineList, addToList} = this.props;
        return(
            <div className="available-wines">
                <h3>Dollarhide Wines</h3>
                <ul>
                    {wineList.dollarhide && wineList.dollarhide.map((wine,index)=>(
                        <li key={index} onDragStart={(e) => this.props.fireDragStart(e, wine.category, wine.id)}  draggable>
                            <div className="d-flex flex-row justify-content-between">
                                <span>{wine.title}</span>
                                <button className="add" onClick={() => addToList(index, wine.id, wine.category)}>Add</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <h3>Estate Wines</h3>
                <ul>
                    {wineList.estate && wineList.estate.map((wine,index)=>(
                        <li key={index} onDragStart={(e) => this.props.fireDragStart(e, wine.category, wine.id)}  draggable>
                            <div className="d-flex flex-row justify-content-between">
                                <span>{wine.title}</span>
                                <button className="add" onClick={() => addToList(index, wine.id, wine.category)}>Add</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <h3>Meritage Wines</h3>
                <ul>
                    {wineList.meritage && wineList.meritage.map((wine,index)=>(
                        <li key={index} onDragStart={(e) => this.props.fireDragStart(e, wine.category, wine.id, 99)}  draggable>
                            <div className="d-flex flex-row justify-content-between">
                                <span>{wine.title}</span>
                                <button className="add" onClick={() => addToList(index, wine.id, wine.category)}>Add</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default ListWines;