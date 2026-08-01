'use client';

import SubmitButton from '@/components/form/SubmitButton';
import TextField from '@/components/form/TextField';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
