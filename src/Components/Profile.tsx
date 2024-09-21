import React from "react";
import { useProfileQuery } from "../Redux/profile/profileApi";
import loadingImage from "../assets/loading.gif";
import { useAppDispatch } from "../Redux/hooks";
import { userLoggedOut } from "../Redux/auth/authSlice";
const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useProfileQuery(undefined);
  const user = data?.data;

  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" lg:px-20 px-1 ">
          <div className=" my-10 bg-black text-white w-full h-full rounded-md py-8 mx-auto ">
            <h1 className=" text-center text-2xl font-bold py-6 ">
              User Information
            </h1>
            <div className=" w-full h-full  p-4 lg:flex items-center gap-10 mx-auto ">
              {/* <h1>Profile Page</h1> */}
              <div className="    ">
                {user?.image ? (
                  <img
                    src={user?.image}
                    alt="profile-image"
                    className=" w-[180px] h-[180px] object-cover rounded-full "
                  />
                ) : (
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                    alt="profile-image"
                    className=" w-[180px] h-[180px] object-cover rounded-full "
                  />
                )}
              </div>
              <div className=" text-xl flex flex-col font-bold gap-2 ">
                <h1 className=" capitalize ">{user?.name}</h1>
                <h1 className=" capitalize ">{user?.email}</h1>
                <h1 className=" capitalize ">{user?.phone}</h1>
                <h1 className=" capitalize ">{user?.address}</h1>
                {/* <h1 className=" capitalize ">
                  <FormaDate dateString={user?.createdAt} />
                </h1> */}
                <button
                  onClick={() => dispatch(userLoggedOut())}
                  className=" font-semibold capitalize px-4 py-2 bg-white text-black my-3 rounded "
                >
                  log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
