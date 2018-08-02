import React, {Component} from 'react';
import {Container, Card, Image, Icon, Statistic, Button, Label} from 'semantic-ui-react';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {

    state = {
        manager: '',
        playersCount: 0,
        balance: 0,
        showButton: 'none'
    };

    async componentDidMount() {
        let address = await lottery.methods.getManager().call();
        this.setState({
            manager: address
        });

        let total = await lottery.methods.getPlayersCount().call();
        this.setState({
            playersCount: total
        });

        let money = await lottery.methods.getBalance().call();
        money = web3.utils.fromWei(money, 'ether');
        this.setState({
            balance: money
        });

        const accounts = await web3.eth.getAccounts();
        if (accounts[0] === address) {
            this.setState({
                showButton: 'inline'
            });
        } else {
            this.setState({
                showButton: 'none'
            });
        }
    }

    enter = async () => {
        const accounts = await web3.eth.getAccounts();
        await lottery.methods.enter().send({
            from: accounts[0],
            value: '1000000000000000000'
        });
        window.location.reload(true);
    };

    pickWinner = async () => {
        const accounts = await web3.eth.getAccounts();
        await lottery.methods.pickWinner().send({
            from: accounts[0]
        });
        window.location.reload(true);
    };

    refund = async () => {
        const accounts = await web3.eth.getAccounts();
        await lottery.methods.refund().send({
            from: accounts[0]
        });
        console.log('begin refresh');
        window.location.reload(true);
    };

    render() {
        console.log(`showButton:${this.state.showButton}`);
        return (
            <Container>
                <br/>
                <Card>
                    <Image src='/images/logo.jpg'/>
                    <Card.Content>
                        <Card.Header>六合彩</Card.Header>
                        <Card.Meta>
                            <span>管理员地址:</span>
                            <Label size="mini">{this.state.manager}</Label>
                        </Card.Meta>
                        <Card.Description>每周三晚上8点准时开奖</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user'/>
                        {this.state.playersCount} 人参与
                    </Card.Content>
                    <Card.Content>
                        <Statistic color='red'>
                            <Statistic.Value>{this.state.balance} eth</Statistic.Value>
                        </Statistic>
                    </Card.Content>
                    <Button animated='fade' onClick={this.enter}>
                        <Button.Content visible>投注产生希望</Button.Content>
                        <Button.Content hidden>购买放飞梦想</Button.Content>
                    </Button>
                    <Button color='green'
                            onClick={this.pickWinner}
                            style={{display: this.state.showButton}}
                    >
                        开奖
                    </Button>
                    <Button color='purple'
                            onClick={this.refund}
                            style={{display: this.state.showButton}}
                    >
                        退钱
                    </Button>
                </Card>
            </Container>
        );
    }
}

export default App;
