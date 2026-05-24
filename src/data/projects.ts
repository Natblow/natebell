export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  url?: string
  repo?: string
  tags: string[]
}

export const projects: Project[] = []
