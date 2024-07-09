export default function CreateNote() {
  return (
    <div>
      <form>
        <input
          type="text"
          id="author"
          placeholder="Author"
        />
        <input
          type="text"
          id="note"
          placeholder="Note"
        />
        <button type="submit">
          Save Note
        </button>
      </form>
    </div>
  );
}
