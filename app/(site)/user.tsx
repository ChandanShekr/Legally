import { useEffect } from 'react';
import { useRouter } from 'next/router';

const UserPage = () => {
  const router = useRouter();

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      <p>This is the user page. You can add your content here.</p>
    </div>
  );
};

export default UserPage;
