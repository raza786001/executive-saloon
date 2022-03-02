import { View, Text, StyleSheet, TextInput, Image,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

//import { Icon } from 'react-native-vector-icons/icon';
export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header_Text}>Hi,Sutan Hussain</Text>
                <Text style={styles.header_Text1}>Book what do u love</Text>
            </View >
            <View style={styles.search_container}>
                <View style={styles.searchSection}>
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <TextInput style={styles.search_Text} placeholder='  Search for a service or venue'></TextInput>
                </View>
            </View>
            
            <ScrollView style={styles.bottom_container}>
                <View>
                    <Text style={styles.category_Text}>Popular Categories</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('SalonBranch')}>
                    <View style={{ flexDirection:'column' }}>
                        <View>
                            <Image
                            style={styles.Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection:'column' }}>
                        <View>
                            <Image
                             style={styles.Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Hair Salon</Text>
                        </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{ flexDirection:'column' }}>
                        <View>
                            <Image
                            style={styles.Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Spa</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection:'column' }}>
                        <View>
                            <Image
                             style={styles.Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Massage</Text>
                        </View>
                    </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.category_Text}>More Categories</Text>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <ScrollView horizontal={true} >
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{ flexDirection:'column' ,marginLeft:20}}>
                        <View>
                            <Image
                            style={styles.more_category_Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection:'column',marginLeft:20 }}>
                        <View>
                            <Image
                             style={styles.more_category_Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Hair Salon</Text>
                        </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{ flexDirection:'column' ,marginLeft:20}}>
                        <View>
                            <Image
                            style={styles.more_category_Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Spa</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection:'column' ,marginLeft:20}}>
                        <View>
                            <Image
                             style={styles.more_category_Image}
                                source={require ('../images/hair1.jpg')}
                            />
                        </View>
                        <View>

                            <Text style={styles.category_textInput}>Massage</Text>
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    searchIcon: {
        padding: 10,
    },
    header_container: {
        flex: 0.3,
        backgroundColor: '#FF0000',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60

    },
    header_Text: {
        fontSize: 30,
        marginLeft: '5%',
        marginTop: '10%',
        fontWeight: 'bold',
        color: 'white'
    },
    header_Text1: {
        fontSize: 20,
        marginLeft: '5%',
        color: 'white'

    },
    bottom_container: {
        flex: 4,
        backgroundColor: 'white'
    },
    search_container: {
        marginTop: '-7%',
        flex: 0.1,
        backgroundColor: 'white',
        width: '88%',
        marginLeft: '7%',
        borderRadius: 30

    },
    category_Text: {
        fontSize: 22,
        marginLeft: '5%',
        marginTop: '5%',
        fontWeight: 'bold',
        color: 'blue',
        //justifyContent:'flex-start'
    },
    search_Text: {
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 30
    },
    search_Text1: {
        fontSize: 10,
    },
    category_textInput: {
        fontSize: 30,justifyContent:'center',alignItems:'center',textAlign:'center',color:'blue'
    },
    Image:{
        borderRadius:10,
        width:200,
      // width:'100%',
      // height:'70%'
      height:190
    },
    more_category_Image:{
        borderRadius:10,
        width:180,
      // width:'100%',
      // height:'70%'
      height:180
    }
});