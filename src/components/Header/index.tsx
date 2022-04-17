import { Container, Content } from "./styles";

interface HeaderTypes{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderTypes){

 

    return(
        <Container>
            <Content>
            <h1>Logo</h1>
            <button onClick={onOpenNewTransactionModal}>New Transaction</button>
           
            </Content>
        </Container>
    );
}
