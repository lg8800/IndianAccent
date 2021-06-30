import React, { Component } from 'react';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { ScrollView, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

    sendmail() {
        MailComposer.composeAsync({
            recipients: ['indianaccent@food.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern: '
        });
    }

    openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
        number = 'telprompt:${7011163307}';
        }
        else {
        number = 'tel:${7011163307}'; 
        }
        Linking.openURL(number);
    };
    
    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return(
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <Card title='Contact Information'>
                        <Text style={{margin: 10}}>L Block 6, Connught Circle</Text>
                        <Text style={{margin: 10}}>Connaught Place</Text>
                        <Text style={{margin: 10}}>New Delhi-110001</Text>
                        <Text style={{margin: 10}}>Tel: +011 1234 5678</Text>
                        <Text style={{margin: 10}}>Fax: +011 8765 4321</Text>
                        <Text style={{margin: 10}}>Email:indianaccent@food.net</Text>
                        <Button
                            title=' Send Email'
                            buttonStyle={{ backgroundColor: '#fa0255'}}
                            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                            onPress={this.sendmail}
                            />
                        <Button
                            title=' Place an order'
                            buttonStyle={{ backgroundColor: '#33ff00'}}
                            icon={<Icon name='phone' type='font-awesome' color='white' />}
                            onPress={this.openDialScreen}
                            />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;