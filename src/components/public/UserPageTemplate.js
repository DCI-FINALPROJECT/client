import React from "react";
import UserPageInfos from "./UserPageInfos";
import UserPageMenus from "./UserPageMenus";

function UserPageTemplate() {
  return (
    <div className="container mt-3 mb-3">
      <div class="row">
        <UserPageMenus/>
        <UserPageInfos/>

      </div>
    </div>
  );
}

export default UserPageTemplate;
