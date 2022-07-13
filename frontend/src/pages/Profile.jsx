import React, { useContext } from 'react';
import useFetch from '../services/useFetch';
import AuthContext from '../context/AuthContext';
import { Spinner } from '../components';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    `https://fichuastore.herokuapp.com/api/user/${user.user_id}/`
  );
  return <div>{loading ? <Spinner /> : <div>{JSON.stringify(data)}</div>}</div>;
};

export default Profile;
