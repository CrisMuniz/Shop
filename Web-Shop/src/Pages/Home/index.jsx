import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState(null);

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=45')
      .then(response => response.json())
      .then(data => setItems(data))
    }, [])
    return (
      <>
       <Layout>
        <div className="grid grid-cols-4 gap-y-4  gap-x-2 w-full max-w-screen-lg">
          {
            items?.map(item => (
               <Card key={item.id} data={item}/>
            ))
          }
        </div>
       </Layout>
      </>
    )
  }
  
  export default Home