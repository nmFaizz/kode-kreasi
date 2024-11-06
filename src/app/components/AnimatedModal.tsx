"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
} from "../../components/ui/animated-modal";
import { motion } from "framer-motion";
import Link from "next/link"

export default function AnimatedModalDemo() {
    const backUrl = '/exercise';
  
  return (
    <div className="py-40 w-[200px]  flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-base">
            Back
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 text-base flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <Link href={backUrl}>
                <img src="/back.svg" className=""  alt="" />
              </Link>
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}

