import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import CardGrid from '../../components/CardGrid';  // <-- Import CardGrid

type Props = {
  // Your existing props here, if any
};

const WithStaticProps = (/* { items }: Props */) => {
  const [selectedCard, setSelectedCard] = useState(null);  // <-- State for selected card

  return (
    <Layout title="Card Grid Example">
      <h1>Card Grid</h1>
      <p>
        This is an example of a card grid implemented in Next.js and TypeScript.
      </p>
      <CardGrid setSelectedCard={setSelectedCard} />  {/* <-- Added CardGrid */}
      {/* You can display the selected card details here, if you want */}
      {selectedCard && (
        <div>
          <h2>Selected Card: {selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
        </div>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Your existing getStaticProps logic here, if any
  return { props: {} };
};

export default WithStaticProps;
