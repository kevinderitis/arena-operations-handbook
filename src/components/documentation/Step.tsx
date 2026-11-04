import type { Step as StepType } from '@/types/documentation';
import { Callout } from './Callout';
import { ImageLightbox } from './ImageLightbox';

export function Step({ index, step }: { index: number; step: StepType }) {
  return (
    <section className="scroll-mt-20" id={step.id || `step-${index + 1}`}>
      <div className="flex gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug">{step.title}</h3>
          {step.description && (
            <p className="mt-1 leading-relaxed text-foreground/90">{step.description}</p>
          )}
          {step.substeps && step.substeps.length > 0 && (
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-foreground/90">
              {step.substeps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          )}
          {step.images?.map((img, i) => (
            <ImageLightbox key={i} src={img.src} alt={img.alt} caption={img.caption} />
          ))}
          {step.callouts?.map((c, i) => (
            <Callout key={i} type={c.type} title={c.title} content={c.content} />
          ))}
        </div>
      </div>
    </section>
  );
}
