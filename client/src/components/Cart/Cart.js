import React, {useState} from 'react'
import "./Cart.css"
import { FiShoppingCart } from 'react-icons/fi'
import { Modal, Button, Input } from "@nextui-org/react"
import CartItem from '../CartItem/CartItem'

function Cart() {

    let cartitems = [
        {name: "Valorant",
        period: "7 days",
        price: 2.00
        },
        {name: "Red Dead Redemption 2",
        period: "30 days",
        price: 5.00 
        }
    ]

    let cartTotal = cartitems.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);

    const [visible, setVisible] = useState(false);

    const openHandler = () => {
        setVisible(true);

    };
    const closeHandler = () => setVisible(false);

  return (
    <div className='cartContainer'>
        <FiShoppingCart size="1.5em" onClick={openHandler}/>
        <Modal
        closeButton
        // blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        >
            <Modal.Header>
                <h2> Cart </h2>
            </Modal.Header>
            <Modal.Body>
                <div className="cartItemsHeader">
                    <div className="cartItemsHeaderLeft">
                        <p> # </p>
                        <p> Name </p>
                    </div>
                    <div className="cartItemsHeaderRight">
                        <p> Period </p>
                        <p> Price </p>
                        <p> Action </p>
                    </div>           
                </div>
                {cartitems.map( (item, idx) =>
                    <CartItem item = {item} key = {idx} idx={idx}/>
                 )}

                 {/* <div className="cartItemsTotal">
                    <b>Total = ${cartTotal}</b>
                 </div> */}
            </Modal.Body>
            <Modal.Footer justify='center'>
                <Button shadow color="secondary" >
                    <b>Checkout ${cartTotal}</b> 
                </Button>
            </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cart