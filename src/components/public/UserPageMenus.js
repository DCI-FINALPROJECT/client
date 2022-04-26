import React from "react";

function UserPageMenus() {
  return (
    <aside className="col-lg-3">
      <div className="card p-3 h-100">
        <nav className="nav flex-column nav-pills">
          <a className="nav-link" href="#">
            Account div
          </a>
          <a className="nav-link active" href="#">
            New orders
          </a>
          <a className="nav-link" href="#">
            Orders history
          </a>
          <a className="nav-link" href="#">
            My wishlist
          </a>
          <a className="nav-link" href="#">
            Transactions
          </a>
          <a className="nav-link" href="#">
            Profile setting
          </a>
          <a className="nav-link" href="#">
            Log out
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default UserPageMenus;
