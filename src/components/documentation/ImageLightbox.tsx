import { useState } from 'react';
import { ZoomIn, ImageIcon } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageLightbox({ src, alt, caption }: Props) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <figure className="my-3">
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed bg-muted/40 text-muted-foreground">
          <div className="flex flex-col items-center gap-2 text-center">
            <ImageIcon className="h-8 w-8" />
            <p className="text-sm font-medium">Screenshot pending</p>
            <p className="max-w-xs text-xs">{caption || alt}</p>
          </div>
        </div>
        {caption && <figcaption className="mt-1 text-xs text-muted-foreground">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className="my-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-lg border bg-muted/20"
      >
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
        <span className="absolute right-2 top-2 rounded-md bg-background/80 p-1 opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>
      {caption && <figcaption className="mt-1 text-xs text-muted-foreground">{caption}</figcaption>}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[98vh] max-h-[98vh] w-[98vw] max-w-[98vw] border-0 bg-black/90 p-2 shadow-none">
          <div className="flex h-full w-full items-center justify-center">
            <img src={src} alt={alt} className="max-h-[95vh] max-w-[95vw] object-contain" />
          </div>
          {caption && <p className="mt-2 text-center text-sm text-white/80">{caption}</p>}
        </DialogContent>
      </Dialog>
    </figure>
  );
}
