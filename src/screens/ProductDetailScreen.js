/**
 * @author K K
 * @description ProductDetailScreen
 * @flow
 */
import React, {Component} from 'react';
import {
  BackHandler,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {inject, observer} from 'mobx-react';
import CText from '../ReusableComponents/CText';
import COLORS from '../Utilities/Colors';
import {productDetailStyle} from '../Styles/productDetail';

@inject('ProductStore', 'OtpStore')
@observer
class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMore: false,
    };
    this.modalRef = React.createRef();
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPressLogin',
      this.backButtonHandler,
    );
  }
  backButtonHandler = () => {
    this.props.navigation.navigate('Home');
    return true;
  };

  ReportHandler = () => {
    this.setState({
      isShowMore: false,
    });
  
      this.props.navigation.navigate('ProductReport');
      return true;
    
    
  };

  modalHandler = () => {
    if (this.state.isShowMore) {
      this.setState({
        isShowMore: false,
      });
    } else {
      this.setState({
        isShowMore: true,
      });
    }
  };
  componentDidMount(){
    console.warn(this.props.ProductStore.product)
        }
  render() {
    const {
      id,
      name,
      brand,
      description,
      price,
      scan_count,
      last_scanned,
      batch_code,
      manufactured_on,
      expiry_on,
      code_data,
      image,
      label_image
    } = this.props.ProductStore.product;
   
    return (
      <View>
        {this.props.ProductStore.product.genuine_product == true ? (
          <View>
            <Modal visible={this.state.isShowMore} animationType="slide">
              <ScrollView
                showsVerticalScrollIndicator={false}
                persistentScrollbar={false}>
                <View style={productDetailStyle.ModalProductDetailContainer}>
                  <TouchableOpacity onPress={this.modalHandler}>
                    <View style={productDetailStyle.CloseModalButton}>
                      <Icon
                        name="arrow-left"
                        size={30}
                        color={COLORS.SECONDARY_COLOR}
                      />
                      <CText
                        style={{
                          fontSize: 18,
                          marginLeft: 20,
                          color: COLORS.SECONDARY_COLOR,
                          textTransform: 'uppercase',
                        }}>
                        Back
                      </CText>
                    </View>
                  </TouchableOpacity>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Product
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>{name}</CText>
                  </View>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Description
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>
                      {description ? description:"No description"}
                    </CText>
                  </View>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Batch code
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>
                      {batch_code}
                    </CText>
                  </View>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Product serial no
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>
                      {code_data}
                    </CText>
                  </View>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Manufactured on
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>
                      {manufactured_on}
                    </CText>
                  </View>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Expiry on
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>
                      {expiry_on}
                    </CText>
                  </View>
                  <View style={productDetailStyle.ItemContainer}>
                    <CText style={productDetailStyle.HeadingText}>
                      Date/Time of last scan
                    </CText>
                    <CText style={productDetailStyle.ScannedText}>
                      {last_scanned}
                    </CText>
                  </View>
                  <View style={productDetailStyle.ButtonStyle}>
                    <TouchableOpacity onPress={this.ReportHandler}>
                      <View style={productDetailStyle.ButtonContainer}>
                        <CText style={productDetailStyle.ButtonText}>
                          Report
                        </CText>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </Modal>

            <ScrollView
              showsVerticalScrollIndicator={false}
              persistentScrollbar={false}>
              <View style={productDetailStyle.ProductDetailContainer}>
                <View style={productDetailStyle.Heading}>
                {/*   <CText style={productDetailStyle.HeadingText}>Hey,</CText> */}
                  <CText style={productDetailStyle.HeadingText}>
                    This product is{'\n'}<CText style={productDetailStyle.ProductNameText}>
                    GENUINE !
                  </CText>
                  </CText>
                 
                </View>
                <View style={productDetailStyle.ItemContainer}>
                  <CText style={productDetailStyle.HeadingText}>
                    No. of time scanned {'\n'}<CText style={productDetailStyle.ScannedText}>
                    {scan_count}
                  </CText>
                  </CText>
                 
                </View>
                <View style={productDetailStyle.ItemContainer}>
                  <CText style={productDetailStyle.HeadingText}>
                    Date / Time of last scan{'\n'}<CText style={productDetailStyle.ScannedText}>
                    {last_scanned}
                  </CText>
                  </CText>
                
                </View>
                <View style={productDetailStyle.ItemContainer}>
                  <Image
                    source={{uri: image}}
                    style={{width: '100%', height: 400}}
                  />
                </View>
               {label_image?
                <View style={productDetailStyle.ItemContainer}>
                  <Image
                    source={{uri: label_image}}
                    style={{width: '100%', height: 400,resizeMode:"contain"}}
                  />
                </View>
                :
                null
              }
              <Text style={{fontSize:18,alignSelf:"center",textAlign:"center"}}>
                Click on More Information for product details.
                </Text>
             
              </View>
              <View style={{height:50}}>

              </View>
            </ScrollView>
            <View style={{height:50,width:"100%",position:"absolute",backgroundColor:"white",bottom:0,flexDirection:"row",elevation:2,borderTopWidth:.5,borderColor:"grey"}}>
              <TouchableOpacity onPress={()=>{this.modalHandler()}} style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"white",borderRightWidth:.5,elevation:1}}>
                <Text style={{fontSize:16,color:COLORS.SECONDARY_COLOR}}>
                  More Information
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.ReportHandler()}} style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:COLORS.SECONDARY_COLOR,elevation:1}}>
                <Text style={{fontSize:16,color:"white"}}>
                  Report
                </Text>
                </TouchableOpacity>
              </View>
          </View>
        ) : (
          
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 280,
                textAlignVertical: 'center',
              }}>
              <CText style={{fontSize: 30, color: 'red', textAlign: 'center'}}>
                FAKE PRODUCT   {<Icon name="window-close" solid size={40} color="red" />}
              </CText>
              <CText style={{fontSize: 20, padding: 20, textAlign: 'center'}}>
                This is not a genuine product. Please report this to authority
                using report issue 
              </CText>
              <View style={productDetailStyle.ButtonStyle}>
                <TouchableOpacity onPress={this.ReportHandler}>
                  <View style={productDetailStyle.ButtonContainer}>
                    <CText style={productDetailStyle.ButtonText}>Report</CText>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          
        )}
      </View>
    );
  }
}

export default ProductDetailScreen;
