import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./Components";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally((error) => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap items-center justify-between bg-gray-400">
      <div className="w-full block text-center">
        <Header />
        <main className="text-red-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum optio enim corporis sequi fugiat sunt possimus aut similique. Error dolore est molestias quaerat hic recusandae necessitatibus maxime, tempore unde, sit voluptas. Impedit accusamus veniam sint eveniet ea fugit, expedita harum incidunt officiis animi id quas reprehenderit amet placeat dolore vero ab repellat explicabo esse voluptates error facilis. Deserunt quas qui aliquid atque debitis ad, tempore inventore quis voluptas, nobis modi! Molestiae veniam reprehenderit neque, officiis, praesentium quae vitae iure iste cum soluta id rem at voluptates, aperiam dolorem. Ratione recusandae, aliquam pariatur quo tempora nisi ipsum minima animi assumenda tenetur corrupti perspiciatis dignissimos modi esse dolorum repellat. Cum ab dignissimos molestiae mollitia qui modi vel quo, eligendi ea? Beatae, tempora possimus aspernatur recusandae distinctio delectus illum repellat incidunt exercitationem cumque voluptas itaque asperiores ut odit quos commodi ipsa consequatur laborum quis vitae accusamus tenetur modi quidem adipisci. Tempora iure eligendi eaque praesentium, animi corporis quod aperiam illo et! Itaque nulla quaerat rerum aut architecto labore quis. Inventore earum numquam omnis, sequi quaerat quo perspiciatis labore dignissimos voluptate quae nulla possimus enim iste nihil placeat reprehenderit sunt quibusdam ea porro aliquam harum? Voluptatem enim facilis quis quisquam harum corrupti, omnis unde distinctio autem dolorum ipsa reiciendis, fugit cum quo quasi ex nemo. Vel praesentium aspernatur expedita ad cumque reprehenderit recusandae atque sunt commodi, enim numquam voluptate eveniet quae delectus. Cum illo illum, vitae nisi vel eius impedit corrupti asperiores architecto, consectetur ea laudantium culpa eveniet dolorem suscipit dolore unde vero provident aperiam quaerat. Voluptatum dolor sint veniam at consequatur, provident magni necessitatibus adipisci ex, hic iure aliquam enim animi nam veritatis. Ipsam error expedita quasi repellat illum, beatae itaque libero veniam veritatis possimus ducimus, earum omnis ab commodi nulla! Voluptates qui ad ipsa? Ipsum amet consectetur ea, voluptatum fuga numquam cum consequuntur dignissimos eveniet at reprehenderit velit quis eos laboriosam sequi dicta, voluptas ipsa quibusdam nam. Totam, itaque enim dolor, voluptas, commodi deleniti quod dicta dolorum id nulla voluptate beatae architecto soluta hic. Quasi delectus aperiam, quo quas doloribus veniam fugiat rem magnam voluptas, ullam sequi nam fuga consequuntur quos nulla officiis labore vel laudantium? Eligendi atque quia odit fugiat molestiae animi harum cupiditate repellendus ex commodi! Nisi perspiciatis iure neque alias dignissimos asperiores blanditiis facilis repudiandae facere aliquid nemo id ipsam eligendi ad quis sunt, nihil quidem reiciendis eos et. Atque sequi explicabo repellat provident, similique quis nisi exercitationem itaque perspiciatis dignissimos debitis consequuntur earum! Blanditiis deserunt quasi nam ipsam quibusdam. Hic esse laboriosam repudiandae ad, delectus mollitia blanditiis autem veniam. Omnis necessitatibus illum, culpa ipsum consequatur repellat mollitia asperiores incidunt quisquam praesentium esse cupiditate accusamus eveniet doloremque placeat odio obcaecati aliquam debitis, repudiandae pariatur beatae. Asperiores laudantium nam architecto eaque quia alias sunt, natus repudiandae tenetur quo commodi, soluta ipsam sapiente nisi corrupti? Amet atque saepe dicta sequi magni quod sit! Optio quam, eligendi et, cupiditate illum velit possimus illo a, culpa veniam est voluptate provident sunt quod expedita vel aperiam voluptatibus consequuntur modi assumenda debitis excepturi deleniti? Maiores suscipit id quod odio temporibus eveniet ducimus doloribus totam nostrum! Ut culpa amet laborum ab distinctio quaerat incidunt laudantium molestiae debitis mollitia sed quis totam consectetur, porro dicta quam omnis? Debitis nostrum cumque ea quos! Excepturi eveniet sit libero! Nihil iusto optio consectetur deleniti necessitatibus excepturi repudiandae maxime iste pariatur mollitia, eligendi a iure facere qui sit commodi aut cupiditate atque temporibus voluptatibus aperiam perspiciatis! Rem atque aspernatur non aliquid fugiat consectetur hic eius consequatur alias fugit eaque laudantium modi nisi sapiente, ipsa qui fuga perspiciatis aliquam cumque nesciunt recusandae pariatur enim! Itaque repudiandae, at suscipit sapiente aperiam sunt, eveniet nisi ea quidem repellat ut quaerat, facere ratione? Labore nostrum veritatis quos sit dolorum, veniam quasi. Aliquid aperiam ipsum assumenda harum aspernatur doloremque, quas ducimus, a asperiores unde quod veritatis saepe itaque nostrum architecto. Magni ratione ipsa ea, quis eius sapiente modi! Sunt dolor aut nam modi esse temporibus eveniet, amet nobis doloremque id blanditiis laudantium libero nemo sint enim rerum. At, doloremque. Aspernatur, numquam!
          </p>
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading.....</div>
  );
}

export default App;
