import avatar from "../assets/avatar.jpg";
import gitShoes from "../assets/gitShoes.png";
import reactShoes from "../assets/reactShoes.png";
import vueJsShoes from "../assets/vueJsShoes.png";

const api = {
  feedbacks: [
    {
      id: 1,
      userAvatar: avatar,
      message:
        '"Comprei o modelo Create-React-App, não me arrependo, super confortável e a entrega foi rápida <3"',
    },
    {
      id: 2,
      userAvatar: avatar,
      message: '"O modelo Git Push --Force é delicinha (:"',
    },
  ],
  shoes: [
    {
      id: 1,
      image: reactShoes,
      name: "Tênis Create-React-App ",
      promotion: "-30%",
    },
    {
      id: 2,
      image: vueJsShoes,
      name: "Tênis  Vue JS",
      promotion: "-50%",
    },
    {
      id: 3,
      image: gitShoes,
      name: "Tênis Git Push --Force",
      promotion: "-40%",
    },
  ],
};

export default api;
