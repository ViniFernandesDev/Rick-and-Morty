import { cn } from '../../../app/utils/cn'

interface ModalProps {
  open: boolean
  title: string
  subTitle: string
  children: React.ReactNode
  rightAction?: React.ReactNode
  onClose?(): void
}

export function Modal({
  open,
  title,
  subTitle,
  children,
  onClose
}: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed flex justify-center items-center h-full w-full z-10">
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-overlay-show'
        )}
      />

      <div
        className={cn(
          'z-[100] animate-content-show absolute p-8 space-y-2 bg-white rounded-2xl  shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[1100px] outline-none'
        )}
      >
        <button
          onClick={onClose}
          className="absolute bg-portalGreen hover:bg-portalGreenLight font-bold right-[-15px] top-[-15px] w-12 h-12 flex items-center justify-center outline-none rounded-full transition-colors hover:drop-shadow-portalGlow"
        >
          X
        </button>

        <header className="flex flex-col items-center justify-between gap-2 text-gray-800 text-center">
          <span className="text-6xl text-rickBlue font-getSchwifty mb-2">
            {title}
          </span>
          <span className="text-lg font-primary">{subTitle}</span>
        </header>

        <div>{children}</div>
      </div>
    </div>
  )
}
