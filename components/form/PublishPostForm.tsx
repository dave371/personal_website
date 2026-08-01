'use client';
import { useAppForm } from '@/utils/createForm';
import TipTap from '../editor/TipTap';

export default function PublishPostForm() {
  const form = useAppForm({
    defaultValues: {
      author: '',
      post: '',
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    },
  });

  return (
    <div>
      <h1>Form</h1>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.AppField
            name="author"
            children={(field) => <field.TextField label="Author Name" />}
          />

          <TipTap />

          <form.AppForm>
            <form.SubmitButton label="Submit" />
          </form.AppForm>
        </form>
      </div>
    </div>
  );
}
