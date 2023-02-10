import Login from "./Login";
import { ProfilerProps } from "./Profile";

export type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfilerProps>;
};

function Private({ isLoggedIn, component: Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="mohit" />;
  } else return <Login />;
}

export default Private;
