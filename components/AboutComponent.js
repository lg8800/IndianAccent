import React, { Component } from 'react';
import { Text, Card, ListItem } from 'react-native-elements';
import { View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

function History() {
    return(
        <Card title="Our History">
            <Text>
                Started in 2020, Indian Accent quickly established itself as a culinary icon par excellence in India. With its unique brand of world cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in India. Featuring one of the best chefs in the world, you never know what will arrive on your plate the next time you visit us.
            </Text>
            <Text>
                The restaurant traces its humble beginnings to The Khana Khazana, a successful chain started by our CEO, Mr. Rajendra Agrawal, that featured for the first time the world's best cuisines.
            </Text>
        </Card>
    );
}

class About extends Component {

    static navigationOptions = {
        title: 'About'
    };

    render() {

        const renderLeaders = ({item, index}) => {
            return (
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        leftAvatar={{ source: { uri: baseUrl + item.image}}}
                      />
            );
        };

        if(this.props.leaders.isLoading) {
            return(
                <ScrollView>
                    <History />  
                    <Card title='Corporate Leadership'>
                        <Loading />             
                    </Card>
                </ScrollView> 
            );
        }

        else if (this.props.leaders.errMess) {
            return(
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History />  
                        <Card title='Corporate Leadership'>
                            <Text>{this.props.leaders.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView> 
            ); 
        }

        else {
            return (
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History />  
                        <Card title='Corporate Leadership'>
                            <FlatList 
                                data={this.props.leaders.leaders}
                                renderItem={renderLeaders}
                                keyExtractor={item => item.id.toString()}
                                />                
                            </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
    }
}

export default connect(mapStateToProps)(About);