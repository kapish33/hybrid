import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';

const ShowData = () => {
  const { array, error, isLoading, fillArray } = useContext(DataContext);
  useEffect(() => {
    fillArray();
  }, []);
  return (
    <div className='container mx-auto py-4'>
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
        <div className='row'>
          {array.map((item) => (
            <div className='col-md-4' key={item.objectID}>
              <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.author}</p>
                  <p className='card-text'>{item.points} points</p>
                  <p className='card-text'>{item.num_comments} comments</p>
                  <small className='text-muted'>{item.created_at}</small>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <a
                        href={item.url}
                        target='_blank'
                        className='btn btn-sm btn-outline-secondary'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowData;
