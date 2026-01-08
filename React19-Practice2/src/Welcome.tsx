import { useState, useActionState } from "react";

async function submitAction(previousState: any, formData: FormData) {
  const name = formData.get("username");

  await new Promise((res) => setTimeout(res, 1000));

  return { message: `User ${name} created successfully!` };
}

export const Welcome = () => {
  const [state, action, isPending] = useActionState(submitAction, null);

  return (
    <form action={action}>
      <input name="username" placeholder="Enter your username" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {state && <p>{state.message}</p>}
    </form>
  );
};
