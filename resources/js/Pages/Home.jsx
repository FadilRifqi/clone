import { usePage } from '@inertiajs/react';

export default function Home({ response }) {
  const { auth } = usePage().props;

  console.log(auth);

  return (
    <>
      <h1>Welcome</h1>
      <p>Hello welcome to your first Inertia app!</p>
    </>
  );
}
