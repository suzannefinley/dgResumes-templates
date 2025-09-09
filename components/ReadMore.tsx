'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ReadMore = ({
  text,
  maxLength = 250,
  buttonClass = ''
}: {
  text: string;
  maxLength?: number;
  buttonClass?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? (
        <div className="animate-appear">
          <span
            className="text-gray-600 dark:text-gray-300 mb-4"
            dangerouslySetInnerHTML={{
              __html: `${text}` || ''
            }}
            suppressHydrationWarning={true}
          />
        </div>
      ) : (
        <div>
          {text.length > maxLength ? (
            <span
              className="text-gray-600 dark:text-gray-300 mb-4"
              dangerouslySetInnerHTML={{
                __html: `${text.substring(0, maxLength)}...` || ''
              }}
              suppressHydrationWarning={true}
            />
          ) : (
            <span
              className="text-gray-600 dark:text-gray-300 mb-4"
              dangerouslySetInnerHTML={{
                __html: text || ''
              }}
              suppressHydrationWarning={true}
            />
          )}
        </div>
      )}
      {text.length > maxLength && (
        <Button className={buttonClass} onClick={toggleExpansion}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

export default ReadMore;
