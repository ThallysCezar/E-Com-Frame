import { AppRoutes } from "./routes";
import {WishListProvider} from "./hooks/context";

function App() {
  return (
    <WishListProvider>
      <AppRoutes />
    </WishListProvider>
  );
}

export default App;
