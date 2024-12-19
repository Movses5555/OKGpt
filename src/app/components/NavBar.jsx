"use client"

import { useState } from "react";

export const NavBar = () => {
	const [active, setActive] = useState("Дом");

  const navItems = [
    { label: "Дом", id: "home" },
    { label: "Преимущества", id: "advantages" },
    { label: "Тарифы", id: "pricing" },
    { label: "Отзывы", id: "reviews" },
    { label: "FAQ", id: "faq" },
  ];

	return (
		<div className="flex justify-center items-center h-[76px] border border-white px-5 rounded-[10px]">
      <nav className="flex gap-2.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.label)}
            className={`px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-green-main hover:text-white ${
              active === item.label
                ? "bg-green-main text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span className="font-semibold text-2xl">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
	)
};

