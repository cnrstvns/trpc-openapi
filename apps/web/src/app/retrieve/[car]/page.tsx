'use client';

import React from 'react';
import trpc from '../../../helpers/trpc';

type Props = {
  params: {
    car: string;
  };
};

export default function Car({ params }: Props) {
  const { data: car, isLoading } = trpc.car.retrieve.useQuery({
    id: parseInt(params.car, 10),
  });

  if (isLoading) return <>Loading...</>;
  if (!car) return <>Not found...</>;

  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <div className="mb-3">Car details:</div>

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
    </div>
  );
}
