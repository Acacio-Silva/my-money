import { Container, TransactionTypeContainer, RadioBox } from "./style";
import Modal from 'react-modal'
import { FormEvent, useContext, useState } from "react";
import {TransactionContext} from '../../TransactionsContext'

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const {createTransaction} = useContext(TransactionContext);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    

    async function handleCreateNewTransaction(e: FormEvent){
        e.preventDefault();
        await createTransaction({
           title,
           amount,
           category,
           type,
           
       })
       setTitle('')
       setAmount(0);
       setCategory('');
       setType('deposit')
       onRequestClose()
    }


    return (
        
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay" 
        className="react-modal-content">
        
        <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">[x]</button>


        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            <input type="text"
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />
            <input type="Number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
            />
            <TransactionTypeContainer>
                <RadioBox className="green"
                type="button"
                isActive={type === 'deposit'}
                activeColor={'green'}
                onClick={()=>setType('deposit')}
                > <span>Entradas</span>  </RadioBox>
                
                <RadioBox className="red"
                isActive={type==='withdraw'}
                activeColor={'red'}
                type="button"
                onClick={()=>setType('withdraw')}
                > <span>Saídas</span>  </RadioBox>


            </TransactionTypeContainer>

            <input type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
        </Container>
        </Modal>
        
    )
}