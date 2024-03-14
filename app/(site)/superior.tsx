import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SuperiorPage = () => {
  const router = useRouter();

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Superior Page</h1>
      <p>This is the superior page. You can add your content here.</p>
    </div>
  );
};

export default SuperiorPage;
