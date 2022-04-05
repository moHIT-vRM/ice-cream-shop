import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import "../Forms.css";
import { IceCreamimg } from "./IceCreamimg";

const EditiceCream = () => {
  const [Newm, SetNewm] = useState({
    price: 0.0,
    inStock: true,
    quantity: 0,
    description: "",
    iceCream: {},
  });
  const put = useNavigate();
  
   
  const menuIt = useParams().id;
  //  const {} =useParams();
  
  // console.log(ide);

  useEffect(() => {
    (async (menuIt) => {
      const response = await fetch(`/api/menu/${menuIt}`);
      const res = await response.json();
      // console.log(res);
      const { id, price, inStock, description, quantity, iceCream } = res;
      SetNewm({
        id,
        price: price.toFixed(2),
        inStock,
        quantity: quantity.toString(),
        description,
        iceCream,
      });
    })(menuIt);
  }, [menuIt]);
  // console.log(Newm);

  const { id, price, inStock, description, quantity, iceCream } = Newm;

  const onChangeHand = (e) => {
    let newMenuItemData = {
      ...Newm,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    if (e.target.name === "quantity") {
      newMenuItemData.inStock = e.target.value !== "0";
    }
    if (e.target.name === "inStock" && !e.target.checked) {
      newMenuItemData.quantity = "0";
    }
    SetNewm(newMenuItemData);
  };

  const onSubmitme = async (e) => {
    e.preventDefault();

    const { id, price, inStock, description, quantity, iceCream } = Newm;

    const submitItem = {
      id,
      iceCream: { id: iceCream.id },
      price: parseFloat(price),
      inStock,
      quantity: parseInt(quantity),
      description,
    };

    await fetch(`/api/menu/${menuIt}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitItem),
    });

    put("/"); 
    // console.log(await deta.json())

    console.log(submitItem);
  };

  const onDeleteHand= async () =>{

    await fetch(`/api/menu/${menuIt}`, {
      method: "DELETE"
    })
    
    put("/");
  }

  return (
    <div>
      <main>
        <Helmet>
          <title>Update this Beauty | InSanE Ice-CreaM</title>
        </Helmet>
        {/* {document.title="Hello Ice-cream shop"} */}
        <h2 className="main_menu">Upadate this beauty</h2>
        <div className="form_main">
          <div className="form_img">
            <IceCreamimg iceCreamId={iceCream.id} className="myim" />
          </div>
          {/* <div className="form_cont">
            Hello
            <div className="lol">dfhsfjsfjsdjfdsfjs</div>
            
          </div> */}

          {/* ```````````````````````````````````````````````````````````````` */}
          <div className="form_content">
            <div className="form_sec1">
              <label>Name:</label>
              <span> {iceCream.name} </span>
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
                <button className="none" type="button" onClick={onDeleteHand}>
                Delete
              </button>
              </div>
            </form>
          </div>

          {/* <div className="form_cont1">
            <label>Name:</label>
            <label>Description:</label>
            <label>Quantity:</label>
            <label>Price:</label>
          </div>
          <div className="form_cont2">
            <span> Hello Name</span>
            <textarea name="description" rows="1" cols="20"/>
            <select name="quantity">
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              <input type="number" step="0.01" name="price"></input>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export { EditiceCream };
