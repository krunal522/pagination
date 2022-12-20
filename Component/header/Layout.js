import React from 'react';
import { View } from 'react-native';
import Header from './Header';

export default function Layout(props) {
    return (
        <View style={{ flex: 1 }}>
            <Header pageTitle={props.pageTitle} {...props} />
              <View style={{ flex: 1 }}>{props.children}</View>
        </View>
    );
}
