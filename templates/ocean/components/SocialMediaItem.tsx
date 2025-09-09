import { JSX } from 'react/jsx-runtime';

export default function SocialMediaItem({
  icon,
  link
}: {
  icon: JSX.Element;
  link: string;
}) {
  return (
    <div className="w-4 h-4 hover:text-gray-900 hover:shadow-sm hover:shodow-white">
      <a href={link}>{icon}</a>
    </div>
  );
}
