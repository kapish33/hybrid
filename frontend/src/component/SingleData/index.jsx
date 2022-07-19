import React from 'react';
import { motion } from 'framer-motion';
import { whileInViewAnimation } from '../../utils/variants';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleData = () => {
  // get id params
  const { id } = useParams();
  const [obj, setObj] = React.useState({});
  const [isLoading, setIdLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIdLoading(true);
      const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
      const data = await response.json();
      setObj(data.children);
      setIdLoading(false);
    };
    fetchData().catch((error) => {
      setError(error);
      setIdLoading(false);
    });
  }, [id]);

  console.log(obj);
  console.log(id);
  return (
    <div className='container mx-auto '>
      {isLoading ? (
        <div className='text-center'>
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className='text-center'>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      ) : (
        <>
          {Object.keys(obj).map((item) => {
            const htmlString = obj[item].text;
            return (
              <motion.div
                variants={whileInViewAnimation({ type: 'up' })}
                initial='initial'
                whileInView='whileInView'
                className='text-2xl  bg-[#222831] text-[#EEEEEE] p-2 m-2 rounded'
                key={item.id}
              >
                <h1 className='font-bold'>Item : {item.title}</h1>
                <h3 className='font-semibold'>points: {item.points}</h3>
                <div dangerouslySetInnerHTML={{ __html: htmlString }} />
              </motion.div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SingleData;
