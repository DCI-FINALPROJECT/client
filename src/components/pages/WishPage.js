import { useCookies } from "react-cookie";
import Footer from "../public/Footer";
import Header from "../public/Header";
import WishPageProduct from "./WishPageProduct";


function WishPage() {

  
  const [cookiesWish, setCookiesWish] = useCookies(["wish"]);
  
  return (
    <div>
      <Header />
      <div className="container my-3 shadow">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-4">Wish List</h5>

                {cookiesWish.wish !== undefined && cookiesWish.wish.length > 0
                  ? cookiesWish.wish.map((product) => {
                      return (
                        <WishPageProduct key={product._id} product={product} />
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WishPage;