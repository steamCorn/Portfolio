import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function NoPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="context">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
    </section>
  );
}
