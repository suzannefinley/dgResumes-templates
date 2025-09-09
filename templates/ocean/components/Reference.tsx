import ReferenceItem from './ReferenceItem';
import { ResumeReviewItem } from '@/types/resume';

// prettier-ignore
export default function Reference({ references }: { references: ResumeReviewItem[] }) {
  return (
    <>
      <section>
        <h3>Reference</h3>
        {references.map(item => {
          return <ReferenceItem key={item.reviewName} />;
        })}
      </section>
    </>
  );
}
