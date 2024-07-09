import { useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const [items, setItems] = useState(null);
  const {openModal} = useContext(ShoppingCartContext);

    useEffect(() => {
      fetch('https://dummyjson.com/products?limit=0')
      .then(response => response.json())
      .then(data => setItems(data.products))
    }, [])
    // console.log(items)
    return (
      <>
       <Layout>
        <div className="grid grid-cols-4 gap-y-4  gap-x-2 w-full max-w-screen-lg">
          {
            items?.map((item) => (
               <Card key={item.id} data={item}/>
            ))
          }
        </div>
        {openModal && (
          <Modal>
            <ProductDetail/>
          </Modal>
        )}
       </Layout>
      </>
    )
  }
  
  export default Home