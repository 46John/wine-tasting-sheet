import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font} from '@react-pdf/renderer';

class SheetPreview extends Component{
    shouldComponentUpdate(){
        return true;
    }
    render(){
        const {
            selectedWines,
            eventInfo,
            sheetIncludes,
            changeView
        } = this.props;

        // Font.register(
        //     'http://localhost:3000/fonts/RobotoCondensed-Regular.ttf',
        //     {family:'Roboto Condensed'}
        // );

        const tastingSheet = (
            <Document>
                <Page size="A4" style={{
                    padding: '10pt 10pt 50pt 10pt'
                }}
                wrap={true}
                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'stretch',
                        textAlign: 'center'
                    }}>
                        <Image
                            src="img/st-supery-logo.png"
                            style={{
                                maxWidth: '200',
                                height:"30",
                                marginBottom : '20pt',
                                marginTop: '10pt',
                                flex: '0 1'
                            }}

                        />
                        {eventInfo.eventName !== '' && (
                            <View style={{
                                width: "100%",
                                flex: '0 1',
                                fontSize: '12pt'
                            }}>
                                <Text>{eventInfo.eventName}{eventInfo.eventVenue ? " - " + eventInfo.eventVenue : ""}</Text>
                            </View>

                        )}
                        {eventInfo.eventDate !== '' &&(
                            <Text style={{
                                width: "100%",
                                flex: '0 1',
                                fontSize: '12pt'
                            }}>{eventInfo.eventDate}{eventInfo.eventTime !== '' ? ', ' + eventInfo.eventTime : ''}</Text>
                        )}
                        {eventInfo.eventName !== '' && (
                            <Text style={{
                                width: "100%",
                                flex: '0 1',
                                fontSize: '12pt'
                            }}>Presented by: {eventInfo.eventPresenter}</Text>
                        )}
                        {sheetIncludes.info === true && (
                            <View style={{
                                width: "100%",
                                flex: '0 1',
                                padding: '10pt 0'
                            }}>
                                <Text style={{fontSize:14, textAlign: 'left'}}>St. Supéry Estate Vineyards & Winery is a sustainably farmed, estate winery in Napa Valley, California, with more than 500 acres of certified Napa Green vineyards. All of the grapes for St. Supéry Estates' wine portfolio, including the highly regarded Napa Valley Estate Sauvignon Blanc and Dollarhide and Rutherford vineyard designate Cabernet Sauvignon, are grown in two estate vineyards.</Text>
                            </View>
                        )}
                    </View>
                    <Text style={{width: '100%', borderBottom: '1 solid #bdbdbd', marginBottom: 10}} ></Text>
                    <View>
                    {selectedWines.map((wine, index) => (
                        <View key={index} style={{width: '100%'}} wrap={false}>
                            <View style={{width: '100%', marginBottom: '10pt'}}>
                                <Text style={{fontSize: 16}}>{wine.title}{sheetIncludes.price ? " - $" + wine.price : ""}</Text>
                            </View>
                            <View style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                            >
                                {sheetIncludes.images && (
                                    <Image src="img/wine-label.jpg" style={{height: 97, flex: '1', alignSelf: 'auto'}} />
                                )}
                                <View style={{flex: '3', flexDirection: "column", alignItems: "stretch"}}>
                                    {sheetIncludes.notes && (
                                        <View style={{fontSize: "14pt", padding: "0 0 0 10"}}>
                                            <Text style={{fontWeight: 'bold', marginBottom: '5pt'}}>Winemaker's Notes:</Text>
                                            <Text >{wine.notes}</Text>
                                        </View>

                                    )}
                                </View>
                            </View>
                            {sheetIncludes.ratings && (
                                <View style={{margin: '10pt 0', display: "flex", flexDirection: "row", width: '100%', justifyContent: "flex-start", fontSize: "12pt"}}>
                                    <Text style={{flex: 1}}>Ratings:</Text>
                                    {wine.ratings.map((rating, index) => <Text style={{flex: 1}} key={index}>{rating.value} - {rating.name}</Text>)}
                                </View>
                            )}
                            <Text style={{width: '100%', borderBottom: '1 solid #bdbdbd', marginBottom: 10}}></Text>
                        </View>
                    ))}
                    </View>
                    <View style={{
                        position:'absolute',
                        bottom:10,
                        left:0,
                        right:0,
                        fontSize: '12',
                        textAlign: 'center'
                    }} fixed>
                        <Text>St. Supéry Estate Vineyards & Winery</Text>
                        <Text>8440 St. Helena Highway • Rutherford, CA 94573 • www.stsupery.com</Text>
                    </View>
                </Page>
            </Document>
        );
        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h2>Tasting Sheet Preview</h2>
                        <p>Below is a preview of your tasting sheet. If you need to make any changes, click the back button.</p>
                        <div className="controls">
                            <button className="back-button button-large" onClick={() => changeView('sheet-preferences')}>Back</button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <PDFViewer width="100%" height="800px">
                    {tastingSheet}
                </PDFViewer>
            </div>
        )
    }
}
export default SheetPreview;