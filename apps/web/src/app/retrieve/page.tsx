'use client';

import { useMemo } from 'react';
import trpc from '../../helpers/trpc';
import Link from 'next/link';

export default function RetrieveCar() {
  const { data: cars } = trpc.car.getCount.useQuery();

  const array = useMemo(
    () => new Array(cars).fill(undefined).map((_, i) => i + 1),
    [cars],
  );

  if (!cars) return <>Loading...</>;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4 max-w-sm">
        {array.map((i) => (
          <Link
            href={`/retrieve/${i}`}
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md p-2 text-center"
          >
            Car {i}
          </Link>
        ))}
      </div>
    </div>
  );
}
