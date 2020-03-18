import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base'

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
        <Container style={styles.container}>
            <Header style={{height:70,paddingTop:15}}>
                <Left>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>So Much Beer</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})