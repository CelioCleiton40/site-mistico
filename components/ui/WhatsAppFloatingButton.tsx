import * as React from "react"

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon"

type WhatsAppFloatingButtonProps = {
    href: string
    ariaLabel?: string
    className?: string
}

const WhatsAppFloatingButton = ({
    href,
    ariaLabel = "Falar no WhatsApp",
    className = "",
}: WhatsAppFloatingButtonProps) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={`fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0510] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 ${className}`}
    >
        <WhatsAppIcon size={22} />
    </a>
)

export { WhatsAppFloatingButton }
