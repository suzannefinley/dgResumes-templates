import { t_SocialMedia } from '@/utils/types';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialMediaItem from './SocialMediaItem';

export default function SocialMedia({
  socialMedia
}: {
  socialMedia: t_SocialMedia;
}) {
  return (
    <div className="flex gap-3">
      {socialMedia.map(item => {
        if (item.name == 'facebook')
          return (
            <SocialMediaItem
              key={item.name}
              icon={<FaFacebook />}
              link={item.link}
            />
          );
        if (item.name == 'linkedin')
          return (
            <SocialMediaItem
              key={item.name}
              icon={<FaLinkedin />}
              link={item.link}
            />
          );
        if (item.name == 'x')
          return (
            <SocialMediaItem
              key={item.name}
              icon={<FaTwitter />}
              link={item.link}
            />
          );
      })}
    </div>
  );
}
