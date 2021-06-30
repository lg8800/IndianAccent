import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return( 
            <ScrollView>
                    <Card
                        featuredTitle="Supreme Thali"
                        image={require('./images/thali.png')}>
                        <Text
                            style={{margin: 10}}>
                            A combination of Indian meal with Cottage Curry, Indian vegetable, Lentil, Indian Yogurt, Indian Bread and Indian Dessert.</Text>
                    </Card>
                    <Card
                        featuredTitle="Weekend Grand Buffet"
                        image={require('./images/buffet.png')}>
                        <Text
                            style={{margin: 10}}>
                            Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just ₹499 per person.</Text>
                    </Card>
                    <Card
                        featuredTitle="Chef Sanjeev Kapoor"
                        featuredSubtitle="Executive Chef"
                        image={require('./images/sanjeev.png')}>
                        <Text
                            style={{margin: 10}}>
                            Chef Sanjeev Kapoor is the most celebrated face of Indian cuisine. He is Chef extraordinaire, runs a successful TV Channel, hosted Khana Khazana cookery show on television for more than 17 years, author of 150+ best selling cookbooks, restaurateur and winner of several culinary awards. He is living his dream of making Indian cuisine the number one in the world!</Text>
                    </Card>
            </ScrollView>
        );
    }
}

export default Home;