import { useState } from "react";

const PasswordField = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="border-2 border-[#DFE1E3] rounded-md mt-3 w-[25vw] @sm:w-80 relative">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full px-3 py-3 rounded-md fs-18 bg-white focus-visible:outline-none border-0"
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {/* Add your eye icon here */}
        {passwordVisible ? ( //     viewBox="0 0 24 24" //     fill="none" //     xmlns="http://www.w3.org/2000/svg" //   <svg
          <img src="/images/auth/show_pass.svg" />
        ) : (
          <img src="/images/auth/eye_icon.svg" />
        )}
      </div>
    </div>
  );
};

export default PasswordField;
