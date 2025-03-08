
import { ReactNode } from 'react'

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string
  action?: () => void
}

export interface JobProps {
  id: string;
  title: string;
  category: string;
  location: string;
  experience_level: string;
  company: string;
}

export interface FilterProps {
  category: string;
  location: string;
  experience_level: string;
}


export interface CardProps {
  title: string;
  content: string;
  variant?: "default" | "primary" | "danger" | "success" | "warning";
}

export interface ImageProps {
image: string;
}

export interface Applicant {
id: string;
first_name: string;
last_name: string;
email: string;
phone: string;
}

export interface JobApplication {
resume_link: string;
cover_letter: string;
job: string;
}

export interface MovieProps {
  id?: string
  posterImage: string
  releaseYear: string
  title: string
}

interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}