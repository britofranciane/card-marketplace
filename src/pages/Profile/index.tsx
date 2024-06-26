import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { fetchUserProfile } from '@services/userService';
import { Title, Loading } from '@components/index';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery('userProfile', fetchUserProfile);

  if (isLoading) <Loading />;

  if (error) navigate('/error');

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-6 w-full mt-4">
        <Title text="Profile" />
        <div className="flex flex-col items-center">
          <AiOutlineUser className="w-32 h-32 text-white mb-4" />
          <h2 className="text-2xl text-white font-bold">{user.name}</h2>
          <p className="text-[#9E9EB8]">{user.email}</p>
        </div>
      </div>
    </Suspense>
  );
};

export default Profile;
