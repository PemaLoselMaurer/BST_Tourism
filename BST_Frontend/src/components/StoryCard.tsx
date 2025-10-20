type Props = { title: string; excerpt: string };

export default function StoryCard({ title, excerpt }: Props) {
  return (
    <article className="story-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </article>
  );
}
