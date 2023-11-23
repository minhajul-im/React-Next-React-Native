import { useEffect } from "react";
import Tag from "./Tag";
import { fetchTags } from "../../features/tags/tagsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Tags() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const { tags } = useSelector((state) => state.tags);

  return tags?.length > 0 ? (
    <section className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </section>
  ) : null;
}
