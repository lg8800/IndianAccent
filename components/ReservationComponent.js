import React, { Component } from 'react';
import { Alert, Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal } from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

class Reservation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guests: 1,
            vegetarian: false,
            date: '',
        }
    }

    static navigationOptions = {
        title: 'Reserve Table'
    }

    handleReservation() {

       const { date, guests, vegetarian } = this.state;
       console.log(JSON.stringify(this.state));

       Alert.alert(
        'Your Reservation OK?',
        `Number of guests: ${guests}\nVegetarian? ${vegetarian ? 'Yes' : 'No'}\nDate and Time:${date}`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => this.resetForm(),
          },
          {
            text: 'OK',
            onPress: () => {
                this.presentLocalNotification(this.state.date);
                this.confirmReservation(date);
            }
          },
        ],
        { cancelable: false },
      );
    }

    confirmReservation(date) {
        this.resetForm();
      }

    resetForm() {
        this.setState({
            guests: 1,
            vegetarian: false,
            date: ''
       }) ;
    }

    async obtainNotificationPermission() {
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS)
        if( permission.status != 'granted') {
            permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if(permission.status != 'granted') {
                Alert.alert('Permission not granted to show notifications');
            }
        }
        return permission;
    }

    async presentLocalNotification(date) {
        await this.obtainNotificationPermission();
        Notifications.presentLocalNotificationAsync({
            title: 'Your Reservation',
            body: 'Reservation for ' + date + ' requested',
            ios: {
                sound: true
            },
            android: {
                sound: true,
                vibrate: true,
                color: '#fa0255'
            }
        }) 
    }

    render() {

        const todayDate = new Date().toISOString().split('T')[0];
        return(
            <Animatable.View animation="zoomIn" duration={2000}>
                <ScrollView>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Number of Guests</Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={this.state.guests}
                            onValueChange={(itemValue, itemIndex) => this.setState({ guests: itemValue})}
                            >
                                <Picker.Item label='1' value='1' />
                                <Picker.Item label='2' value='2' />
                                <Picker.Item label='3' value='3' />
                                <Picker.Item label='4' value='4' />
                                <Picker.Item label='5' value='5' />
                                <Picker.Item label='6' value='6' />
                        </Picker>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Vegetarian/Non-vegetarian?</Text>
                        <Switch
                            style={styles.formItem}
                            value={this.state.vegetarian}
                            onTintColor='#512DAB'
                            onValueChange={(value) => this.setState({ vegetarian: value })}
                            >
                        </Switch>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Date and Time</Text>
                        <DatePicker
                            style={{ flex: 2, marginRight: 20}}
                            date={this.state.date}
                            format=''
                            mode='date'
                            placeholder='select date and time'
                            minDate='2017-01-01'
                            confirmBtnText='Confirm'
                            cancelBtnText='Cancel'
                            customStyles={{
                                dateIcon: {
                                    position: "absolute",
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => {this.setState({ date: date})}}
                            />
                    </View>
                    <View style={styles.formRow}>
                        <Button
                            title='Reserve'
                            color='#fa0255'
                            onPress={() => this.handleReservation()}
                            accessibilityLabel='Learn more about this purple button'
                            />
                    </View>
                </ScrollView>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#fa0255',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
})

export default Reservation;
