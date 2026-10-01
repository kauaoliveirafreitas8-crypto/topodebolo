/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { defaultPageContent, PageContent } from './config/pageContent';
import { WaveDivider } from './components/WaveDivider';
import { EditDrawer } from './components/EditDrawer';

const STORAGE_KEY = 'toppers_natal_page_content_v1';

export default function App() {
  const [content, setContent] = useState<PageContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultPageContent, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load saved content', e);
    }
    return defaultPageContent;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error('Failed to persist content', e);
    }
  }, [content]);

  const handleReset = () => {
    if (window.confirm('Deseja restaurar os textos, preços e configurações originais da página?')) {
      setContent(defaultPageContent);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#3f3c3c] flex flex-col font-montserrat relative">
      {/* 1. TOP BANNER SECTION (Elementor container b202290) */}
      <section
        className="w-full relative bg-[#ffffff] bg-contain md:bg-cover bg-top bg-no-repeat transition-all"
        style={{
          backgroundImage: `url(${content.topBannerBg})`,
          minHeight: '164px',
        }}
      >
        {/* Spacer to match Elementor spacer 79cbba6: 491px desktop, 193px tablet, 128px mobile */}
        <div className="w-full h-[128px] sm:h-[193px] md:h-[320px] lg:h-[491px]"></div>
      </section>

      {/* 2. HERO MOCKUP BANNER SECTION (Elementor container c8bccd9) */}
      <section className="w-full bg-[#9d1b21] flex flex-col items-center justify-start pt-0 pb-0 px-2 sm:px-4">
        <div className="w-full max-w-[800px] flex flex-col items-center">
          <img
            src={content.heroMockup}
            alt="Pacote de Artes Natal 2025 - Toppers de Bolo"
            className="w-full h-auto max-w-[800px] object-contain drop-shadow-2xl select-none"
            loading="eager"
          />
        </div>
        {/* Spacer 42ef82b: 50px desktop, 83px mobile */}
        <div className="w-full h-[50px] md:h-[83px]"></div>
      </section>

      {/* 3. HIGHLIGHT INFO SECTION WITH WAVE DIVIDERS (Elementor container 9ee32d7) */}
      <section className="relative w-full bg-white pt-[55px] pb-[69px] md:pt-[100px] md:pb-[66px] px-3 sm:px-4">
        {/* Top Wave Divider */}
        <WaveDivider position="top" fillColor="#9d1b21" />

        {/* Content Box */}
        <div className="w-full max-w-[860px] mx-auto flex flex-col items-center text-center">
          {/* Title 3dec0f9 */}
          <h2 className="font-['Arial',sans-serif] font-bold text-[#e3151f] text-[26px] sm:text-[30px] md:text-[34px] leading-tight mb-4 tracking-tight">
            {content.exclusiveArtTitle}
          </h2>

          {/* Description b980931 */}
          <div className="font-['Arial',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#3f3c3c] leading-relaxed max-w-[700px] space-y-2 mb-8">
            <p>
              {content.introTextLine1}{' '}
              <strong className="text-[#ff0000] font-bold">
                {content.introTextLine2}
              </strong>{' '}
              pra você encantar seus clientes e vender muito!
            </p>
            <p>Receba os arquivos nos seguintes formatos:</p>
            <p className="font-bold text-[#ff0000]">
              {content.introTextLine3}
            </p>
          </div>

          {/* CTA Button 4f772f9 */}
          <div className="w-full flex justify-center">
            <a
              href={content.checkoutUrl}
              className="inline-block bg-[#52b93e] hover:bg-[#46a834] text-white font-montserrat font-medium text-[16px] sm:text-[17px] py-3.5 px-8 sm:px-12 rounded-[138px] btn-elementor-shadow transition-transform duration-200 active:scale-95"
            >
              {content.introCtaText}
            </a>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <WaveDivider position="bottom" fillColor="#9d1b21" />
      </section>

      {/* 4. GALLERY SHOWCASE SECTION (Elementor container 7e74cee) */}
      <section className="w-full bg-[#9d1b21] pt-[30px] md:pt-[50px] pb-[54px] md:pb-[141px] px-3 sm:px-4">
        <div className="w-full max-w-[860px] mx-auto flex flex-col items-center">
          {/* Gallery Title fe24111 */}
          <h2 className="font-adamina font-semibold text-white text-[24px] sm:text-[30px] md:text-[34px] text-center my-6 md:my-9 tracking-wide">
            {content.galleryTitle}
          </h2>

          {/* 15 Individual Showcase Images with border-radius: 55px */}
          <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            {content.galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="w-[92%] max-w-[800px] overflow-hidden rounded-[55px] shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  src={item.image}
                  alt={item.alt || `Modelo ${index + 1}`}
                  className="w-full h-auto object-cover rounded-[55px] block select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OFFER & PRICING SECTION (Elementor container 6e14c7d) */}
      <section className="w-full bg-[#9d1b21] pt-[35px] pb-[60px] md:pt-[54px] md:pb-[90px] px-4 flex justify-center border-t border-white/10">
        <div className="w-full max-w-[500px] mx-auto flex flex-col items-center text-center text-white">
          {/* Tagline c19c0bf */}
          <h2 className="font-adamina font-semibold text-[18px] sm:text-[21px] leading-[1.4em] mb-4">
            {content.offerTagline}
          </h2>

          {/* Badge f563122 */}
          <h2 className="font-adamina font-semibold text-[28px] sm:text-[33px] my-3">
            {content.offerBadge}
          </h2>

          {/* Promo Text 2ff64c4 */}
          <p className="font-montserrat text-[16px] sm:text-[17px] text-white/95 my-1">
            {content.promoText1}
          </p>

          {/* Urgência 5db6433 */}
          <p className="font-montserrat font-bold text-[18px] sm:text-[20px] text-white tracking-wider my-1">
            {content.promoText2}
          </p>

          {/* Price a1c765b */}
          <h2 className="font-adamina font-bold text-[30px] sm:text-[34px] my-4 text-white">
            {content.price}
          </h2>

          {/* CTA Button 915b3e2 */}
          <div className="w-full flex justify-center mt-2">
            <a
              href={content.checkoutUrl}
              className="inline-block bg-[#52b93e] hover:bg-[#46a834] text-white font-montserrat font-medium text-[15px] sm:text-[16px] py-3.5 px-8 sm:px-12 rounded-[138px] btn-elementor-shadow transition-transform duration-200 active:scale-95"
            >
              {content.offerCtaText}
            </a>
          </div>
        </div>
      </section>

      {/* EDIT DRAWER (for the user to make real alterations to their cloned page) */}
      <EditDrawer
        content={content}
        onUpdate={(updated) => setContent(updated)}
        onReset={handleReset}
      />
    </div>
  );
}
