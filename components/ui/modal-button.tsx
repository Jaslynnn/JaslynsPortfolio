"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface ModalButtonProps {
    buttonLabel: string;
    modalTitle?: string;
    children: ReactNode; // 👈 injected custom component
}

const ModalButton: React.FC<ModalButtonProps> = ({
                                                     buttonLabel,
                                                     modalTitle,
                                                     children,
                                                 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const closeModal = () => setIsOpen(false);

    // Lock background scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // ESC close
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        if (isOpen) window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen]);

    if (!mounted) return null;

    const modalRoot = document.getElementById("modal-root");

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}

            >
                <Button
                    variant="secondary"
                    className="  w-fit h-fit font-light text-sm md:block rounded-3xl bg-white/1 hover:bg-white/30 text-white text-center" >
                {buttonLabel}
            </Button>
            </button>

            {isOpen &&
                modalRoot &&
                createPortal(
                    <div
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center w-full justify-center backdrop-blur-sm drop-shadow-[0_10px_10px_rgba(0,0,0,100)]"
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className={cn(
                                "relative isolate flex flex-col w-full my-4 max-h-[85vh] max-w-screen-2xl bg-neutral-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                            )}
                        >
                            {/* Header */}
                            {modalTitle && (
                                <header className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
                                    <h2 className="text-lg font-semibold text-white">
                                        {modalTitle}
                                    </h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-neutral-400 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                </header>
                            )}

                            {/* Injected content (scroll is handled inside) */}
                            <div className="min-h-0 overflow-hidden bg-neutral-950">
                                {children}
                            </div>

                            {/* Footer */}
                            <footer className="border-t border-neutral-800 px-6 py-4 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="rounded-md bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-black bg-black"
                                >
                                    Close
                                </button>
                            </footer>
                        </motion.div>
                    </div>,
                    modalRoot
                )}
        </>
    );
};

export { ModalButton };
