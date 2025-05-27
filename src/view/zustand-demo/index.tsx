import Left from "./left";
import Right from "./right";
import './index.css'
import usePriceStore from '../../store/price';

export default function Zustand() {
    const { price } = usePriceStore();
    return (
        <div>
           <Left></Left>
           <div className='price'>
            价格:<span>{price}</span>
            </div>
           <Right></Right>
        </div>
    )
}