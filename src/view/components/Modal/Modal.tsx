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
    <div className="fixed flex justify-center items-center h-full w-full">
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-overlay-show'
        )}
      />

      <div
        className={cn(
          'overflow-hidden z-[150] animate-content-show absolute p-8 space-y-2 bg-white rounded-2xl  shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-11/12 sm:w-full h-[90%] sm:h-[940px] max-w-[1100px] outline-none'
        )}
      >
        <button
          onClick={onClose}
          className="absolute bg-portalGreen hover:bg-portalGreenLight font-bold right-[5px] top-[5px] w-12 h-12 flex items-center justify-center outline-none rounded-full transition-colors hover:drop-shadow-portalGlow"
        >
          X
        </button>

        <header className="flex flex-col items-center justify-between gap-2 text-gray-800 text-center">
          <span className="text-4xl sm:text-6xl text-rickBlue font-getSchwifty mb-2">
            {title}
          </span>
          <span className="text-md sm:text-lg font-primary">{subTitle}</span>
        </header>

        <div>{children}</div>
      </div>
    </div>
  )
}
