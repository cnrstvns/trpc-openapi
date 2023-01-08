'use client';

import React from 'react';
import trpc from '../../helpers/trpc';

export default function Cars() {
  const { data: cars, isLoading } = trpc.car.list.useQuery();

  if (isLoading) return <>Loading...</>;
  if (!cars?.length) return <>No cars...</>;

  return (
    <div className="flex-col justify-center max-w-lg mx-auto">
      <div className="mb-3">All cars: ({cars.length})</div>

      <div className="gap-y-3 divide-y">
        {cars.map((car) => (
          <div className="flex space-x-3 py-2" key={car.id}>
            <div className="flex">
              <div className="font-medium">Make:</div>
              <div className="ml-2">{car.make}</div>
            </div>
            <div className="flex">
              <div className="font-medium">Model:</div>
              <div className="ml-2">{car.model}</div>
            </div>
            <div className="flex">
              <div className="font-medium">Year:</div>
              <div className="ml-2">{car.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
