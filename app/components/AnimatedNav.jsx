"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

let tabs = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Projects", label: "Projects" },
    { id: "Contact", label: "Contact" }
]

const AnimatedNav = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-black"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-blue-600 mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
    );
}

export default AnimatedNav