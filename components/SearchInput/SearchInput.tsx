import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import styles from './SearchInput.styles';

export interface ISearchInputProps {
  placeholder: string;
  onSubmit: (t: string) => void;
}

export interface ISearchInputState {
  text: string;
}

export default class SearchInput extends Component<ISearchInputProps, ISearchInputState> {
  state = {
    text: '',
  };

  handleChangeText = (text: string) => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { text } = this.state;

    if (!text) {
      return;
    }

    this.props.onSubmit(text);

    this.setState({ text: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.text}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
          autoCorrect={false}
          placeholder={this.props.placeholder}
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always"
        />
      </View>
    );
  }
}
