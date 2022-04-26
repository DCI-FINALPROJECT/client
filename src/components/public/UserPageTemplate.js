import React, { useState } from "react";
import UserPageMenus from "./UserPageMenus";
import UserPageOrderInfos from "./UserPageActiveOrders";
import UserPageUserInfos from "./UserPageUserInfos";
import UserPageOrderHistory from "./UserPageOrderHistory";

function UserPageTemplate() {
  const [whichComponent, setWhichComponent] = useState(1);

  /*

  1: user infos
  2: active order
  3: order history

  */

  return (
    <div className="container mt-3 mb-3">
      <div class="row">
        <UserPageMenus
          whichComponent={whichComponent}
          setWhichComponent={setWhichComponent}
        />

        {whichComponent === 1 && <UserPageUserInfos />}
        {whichComponent === 2 && <UserPageOrderInfos />}
        {whichComponent === 3 && <UserPageOrderHistory />}
      </div>
    </div>
  );
}

export default UserPageTemplate;
