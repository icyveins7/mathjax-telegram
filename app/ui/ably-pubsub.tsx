'use client';

import React, { useState } from 'react';
import * as Ably from 'ably';
import { AblyProvider, useChannel, useConnectionStateListener } from 'ably/react';



export default function AblyPubSub() {

    // Connect to Ably using the AblyProvider component and your API key
    console.log(process.env.ABLY_API);
    const client = new Ably.Realtime(
        { key: process.env.ABLY_API }
    );
    const [messages, setMessages] = useState<Ably.Message[]>([]);

    useConnectionStateListener('connected', () => {
        console.log('Connected to Ably!');
    });

    // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
    const { channel } = useChannel('get-started', 'first', (message) => {
        console.log(message);
        // setMessages(previousMessages => [...previousMessages, message]);
    });

    return (
        <AblyProvider client={client}>
            Publish a message with the name 'first' and the contents 'Here is my first message!' when the 'Publish' button is clicked
            <div>
                <button onClick={() => { channel.publish('first', 'Here is my first message!') }}>
                    Publish
                </button>
                {
                    messages.map(message => {
                        return <p key={message.id}>{message.data.body}</p>
                    })
                }
            </div>
        </AblyProvider>
    );
}

