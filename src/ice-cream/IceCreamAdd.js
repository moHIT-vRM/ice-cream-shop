import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import "../Forms.css";
import { IceCreamimg } from "./IceCreamimg";

const initialState = {
  name: '',
  price: 0.0,
  inStock: true,
  quantity: 0,
  description: "",
  iceCream: {
  }
}
const IceCreamAdd = () => {
  const [newIceCream, setNewIceCream] = useState(initialState);
  
  const navigate = useNavigate()
  const menuIt = useParams().id;
  //  const {} =useParams();
  
  // console.log(menuIt);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/menu/stock/list/${menuIt}`);
      // console.log(response)
      const res = await response.json();
      console.log(res);
      const { id,name} = res;
      setNewIceCream({
        ...initialState,
        iceCream:{id:id},
        name:name
      });
    })();
  }, [menuIt]);
  // console.log(Newm);

  const {  name, price, inStock, description, quantity, iceCream } = newIceCream;


  const onChangeHand = (e) => {
    let newMenuItemData = {
      ...newIceCream,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    if (e.target.name === "quantity") {
      newMenuItemData.inStock = e.target.value !== "0";
    }
    if (e.target.name === "inStock" && !e.target.checked) {
      newMenuItemData.quantity = "0";
    }
    setNewIceCream(newMenuItemData);
  };

 
  const onSubmitme = async (e) => {
    e.preventDefault()

    const submitItem = {
      
      iceCream: { id: iceCream.id },
      price: parseFloat(price),
      inStock,
      quantity: parseInt(quantity),
      description,
      name
    };

    await fetch(`/api/menu`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitItem),
    });
    navigate('/')
  };



  return (
    <div>
      <main>
        <Helmet>
          <title>Add Your Favourite IceCream</title>
        </Helmet>
        {/* {document.title="Hello Ice-cream shop"} */}
        <h2 className="main_menu">Choose Your Poison Flavour</h2>
        <div className="form_main">
          <div className="form_img">
            <IceCreamimg iceCreamId={menuIt} className="myim" />
          </div>
          {/* <div className="form_cont">
            Hello
            <div className="lol">dfhsfjsfjsdjfdsfjs</div>
            
          </div> */}

          {/* ```````````````````````````````````````````````````````````````` */}
          <div className="form_content">
            <div className="form_sec1">
              <label>Name:</label>
              <span> {name} </span>
            </div>
            <form onSubmit={onSubmitme} className="check_form">
              <div className="form_sec2">
                <label>Description:</label>
                <div>
                  <textarea
                    name="description"
                    rows="5"
                    value={description}
                    onChange={onChangeHand}
                    
                  />
                </div>
              </div>

              <div className="form_sec3">
                <label>InStock:</label>
                <div>
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={inStock}
                    onChange={onChangeHand}
                 
                  />
                </div>
              </div>
              <div className="form_sec4">
                <label>Quantity:</label>
                <div>
                  <select
                    name="quantity"
                    value={quantity}
                    onChange={onChangeHand}
                  
                  >
                    <option value="0">0</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
              <div className="form_sec5">
                <label>Price :</label>
                <div>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={price}
                    onChange={onChangeHand}
                
                  />
                </div>

                {/* <input type="number" step="0.01" name="price"></input> */}
              </div>

              <div className="form_sec6">
                <button className="ok" type="submit">
                  Save
                </button>
             
              </div>
            </form>
          </div>

        
        </div>
      </main>
    </div>
  );
};

export default IceCreamAdd
