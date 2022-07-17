import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleData = () => {
  // get id params
  const { id } = useParams();
  const [obj, setObj] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
      const data = await response.json();
      setObj(data.children);
    };
    fetchData();
  }, [id]);

  console.log(obj);
  console.log(id);
  return (
    <div className='container mx-auto '>
      {Object.keys(obj).map((item) => {
        const htmlString = obj[item].text;
        return <div className='text-2xl  bg-[#222831] text-[#EEEEEE] p-2 m-2 rounded' key={item.id}>
            <h1 className='font-bold'>Item : {item.title}</h1>
            <h3 className='font-semibold'>points: {item.points}</h3>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>;
      })}
    </div>
  );
};

export default SingleData;
