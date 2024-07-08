import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostItNote, PostRequest } from "./types/types";
import { useState } from "react";

type FormErrors = { author?: string; quote?: string };

const getErrors = (note: Partial<PostItNote>): FormErrors | null => {
  const hasAuthorError = !note.author || typeof note.author !== "string";
  const hasQuoteError = !note.quote || typeof note.quote !== "string";

  if (!hasAuthorError && !hasQuoteError) {
    return null;
  }

  return {
    author: hasAuthorError ? "Author is required" : undefined,
    quote: hasQuoteError ? "Quote is required" : undefined,
  };
};

export default function CreateNote() {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<FormErrors | null>(null);

  const mutation = useMutation({
    mutationFn: async (note: PostRequest) => {
      const res = await fetch("https://intro-lemon.vercel.app/api/posts", {
        method: "post",
        body: JSON.stringify(note),
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const createNote: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const postItNote: Partial<PostItNote> = {
      author: event.currentTarget.author.value,
      quote: event.currentTarget.quote.value,
    };

    const formErrors = getErrors(postItNote);
    setErrors(formErrors);
    if (formErrors) {
      return;
    }

    event.currentTarget.reset();
    await mutation.mutateAsync({
      author: postItNote.author!,
      note: postItNote.quote!,
    });
  };

  return (
    <div>
      <form onSubmit={createNote}>
        <input type="text" id="author" placeholder="Author" />
        {errors?.author && <span className="form-error">{errors.author}</span>}
        <input type="text" id="quote" placeholder="Quote" />
        {errors?.quote && <span className="form-error">{errors.quote}</span>}
        <button type="submit" disabled={mutation.isPending}>
          Save Quote
        </button>
      </form>
    </div>
  );
}
