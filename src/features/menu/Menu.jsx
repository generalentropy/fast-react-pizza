import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// https://github.com/remix-run/react-router/discussions/10856
async function loader() {
  const menu = await getMenu();
  return menu;
}

Menu.loader = loader;

export default Menu;
