import { Container, Content } from "./styles";

interface HeaderTypes{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderTypes){

 

    return(
        <Container>
            <Content>
            <h1>My Money</h1>
            <button onClick={onOpenNewTransactionModal}>New Transaction</button>
           
            </Content>
        </Container>
    );
}
