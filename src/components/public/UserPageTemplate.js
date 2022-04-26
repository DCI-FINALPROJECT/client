import React from "react";
import UserPageMenus from "./UserPageMenus";
import UserPageOrderInfos from "./UserPageOrderInfos";
import UserPageUserInfos from "./UserPageUserInfos";

function UserPageTemplate() {
  return (
    <div className="container mt-3 mb-3">
      <div class="row">
        <UserPageMenus />
        <UserPageUserInfos />
      </div>
    </div>
  );
}

export default UserPageTemplate;
