<script setup lang="ts">
import Footer from '../components/layout/Footer.vue'
import NavBar from '../components/layout/NavBar.vue'
import CommunitySection from '../components/sections/CommunitySection.vue'
import EducationSection from '../components/sections/EducationSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <NavBar />
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CommunitySection />
    </main>
    <Footer />
  </div>
</template>
