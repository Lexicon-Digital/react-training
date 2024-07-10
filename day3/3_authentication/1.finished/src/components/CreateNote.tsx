import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostItNote, PostRequest } from "../types/types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type FormErrors = { author?: string; note?: string };

const getErrors = (note: Partial<PostItNote>): FormErrors | null => {
  const hasAuthorError = !note.author || typeof note.author !== "string";
  const hasNoteError = !note.note || typeof note.note !== "string";

  if (!hasAuthorError && !hasNoteError) {
    return null;
  }

  return {
    author: hasAuthorError ? "Author is required" : undefined,
    note: hasNoteError ? "Note is required" : undefined,
  };
};

export default function CreateNote() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<FormErrors | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: async (note: PostRequest) => {
      const res = await fetch("https://intro-lemon.vercel.app/api/posts", {
        method: "post",
        body: JSON.stringify(note),
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // clear the cache to tell TanStack Query to fetch the posts again automatically
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated || !user) {
    return <div>Not Authenticated...</div>;
  }

  const createNote: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const postItNote: Partial<PostItNote> = {
      author: user.email,
      note: event.currentTarget.note.value,
    };

    const formErrors = getErrors(postItNote);
    setErrors(formErrors);
    if (formErrors) {
      return;
    }

    await mutation.mutateAsync({
      author: postItNote.author!,
      note: postItNote.note!,
    });

    navigate(`/`);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={createNote}>
        {errors?.author && <span className="form-error">{errors.author}</span>}
        <input
          type="text"
          id="note"
          placeholder="Note"
          disabled={mutation.isPending}
        />
        {errors?.note && <span className="form-error">{errors.note}</span>}
        <button type="submit" disabled={mutation.isPending}>
          Save Note
        </button>
      </form>
    </div>
  );
}
