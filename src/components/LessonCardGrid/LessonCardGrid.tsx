import Link from "next/link";
import Duration from "./Components/Duration";
import SubTitle from "./Components/SubTitle";
import Title from "./Components/Title";

interface LessonCardGridProps {
  idx: number;
  item: {
    thumbnail: string;
    title: string;
    description: string;
    duration: string;
    slug: string;
  };
}

const LessonCardGrid: React.FC<LessonCardGridProps> = ({
  idx,
  item: { thumbnail, title, description, duration, slug },
}) => {
  return (
    <div className="space-y-2 sm:max-w-sm">
      <Link href={`/tutorials/cs50/${slug}`}>
        <img src={thumbnail} className="rounded-lg w-full" alt={title} />
      </Link>
      <div className="pt-2 text-sm flex items-center justify-between">
        <SubTitle>Lesson {idx + 1}</SubTitle>
        <Duration>{duration}</Duration>
      </div>
      <Title>
        <Link href={`/tutorials/cs50/${slug}`}>{title}</Link>
      </Title>
      <p>{description}</p>
    </div>
  );
};

export default LessonCardGrid;
