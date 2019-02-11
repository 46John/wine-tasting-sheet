import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image} from '@react-pdf/renderer';

class SheetPreview extends Component{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        const styles = StyleSheet.create({
            page: {
                backgroundColor: '#FFFFFF'
            },
            Image : {
                maxWidth: "2pt"
            },
            section: {
                margin: 10,
                padding: 10,
                flexGrow: 1
            }
        });
        const tastingSheet = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <Image
                            src="https://www.stsupery.com/wp-content/uploads/2018/03/St.Supery_Logo-SM.png"
                        />
                        <Text>TEST</Text></View>
                    <View><Text>TEST</Text></View>
                    <View><Text>TEST</Text></View>
                </Page>
            </Document>
        );
        return(
            <div className="row">
                <div className="col-12">
                    <h2>Tasting Sheet Preview</h2>
                    <p>Below is a preview of your tasting sheet. If you need to make any changes, click the back button.</p>
                    <button className="back-button button-large">Back</button>
                </div>
                <PDFViewer width="100%" height="800px">
                    {tastingSheet}
                </PDFViewer>
            </div>
        )
    }
}
export default SheetPreview;