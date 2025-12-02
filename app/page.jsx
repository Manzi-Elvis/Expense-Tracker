'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import HeroSection from '@/components/landing/hero-section'
import FeaturesSection from '@/components/landing/features-section'
import StorySection from '@/components/landing/story-section'
import CtaSection from '@/components/landing/cta-section'
import Footer from '@/components/layout/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StorySection />
      <CtaSection />
      <Footer />
    </div>
  )
}
