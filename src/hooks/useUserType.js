import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const useUserType = () => {
  const { data } = useSelector((state) => state.login);
  const { currentUserDetails } = useSelector((state) => state.currentUser);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const getUserType = () => {
      if (data.data) {
        setIsAdmin(data.data.type === "Admin");
      } else if (currentUserDetails.user) {
        setIsAdmin(currentUserDetails.user.type === "Admin");
      }
    };

    getUserType();
  }, [currentUserDetails, data]);

  return isAdmin;
};

export default useUserType;
