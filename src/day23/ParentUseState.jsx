import ChildD24A from "./childUseStateA";
// import { createContext } from "react";
import { ProfileProvider } from "./context";

// const profileContext = createContext(null);

// const ProfileProvider = profileContext.Provider;

const ParentD24A = () => {
  return (
    <ProfileProvider value={{ name: "Satyam", city: "Jabalpur" }}>
      <div>
        <p>I am Parent D24A</p>
        <ChildD24A />
      </div>
    </ProfileProvider>
  );
};

export default ParentD24A;
// export { profileContext, ProfileProvider };
