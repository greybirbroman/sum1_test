import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SpanMessage } from '../components';
import { motion as m } from 'framer-motion';
import { formVariants } from '../utils/motion';

import {
  getErrorMessage,
  getSuccessMessage,
} from '../features/selectors/authSelectors';
import { useActions } from '../utils/hooks/useActions';

const Form = ({ onSubmit, title, children }) => {
  const { resetFormMessageAction } = useActions();

  useEffect(() => {
    resetFormMessageAction();
  }, []);

  const errorMessage = useSelector(getErrorMessage);
  const successMessage = useSelector(getSuccessMessage);

  return (
    <m.form
      variants={formVariants}
      initial='hidden'
      animate='show'
      noValidate
      onSubmit={onSubmit}
      className='flex flex-col h-fit gap-5 max-w-[550px] w-full rounded-xl shadow-lg p-4 lg:p-8 bg-slate-100 cursor-default'
    >
      <h4 className='w-fit text-2xl font-semibold blue-gradient'>{title}</h4>
      {errorMessage && <SpanMessage text={errorMessage} color='text-red-500' />}
      {successMessage && (
        <SpanMessage text={successMessage} color='text-green-500' />
      )}
      {children}
    </m.form>
  );
};

export default Form;
