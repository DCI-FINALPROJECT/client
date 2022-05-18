import React,{useEffect,useState,useContext} from 'react';
import { DataStore } from "../../DataStore";

function UserPageOrderHistory() {

  const { user } = useContext(DataStore);

  const [allOrders,setAllOrders] = useState([]);

  const getAllOrders = async () => {
    await fetch("https://smartshopdcifinal.herokuapp.com/myallorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((data) => data.json())
      .then((data) => setAllOrders(data));
  };

  useEffect(() => {
    getAllOrders();
  }, []);


  console.log(allOrders);

  return (
<table class="table table-striped col-lg-9">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Order Number</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
{
  allOrders.map((order,index)=>{
    return(
      <tr>
      <th scope="row">{index+1}</th>
      <td>{order.orderNumber}</td>
      <td>{order.date}</td>
      <td>€ {order.amount}</td>
      <td> .... </td>
    </tr>
    )
  })
}
  </tbody>
</table>
  )
}

export default UserPageOrderHistory