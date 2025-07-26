import {
  RouterProvider,
} from "react-router";
import router from "./routes/routes";
import { Button, CssBaseline } from "@mui/material";
import { useThemeMode } from "./context/ThemProvider";

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App