import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font} from '@react-pdf/renderer';

class SheetPreview extends Component{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        const {
            selectedWines,
            eventInfo,
            sheetIncludes,
            changeView
        } = this.props;

        Font.register(
            'http://localhost:3000/fonts/RobotoCondensed-Regular.ttf',
            {family:'Roboto Condensed'}
        );

        const styles = StyleSheet.create({
            coverPage: {
                backgroundColor: '#FFFFFF',
                paddingTop: 15,
                paddingBottom: 15,
                paddingHorizontal: 15,
                fontFamily: 'Roboto Condensed',
                display: 'flex',
                justifyContent : 'center',
                flexDirection : 'column',
                alignItems: 'center',
                alignContent: 'center'
            },
            page: {
                backgroundColor: '#FFFFFF',
                paddingTop: 15,
                paddingBottom: 15,
                paddingHorizontal: 15,
                fontFamily: 'Roboto Condensed'
            },
            topSection: {
                textAlign: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'strech',
                fontSize: 12,
                marginBottom: 20
            },
            event: {
                textAlign: 'center'
            },
            wineryInfo: {
                fontSize: 12,
                paddingTop: 20,
                paddingBottom: 20,
                marginBottom: 30,
                textAlign : 'center'
            },
            wine: {
                flexDirection: 'row',
                paddingBottom: 20,
            },
            footer: {
                fontSize: 10,
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                bottom: 10,
                left: 0,
                right: 0
            }
        });

        const tastingSheet = (
            <Document>
                <Page size="A4" style={styles.coverPage}>
                    <View style={styles.topSection} >
                        <Image
                            src="img/st-supery-logo.png"
                            style={{maxWidth: '230', height:"44", marginBottom : '20pt'}}

                        />
                        {eventInfo.eventName !== '' && (
                            <Text style={styles.event}>{eventInfo.eventName}</Text>
                        )}
                        {eventInfo.eventDate !== '' &&(
                            <Text>{eventInfo.eventDate}{eventInfo.eventTime !== '' ? ', ' + eventInfo.eventTime : ''}</Text>
                        )}
                        {eventInfo.eventVenue !== '' && (
                            <Text>{eventInfo.eventVenue}</Text>
                        )}
                        {eventInfo.eventName !== '' && (
                            <Text>Presented by: {eventInfo.eventName}</Text>
                        )}
                        {sheetIncludes.info === true && (
                            <View debug="true">
                                <Text style={{textAlign:'center'}} debug="true">St. Supéry Estate Vineyards & Winery is a sustainably farmed, estate winery in Napa Valley, California, with more than 500 acres of certified Napa Green vineyards. All of the grapes for St. Supéry Estates' wine portfolio, including the highly regarded Napa Valley Estate Sauvignon Blanc and Dollarhide and Rutherford vineyard designate Cabernet Sauvignon, are grown in two estate vineyards.</Text>
                            </View>
                        )}
                    </View>

                </Page>
                <Page size="A4" style={styles.page}>

                    {selectedWines.map((wine, index) => (
                        <View key={index}>
                            <View style={styles.wine}>
                                {sheetIncludes.images && (
                                    <Image src="img/wine-label.jpg" style={{width: '30%', height: 97}}/>
                                )}
                                <View style={{paddingLeft: 20, width: '70%'}}>
                                    <Text style={{fontSize: 16}}>{wine.title}</Text>
                                    {sheetIncludes.price && (
                                        <Text style={{fontSize: 14, paddingTop: 5, paddingBottom: 5}}>Price: ${wine.price}</Text>
                                    )}
                                    {sheetIncludes.notes && (
                                        <View>
                                            <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>Winemaker's Notes:</Text>
                                            <Text style={{fontSize: 12, marginBottom: 5}}>{wine.notes}</Text>
                                        </View>

                                    )}
                                    {sheetIncludes.ratings && (
                                        <View style={{fontSize: 12, width: '100%'}}>
                                            <Text style={{fontSize: 12, marginBottom: 5, display: "block"}}>Ratings:</Text>
                                            {wine.ratings.map((rating, index) => <Text style={{display: "inline-block"}} key={index}>{rating.value} - {rating.name}</Text>)}
                                        </View>
                                    )}
                                </View>
                            </View>
                            <Text style={{width: '100%', borderBottom: '1 solid #bdbdbd', marginBottom: 20}}></Text>
                        </View>
                    ))}
                    <View style={styles.footer}>
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