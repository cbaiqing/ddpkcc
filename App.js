import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri: "http://dev-backend.u-pin.org:81/api/graphql/"
});
import Main from './app/Main';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <ApolloProvider client={client}>
                <Main/>
            </ApolloProvider>
        );
    }
}
