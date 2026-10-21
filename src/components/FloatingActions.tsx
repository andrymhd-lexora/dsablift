import React from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import { MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  language: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  language
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Pulse Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20layanan%20elevator%20dan%20eskalator`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 py-3 px-4 sm:px-5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_6px_30px_rgba(16,185,129,0.6)]"
        title="Hubungi Sales WhatsApp"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <div className="relative flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-white animate-bounce" />
          <div className="text-left hidden sm:block">
            <span className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider block -mb-0.5">
              24/7 Consultation
            </span>
            <span className="text-xs font-black font-['Space_Grotesk']">
              WhatsApp Sales
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
