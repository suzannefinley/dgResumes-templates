import { PortfolioProject } from '@/types/resume';
import { CarouselItem } from '../../../components/ui/carousel';
import Image from 'next/image';
//import { imageLoader } from '@/lib/helpers/imageLoader';
import ReadMore from '@/components/ReadMore';

export default function PortfolioItem({
  item,
  index
}: {
  item: PortfolioProject;
  index: number;
}) {
  const {
    description,
    projectImageUrl,
    projectName,
    role,
    website,
    github
  } = item;
  return (
    <div>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className="flex px-3 py-3">
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="h-48 flex justify-center bg-gradient-to-br from-blue-800 to-blue-200">
              {projectImageUrl ? (
                <Image
                  src={projectImageUrl}
                  alt={projectName || 'Project image'}
                  height={192}
                  width={192}
                  className="rounded-2xl my-1"
                />
              ) : null}
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">
                {projectName}
              </div>
              {role && role.length > 0 ? (
                <div className="inline-block text-md">
                  <span className="pr-1 font-semibold">Role:</span>
                  <span className="italic font-semibold">{role}</span>
                </div>
              ) : null}
              <div className="text-gray-700 text-base">
                <ReadMore
                  text={description ?? ''}
                  buttonClass="bg-blue-500 hover:bg-blue-800 text-white mt-2 px-2 py-1 text-xs mb-0"
                  maxLength={200}
                />
              </div>

              <div className="py-2 w-64">
                {/* {website} {github} */}

                {website && website.length > 0 ? (
                  <span className="inline-block text-sm font-semibold text-blue-700 mr-6">
                    <a href={website} target="_blank">
                      Project Website
                    </a>
                  </span>
                ) : null}
                {github && github.length > 0 ? (
                  <span className="inline-block text-sm font-semibold text-blue-700 ">
                    <a href={github} target="_blank">
                      github repo
                    </a>
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    </div>
  );
}
