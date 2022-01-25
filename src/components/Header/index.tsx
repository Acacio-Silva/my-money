import { Container, Content } from "./styles";

interface HeaderTypes{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderTypes){

 

    return(
        <Container>
            <Content>
            <p>Logo</p>
            <button onClick={onOpenNewTransactionModal}>New Transaction</button>
           
            </Content>
        </Container>
    );
}