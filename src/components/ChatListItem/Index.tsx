import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Channel } from "../../types";
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

export type ChatListItemProps = {
    channel: Channel;
}

const ChatListItem = (props: ChatListItemProps) => {

    const {channel} = props; //define props chatRoom as an object
    const navigation = useNavigation();
    //const user = chatRoom.users[1]; // initialise user by getting info from dummy data
    const onClick = () => {
        navigation.navigate('Chatroom', 
        {id: channel.id, //navigate to channel screen and show name of user u are chatting with
        name: channel.channel_text,
        })
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
        <View style={styles.midContainer}>
            <Text>{channel.channel_text}</Text>
            <Text>{channel.description}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
        {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default ChatListItem

