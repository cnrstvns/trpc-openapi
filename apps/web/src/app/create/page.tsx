'use client';

import React, { useCallback } from 'react';
import Input from '../../components/Input';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import trpc from '../../helpers/trpc';
import { useRouter } from 'next/navigation';

export default function CreateCar() {
  const router = useRouter();

  const { mutateAsync: createCar, isLoading } = trpc.car.create.useMutation({
    onSuccess: (id) => router.push(`/retrieve/${id}`),
  });

  const initialValues = {
    make: '',
    model: '',
    year: 2023,
  };

  const validationSchema = yup.object({
    make: yup.string().required('Please enter a make'),
    model: yup.string().required('Please enter a model'),
    year: yup
      .number()
      .required('Please enter a year')
      .min(2000, 'Please enter a year greater than or equal to 2000')
      .max(2024, 'Please enter a year less than than or equal to 2024'),
  });

  const handleSubmit = useCallback(
    (values: typeof initialValues) => {
      return createCar(values);
    },
    [createCar],
  );

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-96 border border-gray-600 rounded p-4 space-y-3">
        <div className="text-xl font-medium">Create car</div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur
        >
          <Form className="space-y-3">
            <div>
              <div className="text-sm text-gray-500">Year</div>
              <Field as={Input} name="year" type="number" min={2000} />
              <ErrorMessage
                component="div"
                name="year"
                className="text-sm mt-1 text-red-400"
              />
            </div>

            <div>
              <div className="text-sm text-gray-500">Make</div>
              <Field as={Input} name="make" />
              <ErrorMessage
                component="div"
                name="make"
                className="text-sm mt-1 text-red-400"
              />
            </div>

            <div>
              <div className="text-sm text-gray-500">Model</div>
              <Field as={Input} name="model" />
              <ErrorMessage
                component="div"
                name="model"
                className="text-sm mt-1 text-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition px-2 py-1.5"
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
