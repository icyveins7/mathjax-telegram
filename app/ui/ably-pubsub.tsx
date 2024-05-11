// 'use client';

import React, { useState, useEffect } from 'react';
import * as Ably from 'ably';
import { AblyProvider, useChannel, useConnectionStateListener } from 'ably/react';



export default function AblyPubSub() {

    // Connect to Ably using the AblyProvider component and your API key
    console.log(process.env.ABLY_API);

    // I don't know why this doesn't work with process.env.ABLY_API ??
    const client = new Ably.Realtime(
        process.env.ABLY_API
    );
    const [messages, setMessages] = useState<Ably.Message[]>([]);

    client.connection.on('connected', () => {
        console.log('Connected to Ably!');
    });

    const channel = client.channels.get('get-started');
    channel.subscribe((message) => {
        // message.name;
        // message.data;

        // console.log(message.name);
        // console.log(message.data);

        setMessages(previousMessages => [...previousMessages, message]);
        console.log(messages.length);
        console.log(messages);
    });

    let [messageRender, setMessageRender] = useState<React.JSX.Element[]>([]);
    useEffect(() => {
        setMessageRender(
            messages.map(message => {
                return <p key={message.id}>{message.data.body}</p>
            })
        );
        // console.log("Updated messageRender");
        // console.log(messages);
        // console.log(messageRender);
    }, [messages]);



    // useConnectionStateListener('connected', () => {
    //     console.log('Connected to Ably!');
    // });
    //
    // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
    // const { channel } = useChannel('get-started', 'first', (message) => {
    //     console.log(message);
    //     // setMessages(previousMessages => [...previousMessages, message]);
    // });

    return (
        <AblyProvider client={client}>
            Publish a message with the name 'first' and the contents 'Here is my first message!' when the 'Publish' button is clicked
            <div>
                <button onClick={() => { channel.publish('first', 'Here is my first message!') }}>
                    Publish
                </button>
                <div>
                    These are the messages:
                    {
                        messageRender
                    }
                </div>
            </div>
        </AblyProvider>
    );
}

